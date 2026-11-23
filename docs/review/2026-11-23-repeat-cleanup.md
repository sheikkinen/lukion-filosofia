# Repeat clean-up, 2026-11-23

**Decision.** The operator, 2026-11-23, answering "Decide on the repeated per-page notes now?": "Remove repeats". This
applies norm-ledger row 5 in lukio-runko (`docs/norm-ledger.md`): a site-wide fact is stated once on a site page, and
topic pages do not repeat it. The engine pin is raised to lukio-runko v0.5.1, which removes the engine's two per-topic
notes ("Näitä tietoja ei kopioida…" and "Merkintä tallentuu…").

**Method.** Every main-region cluster in three or more topic groups in the repeat report of the build before the
change was read and classified IN (a disclaimer, provenance note, reassurance or site-wide fact) or OUT (task
instruction, lesson step, model answer, curriculum text, source citation, heading or UI label, or anything that
teaches the subject). Repetition alone was not a reason to remove. Each IN cluster was traced to its source and removed
there; a sentence a reader needs is stated once on a site page.

**Result.** 179 clusters: 34 IN, 145 OUT. 32 IN clusters are gone from the new report. Two IN clusters remain because
the text comes from the engine (`views_topic.py`, `timing_text`: "N. vuosi, kausi (esimerkki, koulu päättää)"); they
need an engine change. No OUT cluster disappeared. Build before: 0 errors, 182 warnings (182 clusters). After: 0
errors, 150 warnings (150 clusters).

## Where each note is now stated once

- **opetussuunnitelma**, *Filosofia lyhyesti*: added to the existing bullet on assessment: nobody is asked to share
  their convictions, religious and non-religious views are equally welcome as examples, and a view may be defended as
  an exercise.
- **opetussuunnitelma**, *Arviointi koetehtävissä*: new subsection *Kokeen rakenne*, the text of the removed fact
  `filosofian_koe_rakenne` with the YTL link (read 22.11.2026, in the page's `official_links`), plus one sentence that
  the tasks and task types are the site's own and that a module covers only part of the exam. That the scoring is the
  site's own and the three dimensions were already on the page.
- **polku**: that Pohdinta answers may be skipped and shown to nobody; that exam tasks can be done in parts without a
  time limit; the support referral (school learning support; the guidance counsellor for exam arrangements). Where
  the self-study mark is stored was already on the page (*Omat tietosi*), so nothing was added for it.
- **etusivu**: tasks work without printouts; one sentence on the visual-novel stories. "kokeen rakenne" was dropped
  from the *Ajantasaisuus* sentence, which said the structure is not in the text.
- **lahteet**: "ylioppilaskokeen rakenne" was dropped from the list of examples, because the fact is no longer in the
  table.
- Already there, nothing added: translations (*opetussuunnitelma*, *Lähdetekstit ja suomennokset*), linking instead of
  copying (*lahteet*), the school-decides list (*opetussuunnitelma*, *Koulu päättää*), offline use (*saavutettavuus*).

## Kept on purpose

- Every visual-novel link, chapter title, `card_links` entry and `official_links` entry.
- Per-quotation labels *(suomennos: sivusto)* and per-task lines *Sivuston oma tehtävätyyppi: …*.
- Topic-specific variants of the privacy line that name a matter specific to the topic (family finances, cultural
  background, device use, diet, family and life choices, experiences, current disputes), and the one topic-specific
  **Ilman laitetta** note.
- Sentences joined to a removed note in a way that would need rewording (three Valmistelu bullets "Lähdetekstien
  suomennokset ovat sivuston omia, ja …", two OPH-link bullets "… on link-out-aineistoa", the fi3-09 line "Sen ei
  tarvitse olla oma mielipiteesi: kyse on …", the fi1-02 line "Se ei ole oma mielipiteesi.").

## Clusters

<!-- 34 IN, 145 OUT -->
| Sample (first 80 characters) | Groups | Scope | Reason | Action | Stated once |
|---|---|---|---|---|---|
| Filosofian vastauksen arvioinnissa painavimmat kohdat ovat osuvuus, eheys ja vak | 41 | IN | scoring note from a yearly fact, printed on every topic | fact removed from topics and yaml; gone after | opetussuunnitelma, Arviointi koetehtävissä (Kolme ulottuvuutta) |
| Pisteytys on sivuston oma harjoitusohje, ei ylioppilastutkintolautakunnan. | 41 | IN | scoring disclaimer after every model answer (105 lines) | lines removed; gone after | opetussuunnitelma, Arviointi koetehtävissä (Näin mallivastaus on rakennettu) |
| Sivuston pisteytysohje on sivuston oma harjoitusohje, ei ylioppilastutkintolauta | 41 | IN | scoring disclaimer from a yearly fact | fact removed from topics and yaml; gone after | opetussuunnitelma, Arviointi koetehtävissä (Näin mallivastaus on rakennettu) |
| Osassa 1 on kuusi 20 pisteen tehtävää, joista vastataan kolmeen–viiteen, ja osas | 41 | IN | exam structure from a yearly fact | fact removed from topics and yaml; gone after | opetussuunnitelma, Arviointi koetehtävissä (Kokeen rakenne, YTL link) |
| Filosofian ylioppilaskokeessa on yhdeksän tehtävää, joista kokelas vastaa viitee | 41 | IN | exam structure from a yearly fact | fact removed from topics and yaml; gone after | opetussuunnitelma, Arviointi koetehtävissä (Kokeen rakenne, YTL link) |
| Sivuston omat koetehtävät noudattavat tätä rakennetta. | 41 | IN | exam structure from a yearly fact | fact removed from topics and yaml; gone after | opetussuunnitelma, Arviointi koetehtävissä (Kokeen rakenne) |
| Pelisäännöt ja oletusten tarkistus | 40 | OUT | heading or UI label | kept; present after | – |
| Tarina perustuu tämän aiheen sisältöön, ja sen voi pelata selaimessa myös puheli | 40 | IN | generic visual-novel blurb sentence | sentence removed; link and chapter title kept; gone after | etusivu, Näin sivustoa käytetään |
| Itseopiskelupolku ja omien tietojen tyhjennys | 40 | OUT | engine link to the self-study page (UI, kept in v0.5.1) | kept; present after | – |
| Pohdi yksi Pohdinnan kysymyksistä ja tee itsearviointi (5 min). | 40 | OUT | self-study step or timing | kept; present after | – |
| Kirjoita vastaukset omaan muistioosi. | 40 | OUT | task or exam-task instruction | kept; present after | – |
| Kysymyksiä ja keskeneräisten loppuun. | 40 | OUT | lesson step, timing or teacher role | kept; present after | – |
| Jos huomaat oletuksen, muotoile esimerkki uudelleen. | 40 | OUT | discussion ground rule (lesson instruction that teaches the method) | kept; present after | – |
| Koulun oppimisen tuen ja opinto-ohjauksen yhteystiedot (esimerkki) | 40 | IN | school_adapts stamp, same on 40 topics | school_adapts: []; gone after | opetussuunnitelma, Koulu päättää (already) |
| Lukion opetussuunnitelman perusteet 2019, OPH-2263-2019. Tarkistettu 22.11.2026. | 40 | OUT | source citation or attribution | kept; present after | – |
| Tuki: Jos lukeminen tai kirjoittaminen on hidasta, kysy koulusi oppimisen tuesta | 40 | IN | generic support referral on every lesson | Tuki paragraph removed; gone after | polku |
| Vastaus ei koske tehtävää. | 40 | OUT | model answer or scoring criterion | kept; present after | – |
| Jos jokin kohta on vielä "En vielä", tee siihen liittyvä koetehtävä ja vertaa va | 40 | OUT | task or exam-task instruction | kept; present after | – |
| Opetussuunnitelma: tämä aihe palvelee | 40 | OUT | heading or UI label | kept; present after | – |
| Arvioi perusteluja, älä ihmisiä. | 40 | OUT | discussion ground rule (lesson instruction that teaches the method) | kept; present after | – |
| Harjoittele koetehtävä K1 (25 min) ja tarkista vastauksesi mallista. K2 ja K3 so | 40 | OUT | self-study step or timing | kept; present after | – |
| Filosofian ylioppilaskokeessa on yhdeksän tehtävää, joista kokelas vastaa viitee | 40 | IN | exam structure paragraph from a yearly fact | fact removed from topics and yaml; gone after | opetussuunnitelma, Arviointi koetehtävissä (Kokeen rakenne, YTL link) |
| Tehtävä 2 tehdään kokonaan, ei lyhennetä. | 40 | OUT | lesson step, timing or teacher role | kept; present after | – |
| S2 ja selkeä kieli: Käy sanasto läpi ennen Tehtävää 1. | 40 | OUT | differentiation step | kept; present after | – |
| Virittäytyminen ja aiemman tiedon aktivointi | 40 | OUT | heading or UI label | kept; present after | – |
| Koetehtävät voi tehdä osissa ilman aikarajaa. | 40 | IN | site-wide fact on every lesson | sentence removed; gone after | polku |
| Tehtävät toimivat ilman tulosteita. | 40 | IN | site-wide fact in every Valmistelu | sentence removed; gone after | etusivu, Näin sivustoa käytetään |
| Missä vaiheessa FI1 suoritetaan ja kuinka pitkä oppitunti on (esimerkki) | 40 | IN | school_adapts stamp, same on 40 topics | school_adapts: []; gone after | opetussuunnitelma, Koulu päättää (already) |
| Sanamuoto on Lukion opetussuunnitelman perusteista 2019 sellaisenaan. | 40 | OUT | source citation or attribution | kept; present after | – |
| Aikaa kuluu: noin 80 minuuttia. | 40 | OUT | self-study step or timing | kept; present after | – |
| Kerro, että mallivastaukset ovat sivulla. | 40 | OUT | lesson step, timing or teacher role | kept; present after | – |
| Keskustelussa arvioidaan perusteluja, ei ihmisiä. | 40 | OUT | discussion ground rule (lesson instruction that teaches the method) | kept; present after | – |
| Itsearviointi. Arvioi jokainen kohta asteikolla En vielä · Osittain · Melko hyvi | 40 | OUT | task or exam-task instruction | kept; present after | – |
| Filosofian vastauksen arvioinnissa painavimmat kohdat ovat osuvuus, eheys ja vak | 40 | IN | same yearly fact, whole paragraph | fact removed from topics and yaml; gone after | opetussuunnitelma, Arviointi koetehtävissä |
| 45 min, 60 min, 75 min | 40 | OUT | heading or UI label | kept; present after | – |
| Tee Tehtävä 1 (15 min) ja Tehtävä 2 (20 min). | 38 | OUT | lesson step, timing or teacher role | kept; present after | – |
| Tehtävä 3 on lisätehtävä (25 min). | 38 | OUT | lesson step, timing or teacher role | kept; present after | – |
| Tee Tehtävä 1 (15 min) ja Tehtävä 2 (20 min). Tehtävä 3 on lisätehtävä (25 min). | 37 | OUT | lesson step, timing or teacher role | kept; present after | – |
| Kierrä ja kysy perusteluja. | 36 | OUT | lesson step, timing or teacher role | kept; present after | – |
| Harjoittelet: Osaan 2 ja 3 | 36 | OUT | heading or UI label | kept; present after | – |
| Kierrä ja kysy perusteluja. Tehtävä 2 tehdään kokonaan, ei lyhennetä. | 36 | OUT | lesson step, timing or teacher role | kept; present after | – |
| Kirjoita vastaukset omaan muistioosi. Voit ohittaa kysymyksen, eikä vastauksia t | 35 | IN | privacy reassurance opening every Pohdinta | second sentence removed; instruction kept; gone after | polku |
| Sen ei tarvitse olla oma mielipiteesi. | 34 | IN | reassurance in task steps | sentence and its variants removed; gone after | opetussuunnitelma, Filosofia lyhyesti |
| Koeharjoitus ja tunnin päätös | 31 | OUT | heading or UI label | kept; present after | – |
| Pisteytyksen periaatteet ovat opetussuunnitelmasivulla. | 30 | IN | pointer note in every Koetehtävät intro | intro paragraphs removed; gone after | opetussuunnitelma, Arviointi koetehtävissä |
| Filosofian koe, hyvän vastauksen piirteet, kevät 2025, Ylioppilastutkintolautaku | 30 | OUT | source citation or attribution | kept; present after | – |
| FI1 kattaa vain osan kokeesta. | 30 | IN | module-covers-part-of-exam note in every intro | intro paragraphs removed; gone after | opetussuunnitelma, Arviointi koetehtävissä (Kokeen rakenne) |
| Opiskelija voi puolustaa kantaa harjoituksena, vaikka se ei olisi hänen omansa. | 30 | IN | reassurance in every Pelisäännöt | sentence removed; gone after | opetussuunnitelma, Filosofia lyhyesti |
| Ketään ei pyydetä kertomaan omaa vakaumustaan, uskontoaan tai maailmankatsomusta | 30 | IN | privacy line after every Tavoitetehtävä | sentence removed (topic-specific variants kept); gone after | opetussuunnitelma, Filosofia lyhyesti |
| Harjoittelet: Osaan 1, 3 ja 4 | 29 | OUT | heading or UI label | kept; present after | – |
| Tehtävä 2 kokonaan pareittain tai yksin (20 min). | 29 | OUT | lesson step, timing or teacher role | kept; present after | – |
| Lukeminen, keskittyminen ja jännitys: Lue lähdetekstit lause kerrallaan ja kirjo | 26 | OUT | differentiation step | kept; present after | – |
| Kukaan ei joudu kertomaan omaa vakaumustaan, ja uskonnolliset ja ei-uskonnollise | 26 | IN | privacy line in Pelisäännöt | sentence removed; gone after | opetussuunnitelma, Filosofia lyhyesti |
| Filosofian Lops-tukimateriaalit, Opetushallitus. Luettu 22.11.2026. | 25 | OUT | source citation or attribution | kept; present after | – |
| Lähdetekstien suomennokset ovat sivuston omia. | 25 | IN | translation provenance stamped in every Valmistelu | sentence removed; per-quote label kept; gone after | opetussuunnitelma, Lähdetekstit ja suomennokset (already) |
| Keskustelussa arvioidaan perusteluja, ei ihmisiä. Kukaan ei joudu kertomaan omaa | 25 | IN | Pelisäännöt bullet: ground rule plus privacy line | privacy sentence removed; ground rule kept; gone after | opetussuunnitelma, Filosofia lyhyesti |
| Kirjoita kaksi vastausta taululle. | 25 | OUT | lesson step, timing or teacher role | kept; present after | – |
| Lue osio Opiskelijalle ja molemmat lähdetekstit (15 min). | 25 | OUT | lesson step, timing or teacher role | kept; present after | – |
| Avaa kuva suurempana (kuva avautuu omalle sivulleen, ja sitä voi lähentää) | 24 | OUT | heading or UI label | kept; present after | – |
| Jos vastaus ei käytä aineistoa, vähennetään vähintään 1 p, ja vastaus voi saada  | 23 | OUT | model answer or scoring criterion | kept; present after | – |
| 1. vuosi, kevät (esimerkki, koulu päättää) | 22 | IN | 'esimerkki, koulu päättää' stamp | none: engine text (views_topic.py timing_text); present after | opetussuunnitelma, Koulu päättää; needs an engine change |
| Kirjoita enintään 750 merkkiä. | 21 | OUT | task or exam-task instruction | kept; present after | – |
| Kerro, että K1–K3 ovat kotiharjoituksia. | 20 | OUT | lesson step, timing or teacher role | kept; present after | – |
| 1. vuosi, syksy (esimerkki, koulu päättää) | 18 | IN | 'esimerkki, koulu päättää' stamp | none: engine text (views_topic.py timing_text); present after | opetussuunnitelma, Koulu päättää; needs an engine change |
| Kerro, että Tehtävä 3 ja K2–K3 ovat kotiharjoituksia. | 18 | OUT | lesson step, timing or teacher role | kept; present after | – |
| Ilman laitetta: Tehtävät 1–3, kaikki koetehtävät ja mallivastaukset toimivat pap | 17 | IN | generic offline note in Eriyttäminen | paragraph removed (the one topic-specific note kept); gone after | saavutettavuus, Mitä on tehty (already) |
| Aika: 20 min Tarvitset: paperia ja kynän Ilman laitetta: Tämä on paperitehtävä:  | 17 | OUT | task or exam-task instruction | kept; present after | – |
| Se on link-out-aineistoa: linkitä, älä kopioi. | 16 | IN | licence-class note repeated in Valmistelu | sentence removed; gone after | lahteet (already) |
| Kuva: Wikimedia Commons, julkinen omaisuus. | 16 | OUT | source citation or attribution | kept; present after | – |
| Syvempi polku: Tee Tehtävä 3 ja K3 kokonaan ja arvioi vastaustasi osuvuuden, ehe | 16 | OUT | self-study step or timing | kept; present after | – |
| Parit vastaavat yhdellä lauseella. | 15 | OUT | lesson step, timing or teacher role | kept; present after | – |
| osaa käsitteellisesti eritellä, jäsentää ja arvioida informaatiota, erityisesti  | 14 | OUT | curriculum code text | kept; present after | – |
| Määrittele käsitteet ja anna kustakin esimerkki. Kirjoita kustakin enintään 600  | 14 | OUT | task or exam-task instruction | kept; present after | – |
| Ilman laitetta: Tehtävät 1–3, kaikki koetehtävät ja mallivastaukset toimivat pap | 14 | IN | generic offline note in Eriyttäminen | paragraph removed; gone after | saavutettavuus, Mitä on tehty (already) |
| Yhteensä 5 × 4 p = 20 p. | 13 | OUT | model answer or scoring criterion | kept; present after | – |
| Ne ovat link-out-aineistoa: linkitä, älä kopioi. | 13 | IN | licence-class note repeated in Valmistelu | sentence removed; gone after | lahteet (already) |
| Säilytä tekstisi kertausta varten. | 13 | OUT | task or exam-task instruction | kept; present after | – |
| Kustakin käsitteestä 4 p: määritelmä nimeää olennaiset piirteet 2 p, osuva esime | 12 | OUT | model answer or scoring criterion | kept; present after | – |
| Osat ovat irrallaan toisistaan. | 12 | OUT | model answer or scoring criterion | kept; present after | – |
| Jos b-kohta ei käytä aineistoa, vähennetään vähintään 1 p, ja b-kohdasta voi saa | 12 | OUT | model answer or scoring criterion | kept; present after | – |
| Määritelmä osuu, yksi osa puuttuu. | 12 | OUT | model answer or scoring criterion | kept; present after | – |
| Ne auttavat kertaamaan moduulin aiheita. | 12 | OUT | self-study step or timing | kept; present after | – |
| Määritelmä, esimerkki ja ero muodostavat yhden ajatuksen. | 12 | OUT | model answer or scoring criterion | kept; present after | – |
| Määritelmä osuu juuri tähän käsitteeseen. | 12 | OUT | model answer or scoring criterion | kept; present after | – |
| Esimerkki sopii, mutta sitä ei kytketä määritelmään. | 12 | OUT | model answer or scoring criterion | kept; present after | – |
| Aika: 25 min Tarvitset: paperia ja kynän Ilman laitetta: Tämä on paperitehtävä:  | 12 | OUT | task or exam-task instruction | kept; present after | – |
| Kohdat ovat alle 10 pisteen osioita, joten ne pisteytetään osien mukaan, ei esse | 12 | OUT | model answer or scoring criterion | kept; present after | – |
| Vastaus koskee toista käsitettä. | 12 | OUT | model answer or scoring criterion | kept; present after | – |
| Aineisto: Lähdetekstit 1 ja 2 (suomennos: sivusto). | 12 | OUT | source citation or attribution | kept; present after | – |
| Määritelmä on oikean suuntainen mutta väljä. | 12 | OUT | model answer or scoring criterion | kept; present after | – |
| K1:n kohta a yksin (5 min) ja vertailu malliin (4 min). | 11 | OUT | lesson step, timing or teacher role | kept; present after | – |
| Kirjoita puheenvuoro paperille ja lue se parille. | 11 | OUT | lesson step, timing or teacher role | kept; present after | – |
| Näytä pisteytyksen taulukko ja kysy, mistä neljä pistettä syntyy. | 11 | OUT | lesson step, timing or teacher role | kept; present after | – |
| Kustakin käsitteestä 4 p: määritelmä nimeää olennaiset piirteet 2 p, osuva esime | 11 | OUT | model answer or scoring criterion | kept; present after | – |
| Abitreenit: filosofia (Yle), Yle. Luettu 22.11.2026. | 11 | OUT | source citation or attribution | kept; present after | – |
| Esimerkki todella täyttää määritelmän. | 11 | OUT | model answer or scoring criterion | kept; present after | – |
| Lukeminen, keskittyminen ja jännitys: Lue lähdeteksti lause kerrallaan ja kirjoi | 11 | OUT | differentiation step | kept; present after | – |
| Kirjoita puheenvuoro ja lue se parille. | 11 | OUT | lesson step, timing or teacher role | kept; present after | – |
| Jaa roolit arpomalla. Arvioi perusteluja, älä ihmisiä. | 10 | OUT | lesson step, timing or teacher role | kept; present after | – |
| Roolit jaetaan arpomalla, ja opiskelija puolustaa kantaa harjoituksena, vaikka s | 10 | OUT | lesson step, timing or teacher role | kept; present after | – |
| Vain yksi puheenvuoro kummastakin roolista. | 10 | OUT | lesson step, timing or teacher role | kept; present after | – |
| Pidä roolit yhtä pitkinä. | 10 | OUT | lesson step, timing or teacher role | kept; present after | – |
| Aika: 20 min Tarvitset: paperia ja kynän Ilman laitetta: Tämä on paperitehtävä:  | 10 | OUT | task or exam-task instruction | kept; present after | – |
| Opetushallituksen Filosofian Lops-tukimateriaaleissa ei ole omaa FI3-sivua. | 10 | IN | module-wide source note repeated on FI3 topics | sentence removed; background links kept; gone after | not needed (OPH link on opetussuunnitelma) |
| Etiikka lukion filosofiassa, Opetushallitus. Luettu 22.11.2026. | 9 | OUT | source citation or attribution | kept; present after | – |
| Osa 1 · Aineistoessee · Harjoittelee: Osaan 4, 5 | 9 | OUT | heading or UI label | kept; present after | – |
| Jos a-kohta ei käytä aineistoa, vähennetään vähintään 1 p, ja a-kohdasta voi saa | 9 | OUT | model answer or scoring criterion | kept; present after | – |
| osaa hahmottaa filosofisia ongelmia sekä niiden erilaisia mahdollisia ratkaisuja | 9 | OUT | curriculum code text | kept; present after | – |
| Kirjoita vastaus ja lue se parille. | 9 | OUT | lesson step, timing or teacher role | kept; present after | – |
| Koetehtävästä K1 kohdat a–c riittävät. | 9 | OUT | differentiation step | kept; present after | – |
| Vastaus on pelkkä synonyymi tai esimerkki. | 9 | OUT | model answer or scoring criterion | kept; present after | – |
| Kokeessa on yhdeksän tehtävää: osassa 1 kuusi 20 pisteen tehtävää ja osassa 2 ko | 9 | IN | exam structure restated in Koetehtävät intros | intro paragraphs removed; gone after | opetussuunnitelma, Arviointi koetehtävissä (Kokeen rakenne) |
| Perustelut ovat hyviä, mutta vastaväitettä ei punnita. | 9 | OUT | model answer or scoring criterion | kept; present after | – |
| Aika: 25 min Tarvitset: paperia ja kynän Ilman laitetta: Tämä on paperitehtävä:  | 9 | OUT | task or exam-task instruction | kept; present after | – |
| Arvioi vastaustasi osuvuuden, eheyden ja vakuuttavuuden mukaan. | 9 | OUT | self-study step or timing | kept; present after | – |
| Pidä kannat yhtä pitkinä. | 9 | OUT | lesson step, timing or teacher role | kept; present after | – |
| Lähdetekstin suomennos on sivuston oma. | 9 | IN | translation provenance stamp | sentence removed; per-quote label kept; gone after | opetussuunnitelma, Lähdetekstit ja suomennokset (already) |
| Lähdetekstit luetaan ääneen (5 min), sitten Tehtävä 2 kokonaan (20 min). | 8 | OUT | lesson step, timing or teacher role | kept; present after | – |
| Aineisto: Lähdeteksti 1 (suomennos: sivusto). | 8 | OUT | source citation or attribution | kept; present after | – |
| Käytä vastauksessasi molempia aineistoja. | 8 | OUT | task or exam-task instruction | kept; present after | – |
| Aika: 20 min Tarvitset: paperia ja kynän Ilman laitetta: Tämä on paperitehtävä:  | 8 | OUT | task or exam-task instruction | kept; present after | – |
| Lähdetekstit 1 ja 2 luetaan ääneen. | 8 | OUT | lesson step, timing or teacher role | kept; present after | – |
| Lähdetekstit ääneen (5 min) ja Tehtävä 2 kokonaan (20 min). | 8 | OUT | lesson step, timing or teacher role | kept; present after | – |
| Osa 2 · Osiin jaettu tehtävä 10 + 20 · Harjoittelee: Osaan 3, 4, 5 | 8 | OUT | heading or UI label | kept; present after | – |
| pystyy arvioimaan filosofisesti yhteiskunnan rakennetta ja sen oikeutusta | 8 | OUT | curriculum code text | kept; present after | – |
| Pari esittää kahden minuutin puheenvuoron: perustelu ja vastaväite. | 8 | OUT | lesson step, timing or teacher role | kept; present after | – |
| Kirjoita kaksi perustelua taululle. | 8 | OUT | lesson step, timing or teacher role | kept; present after | – |
| Kukaan ei joudu kertomaan omaa poliittista kantaansa tai vakaumustaan. | 7 | IN | privacy line in FI3 Pelisäännöt | sentence removed; gone after | opetussuunnitelma, Filosofia lyhyesti |
| Kirjoita kaksi erilaista vastausta taululle. | 7 | OUT | lesson step, timing or teacher role | kept; present after | – |
| Tehtävä 3 kokonaan pareittain tai yksin. | 7 | OUT | lesson step, timing or teacher role | kept; present after | – |
| Arvio on perusteltu, mutta vastaväitettä ei punnita. | 7 | OUT | model answer or scoring criterion | kept; present after | – |
| K1:n kohdat a ja b yksin (6 min) ja vertailu malliin (4 min). | 7 | OUT | lesson step, timing or teacher role | kept; present after | – |
| Tehtävä 1 ja K1 kotiin. | 7 | OUT | lesson step, timing or teacher role | kept; present after | – |
| Aika: 25 min Tarvitset: paperia ja kynän Ilman laitetta: Tämä on paperitehtävä:  | 7 | OUT | task or exam-task instruction | kept; present after | – |
| Kirjoita kuhunkin enintään 1 500 merkkiä. | 7 | OUT | task or exam-task instruction | kept; present after | – |
| Esimerkkejä laaja-alaisesta osaamisesta, tavoitteista ja moduulien sisällöistä l | 6 | OUT | source citation or attribution | kept; present after | – |
| Parit vertaavat Tehtävän 3 kohtaa 5. | 6 | OUT | lesson step, timing or teacher role | kept; present after | – |
| Jos d-kohta ei käytä aineistoa, vähennetään vähintään 1 p, ja d-kohdasta voi saa | 6 | OUT | model answer or scoring criterion | kept; present after | – |
| Kumpi perustelee kantansa paremmin? | 6 | OUT | lesson step, timing or teacher role | kept; present after | – |
| Tee K3 kokonaan ja arvioi vastaustasi osuvuuden, eheyden ja vakuuttavuuden mukaa | 6 | OUT | self-study step or timing | kept; present after | – |
| Crash Course Philosophy (aihesivu), Crash Course. Luettu 22.11.2026. | 6 | OUT | source citation or attribution | kept; present after | – |
| Osa 2 · Osiin jaettu tehtävä 3 + 6 + 6 + 15 · Harjoittelee: Osaan 1, 2, 3, 5 | 6 | OUT | heading or UI label | kept; present after | – |
| Kaksi paria lukee kohdan 5 vastauksensa ääneen. | 6 | OUT | lesson step, timing or teacher role | kept; present after | – |
| Yksin: kaksi perustelua paperille. | 6 | OUT | lesson step, timing or teacher role | kept; present after | – |
| osaa eritellä ja arvioida filosofisia teorioita totuudesta, tiedosta, todellisuu | 6 | OUT | curriculum code text | kept; present after | – |
| oppii pohtimaan ja jäsentämään käsitteellisesti laajoja kokonaisuuksia sekä ajat | 6 | OUT | curriculum code text | kept; present after | – |
| osaa arvioida havainnon ja tiedon sekä tieteellisten teorioiden suhdetta totuute | 6 | OUT | curriculum code text | kept; present after | – |
| Jos c-kohta ei käytä aineistoa, vähennetään vähintään 1 p, ja c-kohdasta voi saa | 6 | OUT | model answer or scoring criterion | kept; present after | – |
| Kumpaakaan kantaa ei palkita sinänsä; arvioidaan, miten vastaus perustelee ja pu | 6 | OUT | model answer or scoring criterion | kept; present after | – |
| K3:n kohta c yksin (5 min) ja vertailu malliin (4 min). | 6 | OUT | lesson step, timing or teacher role | kept; present after | – |
| Arvio on perusteltu, mutta toinen kanta jää heikommaksi. | 6 | OUT | model answer or scoring criterion | kept; present after | – |
| Vastaus ei koske kohtaa. | 5 | OUT | model answer or scoring criterion | kept; present after | – |
| Osa 1 · Kahden teorian vertailu · Harjoittelee: Osaan 4, 5 | 5 | OUT | heading or UI label | kept; present after | – |
| Oikea vastaus 1 p, väärä tai En vastaa 0 p. | 5 | OUT | model answer or scoring criterion | kept; present after | – |
| ajankohtaisia yhteiskuntafilosofisia kysymyksiä: ympäristöongelmat, kulttuurien  | 5 | OUT | curriculum code text | kept; present after | – |
| Tehtävän 3 ja K3:n aineistot ovat kuvitteellisia. Älä vaihda niiden tilalle ajan | 5 | OUT | task-specific teacher instruction (names the tasks; the 'fictional' clause gives its reason) | kept; present after | – |
| Osa 1 · Käsite-essee · Harjoittelee: Osaan 1, 2 | 5 | OUT | heading or UI label | kept; present after | – |
| Arvio etenee yhtenä ketjuna. | 5 | OUT | model answer or scoring criterion | kept; present after | – |
| osaa soveltaa oppimaansa ajankohtaisiin yhteiskunnallisiin kysymyksiin | 5 | OUT | curriculum code text | kept; present after | – |
| hallitsee johdonmukaisen argumentaation perustaidot, mikä auttaa kehittämään oma | 5 | OUT | curriculum code text | kept; present after | – |
| Tehtävän 1 väitteet voi kirjoittaa korteille ja lajitella pöydällä. | 5 | OUT | task or exam-task instruction | kept; present after | – |
| Moduulin tavoitteena on, että opiskelija | 5 | OUT | heading or UI label | kept; present after | – |
| Logiikka ja argumentaatio lukion filosofiassa, Opetushallitus. Luettu 22.11.2026 | 5 | OUT | source citation or attribution | kept; present after | – |
| perehtyy filosofisen etiikan keskeisiin käsitteisiin, kysymyksiin ja teorioihin | 5 | OUT | curriculum code text | kept; present after | – |
| Kysy esimerkki jokaiseen sarakkeeseen. | 5 | OUT | lesson step, timing or teacher role | kept; present after | – |
| Osa 1 · Määrittele ja anna esimerkki · Harjoittelee: Osaan 1, 2, 3 | 5 | OUT | heading or UI label | kept; present after | – |
| Vastaus päättyy kahteen rinnakkaiseen kantaan ilman kokonaisarviota. | 5 | OUT | model answer or scoring criterion | kept; present after | – |
| Aika: 20 min Tarvitset: paperia ja kynän Ilman laitetta: Tämä on paperitehtävä:  | 5 | OUT | task or exam-task instruction | kept; present after | – |
| Alkutekstit ovat avoimessa Wikisource-kirjastossa. | 5 | OUT | source citation or attribution | kept; present after | – |
| FI2 kattaa vain osan kokeesta. Pisteytyksen periaatteet ovat opetussuunnitelmasi | 5 | IN | FI2 intro: coverage note and pointer | intro paragraphs removed; gone after | opetussuunnitelma, Arviointi koetehtävissä |
| Osa 1 · Kahden teorian vertailu · Harjoittelee: Osaan 1, 3, 4 | 5 | OUT | heading or UI label | kept; present after | – |
| Vastaus ei koske käsitettä. | 5 | OUT | model answer or scoring criterion | kept; present after | – |
| Aika: 25 min Tarvitset: paperia ja kynän Ilman laitetta: Tämä on paperitehtävä:  | 5 | OUT | task or exam-task instruction | kept; present after | – |
| Kohdat 4 ja 5 kotiin. | 5 | OUT | lesson step, timing or teacher role | kept; present after | – |
| Koetehtävästä K2 kohdat a ja b riittävät. | 5 | OUT | differentiation step | kept; present after | – |
| Arvioi perusteluja, älä ihmisiä. Pidä kannat yhtä pitkinä. | 5 | OUT | lesson step, timing or teacher role | kept; present after | – |
| Kiintopisteet 5, 10 ja 15 p ovat kokonaisarvion apuja, eivät erillisiä pisteitä. | 5 | OUT | kiintopisteet / suuntaa antavat kohdat: separate open decision | kept; present after | – |
| Jos joku esittää väkivaltaa ihannoivan tai muita halventavan kommentin, palauta  | 5 | OUT | classroom instruction for a specific situation | kept; present after | – |
| Aineisto mainitaan vain nimeltä. | 5 | OUT | model answer or scoring criterion | kept; present after | – |
