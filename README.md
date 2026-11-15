# CoderDojo manuals

Gratis Scratch-manuals voor ninja's van CoderDojo. Stap voor stap, in het Nederlands, met de blokjes getekend zoals je ze in Scratch 3 ziet.

Live: https://cdjmanuals.wannesdeloore.be/

## Wat is dit?

Vrijwilligers van CoderDojo Belgium maakten over de jaren tientallen Scratch-oefeningen. Ze staan verspreid als pdf's en Word-bestanden, vaak nog voor Scratch 2. Deze repo herwerkt ze één voor één naar Scratch 3, in één vaste vorm, zodat een kind er alleen mee weg kan.

Elke manual heeft:

- een niveau (één, twee of drie noppen), een duur en wat je leert
- een kader "Dit heb je nodig"
- genummerde stappen die je kan afvinken, zodat je je plek terugvindt als je uit Scratch terugkomt
- blokjes als tekening, geen screenshots
- testmomenten en uitdagingen
- een volledige oplossing, per sprite en per speelveld apart dichtgeklapt, om je eigen code mee te vergelijken
- een dichtgeklapt blok voor de coach
- een printversie
- een link naar het origineel

Er is geen verplicht leerpad. Een ninja kiest zelf.

## Stand van zaken

Tien manuals, zie `docs/inventaris.md`. **Geen enkele is al nagebouwd in Scratch 3.** De blokjes zijn automatisch nagelezen op typfouten, maar of elk spel werkt zoals beschreven, moet nog iemand testen. Tot dan staat `nagekeken: false` en toont het coachblok een waarschuwing.

## Zelf draaien

Je hebt Node 22 of nieuwer nodig.

```bash
npm install
```

```bash
npm run dev
```

```bash
npm test
```

`npm test` leest alle blokjes na, controleert de vaste onderdelen van elke manual en bouwt de site.

## Een manual toevoegen

Lees `docs/nieuwe-manual.md` en vertrek van `docs/sjabloon.mdx`. Een manual is één MDX-bestand in `src/content/docs/scratch/<niveau>/`. De overzichten, de navigatie, de infobalk en de bronvermelding komen er vanzelf bij.

## Techniek

- [Astro](https://astro.build/) met [Starlight](https://starlight.astro.build/)
- [scratchblocks](https://github.com/scratchblocks/scratchblocks) tekent de blokjes, met de Nederlandse namen
- GitHub Actions bouwt en publiceert naar GitHub Pages bij elke push op `main`
- Lettertypes Archivo en Andika, zelf gehost
- Design met de [Impeccable](https://github.com/pbakaus/impeccable)-skill (Apache 2.0), meegeleverd in `.claude/skills/impeccable/`

| Pad | Wat |
| --- | --- |
| `src/content/docs/` | De manuals en pagina's |
| `src/components/` | Infobalk, kaders, oplossing, coachblok, manuallijst |
| `src/plugins/` | Zet `scratch`-codeblokken en `## Stap 1:`-koppen om |
| `src/scripts/pagina.ts` | Blokjes tekenen, stappen afvinken, printen |
| `src/styles/custom.css` | Het uitzicht |
| `scripts/check-blokjes.mjs` | De controle |
| `docs/` | Sjabloon, werkwijze, inventaris |
| `PRODUCT.md`, `DESIGN.md` | Voor wie en hoe het eruitziet |

## Eerste keer publiceren

1. Zet in de repo onder Settings, Pages de bron op **GitHub Actions**.
2. Maak bij je domeinprovider een CNAME-record `cdjmanuals` naar `wannes-cmyk.github.io`.
3. Vul onder Settings, Pages het custom domain in en zet Enforce HTTPS aan.

## Privacy

De live site gebruikt [Simple Analytics](https://www.simpleanalytics.com/): geen cookies, geen persoonsgegevens. Afgevinkte stappen blijven in de browser van de lezer.

## Licentie

- Teksten en opdrachten: [CC BY-SA 4.0](./LICENSE-CONTENT.md). Bronmateriaal van CoderDojo Belgium en haar vrijwilligers.
- Code: [MIT](./LICENSE).

Scratch is een project van de Scratch Foundation. Deze site is daar niet aan verbonden.

## Support

Dit is een persoonlijk project. Geen support, use as is. Een fout of een idee meld je via het [feedbackformulier](https://tally.so/r/laekdV) of via de [issues](https://github.com/wannes-cmyk/CoderDojoManuals/issues/new/choose). Zet er nooit gegevens van kinderen in.
