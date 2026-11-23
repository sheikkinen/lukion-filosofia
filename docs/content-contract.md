# Content contract: filosofia

**Written before the work.** Producer, 2026-11-22, from the critic's proposal in `docs/research/2026-11-22-scouting.json`
(proposal 6). It extends the terveystieto contract (`sheikkinen/lukion-terveystieto`, `docs/content-contract.md`, with
its addenda), which the shared engine `lukio-runko` v0.1.0 carries. Changes go in a dated addendum.

## Curriculum codes

`data/curriculum.yaml`, written by `lukio-runko fetch-curriculum` from ePerusteet (peruste 6828810; oppiaine FI
6832794; FI1 6833502, FI2 6833503, FI3 6833504, FI4 6833505; names trimmed, the API has trailing spaces). Codes:
`FI.yt1`–`FI.yt6`; `FI1.t1`–`t5`, `FI1.s1`–`s5`; `FI2` 6/6; `FI3` 5/6; `FI4` 6/7.

## What carries over from terveystieto unchanged

The engine formats of its 2026-11-21 addendum: files `content/topics/NN-slug.md` with `module:` in the front matter,
ids `fi1-NN-slug`; exam headings `### K1: Nimi, 25 min (20 p)` with the model answer repeating the heading; one H2
`## Tuntisuunnitelma (75 min)` with H3 plans for 60 and 45 minutes; `linked_materials`, with every non-excluded entry
also in `official_links`; `content_note` as a meta row; the rubric as a section of `content/pages/opetussuunnitelma.md`;
2–4 exam tasks per topic (a fourth only when a brief asks); every C30-style sub-part named in the content points;
every fact a dated link whose page states it; files at most 500 lines; Opiskelijalle 300–600 words (link URLs count).
The Pages workflow builds with `TZ: Europe/Helsinki`.

## A. The primary-text box (Lähdeteksti)

In a topic's text, at most three per topic:

```markdown
**Lähdeteksti: Platon, *Sokrateen puolustuspuhe* 38a**

> <span lang="grc">ὁ δὲ ἀνεξέταστος βίος οὐ βιωτὸς ἀνθρώπῳ</span>

> Tutkimaton elämä ei ole ihmiselle elämisen arvoinen. (suomennos: sivusto)

Platon, *Apologia* 38a, Burnetin laitos (1903), [Perseus](URL), luettu 22.11.2026.
```

- The original is quoted too (it is public domain), one to four sentences, in a `<span lang="…">` (grc, la, de, fr,
  en, da, sv).
- The Finnish is the site's own translation, labelled "(suomennos: sivusto)", or a public-domain Finnish translation
  named with its translator and year, used only after the translator's death year (before 1956) is read and recorded.
- The reference line names the author, the work, the traditional reference (Stephanus, Bekker, AT, section or
  chapter numbers in words or Roman numerals, never "1.7"-style forms, which the engine's date scanner flags), the
  edition named on the page, the open link and the read date. The link is also in `official_links`. Parentheses in
  URLs are percent-encoded.
- No `<div>` wrappers (the engine renders no Markdown inside them).
- The front matter lists each box in `primary_texts: [{author, work, ref, edition, url, read, lang, translation,
  checked_by}]`. `translation` is `sivusto` or "translator year"; `checked_by` names the checking agent's role and
  date.
- Modern translations in copyright are never copied; they may be named as reading tips. Loeb English pages on Perseus
  are not copied either.

## B. Exam formats

The filosofia exam has nine tasks and no A/B/C parts: six 20-point tasks and three 30-point tasks. Headings stay
`### K1: Nimi, N min (20 p)`. Task types (slugs in `exam_tasks`):

- `maarittele-ja-esimerkki`: five concepts × 4 p, 600 characters each;
- `monivalinta`: 20 items × 1 p, with an "En vastaa" option;
- `kasite-essee`: 20 p, no material;
- `aineisto-essee`: 20 p, with required material; if the material is not used, at least 1 p is deducted and the
  answer is capped at 75%;
- `menetelmatehtava`: two of four × 10 p, 1,500 characters;
- `argumentin-analyysi`, `kahden-teorian-vertailu`, `ajatuskoe-arviointi`;
- 30-point tasks in parts (5+5+20, 15+15, 10+20 or 3+6+6+15); parts under 10 p get a 750-character limit.

Model answers carry a scoring guide on osuvuus (relevance, the most important), eheys (coherence) and vakuuttavuus
(persuasiveness), in bands of 0/25/50/75/100% with anchors, plus the fixed line "Pisteytys on sivuston oma
harjoitusohje, ei ylioppilastutkintolautakunnan." Material is self-written and labelled *kuvitteellinen*, or a
public-domain excerpt with its own translation and reference. Never a past YTL task or attachment, reworded or not.

## C. Worldview respect

Arguments are presented with their strongest critics. No mockery of religious or non-religious views, no political
advocacy. Tasks ask the student to analyse and argue, never to adopt a view, and the student's own beliefs are never
assessed. "Both sides" never makes curriculum content look optional.

## D. Sensitive themes

Death, suicide in ethics, euthanasia, political violence and the death of Socrates: `safety_flags` from
{`death_suicide`, `violence`}, a `content_note`, an `## Apua ja tukea` section with youth services whose own pages say
they serve young people, no methods, and no prompts asking for personal disclosure. David's *Death of Socrates* is not
used on pages about the ethics of death. Ordinary pages keep a short `## Apua ja tukea` (a study-help line), because the
engine expects the section. The terveystieto health rules (figure scanner, medical advice) do not apply.

## E. Checks

Checkers wrote nothing they check: curriculum; sources and translations (opens each edition page, confirms the passage
at its reference and the translation, back-translates into English, never the translator); worldview and neutrality;
pedagogy and exam tasks. The data owner joins every fix round, and a front-matter key check runs after it.

## F. Images

nano-banana-2.1 scenes with no text and no likeness of real people; Mermaid diagrams with Finnish labels, real-text
SVG, designed at 343 px; public-domain artworks from Wikimedia Commons, committed as webp under 200 KB with the Commons
title, artist and death year, licence tag, read date and the credit "Kuva: Wikimedia Commons, julkinen omaisuus". One
named agent runs the paid image tool. Each picture is checked at full size, and the newest run-log line's hash must
match the file.

## Addendum 2026-11-22: files exempt from the 500-line limit

Written by the producer after the brief 002 judgement. The 500-line limit is for code and prose. Two kinds of data
file are exempt: the generated `tools/package-lock.json` (never hand-edited) and the research data
`docs/research/*.json` (one record per source). Any other file over 500 lines is split.

## Addendum 2026-11-22: FI2 (brief 003)

Written by the producer after the brief 003 judgement.
- The FI2 rules in `docs/style-guide.md` §16 apply to FI2 topics: the ethical-analysis task, the running case
  *Muuttoaamu* in topics 14–16, and the sharpened sensitive-theme rules (Kant quoted only up to AA IV 429 line 13;
  Epicurus on death flagged with a help box; euthanasia and abortion left out of the core unless a brief adds them with
  the law first; no diet moralising; symmetric positions).
- A topic that mentions or points to a passage on death or suicide carries `safety_flags: [death_suicide]`, even if it
  does not quote it.
- FI2 carries no `monivalinta` task; FI1 has them. The "every format across the module" rule of the style guide is
  met across the site, not per module, until a later brief adds one.

## Addendum 2026-11-22: the shared content guideline (lukio-runko v0.4.0)

This contract now extends the shared guideline in the engine, `docs/content-guideline.md` in sheikkinen/lukio-runko
(v0.4.0, pinned in requirements.txt). In short: every teaching claim, rule or model-answer criterion names its basis
(a curriculum code from the topic's list, a matriculation exam requirement, a cited source or an operator decision) or
is labelled as the site's own framing (*sivuston oma jäsennys*); value questions are written as weighing and model
answers accept any well-argued view; checkers and judges verify claims against their basis, not against this site's
style guide or earlier drafts; and the guideline's watch list of English habits applies. Where this contract and the
guideline differ, the guideline applies until this contract is amended.

## Addendum 2026-11-23: exam formats and sensitive themes (supersedes B and D in part)

Written in round 2 of the basis audit (`docs/review/2026-11-22-basis-audit.md`, items 1, 2 and 4), under the shared
guideline §1 and §4, the norm ledger rows 3 and 4 in lukio-runko, and D-011.

**Section B, as amended.** The task types listed in B (`maarittele-ja-esimerkki`, `monivalinta`, `kasite-essee`,
`aineisto-essee`, `menetelmatehtava`, `argumentin-analyysi`, `kahden-teorian-vertailu`, `ajatuskoe-arviointi` and the
30-point part splits) are the site's own practice formats, not YTL task types. The slugs stay as front-matter values.
Only what an opened YTL page states (the number of tasks, their points, a character limit) is presented to the
student as the exam's format, and always with the link to that page. A Koetehtävät section says that the tasks and
their formats are the site's own; a task whose shape is the site's own carries the line *Sivuston oma tehtävätyyppi:
…* under its heading. Scoring guides do not require a conditional (*ehdollinen*) conclusion; the top level of
vakuuttavuus follows YTL's description of a good answer, and any well-argued conclusion scores the same (guideline §2).
The rest of B (headings, the fixed scoring line, self-written or public-domain material) stands.

**Section D, as amended.** No topic carries an `## Apua ja tukea` section, a help block, a 112 line, a crisis or youth
helpline, a referral to a kuraattori or other wellbeing service, or reassurance of the kind *kysyminen ei ole
heikkous*. No topic carries a content note, neither the front-matter `content_note` nor a note in the text. The
section is no longer required by `subject.yaml`. `safety_flags`, no methods, no case stories, no prompts asking for
personal disclosure and the rule on David's *Death of Socrates* stand. The same applies to the FI2 addendum of
2026-11-22 (Epicurus on death gets no help box) and to the carry-over line on `content_note` above.

## Addendum 2026-11-23: repeated notes are said once (lukio-runko v0.5.1)

Written after the operator's decision on norm-ledger row 5 in lukio-runko (2026-11-23, answering "Decide on the
repeated per-page notes now?": "Remove repeats"): a site-wide fact is stated once on a site page, and topic pages do
not repeat it. The engine pin is raised to v0.5.1, which drops the engine's own per-topic notes. Review record:
`docs/review/2026-11-23-repeat-cleanup.md`.

- **Section B, as amended.** Model answers no longer end in the fixed line "Pisteytys on sivuston oma harjoitusohje,
  ei ylioppilastutkintolautakunnan." A Koetehtävät section no longer opens with a note on the exam structure, the
  site's own formats or the module's coverage of the exam. These are said once on `opetussuunnitelma`, section
  *Arviointi koetehtävissä* (*Kokeen rakenne* with the YTL link, and *Näin mallivastaus on rakennettu*). The per-task
  line *Sivuston oma tehtävätyyppi: …* stays where a task carries it.
- **Exam structure.** The facts `filosofian_koe_rakenne` and `filosofian_koe_vastauksen_arviointi` are removed from
  `data/yearly-facts.yaml` and from every topic's `yearly_facts`; their text is on `opetussuunnitelma`.
- **Worldview and privacy notes.** The reassurances *Sen ei tarvitse olla oma mielipiteesi*, *Voit ohittaa
  kysymyksen…*, *Ketään ei pyydetä kertomaan omaa vakaumustaan…*, *Kukaan ei joudu kertomaan…* and *Opiskelija voi
  puolustaa kantaa harjoituksena…* are said once (`opetussuunnitelma`, *Filosofia lyhyesti*, and `polku`). A topic keeps
  a line naming a private matter specific to it. Section C stands.
- **Lesson and differentiation notes.** *Tehtävät toimivat ilman tulosteita*, licence notes (*link-out-aineistoa*),
  *Lähdetekstien suomennokset ovat sivuston omia*, the generic **Ilman laitetta** and **Tuki** paragraphs, *Koetehtävät
  voi tehdä osissa ilman aikarajaa* and the `school_adapts` list are not repeated per topic; they are on `etusivu`,
  `lahteet`, `opetussuunnitelma`, `polku` and `saavutettavuus`. The labels *suomennos: sivusto* at each quotation stay
  (rule 5).
- **Visual novels.** Each topic keeps its visual-novel link, chapter title, `card_links` entry and `official_links`
  entry; the general sentence about the stories is on `etusivu`.
