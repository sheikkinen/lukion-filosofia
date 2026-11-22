# Brief 002 (FI1 content): judgement

**Judge**, 2026-11-22. I wrote nothing in this project. Sources for this ruling: `prompts/002-fi1.md`, `CLAUDE.md`,
`docs/content-contract.md`, `docs/style-guide.md`, the ten FI1 topics, `data/`, the pages, and my own build
(`lukio-runko build`, FI_TODAY 2026-11-22, output in the scratch folder): **0 errors, 0 warnings**.

## Verdict: accept-with-minors (content workflow)

The ten topics are sound, honest and usable on paper. Every FI1 code is covered by a topic and an exam task. The model
answers are good, and the primary texts match their editions. All open items are small, exact fixes that need no new
check round. Two of them must be fixed before the producer commits: R1 (a contract §B split) and R2 (the `checked_by`
record). This verdict covers the content workflow only. The images part of "Done when" is still open (see below).

## What I read and opened

- **In full:** fi1-01; fi1-03 (group 02–04); fi1-07 (group 05–07); fi1-10 (group 08–10). For each I read the
  boxes, tasks, exam tasks, model answers, scoring and the 45-minute plan. The other six I read only where an open item
  pointed.
- **Edition pages I opened myself (HTTP 200):**
  - Perseus Theaetetus 155d (doc 1999.01.0171): the Greek appears word for word, and the page names Burnet, OUP 1903.
    So 0171 is the right id, and the curriculum checker's 0172 concern is resolved. The translation is faithful.
  - en.wikisource *Philosophical Essays*, Essay 4: Hume's bread passage matches exactly, and the "Body" point below
    is confirmed.
  - el.wikisource *Encheiridion*: fetched. Topic 07's Greek and translation are faithful.
- **Faithful from my own Greek and English reading:** Metaphysics 982b12–17 and 1011b25–27, Prior Analytics 24b18–20,
  Hume VIII ("By Liberty, then…"). All 45-minute plans I read keep the goal task whole.

## Rulings on the final recheck's open items

| # | Item | Real? | Blocks? | Ruling |
|---|---|---|---|---|
| 1 | 03 K3 split 3+7+5+15 (curriculum and pedagogy, one item) | Real | **Yes, before commit** | Contract §B lists four splits; this is not one of them. The writer's summary claimed 3+6+6+15, but the file has 3+7+5+15 (front matter line 33, heading, parts b/c at lines 193/195, scoring at 306/308). Change it to 3+6+6+15. In b, take 1 p off the piiloperuste points; in c, add 1 p (for example, "Aaro's point is a new reason against K"). Also update `parts`. No addendum. |
| 2 | 04 *Sofistiset kumoamiset* box: hedged reference, no edition | Real | No | Chapter 1 is an allowed traditional reference (§A), and the Greek was verified on the page. Topics 03 and 07 have the same "page names no edition" line, so this is consistent. But the hedge in the box and in `ref` reads badly. Write "luku 1 (Bekker 164b25–27)" if checked against a Bekker-numbered edition; otherwise just "luku 1". Drop the explanation of the page's markers. |
| 3 | 07 line 322: "aineistoa 2" sentence, 4 p cap | Real (wording) | No | "aineistoa 2" is a deliberate material name, not a stray digit, but it is easy to misread. Write "Jos b-kohta ei käytä aineistoa 2 (Humen tekstiä), …". The 4 p cap is three quarters of 6 rounded down, which is consistent with the 750-character part rule, so keep it. |
| 4 | 10 Hume box: "Body" → "ruumis" | Real | No | Confirmed on the page: in Hume, "Body" means the bread as a physical thing. Change it to "kappale, jolla oli tietyt aistittavat ominaisuudet". K1's excerpt omits this sentence ("– –"), so only the box changes. |
| 5 | 02 "Kuka oli Sokrates?": three facts with no linked page | Real | No | The contract requires a dated link for every fact. These are textbook facts, but the rule applies. Add the SEP *Socrates* entry (opened, dated, in `official_links` and `linked_materials`) or cut the sentences. |
| 6 | 01 line 24: "hänen oppilaansa Aristoteles" | Real | No | Same rule. The simplest fix is to drop "hänen oppilaansa". |
| 7 | 03 K3 (pedagogy duplicate of #1) | Real | Yes | Same as #1. |
| 8 | 08 K3 a: statement (1) keyed as empirical only | Real | No | The key is debatable, and the model's own part b uses the sentence the other way. In the scoring, accept either classification when it is justified (for example, "laskettuja omenia" makes it empirical; the arithmetic reading makes it a relation of ideas). |
| 9 | 09 Tehtävä 2 step 4: dream doubt not on the page | Real | No | A student working alone has nothing to answer from. Add one sentence on the dream doubt to Opiskelijalle (watch the 600-word limit; 09 is near it), or drop the step. |
| 10 | 07 K3 b model: "vankina eikä kahleissa" | Real | No | It is in Hume's Section VIII ("not a prisoner and in chains"), but not in Aineisto 2, and the task says to use Aineisto 2. Cut it, or label it "(Hume jatkaa tekstissään…)" with no points depending on it. The scoring bullets do not name it, so this is model text only. |
| 11 | 05/06 link text "SEP, luku 3.4" | Real | No | Both topic 05 (Wittgenstein link) and topic 06 line 85 have "[SEP, luku 3.4]". Rename to "SEP" or "SEP, osio …" in words. |

**Earlier rounds, checked as fixed:** the idealism argument and the dualism defender's reply (06); the Yle tag page
retitled (materials.yaml); the Personal Identity link no longer claims Theseus; the Popper SEP link in topic 10; the
Wittgenstein and Berkeley SEP links. Still open as optional minors: the "ei syö koulussa" ad hominem example (04),
the closing of 06 K1, and "Parit valitsevat kannan" in 06/07 (now softened by "vaihdetaan").

## Additional item found by the judge

| # | Item | Blocks? | Ruling |
|---|---|---|---|
| R2 | All 17 `primary_texts` rows still read `checked_by: "odottaa: lähteiden ja käännösten tarkistaja"` | **Yes, before commit** | The sources checker opened every edition page and back-translated every box (its report). The record was never updated, so the internal Done-when line "every translation checked" is false on file. Set the rows to "lähteiden ja käännösten tarkistaja 22.11.2026" after the #4 fix. For the 04 box, do it after #2. The field is not rendered on the site. |

## Done-when, line by line

| Line | Ruling |
|---|---|
| The site builds locally | **Met.** 0 errors, 0 warnings in my build. The Pages workflow has `TZ: Europe/Helsinki`. |
| Ten FI1 topics, each with a primary text in the original and in Finnish | **Met.** Ten topics, 17 boxes. Every original sits in a `lang` span, and every translation is labelled "suomennos: sivusto". |
| Exam-style tasks with model answers | **Met**, apart from R1. There are 30 tasks across the §B formats, and each model answer has a scoring guide and the fixed YTL line. |
| Linked materials | **Met.** They come from `data/materials.yaml` with their licence class and are mirrored in `official_links`. |
| Pictures | **Not met.** `site-src/img` is empty and no page names a picture. This is the images workflow's job, which has not run yet. |
| Every FI1 code covered | **Met** (build coverage, plus the curriculum checker's script). |
| Every translation checked against its original | **Met in substance, not on record.** See R2. |
| Checks passed or named | **Met.** The four checks ran, one fix round followed, and the open items are named here. |
| The judge accepts | **Accepted with minors** for the content workflow. The brief as a whole closes only after the images judge. |

## Remaining items

1. R1: 03 K3 split to 3+6+6+15 (before commit).
2. R2: `checked_by` filled in on all 17 rows (before commit).
3. #4: 10 "ruumis" → "kappale".
4. #2: 04 reference line without the hedge.
5. #5, #6: dated links (or cuts) for the Socrates facts (02) and "oppilaansa" (01).
6. #8, #9, #10: the 08 K3 a key, the 09 step 4 dream sentence, the 07 K3 b model sentence.
7. #3, #11: 07 scoring wording; "SEP, luku 3.4" link text in 05 and 06.
8. Images workflow (pictures named in page text); then the producer's local commit.
9. Human review: no filosofia teacher or Greek/Latin reader yet (`review_status: none`).

## For the operator

- The FI1 text content is accepted with small fixes. The site builds cleanly with ten topics.
- Two fixes come before the commit: one exam split in topic 03, and marking the translations as checked.
- Every translation I opened matches its original; one word in topic 10 needs changing.
- Pictures are not made yet. That is the next workflow (budget about $1).
- A filosofia teacher and a Greek reader have not reviewed anything yet. Recommended before publishing.

## Minors and images

**Judge**, 2026-11-22, final ruling after the fix and images rounds. I wrote nothing I rule on. My own build
(`lukio-runko build`, FI_TODAY 2026-11-22, scratch folder): **0 errors, 0 warnings**. Topic files are 420–447 lines;
the only files over 500 lines are the two written exemptions (`tools/package-lock.json`,
`docs/research/2026-11-22-scouting.json`). No local path, key or private e-mail found in content, data or docs.

### Verdict: accept-with-minors (brief 002 as a whole)

Every earlier item (R1, R2, #2–#11) is fixed in the files. All 9 diagrams and all 12 illustrations exist and sit on
their pages; I opened every SVG and all 12 pictures, and looked at the screenshots in `tmp/shots-fi1/` (front, FI1,
topics 01, 05, 09; 375 px and desktop; light and dark). Two small items remain; neither needs a new check round.

| # | Item | Real? | Blocks? | Ruling |
|---|---|---|---|---|
| R1 | 03 K3 split | Fixed | – | 3+6+6+15 in `parts`, heading, parts a–d and scoring. |
| R2 | `checked_by` | Fixed | – | All 17 rows read "lähteiden ja käännösten tarkistaja 22.11.2026". |
| #2–#11 | Earlier minors | Fixed | – | 04 ref "luku 1"; 10 "kappale"; 01 Aristotle SEP link; 08 K3 a accepts both readings; 09 dream sentence on the page; 07 "vankina" cut and "aineistoa 2 (Humen tekstiä)"; 05/06 "SEP: Wittgenstein", "SEP: Descartes". |
| S1 | 02 line 56: "Tunnemme hänet pääasiassa Platonin dialogeista" cited to SEP *Socrates* | Real | **Yes, before commit** (one sentence) | The page says all information is second-hand (Aristophanes, Xenophon, Plato) and that philosophers usually privilege Plato's account; it does not say "mainly". Reword to what the page states, e.g. "Tiedämme hänestä vain muiden kirjoituksista (Aristofanes, Ksenofon, Platon), ja filosofit ovat yleensä nojanneet eniten Platonin dialogeihin." Keep the link sentence. |
| I1 | `il-fi1-04-patevyys-ja-virhepaatelmat.webp` | Real (I opened it at full size) | No; before publishing | The sky is an inset pale-blue rectangle on off-white: a framed panel, unlike the other 11, which fill the frame. Its run-log entry still has the old prompt without the full-bleed line. Redo once with `--redo` and a scene that fills every edge (one call, $0.0336). |
| G1 | `data/images.run.yaml`: 19 lines for 12 ids | Not a defect | No | §F says "the newest run-log line's hash must match the file", so earlier lines per id are expected history. The newest line matches the file for all 12 ids (I checked the hashes). Keep the log append-only; do not delete lines. |
| P1 | "Each picture is named in its page's text" | Met for diagrams | No | All 9 diagrams are named ("kaavio tämän osion lopussa"). The 12 scenes are decorative headers with empty alt; naming them in the text would turn them into content. I rule the brief line met. |
| C1 | CLAUDE.md rule 9 and contract line-limit clause edited in place by a fix agent | Real (process) | No | The contract says changes go in a dated addendum. The producer should restate the exemption as a dated addendum, or the operator accepts the in-place edit. |

**Done-when, final:** site builds (met); ten topics with original and Finnish boxes (met, 17 boxes); exam tasks with
model answers (met; R1 fixed); linked materials (met; the SEP *Socrates* link is in `official_links` but not yet
mirrored in `data/materials.yaml`, optional); pictures (met: 9 diagrams, 12 scenes, 0 of up to 5 artworks, which is
allowed; I1 open); every FI1 code covered (met, build coverage); every translation checked (met, now also on record);
checks passed or named (met, named here); the judge accepts (accepted with minors S1, I1, C1).

### Spend

Image run log: 19 nano-banana-2.1 calls × $0.0336 = **$0.6384** (12 kept pictures $0.4032; 7 regenerations $0.2352).
Under the $1 brief cap. The I1 redo would bring it to $0.672. Shared image grant: about $0.96 earlier on the sibling
sites plus $0.64 here, about $1.60 of €10.

### Primary-text rows that may stay marked checked

All 17 rows. The sources checker re-opened the three changed boxes (04 *Sofistiset kumoamiset* luku 1, 10 Hume IV
osa II, and the 09 dream sentence after the Meditatio I box) and found them faithful; the other 14 boxes are
unchanged since their check.

### Remaining

1. S1: reword the Socrates sentence in 02 (before commit).
2. I1: redo `il-fi1-04` full-bleed, check it at full size, append its run-log line.
3. C1: dated addendum for the 500-line exemption (or operator accepts).
4. Optional: mirror the SEP *Socrates* link in `data/materials.yaml`; the three earlier optional minors (04, 06, 06/07).
5. Producer's local commit; publishing waits for the operator.
6. Human review: no filosofia teacher or Greek/Latin reader yet (`review_status: none`).

### For the operator

- FI1 is accepted with small fixes: ten topics, translations checked, 9 diagrams and 12 pictures, clean build.
- One sentence about Socrates in topic 02 must be reworded to match its source before the commit.
- One picture (topic 04, the bridge) looks framed; one redo costs about 3 cents. Images so far cost $0.64.
- A filosofia teacher and a Greek reader have not reviewed anything yet; recommended before publishing.
