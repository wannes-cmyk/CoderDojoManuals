// Controleert elke manual voor de site gebouwd wordt.
//
// Een typfout in een blokje geeft geen foutmelding: scratchblocks tekent
// dan gewoon een grijs blok dat in Scratch niet bestaat. Een kind zoekt
// zich dan suf. Daarom lezen we hier elk blokje na.
//
// Gebruik: npm run check
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { parse, loadLanguages } from '../node_modules/scratchblocks/syntax/index.js';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const map = path.join(root, 'src/content/docs');
const nl = JSON.parse(fs.readFileSync(path.join(root, 'node_modules/scratchblocks/locales/nl.json'), 'utf8'));
loadLanguages({ nl });

const bestanden = fs
  .readdirSync(map, { recursive: true })
  .filter((f) => /\.mdx?$/.test(f))
  .map((f) => path.join(map, f));

const fouten = [];
let aantalBlokken = 0;
let aantalManuals = 0;

function loop(blok, meld) {
  if (!blok?.info) return;
  aantalBlokken++;
  if (blok.info.category === 'obsolete') meld(blok.info.hash);
  for (const kind of blok.children ?? []) {
    if (kind.isBlock) loop(kind, meld);
    if (kind.isScript) kind.blocks.forEach((b) => loop(b, meld));
  }
}

for (const bestand of bestanden) {
  const naam = path.relative(root, bestand);
  const tekst = fs.readFileSync(bestand, 'utf8');
  const meld = (wat) => fouten.push(`${naam}: ${wat}`);

  // Huisregel: geen gedachtestreepjes.
  if (/[–—]/.test(tekst)) meld('bevat een gedachtestreepje (– of —)');

  const front = tekst.match(/^---\n([\s\S]*?)\n---/)?.[1] ?? '';
  const isManual = /^niveau:/m.test(front);

  for (const [, code] of tekst.matchAll(/```scratch\n([\s\S]*?)```/g)) {
    const doc = parse(code, { languages: ['nl'] });
    for (const script of doc.scripts) {
      script.blocks.forEach((b) => loop(b, (hash) => meld(`onbekend blokje "${hash}"`)));
    }
    // Elk "als", "herhaal" enz. moet afgesloten zijn met "einde". We tellen
    // de inspringing na: een open blok dat nooit sluit is bijna altijd een fout.
    const open = code.split('\n').filter((r) => /^\s*(als |herhaal)/.test(r)).length;
    const dicht = code.split('\n').filter((r) => /^\s*einde\s*$/.test(r)).length;
    if (open !== dicht) meld(`${open} keer als/herhaal maar ${dicht} keer einde in een blokjesblok`);
  }

  if (!isManual) continue;
  aantalManuals++;

  for (const veld of ['title', 'niveau', 'duur', 'watJeMaakt', 'concepten', 'bron']) {
    if (!new RegExp(`^${veld}:`, 'm').test(front)) meld(`veld "${veld}" ontbreekt`);
  }
  if (!tekst.includes("from '~/components/manual'")) meld('import van de manual-onderdelen ontbreekt');
  if (!tekst.includes('<Nodig')) meld('kader "Dit heb je nodig" ontbreekt');
  if (!tekst.includes('<Coach')) meld('coachblok ontbreekt');

  // Stappen moeten netjes 1, 2, 3... tellen.
  const stappen = [...tekst.matchAll(/^## Stap (\d+)[:.]/gm)].map((m) => Number(m[1]));
  if (stappen.length === 0) meld('geen stappen gevonden (## Stap 1: ...)');
  stappen.forEach((n, i) => {
    if (n !== i + 1) meld(`stap ${n} staat op plaats ${i + 1}`);
  });
}

if (fouten.length) {
  console.error(`\n${fouten.length} probleem(en):\n`);
  for (const f of fouten) console.error(`  - ${f}`);
  console.error('');
  process.exit(1);
}
console.log(`In orde: ${aantalManuals} manuals, ${aantalBlokken} blokjes nagelezen.`);
