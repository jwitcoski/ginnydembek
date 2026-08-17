# Consulting Copy Audit

**Site:** Ginny Dembek Ph.D. (tutoring homepage, `/consulting`, `/resume`)  
**Scope:** User-facing English copy only. No code, routes, APIs, schema, analytics, accessibility attributes, SEO metadata, or styling changes proposed for implementation in this pass.  
**Status:** Audit only. Do not edit webpage files until approved.  
**Methods:** `ai-check` (forensic AI-signal scoring) and `humanize` (rewrite proposals). Facts checked against existing site copy and `project_specs.md`.

---

## Inventory of user-facing English copy

| Surface | Primary sources |
|---|---|
| Homepage hero, CTAs | `src/app/components/home/hero-section/index.tsx` |
| Who / tutoring audiences | `src/data/page-data.ts` (`whoItsFor`), `src/app/components/home/who-its-for/index.tsx` |
| How it works | `src/data/page-data.ts` (`howItWorks`), `src/app/components/home/how-it-works/index.tsx` |
| Focus / outcomes framing | `src/data/page-data.ts` (`whatChanges`), `src/app/components/home/what-changes/index.tsx` |
| Practical details | `src/data/page-data.ts` (`logisticsItems`), `src/app/components/home/logistics/index.tsx` |
| About / trust | `src/app/components/home/trust/index.tsx` |
| Contact form, labels, success | `src/app/components/home/contact/index.tsx`, `src/data/page-data.ts` (`contactLinks`) |
| Consulting page | `src/data/consulting-data.ts`, `src/app/consulting/page.tsx`, consulting components under `src/app/components/consulting/` |
| Resume / biography / publications | `src/app/components/resume/*`, `src/data/page-data.ts` (`educationData`, `contactBar`) |
| Header / footer / logo | `src/app/components/layout/*` |

**Not found:** FAQ page, privacy policy marketing copy, testimonials, case-study narratives, pricing pages, error/empty states beyond form success and resume “News & Current Events: TBD”.

**Out of scope for rewrite implementation (per instructions):** page `<title>` / `description` metadata in `layout.tsx`, `consulting/page.tsx`, and `resume/page.tsx`. Em dashes and similar issues there are noted only under verification / follow-up.

---

## Site-level AI-CHECK REPORT

```
AI-CHECK REPORT
===============

VERDICT: Uncertain → Likely AI (marketing surfaces); Likely Human (resume research narrative)
CONFIDENCE: Medium
OVERALL SCORE: 12 / 27 (homepage + consulting marketing voice, taken as one corpus)
AI-EDITED FRACTION: Mixed authorship (~30-60%) — concrete logistics and affiliation facts sit inside polished, template-shaped section prose

SIGNAL BREAKDOWN
----------------
A. Perplexity            2  Safe consultant phrasing: "grounded in research", "broader partnership work", "evidence-aligned"
B. Burstiness            2  Many mid-length sentences (about 14–22 words) with little short/long contrast
C. Hedge density         1  Generally direct; mild softening in process copy
D. Structural tells      3  Parallel who/how/focus/logistics blocks; tricolon service lists; symmetrical section arcs
E. Specificity           2  Strong on location/format; weaker on what a first engagement looks like day to day
F. Transitions           1  Few classic "Furthermore" tells; repetition of "grounded" / "evidence-based" instead
G. Punctuation           3  Multiple em dashes in hero, consulting subtitle, trust, and how-it-works copy
H. Voice / register      2  About sections stay third-person; little "I" for a solo practice; polished-neutral throughout
I. Rhetorical scaffolding 2  Slogan steps ("Training that sticks"); "not X" pivots; mini-lesson closers

EVIDENCE LOG
------------
SIGNAL-G | "…surrounding areas—including virtual appointments." | severity: moderate
SIGNAL-G | "…research—organizational structure, teacher and tutor training…" | severity: moderate
SIGNAL-G | "…training—not guaranteed student outcomes." | severity: moderate (also Signal I diminishment)
SIGNAL-D | Repeated audience/process card grids with near-identical grammar | severity: strong
SIGNAL-A | "Broader partnership work grounded in special education research" | severity: moderate
SIGNAL-I | "Training that sticks" | severity: moderate (mini-aphorism / slogan heading)
SIGNAL-I | "The aim is stronger systems and training—not guaranteed student outcomes." | severity: moderate
SIGNAL-H | About/trust blocks narrate "Ginny Dembek Ph.D. is…" rather than first-person practice voice | severity: moderate
SIGNAL-E | "organizational structure, teacher and tutor training, and literacy intervention" repeated as a stack without a concrete first-meeting picture | severity: weak–moderate
SIGNAL-A | Resume consulting block: "Comprehensive evaluation services", "Customized workshops" | severity: moderate

WHAT GAVE IT AWAY
-----------------
The marketing pages are careful about outcomes and logistics, which is human and responsible. What still reads as template is the architecture: matched section cards, repeated credibility stacks, em dashes as list-joiners, and slogan-like step titles. The about voice stays in brochure third person, so the site explains credentials well but rarely sounds like one professor speaking to a parent or school leader.

RECOMMENDED FIXES
-----------------
1. Remove em dashes from all client-facing strings; use periods or commas.
2. Rewrite about/trust in first person, client-centered, without self-congratulatory headings.
3. Replace slogan process titles and generic "partnership / grounded in research" phrasing with concrete descriptions of the work.
```

**Resume long-form research/teaching prose** scores closer to **Likely Human** (academic register, named publications, uneven sentence length), but several resume marketing sub-blocks (consulting expertise cards, tutoring “specialized services,” role epithet line) still fire Signals A/D/I and are included in the revision table.

---

## Proposed revisions

For each row: proposed text is a `humanize` rewrite candidate. Facts are preserved or softened, never strengthened. “Verification needed” means do not ship that line until Dr. Dembek confirms.

### Homepage hero and primary CTAs

| File path | Current text | AI-like, vague, or credibility issue (`ai-check`) | Proposed revision (`humanize`) | Reason for the change | Verification needed |
|---|---|---|---|---|---|
| `src/app/components/home/hero-section/index.tsx` | Educational consulting and tutoring grounded in research. | Signal A/E: “grounded in research” is a safe credibility phrase with no client-facing meaning; headline could belong to many education consultants. | Literacy tutoring for students in Brooklyn, and consulting for schools that need clearer literacy systems. | States who is helped and with what; drops vague research claim from the first line (research still belongs in About). | No |
| `src/app/components/home/hero-section/index.tsx` | Special education faculty at Brooklyn College. In-person tutoring for families in Brooklyn, and broader consulting for schools and organizations across NYC and surrounding areas—including virtual appointments. | Signal G em dash; Signal A “broader consulting”; stacks three offers in one breath. | I teach special education at Brooklyn College. I work one-to-one with students and families in Brooklyn, and I consult with schools and organizations in New York City and nearby areas. Virtual consulting appointments are available. | First-person practice voice; splits tutoring vs consulting; removes em dash and “broader.” | No |
| `src/app/components/home/hero-section/index.tsx` | Request a Free Consultation | Mild marketing CTA; accurate per intake, but “Request a Free…” is campaign-like. | Schedule a conversation | Concrete next step; free first consult can stay in body copy and logistics. | No |
| `src/app/components/home/hero-section/index.tsx` | See who this is for | Landing-page template CTA (Signal D). | See who I work with | Clearer, less template-y; still points to `#who`. | No |
| `src/app/components/layout/header/index.tsx` | Free Consultation | Accurate but abrupt as a nav button label. | Schedule a conversation | Matches hero CTA; still honest once body copy states the first conversation is free. | No |

### Homepage: who / how / focus / logistics

| File path | Current text | AI-like, vague, or credibility issue (`ai-check`) | Proposed revision (`humanize`) | Reason for the change | Verification needed |
|---|---|---|---|---|---|
| `src/app/components/home/who-its-for/index.tsx` | Who this is for | Template section label (acceptable, but paired with template CTA above). | Who I work with | Aligns with revised CTA; slightly more human. | No |
| `src/app/components/home/who-its-for/index.tsx` | Tutoring is individualized educational support for students and families. It complements, rather than replaces, what schools provide. Schools and organizations seeking broader partnership work can learn about consulting separately. | Signal A “broader partnership work”; otherwise sound. | Tutoring is individualized educational support for students and families. It complements school services; it does not replace them. Schools and organizations looking for training or program support can learn about consulting separately. | Replaces vague partnership language with concrete consulting categories already used on site. | No |
| `src/data/page-data.ts` (`whoItsFor.tutoring.intro`) | One-to-one educational support for students who need structured literacy instruction, content-area strategies, and executive skills beyond general homework help. | Mild tricolon stack; otherwise clear and specific. | One-to-one support for students who need structured literacy instruction, content-area strategies, and executive skills that go beyond homework help. | Small clarity edit; keeps service scope unchanged. | No |
| `src/app/components/home/who-its-for/index.tsx` | Organizational structure, teacher and tutor training, and literacy intervention guidance—available across NYC and surrounding areas, including virtual appointments. | Signal G em dash; repeated service stack. | I advise on organizational structure, teacher and tutor training, and literacy intervention. Work is available across NYC and nearby areas, including virtual appointments. | Removes em dash; first person; same facts. | No |
| `src/app/components/home/how-it-works/index.tsx` | Tutoring is planned around your child, using methods drawn from special education research and classroom practice. The goal is steady, measurable skill growth, not guaranteed grades or outcomes. | Signal I “not X” pivot; “measurable skill growth” edges toward unsupported outcome language even with the disclaimer. | Tutoring is planned around your child, using methods from special education research and classroom practice. We set clear skill goals and track progress. I do not promise grades or outcomes. | Keeps the important disclaimer while stating the actual process in positive terms. | No |
| `src/data/page-data.ts` (`howItWorks[0]`) | Assessment-based planning / Work begins with assessment that informs individualized goals for your child or program. | “Assessment” is vague for parents (formal testing vs informal review?). | Getting clear on needs / We start by reviewing current schoolwork, prior evaluations you already have, and your goals, then set individualized targets for your child. | More parent-readable; does not invent a new assessment product. | Yes |
| `src/data/page-data.ts` (`howItWorks[1]`) | Evidence-based instruction / Instruction draws on research-supported methods from special education and literacy intervention. | Overused “evidence-based” credibility phrase (Signal A) without naming the kind of methods. | Instruction rooted in literacy research / Instruction draws on research-supported methods from special education and literacy intervention, matched to your child’s goals. | Slightly less slogan-like title; body stays fact-safe. | No |
| `src/data/page-data.ts` (`whatChanges[2]`) | A path toward independence / Instruction emphasizes metacognitive strategies and gradual release of responsibility so your child can do more on their own. | Soft marketing metaphor in the title (“a path toward”). | Building independence over time / Instruction emphasizes strategies students can apply themselves, with support fading as skills strengthen, so your child can do more on their own. | Same idea in plainer language; no new outcome promise. | No |
| `src/app/components/home/what-changes/index.tsx` | What this work focuses on for your child | Slightly stiff / template. | What tutoring focuses on | Shorter and clearer. | No |
| `src/data/page-data.ts` (`logisticsItems` Next step) | Send a short note about your child and what kind of support you are looking for. Dr. Dembek will follow up to discuss whether tutoring is a fit. Schools and organizations can inquire about consulting on the consulting page. | Voice split: “you” then “Dr. Dembek will.” | Send a short note about your child and the support you are looking for. I will follow up to discuss whether tutoring is a fit. Schools and organizations can ask about consulting on the consulting page. | Consistent first-person practice voice. | No |
| `src/app/components/home/contact/index.tsx` | Send Message | Generic form button. | Send your note | Matches the “short note” invitation used in logistics. | No |

### Homepage about / trust

| File path | Current text | AI-like, vague, or credibility issue (`ai-check`) | Proposed revision (`humanize`) | Reason for the change | Verification needed |
|---|---|---|---|---|---|
| `src/app/components/home/trust/index.tsx` | Faculty expertise, applied in practice | Self-congratulatory headline (Signal H/I). | About my background | Neutral, useful label; lets the facts do the credibility work. | No |
| `src/app/components/home/trust/index.tsx` | Ginny Dembek Ph.D. is faculty in the School of Education at Brooklyn College and a third-generation special educator. Her research focuses on literacy intervention, writing instruction, and evidence-based supports for students with disabilities, including collaborative literacy tutoring work with New York Foundling. | Third-person brochure voice on a solo practice site (Signal H); “evidence-based supports” is safe filler. | I am faculty in the School of Education at Brooklyn College and a third-generation special educator. My research focuses on literacy intervention, writing instruction, and supports for students with disabilities, including collaborative literacy tutoring work with New York Foundling. | First person; keeps named affiliation and partner; drops redundant “evidence-based.” | Yes (third-generation framing; NY Foundling description) |
| `src/app/components/home/trust/index.tsx` | She holds a Ph.D. in Special Education from Penn State University and has been on the Brooklyn College faculty since 2013, preparing teacher candidates in special education, inclusive education, and literacy instruction. | Fine factually; third person. | I hold a Ph.D. in Special Education from Penn State University and have been on the Brooklyn College faculty since 2013, preparing teacher candidates in special education, inclusive education, and literacy instruction. | Voice consistency only. | No |
| `src/app/components/home/trust/index.tsx` | That faculty and research background informs tutoring for families and broader consulting for schools and organizations—including organizational structure and teacher or tutor training. | Signal G em dash; Signal A “broader consulting”; restates the service stack. | That background shapes how I tutor students and how I advise schools and organizations on structure, training, and literacy intervention. | Connects credentials to client work without repeating the full menu behind an em dash. | No |
| `src/app/components/home/trust/index.tsx` | View academic resume and publications | Clear; keep. | View academic resume and publications | No change needed. | No |

### Consulting page

| File path | Current text | AI-like, vague, or credibility issue (`ai-check`) | Proposed revision (`humanize`) | Reason for the change | Verification needed |
|---|---|---|---|---|---|
| `src/data/consulting-data.ts` (`consultingHero.subtitle`) | Broader partnership work grounded in special education research—organizational structure, teacher and tutor training, and evidence-based literacy supports for public and private schools, programs, and nonprofits. | Signal A “Broader partnership work” / “grounded in”; Signal G em dash; “evidence-based literacy supports” is generic. | Consulting for public and private schools, programs, and nonprofits on organizational structure, teacher and tutor training, and literacy intervention. The work draws on special education research and is adapted to your setting. | States audience and offer first; moves research claim to a supporting sentence without em dash. | No |
| `src/data/consulting-data.ts` (`consultingAudiences.intro`) | Consulting is separate from one-to-one tutoring. It is partnership work with schools and organizations that want systems and training aligned with student needs. | “Partnership work” is soft consultant language. | Consulting is separate from one-to-one tutoring. It is work with schools and organizations that want systems and training aligned with student needs. | Small cut; same meaning. | No |
| `src/app/components/consulting/how/index.tsx` | Partnerships are planned around your setting and goals, using methods drawn from special education research and classroom practice. The aim is stronger systems and training—not guaranteed student outcomes. | Signal G + Signal I negation pivot; “stronger systems” is vague. | Consulting is planned around your setting and goals, using methods from special education research and classroom practice. The focus is clearer systems and usable training. I do not guarantee student outcomes. | Positive claim + separate honest limit. | No |
| `src/data/consulting-data.ts` (`consultingHowItWorks[1]`) | Research-informed recommendations / Guidance draws on special education and literacy intervention research, adapted to your setting rather than a one-size approach. | “one-size approach” is a mild cliché (Signal I diminishment family). | Research-informed recommendations / Guidance draws on special education and literacy intervention research, then adapts to your staffing, students, and current supports. | Same idea with concrete adaptation factors already implied elsewhere. | No |
| `src/data/consulting-data.ts` (`consultingHowItWorks[2]`) | Training that sticks / Professional development for teachers and tutors is designed for classroom use—structured literacy, inclusive practice, and intervention methods that transfer to daily work. | Signal I slogan title; Signal G em dash. | Training meant for classroom use / Professional development for teachers and tutors focuses on structured literacy, inclusive practice, and intervention methods they can use in daily work. | Removes slogan and em dash; keeps content. | No |
| `src/data/consulting-data.ts` (`consultingHowItWorks[3]`) | Systems that support students / Consulting can address how supports are organized across a program so students receive consistent, evidence-aligned instruction. | Vague title; “evidence-aligned” is safe filler. | Organizing supports across a program / Consulting can address how literacy and intervention supports are organized so students receive consistent instruction. | More concrete; drops filler adjective. | No |
| `src/data/consulting-data.ts` (`consultingLogistics` Insurance) | Insurance / Insurance and Medicaid are not accepted. | Credibility/clarity issue: insurance language fits family tutoring; on a school/org consulting page it can confuse buyers. | (Prefer remove this card from `/consulting`, or relabel.) Optional replacement if kept: Payment / Consulting fees are discussed during the free first conversation. Insurance and Medicaid do not apply. | Avoids implying clinical billing for organizational work. | Yes |
| `src/app/components/consulting/trust/index.tsx` | Faculty expertise for organizational work | Self-congratulatory (Signal H). | About the consulting practice | Neutral heading. | No |
| `src/app/components/consulting/trust/index.tsx` | Ginny Dembek Ph.D. is faculty… (same third-person block as homepage) | Duplicate brochure bio (Signal H/D). | Mirror the approved first-person homepage About copy, shortened to consulting-relevant sentences. Example: I am faculty in the School of Education at Brooklyn College. My research and teacher-preparation work inform consulting on organizational structure, teacher and tutor training, and literacy intervention for schools and organizations. | One voice across pages; still points to resume for depth. | Yes (same bio facts as homepage) |
| `src/app/components/consulting/hero/index.tsx` | Request a Free Consultation / See who this is for | Same CTA issues as homepage. | Schedule a conversation / See who consulting is for | Parallel to homepage fixes. | No |
| `src/app/consulting/page.tsx` (cross-link) | Looking for tutoring instead? / One-to-one literacy tutoring and academic support for students and families is offered separately, in person in Brooklyn. / See tutoring | Clear and specific; keep. | No change. | Already human and concrete. | No |

### Resume and biography surfaces

| File path | Current text | AI-like, vague, or credibility issue (`ai-check`) | Proposed revision (`humanize`) | Reason for the change | Verification needed |
|---|---|---|---|---|---|
| `src/app/components/resume/hero.tsx` | Researcher, Educator, Consultant, Advocate | Role-label stack / CV epithet (Signal D); “Advocate” is broad and political-adjacent relative to site boundaries. | Special education faculty, researcher, and educational consultant | Drops the slogan quartet; keeps verifiable roles. | Yes (“Advocate” removal; preferred self-description) |
| `src/app/components/resume/hero.tsx` | As a third-generation special educator, I am committed to improving the lives of students with disabilities and increasing their success and inclusion in the general education classroom. | Earnest but abstract mission statement (Signal E); “improving the lives” is uplift language. | As a third-generation special educator, I work on literacy instruction, intervention research, and teacher preparation so students with disabilities can succeed in general education classrooms. | Ties identity to concrete work already documented on the resume. | Yes (third-generation; framing) |
| `src/app/components/resume/about-me.tsx` | The foundation of my research, teaching, and service is built on three generations of knowledge advocating for higher expectations and equity for students with special needs. I am dedicated to focusing on individual outcomes and ensuring that teacher candidates are prepared to be advocates for their students. | Dense academic mission prose; “dedicated to focusing on” is filler; reads like a CV personal statement. | My research, teaching, and service grow out of three generations of special education practice. I focus on individual student learning and prepare teacher candidates to advocate for the students they teach. | Shorter, clearer, same claims. | Yes |
| `src/app/components/resume/about-me.tsx` | 10+ Years at Brooklyn College / 6+ Peer-Reviewed Publications / 30+ Conference Presentations | Credibility stat strip; numbers may be stale or under-count; “+” invites inflation reading. | Prefer exact counts Dr. Dembek confirms, or remove the strip and let the publications list speak. | Avoids soft numeric marketing. | Yes |
| `src/app/components/resume/experience.tsx` | …my intervention has shown success in teaching this skill. / After my intervention, students with disabilities are able to voice their strengths and challenges… | Outcome language that may overclaim beyond published findings (Signal E/credibility). | Do not strengthen. Candidate soften: My intervention research examines how to teach students to voice strengths and challenges during problem-solving tasks. Published studies describe the methods and findings in more detail below. | Keeps research topic without website-level success claims. | Yes |
| `src/app/components/resume/publications.tsx` (`ConsultingContent`) | Educational Program Evaluation: Comprehensive evaluation services for special education interventions. | Banned/generic: “Comprehensive”; services menu may exceed confirmed private-practice offerings. | Educational program evaluation: Evaluation support for special education interventions, when that is part of an agreed consulting scope. | Removes “comprehensive”; avoids implying a standing product line. | Yes |
| `src/app/components/resume/publications.tsx` (`ConsultingContent`) | Professional Development Design: Customized workshops and multi-year learning initiatives. | “Customized” is generic consultant language; multi-year initiatives may overpromise availability. | Professional development design: Workshops and learning series on literacy intervention and inclusive practice, scoped with each partner. | Plainer; no duration promise. | Yes |
| `src/app/components/resume/publications.tsx` (`TutoringContent`) | Specialized Literacy Tutoring: Dyslexia, dysgraphia, language-based learning disabilities; evidence-based structured literacy. | Clinical-condition listing can blur educational vs clinical care boundaries in `project_specs.md`. | Literacy tutoring for students with reading, writing, or language-based learning needs, using structured literacy methods. | Stays educational; avoids sounding diagnostic/clinical. | Yes |
| `src/app/components/resume/publications.tsx` (`TutoringContent`) | Assessment-Based Planning: Comprehensive assessment informing individualized goals | “Comprehensive assessment” overclaims / clinical tone. | Planning from current information: Review of schoolwork and available records to set individualized goals | Aligns with tutoring logistics; avoids implying a full psychoeducational evaluation. | Yes |
| `src/app/components/resume/publications.tsx` (`NewsContent`) | TBD | Empty state visible to users. | Hide the News section until there is real content, or replace with a single factual line Dr. Dembek supplies. | Empty “TBD” undermines credibility. | Yes |
| `src/app/components/resume/page.tsx` | Back to Consulting Site (hero) / Looking for tutoring? / Looking for consulting? | Most of this is clear; “Back to Consulting Site” undersells the tutoring homepage. | Back to home | Accurate site structure. | No |
| `src/data/page-data.ts` (`educationData`) | Assistant Professor teaching courses in special education… | Rank may be outdated; credibility risk if wrong. | Keep only if current rank is still Assistant Professor; otherwise update to the correct title. | Academic accuracy. | Yes |

### Footer and minor chrome

| File path | Current text | AI-like, vague, or credibility issue (`ai-check`) | Proposed revision (`humanize`) | Reason for the change | Verification needed |
|---|---|---|---|---|---|
| `src/app/components/layout/footer/index.tsx` | Literacy tutoring in Brooklyn and education consulting across NYC and surrounding areas | Clear and specific; good. | Optional tighten: Literacy tutoring in Brooklyn. Education consulting across NYC and nearby areas. | Slightly cleaner rhythm only. | No |
| Contact success message | Thank you. Your message has been sent. | Fine. | No change. | Clear confirmation. | No |

### Intentionally not rewritten into stronger claims

These were reviewed and left alone or only lightly edited because strengthening them would invent credibility:

- Brooklyn College faculty affiliation and faculty page link
- Penn State Ph.D.
- Faculty since 2013
- Free first consultation
- In-person Brooklyn tutoring only; no online tutoring
- NYC-area consulting with virtual appointments available
- Insurance / Medicaid not accepted (for tutoring)
- Named publication and presentation citations on the resume
- Absence of testimonials (correct per `project_specs.md`)

---

## Questions requiring verification

1. **Faculty rank:** Is “Assistant Professor” still accurate in `educationData`, or has the title changed?
2. **“Third-generation special educator”:** Confirm this personal framing is approved for public marketing pages, not only the academic resume.
3. **New York Foundling:** Confirm the preferred public phrasing (collaborative literacy tutoring / research collaboration / program years) and whether Robin Hood Foundation funding should appear on public consulting pages or only on the resume.
4. **Assessment language:** For tutoring, what happens in the first sessions: review of existing records only, informal instructional assessment, or something else parents should expect?
5. **IEP / 504 support:** Confirm scope (meeting preparation and educational planning support only; not legal representation).
6. **Dyslexia / dysgraphia wording on the resume:** Keep named conditions, or prefer “reading, writing, and language-based learning needs” to stay clearly educational?
7. **Resume consulting menu:** Are “program evaluation,” “inclusive education implementation,” “curriculum modification,” and “multi-year PD” active private-practice offerings, historical/academic roles, or aspirations?
8. **Outcome phrasing in research narrative:** Can the site say the intervention “has shown success,” or should it point only to published articles?
9. **Stat strip:** Exact counts for years at Brooklyn College, peer-reviewed publications, and conference presentations (including whether editorial pieces count).
10. **“Advocate”** on the resume hero: keep, remove, or replace?
11. **Consulting page insurance card:** Remove, keep, or replace with payment/fee language?
12. **Response expectations:** Any approved line about how inquiries are answered (without inventing a response-time promise)?
13. **Availability of Academia.edu** URL (noted pending in `project_specs.md`).
14. **News section:** Supply real items or remove “TBD.”

---

## Five highest-impact revisions

1. **Rewrite the homepage hero headline and subheadline** so the first screen answers who she is and what she offers in concrete terms, without “grounded in research” or an em dash stack.
2. **Convert About/trust copy to first person** and replace self-congratulatory headings (“Faculty expertise…”) with plain labels.
3. **Humanize consulting hero + how-it-works titles** (“Broader partnership work,” “Training that sticks,” em dashes, “not guaranteed…” pivots).
4. **Align CTAs** to concrete actions (“Schedule a conversation,” “See who I work with”) while keeping the free first consultation fact in body/logistics copy.
5. **Tighten resume public-facing consulting/tutoring blurbs** that still use “comprehensive,” clinical condition lists, and success claims that need verification.

---

## Recommended site voice statement

Write as Dr. Dembek speaking directly to a parent or school leader: calm, specific, and practical. Lead with the student’s or program’s need, then explain what you do. Prefer plain words over research slogans. Use “I” for the practice and “you” for the reader’s next step. State limits clearly (no grade guarantees, complementary to school services, fees discussed in consultation) without slogan pivots. Let credentials and publications carry authority; do not narrate how expert you are.

---

## Content gaps only Dr. Dembek should fill

Do not invent these. Leave placeholders or omit until she supplies them.

1. A short first-person paragraph on why she is opening this independent practice now (transition story), without oversharing or institutional conflict.
2. What the free first conversation actually covers (length ballpark only if she wants it public; agenda topics).
3. One or two anonymized, approved examples of tutoring focus areas or consulting scopes (still no client names).
4. Approved testimonials, if and when clients consent.
5. Exact current title/rank and any preferred public bio sentence for Brooklyn College.
6. Preferred public description of New York Foundling / Robin Hood / Research Foundation CUNY work.
7. Whether program evaluation and multi-year PD are current consulting offers.
8. News or speaking items worth listing, or removal of the empty News section.
9. Any languages, grade bands of deepest experience, or school types she wants emphasized beyond current copy.
10. Contact preferences beyond email/form (phone callback policy, etc.), if any.

---

## Implementation note

No webpage files were edited in this pass. After approval, apply only accepted rows, keep verification-flagged rows on hold, and leave SEO metadata unchanged unless separately requested.
