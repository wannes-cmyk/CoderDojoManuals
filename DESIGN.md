---
name: CoderDojo manuals
description: Bouwboekje. Scratch-manuals die stappen tellen zoals een bouwinstructie.
colors:
  grond: "oklch(0.945 0.032 235)"
  grond-diep: "oklch(0.9 0.045 238)"
  plaat: "oklch(0.995 0.004 235)"
  inkt: "oklch(0.24 0.06 262)"
  inkt-zacht: "oklch(0.4 0.06 258)"
  lijn: "oklch(0.78 0.05 242)"
  blauw: "oklch(0.44 0.15 258)"
  blauw-diep: "oklch(0.36 0.14 260)"
  geel: "oklch(0.89 0.165 96)"
  groen: "oklch(0.5 0.14 150)"
  groen-zacht: "oklch(0.94 0.06 150)"
  rood: "oklch(0.52 0.19 27)"
  rood-zacht: "oklch(0.94 0.04 27)"
typography:
  display:
    fontFamily: "Archivo Variable, Arial Narrow, sans-serif"
    fontSize: "clamp(2.25rem, 1.4rem + 3.6vw, 3.75rem)"
    fontWeight: 850
    lineHeight: 1
    letterSpacing: "-0.025em"
  heading:
    fontFamily: "Archivo Variable, Arial Narrow, sans-serif"
    fontSize: "clamp(1.5rem, 1.25rem + 1vw, 1.875rem)"
    fontWeight: 750
    lineHeight: 1.15
    letterSpacing: "-0.015em"
  body:
    fontFamily: "Andika, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
rounded:
  md: "0.625rem"
  pill: "999px"
components:
  knop:
    backgroundColor: "{colors.plaat}"
    textColor: "{colors.inkt}"
    rounded: "{rounded.md}"
    padding: "0.7rem 1.1rem"
  knop-vol:
    backgroundColor: "{colors.geel}"
    textColor: "{colors.inkt}"
  stapcijfer:
    backgroundColor: "{colors.plaat}"
    textColor: "{colors.inkt}"
    rounded: "{rounded.md}"
    size: "3.25rem"
  stapcijfer-klaar:
    backgroundColor: "{colors.inkt}"
    textColor: "{colors.geel}"
  kader-nodig:
    backgroundColor: "{colors.plaat}"
    textColor: "{colors.inkt}"
    rounded: "{rounded.md}"
  kader-tip:
    backgroundColor: "{colors.geel}"
    textColor: "{colors.inkt}"
---

## Overview

Een manual is een bouwboekje. De pagina telt stappen zoals een bouwinstructie: een groot cijfer, één ding om te doen, dan testen. De lezer is een kind van 8 tot 14 dat de pagina naast Scratch heeft openstaan, vaak in een smal venster, overdag. Daarom één licht thema en geen donkere variant.

De wereld zit in het kader: de blauwe kopbalk, de grond, de titels, de stapcijfers en de kaders. De leeskolom zelf blijft rustig. De Scratch-blokjes zijn het kleurrijkste op de pagina en dat moet zo blijven: niets in het kader mag ermee concurreren.

Alle waarden staan als variabelen in `src/styles/custom.css`. Dat bestand is de bron; dit document legt uit waarom.

## Colors

Lichtblauw is de grond van de hele pagina, zoals het papier van een bouwinstructie. Marineblauw is de inkt: tekst, lijnen, cijfers. Wit is voor platen waar iets op ligt: blokjes, het kader "Dit heb je nodig", knoppen.

Kleur doet telkens één job:

- **Geel** is wat je moet onthouden of waar je nu bent: tips, de hoofdknop, de huidige pagina in de navigatie, het afgevinkte cijfer.
- **Groen** is testen, omdat de vlag in Scratch groen is.
- **Rood** is enkel "let op".
- **Blauw** (verzadigd) is enkel de kopbalk en links.

Niveau krijgt geen kleur maar noppen. Dat werkt ook in zwart-wit print en voor kleurenblinde lezers.

## Typography

Titels en cijfers staan in Archivo, zwaar en licht verbreed: de stem van een cijfer op een bouwdoos. De leestekst staat in Andika, een letter van SIL die gemaakt is voor beginnende lezers: open vormen, duidelijk verschil tussen l, I en 1, en een gewone nul. Een eerdere keuze had een doorstreepte nul; dat is verwarrend voor een kind dat een getal moet overtypen in Scratch.

Leestekst is minstens 17px, op brede schermen 18px. De kolom is 42rem breed, wat neerkomt op ongeveer 70 tekens per regel.

Beide lettertypes worden zelf gehost via Fontsource. Geen aanvragen naar Google Fonts.

## Layout

Starlight levert het skelet: kopbalk, navigatie links, "Op deze pagina" rechts. Op een smal scherm klapt de navigatie in en schuift "Op deze pagina" onder de kop. De manual moet volledig bruikbaar blijven op 600px breed, want daar wordt hij het meest gelezen.

Blokjes die te breed zijn, scrollen horizontaal binnen hun eigen plaat. De pagina zelf scrolt nooit opzij.

Elke stap begint met een lijn en ruim wit erboven. Binnen een stap staat alles dicht bij elkaar.

## Elevation & Depth

Bijna vlak. Vorm komt van inktlijnen van 2px, niet van schaduw. Enkel knoppen hebben een korte, zachte schaduw met een verschuiving naar onder, zodat ze indrukbaar lijken.

## Shapes

Eén hoekstraal van 0.625rem voor platen, kaders, knoppen en stapcijfers. De afvinkknop is een pil, om hem te onderscheiden van de gewone knoppen. Noppen zijn cirkels.

## Components

- **Stapcijfer.** Een vierkante plaat met het cijfer. Wordt de stap afgevinkt, dan wordt de plaat inktblauw met een geel cijfer en stempelt ze één keer (niet bij "minder beweging"). Dit is het herkenningsteken van de site.
- **Kader "Dit heb je nodig".** Witte plaat met inktlijn, staat altijd net onder de kop.
- **Tip, Test het, Let op.** Gevulde kaders in geel, zachtgroen en zachtrood. Geen gekleurde streep aan de zijkant.
- **Blokjes.** Witte plaat met een dunne lijn. Getekend door scratchblocks in Scratch 3-stijl, schaal 0.8.
- **Coachblok.** Stippellijn, dicht. Het hoort niet bij het verhaal van de ninja en ziet er daarom ook anders uit.
- **Manuallijst.** Een lijst met lijnen ertussen: naam, duur, wat je maakt. Geen rij kaarten.

## Do's and Don'ts

- Wel: nieuwe onderdelen opbouwen uit grond, plaat en inktlijn.
- Wel: iconen tekenen als SVG. Geen emoji als icoon.
- Wel: elke kleur één betekenis laten houden.
- Niet: een donker thema toevoegen zonder de gebruiksscène opnieuw te bekijken.
- Niet: screenshots van Scratch-blokjes. Blokjes zijn altijd tekst in een `scratch`-codeblok.
- Niet: de huisstijl van wann.es of het logo van CoderDojo gebruiken.
- Niet: kaarten in kaarten, kleurverlopen, of versiering achter de leestekst.
