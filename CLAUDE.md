# CLAUDE.md — lukion-filosofia

A free, public website for filosofia in Finnish general upper secondary school (lukio), following the national core
curriculum LOPS 2019. Like the opinto-ohjaus and terveystieto sites (`sheikkinen/lukion-opinto-ohjaus`,
`sheikkinen/lukion-terveystieto`), each topic works as a stand-alone lesson for the teacher and as a self-study step
for the student. The site is in Finnish, licensed CC BY 4.0, and built by the shared engine `lukio-runko`. The first
compulsory module is the intermediate target; the other modules follow.

The process is the same as the sibling sites': briefs written before the work, research by a fan-out plus a critic, a
content contract, separate checkers, and a judge outside the author.

## The one law

Normalize at the boundary. Every topic is written to the content contract, its curriculum references are codes
resolved from ePerusteet, every quotation names its work, passage and source edition, and every translation says who
translated it.

## Roles

- **Operator** (the human) decides scope, look, cost (over €5) and publishing. Questions only where no safe default
  exists; defaults go into the brief.
- **Producer** (the long session) writes the briefs, runs the workflows and reports.
- **Builders, checkers, judge:** workflow agents. Builders own separate files; checkers and the judge wrote nothing
  they check.
- **Human reviewers** (recommended): a filosofia teacher (curriculum, exam tasks) and, for the translations, a reader of
  the source language (Greek, Latin, German, French, English).

## Rules in force

1. **Written-before.** Every brief is committed before its work; a research brief writes its expected answer first;
   changes go in an addendum.
2. **Decision grades:** `O` operator, `A` committed file or page read, `M` model-only.
3. **Curriculum fidelity:** every topic cites the FI objectives and content it serves; nothing is presented as
   required by the curriculum unless it is.
4. **Primary texts, public domain first.** Older philosophical works whose authors died more than 70 years ago are
   public domain in their original language. The site links the original text at an open source (Perseus,
   Wikisource, Project Gutenberg, the Latin Library, Internet Archive and others) with the passage reference
   (Stephanus, Bekker, book and section) and the read date.
5. **Translations.** A quotation shown in Finnish is either the site's own translation from the public-domain
   original, labelled "suomennos: sivusto", or a public-domain Finnish translation, named with its translator and
   year. Modern translations still in copyright are never copied; at most they are named as reading tips. Every own
   translation is checked against the original by an agent who did not make it.
6. **Existing materials are linked, not copied,** with their publisher and licence class: open (CC BY or CC BY-SA),
   link-out (all rights reserved), or excluded. No text, pictures or exam tasks are copied from publishers, YTL or
   other sites.
7. **Judge outside the author.** Look questions end on the operator's answer.
8. **Diary after every brief,** with a `**Seed:**`.
9. **Code limits** as in the engine: no file over 500 lines, ruff clean, fast tests with no network.

## Content rules

- **Teach thinking, not positions.** Pages present arguments and their critics fairly; tasks ask the student to
  analyse and argue, never to adopt a view. Assessment never targets the student's own beliefs, religion or values.
- **Respect for every worldview,** religious and non-religious. No mockery of beliefs, no political advocacy.
- **Sensitive themes** (death, suicide in ethics, euthanasia, violence in political philosophy) follow the sibling
  sites' safe-messaging rules: no methods, a help box with youth services, no prompts asking for personal disclosure.
- **Students' privacy:** no accounts, analytics or forms; progress and notes only in the browser.

## Standing limits

- **Money:** €0 metered, apart from images within the existing image grant (the €10 granted on the opinto-ohjaus site,
  shared by the sibling sites).
- **Publishing:** the target is a public GitHub Pages site. The repository stays local until the operator says to
  publish.
- **Public hygiene:** never commit a key, a local path, a personal e-mail or personal names of private individuals.
  Commits use the GitHub noreply e-mail. Workflow scripts take the project folder as a required argument.
- **Models:** a script for building; Haiku for rule-based checks; Sonnet for research, writing and checks; Opus for
  design, translation review and the judge.
