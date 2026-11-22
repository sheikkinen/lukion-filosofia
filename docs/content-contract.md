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
