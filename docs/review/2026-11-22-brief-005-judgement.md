# Brief 005 (FI4 content): judgement

**Judge**, 2026-11-22. I wrote nothing in this project. Sources for this ruling: `prompts/005-fi4.md`, `CLAUDE.md`,
`docs/content-contract.md`, `docs/style-guide.md` (§1–18), the ten FI4 topics, `data/`, the pages, and my own build
(`python -m lukio_runko build`, FI_TODAY 2026-11-22): **0 errors, 0 warnings**. `subject.yaml` now has `max_order: 40`.

## Verdict: reject (this round; one targeted fix round, then re-judge)

The module is close. The build is clean, every FI4 code is served, and the files run 425–478 lines. Every task has 5
steps. The first fix round dealt with the checkers' must-fix items, and I confirmed each one in the files:
- `max_order` is raised.
- All 17 `checked_by` rows record the sources checker, dated 22.11.2026, and Dilthey carries its OCR caveat.
- The Berkeley tense now reads *olevan*.
- The flagpole and von Wright sentences are gone from 10.
- The HTK title is corrected in data.
- `tenk_hyva_tieteellinen_kaytanto` is referenced in 09.
- The Clifford full stop is in.
- The Kant "tyhjä ruutu" cell and the 06 Aamutähti item are gone.

But **none of the 13 open items from the final recheck is fixed**. I confirmed each one in the files. Two are
factual errors in teaching text (05 Berkeley gloss, 07 empiricism gloss, and the 07 gloss is repeated in the K3 model
answer). Two model answers cannot be followed or misassign criteria (05 K3 b, 07 K3 c). One exam key rejects a
defensible answer that the topic itself invites (04 K3 a). These must not go live. This needs a fix round, not a rewrite.

## What I read and opened

- **In full:** fi4-01, the sample. I read its boxes, Tehtävät 1–3, K1–K3, the models and the 45-minute plan. It is
  sound.
- **One topic per writer group:**
  - fi4-03 (02–04): Peirce and James boxes, Tehtävä 3, K3, 45-minute plan. I also read fi4-04's K3 and model.
  - fi4-07 (05–07): Kant box, Tehtävät 1–3, K3 and model, 45-minute plan. I also read fi4-05's Berkeley box and gloss.
  - fi4-10 (08–10): Hempel and hermeneutics sections, Tehtävät 1–3, the K3 vignette, 45-minute plan.
  - I scanned the step lists of 05–10 with a script.
- **Edition pages I opened myself:**
  - Perseus *Gorgias* 454d and 454e (Burnet). Both Greek strings in fi4-01 match the page exactly after NFC
    normalisation, and the cut is marked. Both translations are faithful.
  - korpora.org AA III 028. Lines 1–6 match the fi4-07 box word for word, including *benöthigte* and *Erkenntniß*.
    The translation is faithful, though *also* is not rendered, which is harmless.
- **45-minute plans** (01, 03, 07, 10): each adds up to 45 and keeps the goal task whole (Tehtävä 3 in 01, 03 and 07,
  Tehtävä 2 in 10).
- **Pictures:** there is no `data/images-fi4.yaml` and no FI4 images. They belong to workflow 3.

## Rulings on the final recheck's open items

| # | Item | Real? | Blocks? | Ruling |
|---|---|---|---|---|
| 1 | 01: termipankki *uskomus* is not in any data file | Real | Yes (§13) | Add it to `data/materials-fi4.yaml` under fi4-01 with its read note (CC BY-SA 3.0 footer read 22.11.2026). |
| 2 | Title and publisher mismatches between topics and data | Real | Yes, small | §13 requires the same title and publisher. The data owner picks one form site-wide and applies it in topics and data: *Wi-Phi* or *Wireless Philosophy* (data/materials.yaml itself says *Wireless Philosophy*), *LOPS* or *Lops*, and the Abitreenit and OPH Logiikka titles. Drop "rev. 2018" in 01, or add it in data. Match 09's HTK title to data exactly. Mechanical work. |
| 3 | Compound steps in 05 T2/1, 06 T2/1, 07 T1/2, T2/1–2, T3/1 | Real | Yes (§6 "one action each") | Confirmed. Split each step. Stay within 5 steps by merging or dropping a later step. Update step numbers cited in Eriyttäminen and the plans (07's plan cites "kohdan 3"). |
| 4 | Compound steps in 08 T2/4–5, T3/1–3; 09 T3/1; 10 T1/4, T2/1–2 | Real | Yes (§6) | Confirmed. Same fix. 09 T1/2 follows the §18 template wording and may stay. |
| 5 | 02 and 07 K3 both open 5 + 5 + 20 with "Selitä … max 750 merkkiä (5 p)" | Real | Yes (§8) | Change the opening of 07 K3 a to *Luokittele* or *Sovella tapaukseen*. Also: 06 and 09 are both 3 + 6 + 6 + 15 and open with a bare question plus 750 characters. Reword one of them (e.g. 09 a: *Luokittele tapaukset …*). |
| 6 | 05 Berkeley gloss (line 75): drops the counterfactual and attributes God to §3 | Real | Yes (fact) | Give both alternatives from §3. Then say that in the *Three Dialogues* Berkeley argues that unperceived things exist in God's mind, citing SEP Berkeley (already linked). |
| 7 | 07 gloss (line 73) "Empiristi vastaa, että sekin on opittu kokemuksesta" | Real | Yes (fact; contradicts fi1-08) | Rewrite as the item says: Hume accepts a priori knowledge of relations of ideas (mathematics, definitions) but not of matters of fact. Mill may be named as a later exception. Cite SEP rationalism-empiricism. **Also fix the K3 b model (line 289)**, which repeats the error ("näennäinen a priori -tieto on opittu"). |
| 8 | 02 S2 line: "Käy sanasta läpi" | Real (line 427) | Yes (typo) | "Käy sanasto läpi". |
| 9 | 03 T3 step 3 garbled, two choices | Real (line 144) | Yes | Use the item's wording: "Kirjoita, tarkoittaako Kimin sana *lähempänä totuutta* sitä, että totuutta on asteita. Selitä." |
| 10 | 04 K3 a: D (poikamies) keyed as necessary only, though T3 disputes it | Real (lines 211, 335) | Yes | Add to the rubric and model: "D kelpaa kumpaan tahansa ryhmään, jos sijoitus perustellaan (sopimus / merkitys)." |
| 11 | 05 K3 b model ties the arguments to the wrong criteria; "ei yksin tee siitä talo" | Real | Yes | Rewrite so each speaker uses the right criterion. Fix the case to "taloa". |
| 12 | 07 K3 c model uses Kant sentences not in the material | Real | Yes | Either add the two sentences to the K3 material with `– –` marks (sources checker to confirm them on AA III 28), or remove them from the model. Removal is simpler. |
| 13 | 06 K3 a wording "Mikä tekstissä käytetty ajattelun väline on kyseessä?" | Real (line 202) | Yes (language) | "Minkä lajin filosofinen väline tekstissä on käytössä? Nimeä se ja kuvaa lyhyesti." Combine with the reword in #5 if 06 is the one changed. |

## Rulings on the Done-when lines

| Line | Met? | Note |
|---|---|---|
| Ten FI4 topics readable on the site | Not yet | The ten files build clean locally. Nothing is committed or pushed (`git status`: up to date with origin), so nothing is on the site. Commit follows acceptance. |
| Each with a primary text in the original and in Finnish | Yes | 17 boxes, 1–2 per topic. I checked 3 against their pages myself. All are in `primary_texts`. |
| Exam-style tasks with model answers | Yes, with fixes | K1–K3 in every topic, each with a scoring table. The model errors in items 7, 10, 11 and 12 must be fixed. |
| Linked materials | Yes, with fixes | All linked materials carry licence classes. Items 1 and 2 must be fixed. |
| Pictures | Not yet | This belongs to workflow 3 (fixes and images). It is not a failure of this workflow. |
| Every FI4 code covered | Yes | The build checks coverage and gives 0 errors. The curriculum check found every objective and content item in a topic and an exam task. |
| Every translation checked against its original by the independent checker | Yes | All 17 `checked_by` rows are recorded by the sources checker. Dilthey's OCR caveat is stated, so the scan image should be viewed before the images round closes. |
| The checks passed or named | Named | Curriculum, sources and worldview each failed round 0. Their must-fix items are fixed. The final recheck's 13 items are open (above). |
| The judge accepts | No | Rejected this round. |

## Remaining items (the fix round)

1. Items 6, 7 and 7b: correct the Berkeley and empiricism glosses, and the 07 K3 b model.
2. Items 10, 11 and 12: the 04, 05 and 07 exam keys and models.
3. Items 3 and 4: split the compound steps in 05–10 (about 18 steps), and update the step references.
4. Item 5: new K3 openings in 07, and in one of 06 or 09.
5. Items 8, 9 and 13: language fixes in 02, 03 and 06.
6. Items 1 and 2: data alignment (the data owner chooses the site-wide forms).
7. After the fixes: rebuild to 0 errors and 0 warnings, check each file is at most 500 lines, then a short recheck
   of these 13 items only, then re-judge.

Minor (no block): 03 K3 aineisto 3 "tee siitä tosi" reads better as "totta". 10 K3 vignette "kävi joella" could be
"kävi kaupungilla" (worldview checker's note). 01 Pohdinta 1 could get neutral wording.

## For the operator

FI4 is not ready yet: ten topics build clean, but 13 checker findings were left unfixed.
Two are factual slips in teaching text (Berkeley and God; what empiricists say about mathematics).
The rest are exam keys, task steps with two actions in one, and title spellings, about an hour of targeted edits.
Translations are all checked; pictures come in the next workflow.
Nothing is committed or pushed.

## Fix round and images

**Judge**, 2026-11-22, second ruling. I wrote nothing I rule on. My own build (scratch output, FI_TODAY 2026-11-22):
**0 errors, 0 warnings**. Longest FI4 topic 487 lines (04); `data/materials-fi4.yaml` 499 lines.
### Verdict: reject (one more short text round, then re-judge)

The fix round closed my 13 items except the parts named below, and the images are done and sound. But **none of the
five final open items is fixed**. I confirmed each one in the files. They are small text edits in 05, 07 and 09.

| # | Final open item | In the files now | Ruling |
|---|---|---|---|
| 1 | 07 K1 a and b: empiricism as "no knowledge independent of experience" | Line 202 "kaikki tieto lähtee kokemuksesta"; line 204 "ei empirismin mukaan ole tietoa, joka olisi täysin riippumaton kokemuksesta". Line 63 also keeps the bare "kaikki tieto lähtee kokemuksesta". | Open, blocks (fact; contradicts line 73 and fi1-08). Limit both to *tosiasioita koskeva tieto*. |
| 2 | 09 K2 model, muddled belief sentence | Line 254 unchanged ("Uskomisen ei tarvitse olla yhtä vahvaa …"). | Open, blocks. Use the item's wording. |
| 3 | 05 self-study: Tehtävä 2 optional yet the low-time task | Line 344 "Tee vain Tehtävä 2"; line 349 "Tehtävä 2 on lisätehtävä". | Open, blocks. Make Tehtävä 2 core (and fix the minutes) or change line 344 to Tehtävä 1 and K1 a–c. |
| 4 | 05 K3 b: Ella's fourth criterion also tied to criterion 2 | Line 290 unchanged ("Kriteeriin 2 sen voi liittää vain suppeasti …"). Case "taloa" is fixed. | Open, blocks. Drop the criterion-2 sentence. |
| 5 | Compound steps | Unchanged: 05 T2/5, T3/3; 07 T2/2, T2/4; 09 T3/1, T3/3. 05 T1/3 ("mitä realisti ja mitä antirealisti") is the same kind. | Open, blocks (§6). One action each, stay within 5, update cited step numbers. |

### What I checked myself

- **Topics read again in full:** 05, 07 and 09 (Opiskelijalle, boxes, Tehtävät, Koetehtävät, models, self-study).
  The 05 Berkeley gloss (both §3 alternatives; God from the *Three Dialogues* via Philonous, SEP) and the 07 line 73
  Hume gloss are now correct. 07 K3 a opens *Luokittele*, 09 K3 a *Nimeä*; 07 K3 c no longer uses outside Kant.
- **Edition pages opened:** CELT Berkeley Principles I §3: the English matches the 05 box word for word, cut marked.
  korpora.org AA III 033 lines 16–20: the German matches the 04 box word for word.
- **Pictures:** all 5 new SVGs (real text, no foreignObject or @font-face, 22–28 KB; viewed rendered at 343 px in
  light and dark, no clipping); 8 of 11 illustrations at full width (01–08): no text, no likeness, calm; all 3 pd-*
  portraits (Leibniz, Berkeley, Bacon) and their credit line on the page. The painted name inscriptions in the
  Berkeley and Bacon portraits are part of public-domain artworks; the no-text rule binds generated pictures. Accepted.
- **Screenshots** in `tmp/shots-fi4/` (module page, 03, 05, 08; 375 and 1366; light and dark): layout holds.

### Spend

FI4 images: 11 × $0.0336 = **$0.3696**, under the $1 cap (the brief's estimate was about $0.50). Run log total, all
sites' images: $1.8144, inside the €10 grant. All 11 newest run-log hashes match their files.

### primary_texts

All 17 FI4 rows carry the sources checker's `checked_by` and may stay checked. Dilthey (10) keeps its OCR caveat
until the scan image is viewed; the recheck confirms the Bacon, Weber and Dilthey edition lines a fixer reworded.

### Done-when lines

| Line | Met? | Note |
|---|---|---|
| Ten FI4 topics readable on the site | Not yet | Build clean; nothing committed or pushed. Follows acceptance. |
| Each with a primary text in the original and in Finnish | Yes | 17 boxes, 1–2 per topic. |
| Exam-style tasks with model answers | Not yet | Items 1, 2 and 4 above are model-answer errors. |
| Linked materials | Yes | Termipankki *uskomus* added; titles and publishers aligned. |
| Pictures | Yes | 11 illustrations, 5 diagrams, 3 portraits, each viewed. |
| Every FI4 code covered | Yes | Build checks coverage. |
| Every translation checked by the independent checker | Yes | 17 of 17; Dilthey caveat as above. |
| The checks passed or named | Named | Five pedagogy and curriculum items open (table above). |
| The judge accepts | No | Rejected this round. |

### Remaining

1. 07 K1 a and b (and line 63): empiricism limited to knowledge of matters of fact.
2. 09 K2 line 254: rewrite the belief sentence.
3. 05 self-study: make Tehtävä 2 and the low-time line agree; minutes to match.
4. 05 K3 b line 290: Ella uses a fourth criterion only.
5. Split 05 T1/3, T2/5, T3/3; 07 T2/2, T2/4; 09 T3/1, T3/3; update cited step numbers.
6. Rebuild to 0/0, recheck these five only and the three edition lines, then re-judge.

### For the operator

FI4 is nearly ready: the build is clean and the pictures are made and checked, for $0.37.
Five small text slips are still open in topics 05, 07 and 09, about half an hour of edits.
One is a factual slip about empiricism in a model answer; the rest are clarity and one-action steps.
Nothing is committed or pushed.

## Final recheck

**Judge**, 2026-11-22, third ruling. I wrote nothing I rule on. Own build (scratch output): **0 errors, 0 warnings**;
every FI4 topic under 500 lines (05: 449, 07: 444, 09: 437). No path, key or e-mail in the three files.

| # | Remaining item | On disk now | Ruling |
|---|---|---|---|
| 1 | 07 empiricism | Lines 63, 202, 204, 425 say *tosiasioita koskeva tieto*; 289 adds Hume on relations of ideas; agrees with line 73 and SEP. | Closed |
| 2 | 09 K2 belief sentence | Line 254: "Uskon vahvuuden pitää vastata näytön vahvuutta. …" proportions belief to evidence, keeps *ei vielä tiedetä*. | Closed |
| 3 | 05 self-study | Tehtävä 2 core (line 349), agrees with line 344 and the plans; 15 + 10 + 20 + 30 + 8 = 83 = `self_study_minutes`. | Closed |
| 4 | 05 K3 b Ella | Line 290: Ella uses a fourth criterion only; scoring line 313 matches. | Closed |
| 5 | Compound steps | 05 T1, T2, T3; 07 T2; 09 T3: five steps each, one action each. Plan rows cite T2 "kohdat 4 ja 5" correctly. | Closed |
| 6 | Edition lines and checked_by | Recheck opened Bacon (la.wikisource), Weber (de.wikisource), Dilthey (scan leaves n4, n5): all pass. All 16 FI4 rows carry the sources checker's record; none needs *odottaa*. | Closed |

The dropped non-core steps (05 T1/5, T2 "ydin kahdella virkkeellä", T3 "kanta"; 07 T2 a priori meaning, Kant's reason;
09 T3 "lause kummastakin lähdetekstistä") cost nothing a K-task or another step does not cover. The five-step cap wins.

**Verdict after final recheck: accept-with-minors**

### Remaining (minor, no block)

1. 10 Dilthey `checked_by`: the OCR-only caveat is now stale (scan images viewed); the data owner may drop it.
2. 05 plan line 363 "Kohdat 4 ja 5 kotiin" (Tehtävä 1) now sends the antirealist column home, not the old steps;
   consider "Kohta 5 kotiin".
3. Count correction: FI4 has **16** primary-text boxes and rows, not 17 as my earlier rulings said.
4. Commit and publish follow acceptance; nothing is committed or pushed.
