# Basis audit: judgement

Judge: Opus, workflow agent; wrote none of the audited text or fixes. Date of judgement: 23.11.2026.
Rules: shared content guideline (lukio-runko v0.4.0, sections 1–4), this site's CLAUDE.md, content contract with
addenda, style guide. Nothing was committed or pushed; this file is the only file written.

## What was audited

- Audit, fix and verify reports for FI1 topics 01–05 (27 findings), and the audit report for FI1 topics 06–10
  (exam formats, SEP/IEP mismatches, value-graded rubrics, English habits). The relayed results ended mid-report, so
  any further groups were judged from the files on disk only.
- Own build into a scratch folder: **0 errors, 206 warnings**, all of them `repeat` clusters. Largest file 484 lines
  (limit 500). No word-count error from the engine for any Opiskelijalle section.
- Spot-checks on disk of fixed items: 01 six areas (line 101, labelled, Tieteen termipankki's four named); 01 YTL
  sentence (line 112, now "tarvittaessa vaihtoehtoisia näkökulmia"); 02 *Apologia* 38a and "Väite on tunnettu, ja
  siitä on kiistelty" (lines 101, 105), "Hyvä kysyjä" gone; 03 piiloperuste labelled with OPH's *julkilausumaton
  oletus* (line 68); 04 *sitova* labelled (line 57); 05 Theseus labelled (line 107), Menon proposal set beside
  Plato's own answer (line 101), "Klassisen käsityksen mukaan" (line 79). All match the fix report.
- Spot-checks of what the auditors called sound: the YTL spring 2025 grading page (opened once) confirms osuvuus as
  the most important criterion, the 750-character limit on 5 p parts, the material deduction with the 75 % cap, nine
  tasks (6 + 3), and the splits 15+15, 20+10, 5+5+20. Curriculum codes in 01–05 front matter all exist in
  `data/curriculum.yaml`. Both groups hold.

## Findings by type and action (FI1 01–05, all fixed and verified)

| Problem | label-own-framing | reword-as-weighing | add-basis | reword-idiom | remove | Total |
|---|---|---|---|---|---|---|
| no-basis | 4 | 2 | 4 | 0 | 1 | 11 |
| basis-mismatch | 3 | 1 | 3 | 2 | 0 | 9 |
| value-graded | 0 | 3 | 0 | 0 | 0 | 3 |
| english-habit | 0 | 0 | 2 | 2 | 0 | 4 |
| **Total** | 7 | 6 | 9 | 4 | 1 | **27** |

Where a proposal disagreed with the opened page, the fixer followed the page (the irony remark is at *Apologia* 38a,
not 37e; OPH names two of the three tests). That is the right call under guideline section 3.

## What remains

1. **Help blocks against guideline section 4.** Four topics carry 112, Sekasin or MIELI blocks and a `content_note`:
   `01-moraali-laki-ja-tapa`, `06-velvollisuus-ja-oikeudet-kant`, `07-hyva-elama-ja-merkitys`,
   `09-elaimet-luonto-ja-ilmasto`. The guideline allows one help block only, in terveystieto. In addition 25 pages end
   their `Apua ja tukea` with "Jos jokin muu asia painaa mieltä, voit puhua kuraattorille…", a wellbeing referral on
   every page, and 01 keeps the reassurance "eikä kysyminen ole heikkoutta".
2. **Exam formats presented as YTL task types outside FI1.** 29 topics in FI2–FI4 still open Koetehtävät with
   "…filosofian ylioppilaskokeen tehtävätyypeissä" and keep 3+6+6+15 splits, 20 × 1 p multiple choice and two-of-four
   1 500-character tasks without a label. The opened YTL page shows none of these.
3. **FI1 06–10 only partly fixed.** The format labels in 07, 08 and 10 are done, but 06, 08, 09 and 10 still score
   "ehdollinen" conclusions in rubric cells, and all five keep "Kiintopisteet", "Exit-lappu" and "Koeharjoitus ja
   exit". The fixes made in 01–05 for the same patterns were not carried over. 18 topics site-wide still have
   "ehdollinen" scoring cells.
4. **The contract is not amended.** Contract section B still lists the site's task types as exam formats, and section
   D still asks for help boxes. The guideline overrides both (addendum of 22.11.2026), but the text has not been changed.
5. **No norm ledger.** `docs/norm-ledger.md`, which guideline sections 4 and 5 point to, does not exist.
6. **Operator questions pending:** piiloperuste, vakiomuoto, sitova, the heading "Malliksi kelpaava vastaus", one
   stage name for the lesson plans (01–05 now use five different ones), and the repeated sentences "Pisteytys on
   sivuston oma harjoitusohje…" and "Voit ohittaa kysymyksen…".
7. **Unchecked:** *Menon* 81a (nobody opened it), Plutarch for Theseus, and the 05 Tehtävä 3 step 5 wording.
8. **Build:** 206 repeat warnings, so the 0-warnings target is not met.

## Ruling

FI1 topics 01–05 meet guideline sections 1–4. Every audited claim now names its basis or is labelled as the site's
own. Value-question rubrics score the reasoning, and the English habits found there are replaced.

The site as a whole does not. Section 4 is broken outright by the four help blocks and the content notes. Section 1 is
broken by the exam-format claims in FI2–FI4 and by the unlabelled scoring forms in FI1 06–10. Section 2 is broken by the
"ehdollinen" full-mark cells in 18 topics.

**Verdict: reject** for the site. FI1 01–05 alone would be accept-with-minors.

## For the operator

- FI1 topics 1–5 are fixed and checked. The rest of the site still needs the same fixes.
- Four philosophy pages still carry 112 and helpline blocks. Most pages end with a "puhu kuraattorille" line.
- Please choose Finnish words for piiloperuste, vakiomuoto and sitova, and one name for the lesson's closing stage.
- Nothing is committed. The next round is FI1 06–10 and FI2–FI4, plus the contract text and the norm ledger.
