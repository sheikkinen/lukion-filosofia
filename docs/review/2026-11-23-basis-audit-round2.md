# Basis audit, round 2: judgement

Judge: Opus, workflow agent. I wrote none of the audited text or fixes. Date: 23.11.2026.
Rules: the shared content guideline and norm ledger (lukio-runko), the round-1 judgement of 22.11.2026, and the
operator's standing rules for this round. Nothing was committed. This file is the only file I wrote.

## What I checked

- The round-2 reports: the config fixer (subject.yaml, contract, style guide, D-011), group 1 (FI1 01–05: fix, two
  verifies, redo) and group 2 (FI1 06–10). The relayed results ended inside group 2, so FI2–FI4 were judged from the
  files on disk and `git diff HEAD`.
- My own build of the working tree, and a build of a clean HEAD copy for the repeat baseline.
- Greps over all 40 topic files for help blocks and the round-1 patterns.
- Nine fixed items on disk, against their basis. I opened the YTL grading page for the spring 2025 exam once.

## Build

- Working tree: **0 errors, 189 warnings**. All warnings are `repeat` clusters. No word-count warning, so every
  Opiskelijalle section is within the limit.
- HEAD: 0 errors, 205 warnings. The repeat count **went down by 16**.
- Largest topic file: 478 lines (limit 500). Front matter parses in all files.
- The earlier errors in the fixers' reports ("unknown section '## Apua ja tukea'", "75 %") are gone.

## Help blocks and content notes

All 40 topics: no `Apua ja tukea`, 112, hätänumero, Sekasin, kriisipuhelin, MIELI, Nuorten Exit, kuraattori,
psykologi or terveydenhoitaja, and no `content_note`. The four pages from round 1 (01-moraali-laki-ja-tapa,
06-velvollisuus-ja-oikeudet-kant, 07-hyva-elama-ja-merkitys, 09-elaimet-luonto-ja-ilmasto) are clean, and their
helpline links and `yearly_facts` entries are gone. The reassurance "kysyminen ei ole heikkoutta" is gone. The four
remaining "heikkoutta" hits are rubric text ("heikkoutta ei punnita"). The two "hyvä kysymys" hits are task text, not
praise. There is no "Muista, että" and no "Kiitä".

## Visual novel lines

"Pelaa aiheesta visual novel" appears once in each of the 40 topics. The card_links and official_links entries
are unchanged from HEAD.

## Spot-checks against the basis

1. 04-patevyys: line 312 now reads "johtopäätöksen ei ole pakko olla tosi". All four places are correct.
2. 05-kasitteet: "oppiminen on muistamista (*Menon* 81d)". Two verifiers opened Perseus Menon 81 and agree.
3. 07-vapaus: the *Encheiridion* is called an abridgment of the *Discourses*, citing SEP Epictetus (in
   official_links, read 23.11.2026). The Arrian claim is gone.
4. 08-kasitteellinen: "Sivusto kutsuu jakoa Humen haarukaksi" is now labelled as the site's own term.
5. 10-tieto-eri-oppiaineissa: Hume puts arithmetic and geometry among relations of ideas. The rest is labelled
   "sivuston tulkinnassa".
6. 06-henki-ja-aine: "hengen" is corrected.
7. 01-moraali-laki-ja-tapa: the content note, the 112 link and the helpline facts are removed. The task headers
   carry "(sivuston oma tehtävätyyppi)", and "tehtävätyypeissä" is gone from the whole site.
8. 01-moraali and 02-onko: the claim that YTL uses the points 3, 5 and 8 in 10-point parts. **Holds.** The YTL
   page uses three anchor points at 25–30 %, 50–60 % and 75–80 % for parts of 10 points or more, and its 10-point
   example has 3- and 8-point levels.
9. Value-question rubrics in FI3 (02-valta, 03-poliittinen-vapaus): the rubric cells ask for a "perusteltu
   johtopäätös", and the text says either conclusion scores the same if it is argued. No cell requires
   *ehdollinen*.

## Small issues still open

None of these breaks guideline sections 1–4. Each is a wording fix.

1. **New sentences repeat in five or more topics.** This breaks the standing rule against adding such lines. All of
   these are absent from HEAD as standalone sentences:
   - "Pisteet 5, 10 ja 15 ovat suuntaa antavia kohtia kokonaisarvioon, eivät erillisiä pisteitä." (23 topics in
     the build)
   - "Tunnin lopuksi lappu." (8 topics, in the 9-minute lesson row)
   - "Tehtävät ovat sivuston omia harjoitustehtäviä." (6)
   - "Kokeessa on osassa 1 kuusi 20 pisteen tehtävää ja osassa 2 kolme 30 pisteen tehtävää." (5, group 1; the
     engine already adds the exam structure to every page)
   - "Ihmisoikeudet, demokratia ja oikeusvaltio kuuluvat opetussuunnitelman sisältöön (FI3.s3, FI3.t5)…" (5, FI3)

   Most of them replace older repeated lines in the same places, so the total still fell. The fix is to delete the
   line or write it for the topic, not to reword it the same way everywhere.
2. **"Kiintopisteet" is still used in five FI2 topics** (01-moraali, 02-onko, 03-objektivismi, 04-hyve,
   05-seurausetiikka), while the rest of the site and the new style guide say "suuntaa antavat kohdat". The YTL page
   itself uses the word *kiintopiste*, so the old word is not a basis error. It is an inconsistency, and the
   operator can choose either word.
3. **"Ehdollinen johtopäätös:" still opens five model-answer conclusions in FI3** (02-valta 306,
   03-poliittinen-vapaus 260 and 302, 04-tasa-arvo 261 and 306). The rubrics do not require it, but groups 1 and 2
   changed the same heading to "Yksi mahdollinen johtopäätös" / "Johtopäätös". 05-oikeusvaltio Tehtävä 3 step 5 asks
   the student to "Kirjoita ehdollinen johtopäätös". 06-liberalismi and 07-sosialismi say "Se voi olla ehdollinen",
   which is fine.
4. **subject.yaml** still lists `content_note` under extra_fields. No topic uses it now, so the entry can go.
5. **CLAUDE.md** still asks for "a help box with youth services" under sensitive themes. That conflicts with D-011
   and the amended contract. The fixers were not allowed to edit it.
6. A stiff line in 02-sokraattinen (K1 typical errors): "Menetelmän tavoite sivuutetaan: ymmärryksen tarkentuminen."

## Not verified in this round

- Plutarch for the ship of Theseus. The account is labelled as the site's own framing.
- SEP Truth, Popper, Descartes, Berkeley, Socrates and Wittgenstein, IEP Argument, and the OPH logiikka page were
  opened in round 1. Nobody reopened them in round 2.
- Standard dates and titles in 06, 07 and 09, Plato's cave at 514a (the linked page is 515), and the Yle filosofia
  page description in 09.
- FI2–FI4 had no relayed fixer reports. I checked them by grep, by the build and by the diff samples above, not
  claim by claim.

## Waiting on the operator (left untouched)

- Finnish words for piiloperuste, vakiomuoto and sitova.
- The heading "Malliksi kelpaava vastaus".
- One name for the lesson's closing stage. Pages now use "tunnin päätös", "päätös", "lopetus", "tunnin lopetus" and
  "päätöslappu".
- The repeated per-page lines "Voit ohittaa kysymyksen, eikä vastauksia tarvitse näyttää kenellekään" and "Pisteytys
  on sivuston oma harjoitusohje, ei ylioppilastutkintolautakunnan", and the labels on fictional materials.
- Whether the Eriyttäminen "Tuki:" line stays. It is about learning support and exam arrangements, not a wellbeing
  referral, but it repeats across many topics.
- "Kiintopisteet" (the YTL word) or "suuntaa antavat kohdat" as the site's single term.
- The CLAUDE.md line on help boxes.

## Ruling

The round-1 failures are fixed. There are no help blocks or content notes, exam formats are credited to YTL only
where the YTL page says so, the "ehdollinen" scoring cells are gone, and FI1 06–10 carry the same fixes as 01–05.
Every claim I checked names its basis or is labelled as the site's own. The build has 0 errors, and the repeat count
fell from 205 to 189.

What is left is wording: five new repeated sentences, two leftover labels, one config entry and one CLAUDE.md line.

**Verdict: accept with minors.** Fix open items 1–4 before committing.

## For the operator

- The philosophy site has no help blocks, helplines or content notes now. The build passes.
- A few new sentences repeat on many pages. They should be cut before the commit.
- Please choose: the words for piiloperuste, vakiomuoto and sitova; the closing-stage name; "kiintopisteet" or
  "suuntaa antavat kohdat"; and what to do with the repeated privacy and scoring notes.
- CLAUDE.md still asks for a help box. It needs your edit.
- Nothing is committed.

## 23.11.2026, round 3

Judge: Opus, workflow agent. I wrote none of the round-3 fixes. Rules: the shared content guideline and norm ledger,
CLAUDE.md, the round-2 judgement above and the operator's standing rules for this round. This section is the only
text I wrote. Nothing is committed.

### What I checked

- The two fixer reports (FI1/FI2 with subject.yaml, and FI3/FI4), against the files on disk.
- My own build of the working tree. I compared its repeat clusters with the round-2 judge's build log and with a
  build of a clean HEAD copy.
- Greps over content/, data/ and subject.yaml for 112, hätänumero, Sekasin, kriisipuhelin, "ohjaa
  opiskeluterveydenhuoltoon", kuraattorin yhteystiedot, `content_note`, `Apua ja tukea`, MIELI, Nuorten Exit and
  kuraattori. I also grepped the built pages for 112. The philosophy site has no 08-mielenterveys page, so no page
  is exempt.

### Build

- Working tree: **0 errors, 183 warnings**. All warnings are `repeat` clusters. Round 2 had 189 and HEAD has 205.
- **This round added no repeat clusters.** Compared with the round-2 build, six clusters are gone and none is new.
  The six gone are the Pisteet 5/10/15 note, "Tunnin lopuksi lappu.", both versions of "Tehtävät ovat sivuston omia
  harjoitustehtäviä.", the group-1 exam-structure sentence, and the FI3 human-rights sentence.
- Largest topic file: 477 lines. subject.yaml and data/yearly-facts.yaml parse.

### Round-2 open items

1. Repeated new sentences: **fixed.** None of the five sentences is in a repeat cluster now. "Tunnin lopuksi lappu."
   is either gone or names what goes on the slip. The FI3 06–10 openers differ from topic to topic and still label
   K1–K3 as the site's own.
   - One leftover: 09-utopiat line 310 still has the inline "pisteet 2, 5 ja 7 ovat suuntaa antavia kohtia
     kokonaisarvioon" in the a) rubric. The FI3/FI4 report said every inline copy was deleted. It is a single copy
     and not a cluster.
2. "Kiintopisteet" in FI2 01–05: waiting on the operator, so left alone. Still 3–5 hits per page.
3. "Ehdollinen johtopäätös:": **fixed.** There are no hits. The five conclusions now say what the answer depends on
   and then give the Jos-sentences, in plain Finnish. 05-oikeusvaltio Tehtävä 3 step 5 no longer asks for an
   *ehdollinen* conclusion.
4. subject.yaml: **fixed.** The `content_note` extra field and the `Apua ja tukea` contract section are gone.
5. CLAUDE.md: it now says "no help boxes or content notes (D-011)". The file changed after the round-2 judgement and
   before the fixers' edits, so the change was not made in this fix round. The item is closed.
6. 02-sokraattinen K1: **fixed.** The line now reads "Vastaus ei kerro, mihin menetelmällä pyritään: että ymmärrys
   asiasta tarkentuu."

01-mita-filosofia-on line 180 now credits only the exam structure to YTL and labels the tasks as the site's own. This
is correct.

### Help lines outside the topics (not fixed, new to this round's checks)

All 40 topic files are clean: no help blocks, 112, helplines, kuraattori or content notes. Rounds 1 and 2 checked
only the topics. This round's rule also covers data and built pages, and three places outside the topics break it.
All three are unchanged since HEAD.

1. **data/yearly-facts.yaml** still holds seven help-service facts: `sekasin_chat`, `kriisipuhelin`,
   `mielenterveystalo_nuoret` ("Omissa oireissa ota yhteys opiskeluterveydenhuoltoon."), `lasten_ja_nuorten_puhelin`,
   `nuorten_exit`, `hatanumero_112` and `mieli_ilmastoahdistus` (its note says "apuna linkitetään Sekasin-chat").
   No topic uses any of them. The engine still renders them all on **/lahteet/**, including "Hätätilanteessa soita
   112." and "Hätänumero 112 on yleinen hätänumero…". The fix is to delete these seven entries.
2. **content/pages/polku.md** line 9 says "Jos jokin aihe painaa mieltäsi, puhu luotettavan aikuisen, opettajan tai
   opiskeluhuollon kanssa. Hätätilanteessa soita 112." This is a referral line and a 112 line, and it renders on
   /polku/. Delete these two sentences. The sentence before them is a pending reassurance and stays.
3. **content/pages/etusivu.md** line 37 tells readers that pages on hard themes start with a content note and that
   every topic ends with "Apua ja tukea". Neither is true any more, and both describe apparatus the site does not
   use. Delete those two sentences.

A smaller point for the docs: sections C and D of docs/content-contract.md (lines 18 and 80) still describe
`content_note` and `## Apua ja tukea`. Line 144 of the same file amends them. Only the amendment should remain.

### Visual novel lines

"Pelaa aiheesta visual novel" appears once in each of the 40 topics. Grepping for "novel" shows no change from HEAD.

### Ruling

The topic work for round 3 is done. Every non-pending round-2 item is fixed on disk, the build has 0 errors, the
repeat count fell to 183, and the round added no new repeated sentence. The fixer reports matched the files, except
for the one inline copy in 09-utopiat.

The site still renders 112 and helpline lines on two pages that are not the terveystieto mental-health chapter
(/lahteet/ and /polku/). The front page also promises content notes and help sections. This breaks the standing rule
(norm ledger rows 3–4), so the site cannot be committed as it is.

**Verdict: reject.** The fix is small and clearly bounded: delete the seven help facts in data/yearly-facts.yaml and
the two sentences each in polku.md and etusivu.md. Then rebuild and confirm that no built page contains 112. The
topics need no further work in this round.

### For the operator

- The topic pages are clean, and the repeated new sentences are gone.
- The sources page, the student path page and the front page still carry helplines or 112, or claim that help
  sections exist. These three edits should be made before the commit.
- Your earlier choices are still pending: kiintopisteet or suuntaa antavat kohdat, the closing-stage name, the
  vocabulary, and the per-page notes.
- Nothing is committed.
