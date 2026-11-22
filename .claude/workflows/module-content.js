export const meta = {
  name: 'module-content',
  description: 'lukion-filosofia: one module: data and lead writer in parallel, three topic writers, four separate checks (curriculum, sources and translations, worldview, pedagogy), one fix round by group, judge on the final recheck',
  whenToUse: 'Write a module\'s topics on the engine. args: {root, brief, judgement, module, research, flagged, now}',
  phases: [
    { title: 'Foundation', detail: 'data agent and lead writer' },
    { title: 'Topics', detail: 'three writers following the sample' },
    { title: 'Check', detail: 'curriculum, sources and translations, worldview and neutrality, pedagogy and exam tasks' },
    { title: 'Fix', detail: 'one round by topic group, then recheck' },
    { title: 'Judge' },
  ],
}

const ROOT = args && args.root
if (!ROOT) throw new Error('args.root (the project folder) is required')
const BRIEF = args.brief
const JUDGEMENT = args.judgement
const NOW = args.now || '2026-11-22'
const MOD = (args.module || 'FI1').toUpperCase()
const mod = MOD.toLowerCase()
const RESEARCH = args.research || 'docs/research/2026-11-22-scouting.json'
const FLAGGED = args.flagged || []
const LINES = args.target_lines || 460

const RF = `Project root: ${ROOT}. First read ${ROOT}\\CLAUDE.md, ${ROOT}\\${BRIEF} (your brief), docs/content-contract.md (the philosophy contract: primary-text box, exam formats, worldview respect, sensitive themes, checks), docs/research/2026-11-22-research.md, and the critic's 'proposal' array in ${RESEARCH} (the ${MOD} topic list with codes and primary texts, the link inventory, the translation plan, the contract additions). The sibling site ../lukion-terveystieto is a read-only reference for engine formats, form and voice (its docs/content-contract.md with addenda, docs/style-guide.md, and a TE3 topic such as content/topics/07-eettisen-analyysin-nakokulmat.md). Build with python -m lukio_runko build --root "${ROOT}" --out <your own scratch folder> (0 errors, 0 warnings when all topics exist; Opiskelijalle 300-600 words counting link URLs). Topic files content/topics/NN-slug.md with module: ${MOD}; ids ${mod}-NN-slug. Aim at ${LINES} lines per topic (cap 500). Today is ${NOW}. Do not commit or push. Leave no server running. Never write a local path, key or personal name into a file. Web reads: at most two tries per page; list what you could not read. Content language Finnish.`
const WRITE = `Write warm, plain, respectful Finnish (selkeä yleiskieli), sinä to the student, collegial to the teacher. Follow docs/style-guide.md and the sample topic ${mod}-01 exactly in structure and voice, and every section of the contract in order. Curriculum codes from data/curriculum.yaml; never type curriculum wording. Primary-text boxes (contract §A): one to three per topic, the public-domain original in <span lang="..."> copied from the edition page you OPENED (never from memory, never from a Loeb or other translation page), the site's own Finnish translation labelled "(suomennos: sivusto)", the reference line with the traditional reference, edition, link and read date; list each in primary_texts in the front matter; no "1.7"-style citation forms; percent-encode parentheses in URLs. If an edition page cannot be opened, use another open edition or drop the box. Teach thinking, not positions: present arguments with their strongest critics, never assess the student's own beliefs, respect every worldview. Exam tasks (contract §B): original, in the filosofia exam formats, with model answers and a scoring guide on osuvuus, eheys and vakuuttavuus, typical errors and the fixed line; never a past YTL task. Link existing materials from data/materials.yaml with their licence class; never copy their text. Every factual claim about a philosopher or text is stated by a page you opened or is a stable, widely documented fact; if unsure, leave it out. Task times vary; offline alternatives need paper only; the 45-minute plan keeps the goal task; every 'Osaan' outcome is practised.`
const REPORT = { type: 'object', properties: { files: { type: 'array', items: { type: 'string' } }, summary: { type: 'string' }, not_done: { type: 'array', items: { type: 'string' } } }, required: ['files', 'summary', 'not_done'] }
const CHECK = { type: 'object', properties: { passed: { type: 'boolean' }, must_fix: { type: 'array', items: { type: 'object', properties: { what: { type: 'string' }, where: { type: 'string' }, group: { type: 'string', enum: ['01', '02-04', '05-07', '08-10', 'data'] } }, required: ['what', 'where', 'group'] } }, minor: { type: 'array', items: { type: 'string' } }, summary: { type: 'string' } }, required: ['passed', 'must_fix', 'summary'] }

phase('Foundation')
const foundation = (await parallel([
  ['data', 'sonnet', `You are the data agent. ${RF}
You own data/ (except curriculum.yaml, already fetched by the engine), subject.yaml, and the pages content/pages/etusivu.md, lahteet.md, polku.md, tietosuoja.md and saavutettavuus.md (drafts copied from terveystieto: rewrite every terveystieto word for filosofia, keep the engine's {{block}} tokens). (1) data/materials.yaml: per ${MOD} topic id the 3-6 best materials from the critic's link inventory, each {title, url, publisher, licence_class, licence, audience, read}; open every URL, fix moved ones, drop dead ones with a note; plus a 'shared' list for the module page. (2) data/yearly-facts.yaml (the engine requires it): the facts that change for this site, each {key, rule (stable rule only, plain Finnish), url, publisher, read, note}: the exam structure (nine tasks, 20 and 30 points) linked to YTL, the curriculum check date, and the opening hours or ages of any youth help service used. (3) The pages: front page about the filosofia site (FI1 now, FI2-FI4 later), the primary-text and translation policy in one short paragraph, privacy and accessibility as in terveystieto but for this site. Validate the YAML. Run the build (topic errors are expected until the writers finish).`],
  ['sample', 'opus', `You are the lead writer and set the voice. ${RF}
You own docs/style-guide.md (new: adapt terveystieto's style guide to filosofia, under 300 lines: voice, the primary-text box with a worked example, the exam formats with templates for each slug of contract §B, the scoring bands on osuvuus, eheys and vakuuttavuus, worldview rules, sensitive themes), content/pages/opetussuunnitelma.md (rewrite for filosofia: what the subject is, how to read codes, the rubric section for model answers with the osuvuus/eheys/vakuuttavuus bands and the material rule, keep the engine's {{general_aims}} and {{module_codes:${MOD}}} tokens), and the module's first topic content/topics/01-<slug from the critic>.md (module: ${MOD}, the order the critic gives for it). Topic 01 in full to the contract, with one or two primary-text boxes you translated yourself from the opened Greek edition, 2-3 exam tasks in different filosofia formats with model answers, materials from data/materials.yaml if it exists yet (else from the critic's inventory, opened yourself), varied task times, a paper-only offline alternative, a short Apua ja tukea section. It must be the best example the writers can copy.
${WRITE}`],
].map(([k, m, p]) => () => agent(p, { label: `foundation:${k}`, phase: 'Foundation', schema: REPORT, model: m }).then(r => r && ({ key: k, ...r }))))).filter(Boolean)

phase('Topics')
const GROUPS = [['02-04', `topics ${mod}-02, ${mod}-03 and ${mod}-04`], ['05-07', `topics ${mod}-05, ${mod}-06 and ${mod}-07`], ['08-10', `topics ${mod}-08, ${mod}-09 and ${mod}-10`]]
const writers = (await parallel(GROUPS.map(([g, which]) => () => agent(`You are a topic writer. ${RF}
Write ${which} as content/topics/NN-slug.md (module: ${MOD}) with the titles, slugs, orders, codes and primary texts of the critic's list and the materials in data/materials.yaml. You own only those files. Read docs/style-guide.md and the sample topic 01 first and match them.
${WRITE}`, { label: `topics:${g}`, phase: 'Topics', model: 'sonnet', schema: REPORT }).then(r => r && ({ group: g, ...r }))))).filter(Boolean)

const CHECKS = {
  curriculum: ['sonnet', `You are the curriculum checker; you wrote nothing. ${RF} Check every topic's codes against data/curriculum.yaml; each ${MOD} objective and content code is covered by a topic AND by at least one exam task; nothing is presented as curriculum-required that is not (the curriculum names no philosophers); task steps at most 5 single actions. Each problem is a must_fix with its group. Do not edit.`],
  sources: ['opus', `You are the sources and translations checker; you translated nothing. ${RF} For EVERY primary-text box in the ${MOD} topics: open the cited edition page (two tries), confirm the original text appears at that reference exactly (diacritics included), back-translate the site's Finnish into English and compare it with the original for faithfulness, check the reference line (traditional reference, edition, link, read date) and that the box is listed in primary_texts and official_links. Also open every other link in the topics and data/materials.yaml: broken or moved links, links that do not support their sentence, wrong licence classes, and factual claims about philosophers or texts that no opened page supports. Each problem is a must_fix with its group. Do not edit.`],
  worldview: ['sonnet', `You are the worldview and neutrality checker; you wrote nothing. ${RF} Read every topic in full: arguments presented with their strongest critics; no mockery of religious or non-religious views; no political advocacy; tasks ask to analyse and argue, never to adopt a view; the student's own beliefs never assessed; sensitive themes (${FLAGGED.join(', ') || 'any page touching death, suicide or violence'}) with a content note, an Apua ja tukea section with youth services whose own pages say so, no methods, no disclosure prompts; inclusive wording. Do not edit.`],
  pedagogy: ['sonnet', `You are the pedagogy and exam-task checker; you wrote nothing. ${RF} Read every topic: lesson tables add up for 75, 60 and 45 minutes and the 45-minute plan keeps the goal task; task times fit and vary; offline alternatives need paper only; every Osaan outcome is practised; exam tasks are in the filosofia formats of contract §B, original, with model answers whose points add up, the osuvuus/eheys/vakuuttavuus scoring guide, typical errors and the fixed line; files at most 500 lines; Opiskelijalle within 600 words; consistent voice with topic 01 and the style guide; plain, correct Finnish. Do not edit.`],
}
const runChecks = keys => parallel(keys.map(k => () => agent(CHECKS[k][1], { label: `check:${k}`, phase: 'Check', model: CHECKS[k][0], schema: CHECK }).then(r => r && ({ check: k, ...r }))))

phase('Check')
let checks = (await runChecks(Object.keys(CHECKS))).filter(Boolean)
const history = [{ round: 0, foundation, writers, checks }]
let failing = checks.filter(c => !c.passed || c.must_fix.length)
if (failing.length) {
  phase('Fix')
  const items = failing.flatMap(c => c.must_fix.map(f => ({ check: c.check, ...f })))
  const owners = { '01': `the ${MOD} topic 01 file, docs/style-guide.md and content/pages/opetussuunnitelma.md`, '02-04': `the ${MOD} topic files 02-04`, '05-07': `the ${MOD} topic files 05-07`, '08-10': `the ${MOD} topic files 08-10`, 'data': 'data/ (not curriculum.yaml), subject.yaml and the other pages' }
  const groups = [...new Set(items.map(i => i.group))].filter(g => owners[g])
  const fixes = (await parallel(groups.map(g => () => agent(`You are the fixer for ${owners[g]}. ${RF} You own only those files. Fix each item at its root; never invent a quotation or fact (a passage you cannot confirm on an opened edition page is replaced or removed). After fixing, check every front matter of your files still has exam_tasks, primary_texts and review_status.
${g === 'data' ? '' : WRITE}
Items: ${JSON.stringify(items.filter(i => i.group === g))}`, { label: `fix:${g}`, phase: 'Fix', model: 'sonnet', schema: REPORT }).then(r => r && ({ group: g, ...r }))))).filter(Boolean)
  const re = (await runChecks(failing.map(c => c.check))).filter(Boolean)
  checks = checks.map(c => re.find(r => r.check === c.check) || c)
  history.push({ round: 1, fixes, recheck: re })
  failing = checks.filter(c => !c.passed || c.must_fix.length)
}
const finalOpen = failing.flatMap(c => c.must_fix.map(f => ({ check: c.check, ...f })))

phase('Judge')
const judgement = await agent(`You are the judge; you wrote nothing in this project. Rule from files only: ${ROOT}\\${BRIEF}, CLAUDE.md, the contract, the style guide, the ${MOD} topics, data/, the pages. Build yourself. Read at least four topics in full (${mod}-01 and one per writer group), including their primary-text boxes (open two edition pages yourself and compare the original and the translation), exam tasks, model answers and 45-minute plans. Rule first on the FINAL recheck's open items: ${JSON.stringify(finalOpen)} (real or not; blocks or not). Then rule on each Done-when line. Context to verify: ${JSON.stringify(history).slice(0, 40000)}
Write ${ROOT}\\${JUDGEMENT} (under 150 lines): verdict (accept / accept-with-minors / reject), a table, remaining items, at most 5 plain lines for the operator. Do not commit.`, { label: 'judge', phase: 'Judge', model: 'opus', schema: { type: 'object', properties: { verdict: { type: 'string', enum: ['accept', 'accept-with-minors', 'reject'] }, operator_summary: { type: 'string' }, remaining: { type: 'array', items: { type: 'string' } } }, required: ['verdict', 'operator_summary', 'remaining'] } })

return { foundation, writers, checks, final_open: finalOpen, judgement }
