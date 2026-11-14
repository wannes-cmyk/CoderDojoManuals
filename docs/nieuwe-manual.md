# Een nieuwe manual toevoegen

Zo zet je een bestaande oefening om naar de site. Elke manual heeft dezelfde onderdelen op dezelfde plek. Dat is het hele punt: een ninja die er één gedaan heeft, vindt in de volgende meteen zijn weg.

## 1. Lees het origineel

Lees het hele bestand. Noteer:

- Wat maakt de ninja?
- Welke sprites, geluiden en achtergronden zijn er nodig?
- Staat de code in de tekst of in afbeeldingen? Bij pdf's en Word-bestanden zit ze bijna altijd in screenshots. Kan je die niet zien, dan bouw je het script opnieuw op uit de beschrijving. Zeg dat erbij in het coachblok.
- Is het Scratch 1.4, 2 of 3? Alles wordt Scratch 3.
- Noemt het origineel een auteur of een bron? Die neem je over in `bron.door`.

## 2. Kies niveau en plaats

| Niveau | Wat de ninja al kan | Map |
| --- | --- | --- |
| beginner | Niets, of enkel de eerste stappen | `src/content/docs/scratch/beginner/` |
| gevorderd | Lussen en als-dan, en nu variabelen, signalen of klonen | `src/content/docs/scratch/gevorderd/` |
| expert | Eigen blokken, tekst of lijsten bewerken, zelf oplossingen bedenken | `src/content/docs/scratch/expert/` |

De bestandsnaam wordt de url: kleine letters, streepjes, geen accenten. `red-de-prinses.mdx`.

## 3. Vul het sjabloon in

Kopieer `docs/sjabloon.mdx`. De vaste volgorde is:

1. Frontmatter (titel, niveau, duur, wat je maakt, concepten, bron).
2. Eventueel een korte inleiding.
3. `<Nodig>`: wat je nodig hebt.
4. De stappen: `## Stap 1: ...`, `## Stap 2: ...`. Het cijfer en het afvinken komen er vanzelf bij.
5. `## Uitdagingen`.
6. `<Coach>`.

De infobalk bovenaan, de knoppen en de bronvermelding onderaan worden automatisch gemaakt uit de frontmatter.

### De onderdelen

| Onderdeel | Waarvoor |
| --- | --- |
| `<Nodig>` | Het kader "Dit heb je nodig". Eén keer, bovenaan. |
| `<Test>` | Testmoment. Minstens na elke stap waarin code bijkomt. |
| `<Tip>` | Maakt iets makkelijker, of een weetje. Eigen titel kan: `<Tip titel="Wiskundeweetje">`. |
| `<LetOp>` | Waar het vaak fout loopt. Spaarzaam. |
| `<Coach>` | Dicht blok voor de coach. Eén keer, onderaan. |

### Blokjes schrijven

Blokjes zijn tekst in een codeblok met de taal `scratch`:

````
```scratch
wanneer op @greenFlag wordt geklikt
maak [score v] (0)
herhaal
  als <raak ik (rand v)?> dan
    verander [score v] met (1)
  einde
einde
```
````

- `(10)` is een rond invulvak, `[tekst]` een vierkant, `[score v]` of `(rand v)` een keuzelijst.
- `<...>` is een zeshoekig blok (waar of niet waar).
- `(score)` is een variabele of een rond blok.
- Elk `als` en `herhaal` sluit je af met `einde`.
- Een eigen blok: `definieer wandel`, en gebruiken met `wandel :: custom`.
- Twijfelt de tekenaar tussen twee blokken met dezelfde tekst? Zet de groep erachter: `(lengte van (invoer) :: operators)`.
- Een lege regel begint een nieuw script.

De juiste Nederlandse namen staan in `node_modules/scratchblocks/locales/nl.json`. Verzin er geen: een blok dat niet bestaat, wordt grijs getekend en dan zoekt een kind zich suf.

## 4. Schrijf voor een kind van tien

- Je-vorm, korte zinnen, één ding per stap.
- Zeg waar iets staat: "bij **Besturen**", "onderaan rechts".
- Sprites en geluiden uit de bibliotheek heten vaak Engels. Schrijf beide: de **krab** (Crab).
- Na code komt een test.
- Geen oplossingen bij de uitdagingen.
- Geen `<` of `{` in gewone tekst.

## 5. Werk de inventaris bij

Voeg het origineel toe aan `docs/inventaris.md`, of zet de status op "herwerkt".

## 6. Controleer

```bash
npm test
```

Dat leest elk blokje na, controleert de vaste onderdelen en de nummering van de stappen, en bouwt de site. Bekijk de pagina daarna met:

```bash
npm run dev
```

Kijk ook eens in een smal venster. Daar wordt de manual het meest gelezen.

## 7. Nagekeken of niet

`nagekeken: false` blijft staan tot iemand het project van begin tot einde heeft nagebouwd in Scratch 3 met enkel de manual. Zolang toont het coachblok een waarschuwing. Zet het nooit zelf op `true` omdat de controle slaagt: de controle weet niet of het spel werkt.
