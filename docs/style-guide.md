# Style guide: voice, terms and form (filosofia)

**Written for brief 002, 2026-11-22**, adapted from the terveystieto style guide. Every topic writer follows this guide
and copies the form of the sample topic `content/topics/01-mita-filosofia-on.md` (`id: fi1-01-mita-filosofia-on`).
The contract (`docs/content-contract.md`) says *which* sections and rules exist; this guide says *how* they are
written. Where they disagree, the contract wins.

## 1. Voice

- **To the student (Opiskelijalle, Tehtävät, Pohdinta, Koetehtävät, Mallivastaukset, Itseopiskelun askel, Apua ja
  tukea): `sinä`.** Warm, calm, curious. A capable 16-year-old reads alone at home; philosophy is a way of thinking
  to try out, not a doctrine to accept.
  - Yes: *Kun punnitset näitä vaihtoehtoja, teet jo filosofiaa.*
  - No: *Opiskelijan tulee ymmärtää, että…* / *Tämä on ainoa oikea tapa ajatella.*
- **To the teacher (Tuntisuunnitelmat, Eriyttäminen): collegial, short, practical.** Imperative, no lecture.
  - Yes: *Kierrä ja kysy: missä kohdassa kysymys muuttui filosofiseksi?*
  - No: *Opettajan on tärkeää muistaa, että filosofia on moniulotteinen oppiaine.*
- **Teach thinking, not positions.** Describe an argument, then its strongest critic, in the same tone and at about
  the same length. The page never concludes for the student on a contested question.
  - Yes: *Joidenkin mielestä filosofia alkaa ennemmin epäilystä.* No: *Aristoteles oli oikeassa.*
- **Ideas, not persons.** Tasks are about questions, texts and fictional speakers (*Noor, Aaro, Veera, Kim, Sami,
  Ella*), never about the student's own beliefs, faith or life.

## 2. Plain Finnish (selkeä yleiskieli)

- One idea per sentence; aim under 15 words, break anything over 25. Paragraphs of 2–4 sentences.
- Verbs, not nouns: *filosofi perustelee*, not *perustelemisen suorittaminen*.
- Explain a term in the same or next sentence: *Empiirinen kysymys ratkeaa havainnoilla tai mittaamalla.*
- Philosophers by their Finnish names (*Platon, Aristoteles, Sokrates, Descartes, Hume, Kant, Epiktetos*); works in
  Finnish italics with the original title only in the reference line (*Metafysiikka*, *Theaitetos*,
  *Mietiskelyjä*, *Tutkimus inhimillisestä ymmärryksestä*).
- Headings below H2 are short nouns or questions: `### Millainen kysymys on filosofinen?`
- No needless English loans: *perustelu* (not *argumentti* when you mean a reason), *vastaesimerkki*, *ajatuskoe*.

## 3. Glossary

First use in a topic: the full form; then the short form.

| Use | Not | Note |
|---|---|---|
| väite; perustelu (premissi); johtopäätös | argumentti (for a single reason) | *Argumentti* is the whole: perustelut + johtopäätös. |
| pätevä päättely; tosi; sitova (sound) | oikea päättely | Validity is form, truth is content; *pätevä ja perustelut tosia = sitova*. |
| deduktio, induktio, abduktio | | Gloss each once with an everyday example. |
| virhepäätelmä: henkilöön meneminen, olkiukko, väärä dilemma, kalteva pinta | argumenttivirhe (mixed) | Latin names only in brackets: *(ad hominem)*. |
| käsitteellinen ja empiirinen; objektiivinen ja subjektiivinen | teoreettinen ja käytännöllinen | Curriculum pairs; name them as pairs. |
| henki ja aine; dualismi, materialismi (fysikalismi), idealismi | sielu (as the term) | *Sielu* only when quoting or explaining a tradition. |
| vapaus ja välttämättömyys; determinismi, kompatibilismi, libertarismi | kohtalo (for determinism) | *libertarismi* here is the free-will view, not politics: say so. |
| tieto; uskomus; hyvin perusteltu tosi uskomus | tietämys | The classical analysis is named as one view with critics. |
| arkitieto; tieteellinen tieto; pseudotiede | huuhaa | Judge by criteria, never by mocking. |
| ajatuskoe; vastaesimerkki; välttämätön ja riittävä ehto | | |
| metafysiikka, tietoteoria, logiikka, etiikka, yhteiskuntafilosofia, estetiikka | | Branches, lower case. |
| ylioppilaskoe; kokelas; Ylioppilastutkintolautakunta (YTL) | YO-koe | |

## 4. "Osaan" outcomes

- `## Opiskelijalle` opens with `**Tämän aiheen jälkeen**` and 4–5 outcomes, each starting with **Osaan**.
- At least one outcome per cited code, in plain words. Never type curriculum wording; the build prints it.
- Outcomes describe knowledge and skills (*osaan erottaa, selittää, arvioida*), never beliefs (*ymmärrän, että
  vapaa tahto on olemassa*).
- Every task carries `**Harjoittelet:** Osaan 2 ja 3`, every exam task `*… · Harjoittelee: Osaan 1, 2*`.
- `## Pohdinta` ends with the self-assessment repeating the outcomes word for word on *En vielä · Osittain · Melko
  hyvin · Hyvin*.

## 5. The primary-text box (Lähdeteksti)

One to three per topic, normally inside `## Opiskelijalle` (its words count toward the 600-word limit, so keep the
original to one to four sentences). The form, exactly as in topic 01:

```markdown
**Lähdeteksti 1: Platon, *Theaitetos* 155d**

> <span lang="grc">μάλα γὰρ φιλοσόφου τοῦτο τὸ πάθος, τὸ θαυμάζειν: οὐ γὰρ ἄλλη ἀρχὴ φιλοσοφίας ἢ αὕτη</span>

> Juuri filosofille kuuluu tämä kokemus, ihmettely. Filosofialla ei näet ole muuta alkua kuin tämä. (suomennos: sivusto)

Platon, *Theaitetos* 155d (Sokrates puhuu), Burnetin laitos (1903), [Perseus, luettu 22.11.2026](https://www.perseus.tufts.edu/hopper/text?doc=Perseus:text:1999.01.0171:text=Theaet.:section=155d).
```

How it was made (copy the steps, not the text):

1. **Open the edition page yourself** and copy the original from it, never from memory, a Loeb page or a modern
   translation. On Perseus check the page title and the edition line (here *Burnet. Oxford University Press. 1903*);
   the Greek text has its own document number (Theaetetus Greek `1999.01.0171`, the English is a different one).
   Copy punctuation as the page shows it (Perseus prints the Greek raised dot as `:`, and the apostrophe as `᾽`).
2. **Translate from the original.** Faithful first, then plain: split a long Greek period into two or three Finnish
   sentences; keep the key word (*θαυμάζειν* → *ihmettely*), and render a word whose sense is contested by its plain
   core (*πάθος* → *kokemus*). Omitted words at the start (*γάρ*) are fine; omitted words inside get `– –`.
3. **Reference line:** author, work in Finnish italics, the traditional reference (Stephanus *155d*; Bekker
   *982b12–17*; AT *VII 25*; book and chapter in words or Roman numerals: *kirja I*, *jakso IV*), the edition named on
   the page, then the link whose text carries the read date: `[Perseus, luettu 22.11.2026](url)`. A read date outside
   the link text trips the build's date scanner; so does any `1.7`-style citation.
4. **URL:** percent-encode parentheses (`%28`, `%29`); the link is also in `official_links`.
5. **Front matter:** one `primary_texts` row per box: `{author, work, ref, edition, url, read, lang, translation:
   sivusto, checked_by: "odottaa: lähteiden ja käännösten tarkistaja"}`. The checker replaces `checked_by` with
   its role and date after opening the page and back-translating.
6. **Use the box.** The text around it explains it in your own words, a task works with it, and if an exam task uses
   it as material, the Finnish is repeated inside the task so the paper version is complete.

No `<div>` wrappers. Languages: `grc`, `la`, `de`, `fr`, `en`, `da`, `sv`. A public-domain Finnish translation only
with its translator's death year read and recorded. If no edition page opens after two tries, drop the box.

## 6. Tasks (`## Tehtävät`)

```
### Tehtävä 1: Lajittele kysymykset
**Aika:** 15 min
**Tarvitset:** paperia ja kynän
**Ilman laitetta:** (how to do exactly this alone, with paper only; no printout, no partner)
**Harjoittelet:** Osaan 2 ja 3
1. … (at most 5 steps, one action each, imperative)
```

- One to three tasks; **times differ** (topic 01: 15, 20, 25 min).
- A topic with a box has a task that reads the box. A task that defends a view says: *Sen ei tarvitse olla oma
  mielipiteesi.* Steps end in a note the student keeps.
- Interactive work (dialogue, counterexample hunt) always has a solo paper version in the offline line.

## 7. Pohdinta

Two or three prompts about ideas or fictional cases, opened with *Kirjoita vastaukset omaan muistioosi. Voit ohittaa
kysymyksen, eikä vastauksia tarvitse näyttää kenellekään.* Yes: *Miksi jotkin kysymykset pysyvät avoimina
vuosisatoja?* No: *Uskotko sinä Jumalaan?* / *Mitä sinä pelkäät kuolemassa?*

## 8. Exam tasks (`## Koetehtävät`)

The section opens with two sentences: the tasks are the site's own in the exam's formats; the exam has nine tasks,
six of 20 p in part 1 and three of 30 p in part 2 (`yearly_facts: [filosofian_koe_rakenne]`); the module covers only
part of the exam. Two or three tasks per topic, in **different formats**; across the module every format appears.

Heading (engine form) and the line under it:

```
### K2: Ihmettely filosofian alkuna, 40 min (20 p)

*Osa 1 · Aineistoessee · Harjoittelee: Osaan 4, 5*
```

Front matter `exam_tasks: [{id, type, part: osa-1 | osa-2, points, minutes, codes}]`; a 30-point task adds
`parts: [5, 5, 20]`. Practice minutes: 20 p 25–40, 30 p 50–60. Never a past YTL task or attachment, reworded or not.
Material is self-written and marked *Aineisto (kuvitteellinen)*, or a public-domain box with the site's translation.

### Templates by slug (contract §B)

- **`maarittele-ja-esimerkki`** (osa 1): *"Määrittele käsitteet ja anna kustakin esimerkki. Kirjoita kustakin
  enintään 600 merkkiä. (5 × 4 p)"* Five concepts a)–e). Scoring per concept: definition with its essential
  features 2 p, fitting example 1 p, difference from a near concept 1 p. Model: definition sentence, example, contrast.
- **`monivalinta`** (osa 1): 20 items × 1 p, options a–d plus *En vastaa*. Instruction: *"Oikea vastaus 1 p, väärä
  tai En vastaa 0 p."* Model: the right letter and one line why, and why the most tempting wrong option is wrong.
- **`kasite-essee`** (osa 1, 20 p, no material): *"Mitä tarkoitetaan [käsitteellä]? Erittele ja arvioi."* Model:
  definition, distinctions, two views with their best reasons, a weighed conclusion.
- **`aineisto-essee`** (osa 1, 20 p): material first, then *"… Käytä vastauksessasi aineistoa."* The scoring adds
  the material rule (§9). Model: the material is cited by number and explained, not copied.
- **`menetelmatehtava`** (osa 1): four short items, *"Vastaa kahteen. Kirjoita kuhunkin enintään 1 500 merkkiä.
  (2 × 10 p)"*: build an argument in standard form, find a counterexample, design a thought experiment, define with
  necessary and sufficient conditions. Each 10 p item is scored as an essay (§9).
- **`argumentin-analyysi`**: a fictional speaker's argument; *"a) Esitä argumentti vakiomuodossa. b) Nimeä
  piiloperuste. c) Arvioi."* Model: numbered premisses, the hidden premiss in italics, the strongest objection.
- **`kahden-teorian-vertailu`**: *"Vertaile näkemyksiä A ja B kysymyksessä X. Kumpi on perustellumpi?"* Model:
  shared question, one difference per paragraph, both views' best case, a conditional verdict.
- **`ajatuskoe-arviointi`**: a thought experiment told in our words (the ship of Theseus, the cave); *"Mitä
  ajatuskoe osoittaa? Arvioi, toimiiko se."* Model: what it tests, which intuition it relies on, a variant that
  breaks it.
- **`osiin-jaettu-30`** (osa 2): parts 5 + 5 + 20, 15 + 15, 10 + 20 or 3 + 6 + 6 + 15; parts under 10 p carry *"Kirjoita
  enintään 750 merkkiä."* No two topics in a module use the same split with the same opening format. Topic 01 uses
  5 + 5 + 20 (classify, explain, evaluate an argument).

## 9. Model answers and scoring (`## Mallivastaukset`)

For each task an H3 repeating the task heading exactly. Then, in order:

1. **Malliksi kelpaava vastaus**: original wording, full sentences, the length a good kokelas writes in the time.
   Essays answer the question first, show the strongest objection and reply to it, and end in a conditional
   verdict (*Jos hyödyllä tarkoitetaan …, silloin …*). Never a verdict on a religious or political question.
2. **Pisteytys**:
   - **Parts of 10 p or more are essays**, judged as a whole in five levels. Write a table, specific to the task:
     `| Taso | Pisteet | Osuvuus | Eheys | Vakuuttavuus |` with rows *täysi / kolme neljäsosaa / puolet / neljännes / 0 p*
     (20 p: 20 / 15 / 10 / 5 / 0; 15 p: 15 / 12 / 8 / 4 / 0; 10 p: 10 / 7 / 5 / 2 / 0, halves rounded down). A
     30 p task is always split into parts, so no 30 p band table exists.
     Before the table, a line *Sisältö, jota odotetaan:* lists the content the levels refer to. After it, one line
     that the anchors (20 p: 5, 10, 15; 15 p: 4, 8, 12) help the overall judgement and are not separate points.
   - **Osuvuus is the gate.** An answer that misses the question cannot reach *puolet* however coherent it is.
     *Eheys* is structure (one line of thought, not a list); *vakuuttavuus* is the quality of reasons (acceptable
     starting points, a real link between claim and reason, the objection met).
   - **Parts under 10 p** are scored by elements that add up, with the anchors (5 p: 2 and 4). A definition task
     adds a small table per concept (4 / 3 / 2 / 1 / 0 p) on the same three criteria.
   - **Material rule** (every `aineisto-essee` and every part that asks for material): `- Jos vastaus ei käytä
     aineistoa, vähennetään vähintään 1 p, ja vastaus voi saada enintään kolme neljäsosaa pisteistä eli 15 p.`
   - Last line `**Yhteensä:** 20 p`, equal to the heading.
3. **Tyypilliset virheet**: 3–5 bullets (*aineisto toistetaan selittämättä*, *vastaväite jää punnitsematta*,
   *olkiukko*, *mielipide perusteluna*).
4. The fixed line, verbatim: `Pisteytys on sivuston oma harjoitusohje, ei ylioppilastutkintolautakunnan.`

**Trap:** the build flags `%` in topic text. Write levels in words (*kolme neljäsosaa*) and points (*15 p*); the
curriculum page, which the scanner does not read, shows the percentages once.

## 10. Self-study, lesson plans, differentiation

- `## Itseopiskelun askel`: **Tavoite**, **Aikaa kuluu**, **Näin etenet** (lue → tee → harjoittele → pohdi →
  seuraava askel, naming the next topic in words, not as a link), **Muistiinpanoihin**.
- `## Tuntisuunnitelma (75 min)` with H3 `(60 min)` and `(45 min)`; it opens with `**Tavoitetehtävä:**` and one
  sentence that nobody is asked to share their convictions, faith or worldview. Columns `| Vaihe | Min | Toiminta |
  Opettajan rooli | Vaihtoehto | Jos aika loppuu |`, `Min` a bare integer, no total row. 75 min: Virittäytyminen 5 /
  Aiemman tiedon aktivointi 10 / Lyhyt alustus 10 / Työskentely 25 / Pari- tai pienryhmäpohdinta 10 / Koeharjoitus
  ja exit 10 / Puskuri 5. **The 45-minute plan keeps the goal task whole.**
- Then `### Valmistelu` (≤ 5 lines), `### Avoimet kysymykset` (5–8), `### Pelisäännöt ja oletusten tarkistus`
  (reasons are judged, not people; a view may be defended as an exercise; worldviews are equally welcome as examples).
- `## Eriyttäminen`: **Helpompi polku**, **Syvempi polku**, **S2 ja selkeä kieli** (mini glossary), **Lukeminen,
  keskittyminen ja jännitys**, **Ilman laitetta**, **Tuki**.

## 11. Worldview respect: do and don't

| Do | Don't |
|---|---|
| *Joidenkin mielestä … Toisten mielestä …*, equal length and tone | One side in a paragraph, the other in a clause |
| Religious and non-religious views as examples of arguments | *Tiede on kumonnut uskonnon* / *ateismi on kylmää* |
| *Opiskelija voi puolustaa kantaa harjoituksena.* | *Kerro ryhmälle, mihin itse uskot.* |
| Model answers weigh and end conditionally | Model answers that reward one worldview |
| Political ideas analysed by their arguments (FI3) | Party names, current campaigns, advocacy |
| Curriculum content stated as content | "Both sides" making a curriculum distinction look optional |
| Pseudoscience judged by named criteria | Mocking words (*huuhaa*, *hölynpöly*) |

## 12. Sensitive themes

Death, suicide in ethics, euthanasia, political violence and the death of Socrates (contract §D):
`safety_flags` (`death_suicide`, `violence`), a `content_note` of one plain sentence (*Tällä sivulla käsitellään
kuolemaa filosofisena kysymyksenä. Lopussa on tietoa avusta.*), no methods, no case stories, no prompt that asks for
personal experience, and an `## Apua ja tukea` box: the 112 line first, opiskeluterveydenhuolto, kuraattori or
psykologi, then dated links from `data/yearly-facts.yaml` (Sekasin, MIELI Kriisipuhelin, Mielenterveystalo nuoret),
with numbers and hours linked, never typed. David's *Death of Socrates* is not used on pages about the ethics of
death. Ordinary pages keep a short `## Apua ja tukea` with a study-help paragraph (teacher, opinto-ohjaaja,
kuraattori), as in topic 01.

## 13. Facts, links and materials

- A claim about a philosopher or a text is either stated by a page you opened (link it) or a stable, widely
  documented fact (Aristotle was Plato's student). If unsure, leave it out.
- Every body link is in `official_links` with its read date; materials come from `data/materials.yaml` with the
  same title, publisher and `licence_class` (`open-cc-by-sa` or `link-out`), and are never copied or closely
  paraphrased. A page you cannot open after two tries is left out and reported.
- Changing figures (exam structure, service hours) go through `yearly_facts`, never typed beyond their
  `stable_figures`.

## 14. Files and length

- `content/topics/NN-slug.md`, `id: fi1-NN-slug`, `module: FI1`, `order: NN`. Slugs: 01 mita-filosofia-on,
  02 sokraattinen-menetelma, 03 argumentti-ja-perustelu, 04 patevyys-ja-virhepaatelmat, 05 kasitteet-ja-ajatuskokeet,
  06 henki-ja-aine, 07 vapaus-ja-valttamattomyys, 08 kasitteellinen-ja-empiirinen, 09 tieto-ja-tiede,
  10 tieto-eri-oppiaineissa.
- About 460 lines per topic, never over 500; Opiskelijalle 300–600 words, link URLs and the box included (topic 01:
  about 570). Check with the build: 0 errors, 0 warnings once all topics exist.
- `## Lähteet` holds one line: `Kootaan sivun tiedoista automaattisesti.`

## 15. Never

- Never type curriculum wording, or present something as required that is not (the curriculum names no
  philosophers).
- Never copy text, tasks or pictures from publishers, YTL, OPH, Logos, SEP, IEP, Loeb pages or modern translations.
- Never assess or ask about the student's own beliefs, religion, values or life.
- Never write a local path, a key, a personal e-mail or a private person's name.
- Never embed images, scripts, fonts or iframes from other hosts; plain links only.

## 16. FI2 additions (brief 003, 2026-11-22)

Added by the FI2 lead writer from the critic's proposal 5 (`docs/research/2026-11-22-fi2-scouting.json`). Sections 1–15
apply unchanged. FI2 files are `content/topics/NN-slug.md` with `module: FI2`, `order: 11`–`20` and `id: fi2-NN-slug`;
the FI2 sample topic is `content/topics/01-moraali-laki-ja-tapa.md` (`fi2-01-moraali-laki-ja-tapa`).

**Ethical-analysis task** (a `## Tehtävät` task or an exam part): (1) a fictional third-person case of 60–120 words,
marked *kuvitteellinen*, with named fictional adults (§1 names); (2) *Erittele tilanteen eettiset kysymykset.*;
(3) *Miten [hyve-etiikka / seurausetiikka / Kantin etiikka] arvioisi tapausta?*, at least two theories, each with its
strongest critique; (4) *Arvioi, kumpi perustelu on vahvempi ja miksi.* The task judges the quality of reasons, never
the student's own stance; the model answer accepts any argued conclusion and ends conditionally.

**Running case *Muuttoaamu*** (topics 14–16; others may refer back to it). Copy the text verbatim:
*Aineisto (kuvitteellinen): Sami on luvannut auttaa ystäväänsä Ellaa muutossa lauantaiaamuna. Ellan muuttoauto on
varattu vain aamupäiväksi, eikä hän saa ketään muuta apuun. Kun Sami on lähdössä, naapuri Veera koputtaa oveen: hänen
pyöränsä on rikki, ja hänen pitäisi ehtiä työhaastatteluun kaupungin toiselle laidalle. Jos Sami vie Veeran autollaan,
hän myöhästyy Ellan luota tunnin. Sami ei saa Ellaa kiinni puhelimella.* Each topic asks its own theory's question
(14: mitä hyveellinen ihminen tekisi; 15: kumpi teko tuottaa enemmän hyvää; 16: mikä on Samin velvollisuus ja voiko
hänen maksiiminsa yleistää), and each carries one `kahden-teorian-vertailu` task; 16 brings the three together.

**Sensitive themes in FI2** (contract §D and §12, sharpened):

- No methods, means or case stories. Kant's *Grundlegung* is quoted only up to AA IV 429 line 13 (the suicide example
  starts on line 14); prefer the false-promise example (AA IV 422). Seneca's "open door" passages are not used.
- Epicurus on death (*Kirje Menoikeukselle* 125) gets `safety_flags: [death_suicide]`, a `content_note` and the youth
  help box: 112 first, then Sekasin and MLL:n Lasten ja nuorten puhelin, as dated links whose own pages say they serve
  young people. MIELI Kriisipuhelin only with the operator's yes. Consent or harassment cases add Nuorten Exit.
- Symmetry: opposing positions get about equal length (within a quarter) and tone; no real group is named as holding a
  view. Euthanasia and abortion are left out of the core (the curriculum does not name them); if a brief adds them,
  the law comes first, from dated Finlex, STM or THL pages a data agent has read.
- No prompt asks about the student's own life, family, faith or experience (checker words: *itse*, *perheessäsi*,
  *läheisesi*, *oma uskosi*, *kerro kokemuksestasi*). Relationship cases use fictional adults only.
- Animals and climate: no diet moralising, no catastrophe figures from memory; climate is a normative question
  (future generations, collective action) with a one-sentence `content_note` on climate worry.
- The Euthyphro dilemma is framed as logic, with religious and non-religious replies of equal weight.
- A public-domain text with period-bound views (Herodotus on other peoples, Bentham's slavery comparison) gets one
  neutral framing line in the text, as in the sample topic; the worldview checker confirms it.
- Greek Wikisource edition lines: the edition the page names (Herodotus: *Godleyn laitos (1920)*), else *laitosta ei
  nimetä Wikisource-sivulla*. Greek page URLs may stay in Greek letters (fewer counted words); parentheses still
  percent-encoded.
