# Brief 003 (FI2 content): judgement

**Judge**, 2026-11-22. I wrote nothing in this project. Sources for this ruling: `prompts/003-fi2.md`, `CLAUDE.md`,
`docs/content-contract.md`, `docs/style-guide.md` (sections 1–16), the ten FI2 topics, `data/`, the pages, and my own
build (`lukio-runko build`, FI_TODAY 2026-11-22, output in the scratch folder): **0 errors, 0 warnings**.

## Verdict: reject (this round; one targeted fix round, then re-judge)

The substance is sound. The site builds, every FI2 code is covered, all 18 primary-text boxes match their editions and
are marked checked, and the sources check's earlier must-fix items are fixed in the files. But the final recheck left
24 open items, and I confirmed every one in the files. Several are more than minors: one task misreports a primary
text (09), one model answer is wrong about its own material (10 K2), one page breaks contract §D (06), and 15 of 30
tasks break the style guide's five-step limit (up to 11 steps). The fix round split compound steps and so pushed the
step counts up. Fixing this changes step numbers that the Eriyttäminen sections and lesson plans refer to, so a pedagogy
recheck must follow. That is a fix round, not a list of minors. No rewrite is needed. The sources and translations check
does not need to run again unless a box changes.

## What I read and opened

- **In full:** fi2-01 (sample); fi2-03 (group 02–04: boxes, tasks, exam tasks, plans); fi2-06 (group 05–07, every
  line); fi2-09 (group 08–10: Opiskelijalle, tasks, exam tasks, K1 model). I read the other six where an item pointed.
- **Edition pages I opened myself (HTTP 200):** korpora.org AA IV 421 and 429. Kant's lines 6–8 and 10–12 are word for
  word on the page, and line 13 ends the quoted sentence before the suicide example at line 14. Both translations
  are faithful. Perseus Euthyphro 10a (doc 1999.01.0169): the Greek is exact, the page names Burnet, OUP 1903, and
  the translation is faithful. Econlib (Bentham) returned 403 to me, so I did not re-read it. My ruling on #7 rests
  on the box's own quoted English, which is enough.
- **Step counts** (my script, numbered lines under each task): 01, 05, 06 and 07 have 5/5/5. 02: 7/8/9. 03: 8/6/8.
  04: 6/8/5. 08: 8/8/11. 09: 5/9/11. 10: 7/6/9.
- No FI2 picture exists yet (`site-src/img` and `data/images*.yaml` have no fi2 entries).

## Rulings on the final recheck's open items

| # | Item | Real? | Blocks? | Ruling |
|---|---|---|---|---|
| 1 | 02 steps 7/8/9; T3 step 9 holds three actions | Real | Yes | Cut each task to at most 5 single actions. Move the metaethics content of T3 step 9 to Pohdinta or drop it. |
| 2 | 03 steps 8/6/8 | Real | Yes | Same fix. |
| 3 | 04 T1 6 steps, T2 8 steps | Real | Yes | Same fix. |
| 4 | 08 steps 8/8/11 | Real | Yes | Same fix. The goal task (T3) has 11 steps in 25 min. |
| 5 | 09 T2 9 steps, T3 11 steps | Real | Yes | Same fix. Merge the question–answer–critique pairs in T3 into one step per theory. |
| 6 | 10 steps 7/6/9 | Real | Yes | Same fix. |
| 7 | 09 T2 step 3: "Benthamin kolme testiä (järki, puhe, kärsiminen)" | Real | Yes | The quoted box itself says the question is *not* reason or talk but suffering, so the step contradicts it. Use the checker's wording ("…ja mikä niistä ratkaisee Benthamin mukaan"). |
| 8 | 06 `safety_flags: []` with a death content_note and youth help box | Real | Yes | Contract §D pairs the note and box with a flag. Set `safety_flags: [death_suicide]`. Keep the help box. |
| 9 | 02 pedagogy duplicate of #1 (goal T2, 8 steps) | Real | Yes | Covered by #1. The 45-min plan must still run T2 whole. |
| 10 | 03 T2 is 25 min; the 75/60 plans give 20 + 5 debrief | Real | Yes (small) | Make them agree. The simplest fix is to set the task to 20 min, so the self-study line and all three plans match. |
| 11 | 04 "Hänen mukaansa" with no antecedent | Real | Yes (one word) | Write "Aristoteleen mukaan". |
| 12 | 04 T2 step 7 "kolmannen kohdan" points to the wrong step | Real | Yes | Fix the reference while trimming (#3). |
| 13 | 04/05/06/08 self-study path skips the case task | Real | No | The main path never practises Osaan 4–5 in these topics. Swap: make the case task (T3) part of the path and make T2 optional, or add K3 to the path. Recommended, because self-study is a stated use of the site. |
| 14 | 05 "koeeseen", "Heikkous on kaksi", "teko-utilitarismin" | Real | Yes (typos) | Write "kokeeseen", "Heikkouksia on kaksi", "tekoutilitarismin". |
| 15 | 05 K1 a): the example restates the definition | Real | Yes (one sentence) | Give a concrete case, for example a donation that helps more people than another. |
| 16 | 06 K1 c) bands 10/8/5/3/0, anchors 3/5/8 | Real | Yes | Style guide §9 fixes them at 10/7/5/2/0 with anchors 2, 5 and 7. Correct the table and the anchor line. |
| 17 | 06 T3 and K3 lack "Erittele tilanteen eettiset kysymykset" | Real | No | Section 16 asks for it in the ethical-analysis template. Make T3 step 1 "Erittele…" and fold the maxim into step 2. Optional for K3, whose a) already serves. |
| 18 | 06 student text points to the death example (box reference line, Apua ja tukea) | Real | Yes | Telling a young reader where the passage is defeats the reason for avoiding it. Drop the sentence after the box reference line. In Apua ja tukea use the generic help wording. Keep the warning in Valmistelu (teacher only) and keep the content_note neutral, e.g. "Sivulla käsitellään velvollisuutta ja ihmisarvoa. Lopussa on tietoa avusta." |
| 19 | 08 pedagogy duplicate of #4 | Real | Yes | Covered by #4. |
| 20 | 08 K3 shares the name "Kaksi työtarjousta" with T3 but is about study places; "arvioosi"; tangled case | Real | Yes | Rename K3 (e.g. "Kaksi opiskelupaikkaa"), write "arviosi", and simplify the case to one promise and one conflict. |
| 21 | 09 T2/T3 pedagogy duplicate of #5 | Real | Yes | Covered by #5. |
| 22 | 10 steps (duplicate of #6); 11-sentence Locke/Wollstonecraft paragraph; 09 paragraphs of 7–8 sentences | Real | Steps yes; paragraphs no | Split the 10 paragraph under two small headings (Locke; Wollstonecraft). Shorten the 09 paragraphs if they are touched. |
| 23 | 10 K2 model: "Aaro ei sano tätä", though his third sentence says it | Real | Yes | Aaro's third sentence states that any limit fails to respect the right. Redo a): premisses 1 and 3 explicit. In b), name the unstated premiss as "a right that exists may not be limited at all" (absoluteness), or say that sentence 3 *is* the doubtful premiss. Fix the 6/4 point split to match. |
| 24 | 09 K2 model: ungrammatical sentence; horse/dog/infant point not in the material | Real | Yes | Rewrite the sentence. Either cut the infant comparison or label it "(Bentham jatkaa alaviitteessään – –, ei aineistossa)" with no points depending on it. |
| 25 | No `monivalinta` in FI2 (§8 "across the module every format appears") | Real | No | This is a style-guide rule, not a contract rule, and Done-when only needs "exam-style tasks". The producer either records in a dated contract addendum that FI2 does not carry monivalinta (FI1 has two), or a later brief adds one. Do not add a fourth task without a brief. |

**Earlier must-fix items confirmed fixed in the files:** FI2.t1 removed from 08 K2 and 09 K1 codes; the Yle note and
link sentence (02, materials.yaml); Searle and "Platonin oppilas" handled; 07 OPH section claim; 10 Finlex examples;
09 footnote "keskivaiheilla" and the Econlib redirect URL; Locke elision and the creation sentence; Mill paragraph
numbers (kappale 2 and 6); all 18 `checked_by` rows filled ("lähteiden ja käännösten tarkistaja 22.11.2026");
oral argument step in 01's plans.

## Additional items found by the judge

| # | Item | Blocks? | Ruling |
|---|---|---|---|
| J1 | 06 Apua ja tukea types "116 111" after the link | No | Style guide §12 says numbers are linked, never typed. Drop the bare number (topic 07 has the same pattern; check it). |
| J2 | 06 K1 a) and b) are 5 p parts without "Kirjoita enintään 750 merkkiä" | No | Contract §B gives the limit for parts under 10 p. Add it to both, and check the other argumentin-analyysi tasks. |
| J3 | Step trimming will change step numbers | Yes, with #1–#6 | The Eriyttäminen "Helpompi polku" lines and lesson plans cite step numbers (e.g. 06 "Tehtävässä 3 kohdat 1, 2 ja 4"). Update them in the same edit. |
| J4 | FI2 contract additions live only in style-guide §16 | No | The contract wins over the style guide. The producer should restate §16's sensitive-theme and template rules as a dated contract addendum. Agents do not edit the contract in place. |

## Done-when, line by line

| Line | Ruling |
|---|---|
| Ten FI2 topics on the site | **Met locally.** Build clean, ten topics, order 11–20. Not yet live (commit and push wait). |
| Each with a primary text in the original and in Finnish | **Met.** 18 boxes. Each has a `lang` span and a "suomennos: sivusto" label. I checked three myself. |
| Exam-style tasks with model answers | **Met in form, not yet in quality.** 30 tasks with scoring guides and the fixed line. Items #14–#16, #20, #23 and #24 are errors in tasks or models. |
| Linked materials | **Met.** Taken from `data/materials.yaml` and mirrored in `official_links`. The Yle note is corrected. |
| Pictures | **Not met.** No FI2 picture or image record exists. That is the images workflow's job, and it has not run. |
| Every FI2 code covered | **Met** (build coverage; the t1 mismatch is fixed). |
| Every translation checked against its original | **Met**, on record in all 18 rows. |
| Checks passed or named | **Met as named.** The four checks ran and their open items are named and ruled above. Curriculum and pedagogy did not pass. |
| The judge accepts | **Not yet.** Rejected for this round. Re-judge after one fix round. |

## Remaining items

1. Trim every task to at most 5 single actions in 02, 03, 04, 08, 09 and 10 (#1–#6), and update step references (J3).
2. 09 T2 step 3 Bentham wording (#7). 09 K2 model sentence and infant comparison (#24).
3. 06: `safety_flags: [death_suicide]` (#8). Remove the student-facing pointer to the death example (#18). Bands 10/7/5/2/0 (#16).
4. 10 K2 model answer redone (#23). 08 K3 renamed and simplified, plus "arviosi" (#20).
5. Small text fixes: 03 task time (#10), 04 "Aristoteleen" and the step reference (#11, #12), 05 typos and K1 a example (#14, #15).
6. Recommended: self-study path includes the case task (#13); 06 "Erittele" step (#17); 10/09 paragraph splits (#22); J1, J2.
7. Producer: a dated contract addendum for FI2 (J4) and for the monivalinta decision (#25).
8. Then a pedagogy and curriculum recheck of the changed files, re-judge, the images workflow, and the producer's local commit.
9. Human review: no filosofia teacher or Greek/Latin/German reader yet (`review_status: none`).

## For the operator

- FI2's ten topics build cleanly, and every translation I opened matches its original.
- Not accepted yet: many tasks are too long (up to 11 steps), and a handful of model answers and task lines are wrong.
- One page (Kant) needs its sensitive-theme flag set and a student-facing pointer removed.
- One fix round should close it. No pictures are made yet, and no teacher has reviewed it.
- Nothing is committed. Publishing waits for your word.

## Fix round and images

**Judge**, 2026-11-22, second ruling. I wrote nothing. My build (FI_TODAY 2026-11-22, scratch output): **0 errors,
0 warnings**. Read again in full: fi2-02, fi2-05, fi2-08. Opened at full size: all 5 `dg-fi2-*` SVGs (rendered at
343 px), all 11 `il-fi2*` webps, all 5 `pd-fi2-*` webps, and the screenshots in `tmp/shots-fi2/`.

### Verdict: reject (small; re-judge only the nine items below)

Every item of my first rejection is fixed in the files: all 30 FI2 tasks have 5 steps (my script), the 06 flag, note,
pointer and bands, 09 Bentham step, 10 K2 (absoluteness reading), 08 K3, the typos, the self-study swaps, J1, J2, and
the producer's FI2 addendum (J4, #25). The pictures are good. But **none of the nine final open items was fixed**, and
two break written rules: `data/materials.yaml` is 605 lines (contract addendum: split any non-exempt file), and the Kant
record and published caption misstate the Commons Artist field (contract §F). The redo round made the Kant record
worse: the earlier screenshot shows the correct Stägemann wording, the current build shows "anonymous painter".

| # | Final open item | In the files now | Ruling |
|---|---|---|---|
| 1 | 05 K2 task lacks "Käytä vastauksessasi aineistoa." | Missing (line 194); deduction at 280 | Add the sentence. |
| 2 | 08 K3 b) deduction without a use-the-case line | Missing (175); deduction at 304 | Add "Käytä tapauksen tietoja." to b). |
| 3 | 04 "keskikohta liikaa ja liian vähän välillä"; glossary line | Unchanged (425, 432) | Use "liiallisen ja liian vähäisen välissä" in both. |
| 4 | 02 "ei sanoa" | Unchanged (242) | "ei sano". Also 218: "pitävät valehtelua väärin" → "vääränä". |
| 5 | 08 T1 "Hän kysyy Noorilta" | Unchanged (84) | "Sami kysyy Noorilta". |
| 6 | `data/materials.yaml` over 500 lines | 605 lines | Split or shorten; the engine must still read it. |
| 7 | Kant `work`/`artist_death_year` (sources) | "anonymous painter, circa 1790" (449-450) | Record the Artist field as the page states it. |
| 8 | 11 `il-fi2*` entries lack `alt` | No `alt`; built pages `alt=""` | Add one Finnish sentence each, from the opened picture. |
| 9 | Kant block, credit line, low-quality tag (images) | Same as 7; no note; webp visibly soft | Same fix as 7, plus a note on the "Low quality" tag, or swap the portrait. |

**Pictures.** Diagrams: real text, legible at 343 px, labels match the topics. Illustrations: calm, adults only, no
text or signs, nothing against §16 (05 redo has adult figures only). Artworks: right sitters, all under 200 KB; Kant is
soft and upscaled (item 9). Every newest run-log hash matches its file. No path, key or e-mail found in content or data.
The screenshots predate the redo round (they show the old Kant caption and an old 06 T1 step 4); retake them after
the fix.

**Spend.** FI2 images: 12 paid calls × $0.0336 = **$0.4032** (11 illustrations and one redo of 05), within the brief's
$1. The run log totals $1.0752 for all 32 calls on this site, inside the shared €10 grant. Diagrams and artworks: $0.

### Done-when, line by line

| Line | Ruling |
|---|---|
| Ten FI2 topics on the site | Met locally; not live (commit and push wait). |
| Primary text in the original and in Finnish | Met (18 boxes, unchanged since my first check). |
| Exam-style tasks with model answers | Met, apart from items 1, 2 and 4. |
| Linked materials | Met in the pages; the data file breaks the line limit (item 6). |
| Pictures | Met in substance: 5 diagrams, 11 illustrations, 5 artworks; items 7-9 open. |
| Every FI2 code covered | Met (build coverage). |
| Every translation checked | Met (18 `checked_by` rows). |
| Checks passed or named | Met as named; this table names what is left. |
| The judge accepts | Not yet. Accept once items 1-9 are fixed and the build is clean. |

### Remaining

1. Items 1-9 above, then a rebuild (0/0), files at most 500 lines, and new screenshots.
2. Producer: local commit; publishing waits for the operator.
3. Human review: no filosofia teacher or source-language reader yet (`review_status: none`).

### For the operator

- FI2 is close: all earlier problems are fixed, and the pictures look good.
- Nine small items are still open: five Finnish wording fixes, one data file too long, picture alt texts, and Kant's portrait credit.
- FI2 pictures cost $0.40, under the $1 limit.
- Nothing is committed. Publishing waits for your word.

## Final recheck

**Judge**, 2026-11-22, third ruling. I wrote nothing. Build (scratch output): **0 errors, 0 warnings**. Opened the Kant
Commons page, five `il-fi2*` pictures plus the Kant webp at full size, and retook `/fi2/` and the Kant page at a true
375 px viewport (scrollWidth 375, no sideways scroll) as `tmp/shots-fi2/r-index-375-light.png` and `r-06-375-light.png`.

| # | Item | On disk now | Ruling |
|---|---|---|---|
| 1-2 | 05 K2; 08 K3 b) | "Käytä vastauksessasi aineistoa." (05:194); "Käytä tapauksen tietoja." and "vaikuttaa arvioosi" (08:175) | Fixed. The producer is right: the verb takes the illative. |
| 3 | 04 keskikohta | "liiallisen ja liian vähäisen välissä" (425, 432) | Fixed. |
| 4 | 02 "ei sano", "vääränä" | 242 and 64/218 changed | Fixed. Minor: 218 still says the sentence "sisältää sanan väärin"; it now contains "vääränä". |
| 5 | 08 T1 | "Sami kysyy Noorilta" (84) | Fixed. |
| 6 | Materials split | 429 + 444 lines; both parse; FI1, shared (8) and excluded (3) equal HEAD after anchors are expanded; 10 FI2 topics, 52 entries, plus 2 shared and 1 excluded | Fixed. Minor: fi2-01's `Nimitys:descriptive_relativism` is not in that topic's `official_links`; "aiheen 20" means fi2-10. |
| 7, 9 | Kant record | `work` quotes the Artist field word for word; date circa 1790, PD tags and 964x1388 match the page; low-quality note added; caption renders the new wording | Fixed. A text `artist_death_year` is acceptable: the page gives no year. |
| 8 | 11 alts | One Finnish sentence each; 03, 04, 08, 09, 10 and the module picture match what they show | Fixed. They stay `decorative: true` and render `alt=""`, as FI1 does. |
| new | 500-line limit | `data/images.yaml` 501 lines, `data/images-illustrations.yaml` 510 (the Kant note and the alts pushed them over) | Breaks the contract addendum. Split both before the commit. |

Earlier screenshots were clipped on the right. Headless Chrome's `--window-size=375` lays the page out wider than
375 px. The new shots set the viewport through Puppeteer and load lazy images first.

**Verdict after final recheck: accept-with-minors**

### Remaining

1. Before the commit: split `data/images.yaml` and `data/images-illustrations.yaml` to at most 500 lines each, then rebuild (0/0). No re-judge needed if `wc -l` and the build agree.
2. Minors: 02:218 "sanan väärin" → "sanan vääränä"; add the fi2-01 link to `official_links` or move it to `excluded`; write "aiheen fi2-10" for "aiheen 20".
3. Producer: local commit; publishing waits for the operator. Human review is still `none`.
