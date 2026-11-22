# Brief 004 (FI3 content): judgement

**Judge**, 2026-11-22. I wrote nothing in this project. Sources for this ruling: `prompts/004-fi3.md`, `CLAUDE.md`,
`docs/content-contract.md`, `docs/style-guide.md` (sections 1–17), the ten FI3 topics, `data/`, the pages, and my own
build (`python -m lukio_runko build`, FI_TODAY 2026-11-22, output in the scratch folder): **0 errors, 0 warnings**.

## Verdict: reject (this round; one targeted fix round, then re-judge)

The substance is sound. The build is clean. All 11 FI3 codes are covered. The ten files run 439–467 lines. Every task
has at most 5 numbered steps (my script: 5/5/5 everywhere, 09 has 4/5/5). The first round's must-fix items are fixed
in the files: no `Nimitys:` hub links are left in topics 04–09 or in `data/materials-fi3.yaml`, the Weber monopoly
clause, Constant's "1819", the Snellman line and the Popper lines are gone, and the codes for 08 K1/K2 and 10 K2 are
corrected. But **none of the 25 open items from the final recheck is fixed**. I confirmed each one in the files. One
is a reversed translation (Locke §27). One is a page that leaves out the AI part of s6. One task cannot be done as
written (10 T3), and several model answers misstate their sources. Also, **all 20 `checked_by` rows still read
"odottaa"**. So the Done-when line "every translation checked" is not met on record, even though the sources check
did the comparison. This needs a fix round, not a rewrite.

## What I read and opened

- **In full:** fi3-01 (the sample: boxes, all three tasks, K1–K3, models, all three plans). It is clean. The
  curriculum check's split-step items for 01 are already fixed there.
- **One topic per writer group:** fi3-03 (02–04: boxes, tasks, K2 and K3 models, 45-min plan); fi3-06 (05–07: Burke
  box, K3, 45-min plan); fi3-10 (08–10: Opiskelijalle, both boxes, T1–T3, K2 model). I also read fi3-09's
  technology section and boxes and fi3-08's Renan box.
- **Edition pages I opened myself (HTTP 200):**
  - la.wikisource *Utopia/Liber II/Epilogus*. The Latin matches character for character (quæ, ciuitatibus, quàm,
    sperarim). The page's `prpSourceIndexPage` is "Liber:Utopia, More, 1518.djvu", so the edition is 1518, not
    "1516". The translation is faithful, apart from the untranslated "Interea".
  - fr.wikisource *Qu'est-ce qu'une nation ?* (Calmann Lévy 1882, scan-backed). Part III opens "Une nation est une
    âme, un principe spirituel." and the sentence goes on "un plébiscite de tous les jours, comme l'existence de
    l'individu …". The box closes the quote with a full stop instead, as the open item says. The translation is
    faithful.
- **45-minute plans** (01, 03, 06): each keeps the goal task (Tehtävä 2) whole, and the minutes add up to 45.
- **Pictures:** no FI3 entries in `data/images*.yaml` and no FI3 files in `site-src/img`. The images workflow has not
  run yet.

## Rulings on the final recheck's open items

| # | Item | Real? | Blocks? | Ruling |
|---|---|---|---|---|
| 1 | 06 Burke: no period-bound framing line, Revolution not named (line 104 says only "vuonna 1790") | Real | Yes | Style guide §17 rule 6. Add one neutral line: "Burke kirjoitti Ranskan vallankumouksen aikana; käsitys …". Naming the Revolution as history does not trigger the violence flag (critic's rule). |
| 2 | 09 Opiskelijalle has 0 hits for tekoäly/algoritm | Real | Yes | s6 names AI explicitly. Add 2–3 neutral sentences on a fictional algorithmic decision system under "Teknologia ja kolme kysymystä". Keep it within 600 words. |
| 3 | 10 T3: four proposals, but step 5 asks for "kolme lausetta"; step 3 says "arvelet" | Real | Yes | As written, the task cannot be done. Make steps match four proposals. Step 3: "jonka perustelu on heikoin". |
| 4 | Bundled steps in 08 T2/4, 09 T1/1, 09 T3/1, 10 T3/1 | Real | Yes | I confirmed 08 T2/4 ("jokaiselle väitteelle A ja B") and 09 T1/1 (hopes + does not believe). Split or narrow each to one action, staying within 5 steps. |
| 5 | Bundled steps in 04 T2/2, T3/2–3 | Real | Yes | Confirmed. Same fix. One step per proposal is not needed: "Valitse yksi ehdotus ja …" is enough. |
| 6 | Bundled steps in 05 T3/1–2, 06 T2/3 and T3/4, 07 T2/4 and T3/4 | Real | Yes | Same fix. Update any step numbers cited in Eriyttäminen and the plans (as J3 in brief 003). |
| 7 | 02 Machiavelli: edition "laitosta ei nimetä" | Real | Yes (contract) | Name "Italia 1814 (skannaus Indice:Il Principe.djvu)" in the reference line and `primary_texts`. |
| 8 | 03 Mill: reference line has no edition | Real | Yes (contract) | Line 79: add "4. painos". |
| 9 | 04 Mill *Subjection*: "laitosta ei nimetä" | Real | Yes (contract) | Name "London: Longmans, Green, Reader, and Dyer, 1869" in both places. |
| 10 | 07 socialism card cites SEP Socialism for the class-struggle line | Real | Yes | Cite the Manifest box (Lähdeteksti 2) or the de.wikisource page instead. |
| 11 | 08 Renan: comma turned into a full stop | Real (I opened it) | Yes | End with "jours, – –" in the original and "kansanäänestys – –" in Finnish, in the box and in any exam copy. |
| 12 | 09 More: "vuosi 1516" | Real (I opened it) | Yes | Write "vuoden 1518 painos (skannaus Utopia, More, 1518.djvu)" at line 75 and in `primary_texts`. Optional: translate "Interea". |
| 13 | 10 Smith: edition unnamed | Real | Yes (contract) | Name "New York: P. F. Collier & Son, 1902". |
| 14 | 10 Locke §27: "sekoittanut työhönsä" reverses the phrase | Real | Yes | This is the one translation error. Write "hän on sekoittanut siihen työtään", in the box (84) and in K3 Aineisto 1 (205). The K2 model at 304 already paraphrases it correctly. |
| 15 | 10 line 104: proviso cited to SEP Climate Justice | Real | Yes | Cite Locke Wikisource (§27, §33) for the proviso and keep SEP only for future generations. |
| 16 | 03 "liiviveivoitteesta" (139) | Real | Yes (typo) | "liivivelvoitteesta". |
| 17 | 03 K3 b: "Constant itse huomauttaa … tuhoaa lopulta molemmat"; "kuka tulkitsee rajan" | Real | Yes | Neither is in the box or the summarised passage. Cut the last sentence of line 290. Change the strength to what Aineisto 2 says (political liberty as the guarantee). |
| 18 | 03 K2 model mislabels the two negative-freedom views; "sattumalta … pyytää apua" contradicts the set-up; "Osaan 1" not practised | Real | Yes | Lines 248 and 250. Call the views "avoimet vaihtoehdot" and "tahallinen puuttuminen". Drop the variant that contradicts the set-up. Change the label to "Osaan 3" or add an Osaan 1 point. |
| 19 | 02 Thrasymakhos declension mixed | Real | Yes (language) | Use Thrasymakhos, -ksen, -kselle throughout. I counted 11 "Thrasymakhosin" in 02. |
| 20 | 02 self-study 90 vs steps 95 | Real | Yes (small) | 20 + 15 + 20 + 30 + 10 = 95. Change the figure or K1's minutes in both places. |
| 21 | 05 self-study 105 vs steps 100 | Real | Yes (small) | Same fix. |
| 22 | 05 K3 Aineisto 2 Aristotle quote not verbatim | Real | Yes | Copy the box sentence exactly, or use "– –" for the cut. Check line 314's quotation too. |
| 23 | 08 nationalism card: critique 57 vs 42 words; unattributed human-rights sentence | Real | Yes (neutrality) | Begin with "Kriitikoiden mukaan …" and cut the slot to at most 52 words. |
| 24 | 10 Rawls 37 words, no critique; Nozick 49 words with a gap | Real | Yes (neutrality) | I confirmed it in Opiskelijalle. Give Rawls a one-clause critique (e.g. the entitlement objection) and balance the lengths within a quarter. |
| 25 | 09 K3 a quotes "tekevät ihmisen ihmiseksi" | Real | Yes | The material has "tekevät hänestä ihmisen" (line 92). Quote it exactly, or drop the quotation marks. |

## Additional items found by the judge

| # | Item | Blocks? | Ruling |
|---|---|---|---|
| J1 | All 20 `primary_texts` rows still read `checked_by: "odottaa: …"` | Yes | The sources check did the comparison and passed all boxes except Locke §27 (item 14), but the record does not say so. After items 7–14 are fixed, set "lähteiden ja käännösten tarkistaja 22.11.2026", as FI2 did. |
| J2 | 04 T3 step 5: "mitä jaon kysymys ei yksin ratkea" is ungrammatical | Yes (one line) | E.g. "miksi jaon kysymys ei ratkea pelkällä säännöllä". |
| J3 | Step edits shift step numbers | Yes, with 4–6 | Update the "Helpompi polku" and plan references in the same edit. |
| J4 | No FI3 pictures | No (this round) | Planned for the fixes-and-images workflow (brief step 3). Done-when needs them before final acceptance. |

## Done-when, line by line

| Line | Ruling |
|---|---|
| Ten FI3 topics on the site | **Met locally.** Build clean, order 21–30. Not live (commit and push wait). |
| Each with a primary text in the original and in Finnish | **Met in form.** 20 boxes with a `lang` span and "suomennos: sivusto". One reversed translation (item 14). Four edition lines are wrong or missing (items 7–9, 12–13). |
| Exam-style tasks with model answers | **Met in form, not yet in quality.** 30 tasks with models and the fixed line. Items 17, 18, 22 and 25 are errors. |
| Linked materials | **Met.** From `data/materials-fi3.yaml`, mirrored in `official_links`, with Termipankki Filosofia: pages. |
| Pictures | **Not met.** The images workflow has not run (J4). |
| Every FI3 code covered | **Met** (build coverage). s6's AI strand is thin in the study text (item 2). |
| Every translation checked against its original | **Not met on record** (J1). In substance it is done, apart from item 14. |
| Checks passed or named | **Met as named.** Curriculum, sources and pedagogy did not pass. Their open items are ruled above. |
| The judge accepts | **Not yet.** Rejected for this round. |

## Remaining items

1. Content: items 1–3, 17, 18, 22–25 (AI passage, Burke line, 10 T3, model answers, symmetry, exact quotes).
2. Steps: items 4–6 and J2, each a single action, with step references updated (J3).
3. Sources: edition lines 7–9, 12, 13; Renan cut (11); Locke translation (14); citations 10 and 15. Then fill all 20 `checked_by` rows (J1).
4. Language and arithmetic: items 16, 19, 20 and 21.
5. Then a curriculum, sources and pedagogy recheck of the changed lines, a rebuild (0/0), files of at most 500 lines, and a re-judge.
6. Images workflow (J4) and engine read of `data/images-*.yaml`. Then commit; publishing waits for the operator.
7. Human review: no filosofia teacher or source-language reader yet (`review_status: none`).

## For the operator

- FI3's ten topics build cleanly, and the first round's problems are fixed.
- Not accepted yet: none of the 25 final open items was fixed. One Locke line is mistranslated, and the AI theme is missing from the study text.
- Four primary-text boxes name the wrong edition or none, and the translation check is not yet on record.
- No FI3 pictures yet. That is the next workflow.
- Nothing is committed. Publishing waits for your word.

## Fix round and images

**Judge**, 2026-11-22, second ruling. I wrote nothing. My own build (FI_TODAY 2026-11-22, scratch output): **0 errors,
0 warnings**. FI3 files 439–467 lines, `data/images-fi3.yaml` 334. I read 06 in full and 03 and 09 again, opened two
edition pages (en.wikisource *On Liberty* ch. IV: "To individuality should belong …", index "On Liberty (4th
Edition).djvu"; Perseus *Politics* 1253a, Ross 1957, text goes on "ζῷον, καὶ ὁ ἄπολις …"). The Locke 1764 page did not
reach §137 in two tries. I opened all 5 new SVGs, all 11 illustrations, all 3 pd-* artworks and the shots.

### Verdict: reject (one short text round, then accept)

The 25 earlier items and J1–J4 are fixed in the files (spot checks: Locke §27, 10 T3, Renan, 09 AI paragraph, Burke
line, typos, declension). The pictures are done and correct. But **none of the 11 final open items is fixed**. I found
each one unchanged at its line. Four of them are defects in primary-text boxes that are now recorded as checked.

| Item | Status in files | Ruling |
|---|---|---|
| 09 T1/4 "tässä lauseessa" (119) | Unchanged | Fix: "Lähdetekstissä 1". |
| 06/07 card balance (69/85, 91/107, 72/86) | Unchanged: 48/25, 40/26, 43/32 words | Fix: each pair within a quarter. 07 socialism 36/32 is fine. |
| 02 "väittää" for Thrasymakhos (128, 393) | Unchanged | Fix: "sanoo". |
| 01 T2/3 and T1/4 bundled pairs (137, 123) | Unchanged | Fix both; keep cited step numbers. |
| 03 K3 b "mitä tekee, jos …" (288) | Unchanged | Fix: "miten käy, jos …". |
| 06 Mill IV ought turned into is (79, 208, 311) | Unchanged; page confirms "should belong" | Fix: "pitäisi kuulua", three places. |
| 05 Locke §137 unmarked cut (75, 77, 198) | Unchanged | Fix: "government, – –" / "päämäärien kanssa – –". |
| 05 Aristotle 1253a unmarked cut (109, 111, 220) | Unchanged; Perseus confirms the sentence goes on | Fix: "ζῷον, – –" / "poliittinen olento – –". |
| 07 Manifest unmarked cut (100, 102, 212) | Unchanged | Fix: "zu einander, – –" / "keskenään – –". |
| 03 K3 b "tämä raja koskee myös enemmistöä" (286) | Unchanged | Fix: cut the clause, or mark it as outside Aineisto 1. |
| 07 Hayek sentence with no source (431) | Unchanged | Fix: cut it, or add a dated link that names Hayek. |
| Pictures | 11 il-fi3*, 5 dg-fi3-*, 3 pd-fi3-* | **Accepted.** Real-text SVGs that are legible at 343 px, no text or weapons in the scenes, run-log hashes match all 11 files. Dropping Leviathan (sword) and Machiavelli (provenance) is right. |
| Screenshots | Taken 17:35, before the Leviathan drop | Stale. fig-01 still shows Leviathan; there is no shot of 04, 07 or 08. Re-shoot before commit. |

### primary_texts rows

All 20 now read "lähteiden ja käännösten tarkistaja 22.11.2026". **16 may stay checked:** 01 Platon and Hobbes; 02
Platon and Machiavelli; 03 Mill I and Constant; 04 Aristotle and Mill *Subjection*; 05 Tocqueville; 06 Burke; 07
Kropotkin; 08 Renan; 09 More and Butler; 10 Locke §27 and Smith. **Four may not be checked until their boxes are fixed
and re-read:** 05 Locke §137, 05 Aristotle 1253a, 06 Mill IV and 07 Marx and Engels. Set them back to "odottaa" or fix
them in the same round.

### Done-when, line by line

| Line | Ruling |
|---|---|
| Ten FI3 topics on the site | Met locally (build 0/0, order 21–30). Not live. |
| Each with a primary text in original and Finnish | Met in form. Four boxes are defective (see above). |
| Exam-style tasks with model answers | Met, except two lines in the 03 K3 b model. |
| Linked materials | Met. One unsourced sentence (07 Hayek). |
| Pictures | **Met.** |
| Every FI3 code covered | Met. s6 AI now in 09 Opiskelijalle. |
| Every translation checked against its original | Not met: 4 of 20 rows are recorded checked but still defective. |
| Checks passed or named | Met as named. |
| The judge accepts | Not yet. |

**Spend:** FI3 illustrations 11 × $0.0336 = **$0.3696** (run log), within the $1 brief cap. The diagrams and Commons
artworks cost $0. The run log now totals $1.4448 for all sibling sites, within the shared grant.

**Remaining:** (1) the 11 text items above, all small, in topics 01, 02, 03, 05, 06, 07 and 09; (2) re-read the four
boxes and keep or reset their `checked_by`; (3) rebuild 0/0, re-shoot the screenshots, then a brief re-judge;
(4) commit (publishing waits for the operator); (5) human review is still none.

**For the operator:**
- The FI3 pictures are done and correct, for about $0.37 of the $1 cap.
- The earlier 25 problems are fixed, but the last 11 small text items were not touched.
- Four quotations still have an unmarked cut or a wrong verb mood, though their rows say "checked".
- One short text round, then I expect to accept. Nothing is committed.

## Final recheck

**Judge**, 2026-11-22, third ruling. I wrote nothing but this section. My build (FI_TODAY 2026-11-22, scratch output):
**0 errors, 0 warnings**; FI3 files 439–467 lines. Pages I opened myself: en.wikisource *On Liberty* ch. IV (box word
for word, whole sentence, "should belong"; index "On Liberty (4th Edition).djvu") and de.wikisource *Manifest* 1848
(London, Bildungs-Gesellschaft für Arbeiter; the rendered text confirms both cuts: "Freier und Sklave … Gesell," and
"zu einander, führten …"). The first Manifest read gave no verbatim text; the second (rendered page) did.

| Item | On disk | Ruling |
|---|---|---|
| 09 T1/4 | "Lähdetekstissä 1" (119) | Fixed. |
| 02 "väittää" | No match in the file; "sanoo" at 128 and 393 | Fixed. |
| 01 T1/4, T2/3 | One action each; step numbers kept | Fixed. |
| 03 K3 b | "miten käy, jos" (288); majority point marked as the answerer's own addition | Fixed. |
| 06 Mill IV | "pitäisi kuulua" at 79, 208, 311 | Fixed; page confirms. |
| 05 Locke §137, 05 Aristotle 1253a | "– –" in box and Finnish (75, 77, 109, 111) and at 198, 220 | Fixed (checker's page reads on record). |
| 07 Manifest | "– –" at both cuts (100, 102, 212) | Fixed; page confirms. |
| 07 Hayek | No match in content/ or data/ | Fixed (cut). |
| Card balance (my word count, URLs out) | 06: 47/38, 40/35; 07: 44/42, 37/32 | Fixed: each within a quarter; cards within a quarter of each other. |
| `checked_by` | All 20 FI3 rows "lähteiden ja käännösten tarkistaja 22.11.2026" | Accepted: the four reset boxes were re-read by the sources checker, each with page, cut and back-translation on record; none is recorded without a check. |
| Screenshots | 12 new shots (18:06): /fi3/, 01, 04, 07, 08, 09 at 375 and 1366 px | Accepted. 01 hero is the camp scene, no Leviathan. |
| /fi3/ coverage table at 375 px | Clipped at the right edge | Minor: `.matrix-wrap` has `overflow-x: auto` and `tabindex="0"`, so it scrolls; no page sideways scroll. A scroll hint would help. |

**Verdict after final recheck: accept-with-minors**

**Remaining:** (1) commit (publishing waits for the operator); (2) human review is still none (no filosofia teacher, no
source-language reader); (3) minor: a visible scroll cue for the coverage table on narrow screens (engine); (4) minor:
07 socialism critique "vallankumoukselliset yritykset" names no real event, so no flag is needed, but the neutrality
checker should confirm on the next round.
