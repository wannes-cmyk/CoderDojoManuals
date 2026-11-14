import scratchblocks from 'scratchblocks';
import nl from 'scratchblocks/locales/nl.json';

// Blokjes tekenen zoals in Scratch 3, met de Nederlandse namen.
scratchblocks.loadLanguages({ nl });
scratchblocks.renderMatching('pre.blocks', {
  style: 'scratch3',
  languages: ['nl', 'en'],
  scale: 0.8,
});
document.querySelectorAll('pre.blocks').forEach((pre) => pre.classList.add('getekend'));

// Printknop.
document.querySelectorAll<HTMLButtonElement>('[data-print]').forEach((knop) => {
  knop.addEventListener('click', () => window.print());
});

// Stappen afvinken. Een ninja wisselt de hele tijd tussen deze pagina en
// Scratch: het vinkje toont waar hij gebleven was. De stand blijft bewaard
// in de browser, per manual. Lukt bewaren niet (privévenster), dan werkt
// afvinken nog altijd tot de pagina sluit.
const sleutel = `cdj-stappen:${location.pathname}`;

function lees(): string[] {
  try {
    return JSON.parse(localStorage.getItem(sleutel) ?? '[]');
  } catch {
    return [];
  }
}

function bewaar(klaar: string[]) {
  try {
    localStorage.setItem(sleutel, JSON.stringify(klaar));
  } catch {
    // Geen opslag beschikbaar: niets aan te doen.
  }
}

const klaar = new Set(lees());

const voet = document.querySelector<HTMLElement>('.site-voet');
const formulier = voet?.dataset.formulier;
const manual = voet?.dataset.manual;

document.querySelectorAll<HTMLElement>('h2.stap').forEach((kop) => {
  const nr = kop.dataset.stap ?? '';
  const knop = document.createElement('button');
  knop.type = 'button';
  knop.className = 'stap-klaar';

  const zet = (aan: boolean) => {
    knop.setAttribute('aria-pressed', String(aan));
    knop.textContent = aan ? 'Klaar' : 'Vink af';
    knop.setAttribute('aria-label', aan ? `Stap ${nr} is klaar. Klik om terug open te zetten.` : `Vink stap ${nr} af`);
    kop.classList.toggle('is-klaar', aan);
  };
  zet(klaar.has(nr));

  knop.addEventListener('click', () => {
    const aan = knop.getAttribute('aria-pressed') !== 'true';
    if (aan) klaar.add(nr);
    else klaar.delete(nr);
    zet(aan);
    bewaar([...klaar]);
  });

  (kop.parentElement ?? kop).append(knop);

  // Een kind schrijft al snel "het werkt niet" zonder te zeggen waar.
  // Deze link vult de manual en de stap zelf in het formulier in.
  if (formulier && manual) {
    const link = document.createElement('a');
    link.className = 'stap-fout';
    link.href = `${formulier}?manual=${encodeURIComponent(manual)}&stap=${encodeURIComponent(nr)}`;
    link.target = '_blank';
    link.rel = 'noopener';
    link.textContent = 'Klopt er iets niet?';
    link.setAttribute('aria-label', `Meld een fout in stap ${nr}`);
    (kop.parentElement ?? kop).append(link);
  }
});
