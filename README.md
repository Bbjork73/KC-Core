# KC Core cateringkjøkken

Dette er en første, lokal prototype for ordresystem og kjøretavle basert på brukerbeskrivelsen og hovedpunktene fra `Systembeskrivelse.pdf` side 1-10.

Åpne `index.html` i nettleseren for å kjøre appen. Den bruker `localStorage`, så endringer lagres lokalt i nettleseren uten backend.

## Innhold i førsteversjonen

- Webshop/kundeportal der kunder kan opprette kundeforhold, bestille varer og følge ordrestatus.
- Webshop-bestillinger opprettes som bekreftede ordre direkte i KC Core.
- Webshop-varene er importert fra Excel-uttrekket og gruppert etter hovedkategoriene på kreativcatering.no, med Excel-kategoriene som undergrupper.
- Nettleservarsler kan aktiveres for statusendringer mens appen er åpen.

- Kjøretavle for daglige leveringer sortert på kjøkkentid.
- Direkte redigering av kjøkkentid og kjøretøy på kjøretavlen.
- Leveringer starter uten tildelt kjøretøy/sjåfør.
- Popup med utvidet leveringsinfo når en levering velges fra kjøretavlen.
- Ramme rundt leveringer som har samme kjøkkentid og samme sjåfør.
- Ordre med kunde- og fakturainfo, og leveringer i egne faner under ordre.
- Ordrestatus: tilbud, ordre, ferdig levert og fakturert.
- Nye kunder opprettes fra ordrebildet og kan velges direkte på ordre.
- Leveringer har eget leveringsnummer, leveringsvindu, spisetid, sjåførtid, kjøkkentid og artikler.
- Leveringsstatus: ikke startet, klar, lastet, ferdig levert og ferdig returnert, med "Ingen retur" som avhuking for direkte sluttstatus.
- Kjøkkentid og øvrige klokkeslett velges i 24-timers format, og kjøkkentid følger kvartersintervaller.
- Datoer vises som dd.mm.yyyy, og kjøretavlen har kalenderdatovelger.
- Egne faner for artikler og oppskrifter; artikkelklikk åpner oppskriften.
- Artikler som salgsartikkel, produksjonsartikkel eller pakke.
- Artikler knyttes til avdeling.
- Egen fane for råvarer og råvaregrupper.
- Oppskrifter med råvarer, råvaregrupper, leverandør og kostberegning.
- Pakker som består av flere artikler.
- Lagerbeholdning pr. råvare med minste beholdning og bestillingstid.
- Menygruppe og NS-kontoplan på artikler.
- Kundespesifikke prislister.
- Produksjonsliste der hver vare krysses av som ferdig eller ikke ferdig.
- Produksjonslister kan filtreres pr. avdeling.
- Varelager trekkes automatisk når produksjon markeres som ferdig, og legges tilbake hvis ferdigmerking fjernes.
- Bildeopplasting på artikkelkort.

## Naturlige neste steg

- Flytte datamodellen til en database, for eksempel PostgreSQL.
- Lage API for ordre, artikler, råvarer, produksjon og prislister.
- Legge til roller for ordrekontor, kjøkken, pakking og sjåfør.
- Integrere ERP-eksport og kart/ruteplanlegging.
