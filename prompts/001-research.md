# 001: Research filosofia for lukio: the curriculum, primary texts in the public domain, materials, and a first-module plan

**Written before the work.** Producer's brief, 2026-11-22. Research only. Run by `.claude/workflows/scout.js`.

## Why

The operator [O]: "let's tackle lukio philosophy next. similar planning as before. suggestions: utilize the fact that
most of the older philosophical works are public domain in original languages - provide links and translated quotes
where applicable. generate images in existing budget with nano." Recorded as D-001 and D-002; the defaults as D-003.

**Serves:** G-1, G-3, and prepares G-2. **Goal type:** research; the expected answers are written first. **Chain:**
first brief. **Models:** seven researchers on Sonnet, critic on Opus.

## Expected answers, written before the work [M]

1. **Curriculum.** Filosofia in LOPS 2019 has two compulsory modules, FI1 *Johdatus filosofiseen ajatteluun* and FI2
   *Etiikka* (2 op each), and two national optional modules, FI3 *Yhteiskuntafilosofia* and FI4 *Tieto, tiede ja
   todellisuus*. It is graded 4–10 and has a matriculation exam. FI1 covers what philosophy is, argument and concept
   analysis, and a first look at metaphysics, epistemology and ethics. FI1 is the intermediate target. Names, codes and
   counts are read from ePerusteet.
2. **Primary texts in the public domain.** Almost every classic the modules use is public domain in its original
   language, with open editions online:
   - Greek: Plato and Aristotle on Perseus (Stephanus and Bekker numbers), Epicurus and Epictetus;
   - Latin: Lucretius, Cicero, Seneca, Augustine, Aquinas, Descartes' *Meditationes*, Spinoza;
   - English, French and German: Hobbes, Locke, Hume, Mill, Wollstonecraft, Descartes' *Discours*, Rousseau, Kant,
     Hegel, Nietzsche, Kierkegaard (Danish);
   - Finnish and Swedish: Snellman.

   Philosophers who died before 1956 are public domain in the EU now (for example Wittgenstein, d. 1951). Russell,
   Sartre, Beauvoir and later writers are not.
3. **Translations.** Some older Finnish translations are public domain (translator dead over 70 years); most modern
   Finnish translations are in copyright. So the site's quotations are mostly its own translations from the originals,
   short, with the passage reference and a link to the original. An agent who did not translate checks each one
   against the original.
4. **Materials to link.** Open lukio philosophy material is thin: the Finnish philosophy teachers' association (FETO),
   Yle Oppiminen, Filosofia.fi and university open courses, Stanford and Internet Encyclopedia entries (English),
   and a few CC-licensed course shells on aoe.fi. Most are link-out.
5. **Exam tasks.** The filosofia exam uses essays on a concept or argument, material-based analysis (a quote,
   a case, an image), and short concept tasks, at 20 and 30 points. YTL's past exams and "hyvän vastauksen piirteet"
   may be linked, not copied. Original exam-style tasks with model answers suit the site.
6. **Images.** nano-banana (about $0.034 each) suits scenes that need specifics (the cave allegory, the ship of
   Theseus, the trolley problem, the veil of ignorance) with no text in the picture. Diagrams with words (argument
   structure, the branches of philosophy) are better in Mermaid, as on the sibling sites. Public-domain artworks (for
   example portraits and Raphael's *School of Athens*) can be committed with their source from Wikimedia Commons.
7. **FI1 plan.** About 8–10 topics, each a lesson and a self-study step with 75/60/45-minute plans, tasks, reflection,
   exam-style tasks with model answers, a primary-text box with an own translation and a link to the original, and
   linked materials with their licence class.

## The work

`scout.js` with seven researchers:
1. **Curriculum:** FI1–FI4 from the ePerusteet API, the subject's objectives, assessment and transversal competences.
2. **Primary texts:** per likely FI1 topic, the classic passages that teach it, their open original editions with
   stable URLs and passage references, the author's death year and the public-domain status in Finland and the EU.
3. **Translations:** which Finnish translations are public domain (translator and year), where they are online
   (Project Gutenberg, Doria, Kansalliskirjasto), and how to label own translations; the quotation right under the
   Finnish copyright act for short quotes from copyrighted works.
4. **Materials to link:** per FI1 content area, publisher, URL, audience and licence class.
5. **The exam:** the filosofia matriculation exam's task types, points, material, and what YTL's grading descriptions
   ask for, from public pages; how to write original tasks in those formats.
6. **Images:** the engine's image tool and the sibling sites' manifests (read-only, local), nano-banana's strengths
   with text-free scenes, public-domain artworks on Commons with their licence data, and which topics a picture helps.
7. **The base:** the terveystieto site's contract, style guide, engine formats and lessons (read-only, local), and
   what a philosophy site changes (no health rules; a primary-text box; respect for worldviews; argument-analysis
   tasks).

Then the critic proposes the FI1 topic list with codes, an outline for FI2–FI4, the primary-text and translation plan
per topic, the link inventory, the image plan with costs, and the contract additions.

## Limits

€0 in this brief. Read-only on the web and on the sibling repositories. No personal data. No text copied from
publishers, YTL or modern copyrighted translations.

## Done when

The operator can read one report that says what FI1 requires, which topics the site will have, which public-domain
originals and translations each topic uses, which materials it links, how exam tasks and images are handled, and who
should review it. Internally: spot-checks recorded, expected answers marked right, wrong or refined, and the content
contract ready for the build brief.
