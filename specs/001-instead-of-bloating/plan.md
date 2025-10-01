# Implementation Plan: Navigation and Dedicated Section Pages

**Branch**: `001-instead-of-bloating` | **Date**: 2025-10-01 | **Spec**: [spec.md](./spec.md)
**Input**: Feature specification from `/specs/001-instead-of-bloating/spec.md`

## Summary

Create dedicated pages for Education, Work Experience, Publications, and Awards with individual routes (/education, /work-experience, /publications, /awards). Add navigation menu with links to all sections including existing Home, About, and Contact pages. Remove full section content from home page to prevent bloat. Use Next.js Pages Router with SSG for fast performance, extend existing Topbar component for navigation, and reuse existing section components for content rendering.

## Technical Context

**Language/Version**: JavaScript/React 18.2.0, Next.js 14.2.7, Node.js 22.12.0
**Primary Dependencies**: Next.js (pages router), React, React Bootstrap 5.3.0, GSAP 3.12.2
**Storage**: Static JSON files in public/jsons/ (education.json, work-experience.json, publications.json, awards.json)
**Testing**: Manual testing via quickstart.md, Lighthouse CI for performance validation
**Target Platform**: Web browsers (Chrome, Firefox, Safari), mobile responsive (Bootstrap 5 breakpoints)
**Project Type**: Web frontend (Next.js single application)
**Performance Goals**: FCP < 1.5s, TTI < 3.5s on 3G (per Constitution Principle I)
**Constraints**: Lighthouse scores - Performance ≥90, Accessibility ≥95, Best Practices ≥90, SEO ≥95
**Scale/Scope**: 7 pages total (4 new + 3 existing), 4 JSON data files, ~15 navigation links across site

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

### Principle I: Performance-First ✅ PASS
- **Requirement**: SSG default, FCP < 1.5s, TTI < 3.5s, code-split JavaScript
- **Implementation**: All pages use Next.js SSG (getStaticProps if needed), Link component provides prefetching, minimal JS overhead (~2KB for navigation)
- **Validation**: Lighthouse CI in tasks, manual 3G testing in quickstart.md

### Principle II: Content-Driven Development ✅ PASS
- **Requirement**: Content in JSON/markdown, no code changes for updates
- **Implementation**: All section content lives in public/jsons/*.json files, existing pattern maintained
- **Validation**: Content editors can modify JSON without touching React code

### Principle III: Responsive Design ✅ PASS
- **Requirement**: Mobile-first, Bootstrap 5 breakpoints, touch targets ≥44px
- **Implementation**: Existing Topbar uses Bootstrap responsive Navbar with offcanvas for mobile, new links inherit behavior
- **Validation**: Quickstart.md tests on 375px (mobile), 768px (tablet), 1920px (desktop)

### Principle IV: Accessibility ✅ PASS
- **Requirement**: WCAG 2.1 Level AA, semantic HTML, keyboard navigation, focus indicators
- **Implementation**: Next.js Link provides accessible navigation, aria-current="page" for active state, visible focus indicators via CSS
- **Validation**: Quickstart.md includes keyboard navigation and screen reader tests, Lighthouse accessibility score ≥95

### Principle V: SEO Optimization ✅ PASS
- **Requirement**: Unique meta tags per page, structured data, semantic URLs, sitemap
- **Implementation**: Each page uses Next.js Head with unique title/description, Open Graph tags, Twitter Cards
- **Validation**: Quickstart.md validates unique metadata per page, Lighthouse SEO score ≥95

**Initial Constitution Check**: ✅ PASS - No violations, no complexity justifications needed

## Project Structure

### Documentation (this feature)
```
specs/001-instead-of-bloating/
├── plan.md              # This file (/plan command output)
├── research.md          # Phase 0 output (/plan command) ✅
├── data-model.md        # Phase 1 output (/plan command) ✅
├── quickstart.md        # Phase 1 output (/plan command) ✅
├── contracts/           # Phase 1 output (/plan command) ✅
│   ├── navigation-contract.md
│   └── page-routes-contract.md
└── tasks.md             # Phase 2 output (/tasks command - NOT created by /plan)
```

### Source Code (repository root)

This is a Next.js web application using the Pages Router pattern:

```
pages/
├── _app.js              # [EXISTING] App wrapper
├── _document.js         # [EXISTING] Document wrapper
├── index.js             # [MODIFIED] Home page - remove full section content
├── about/
│   └── index.js         # [EXISTING] About page
├── contact.js           # [EXISTING] Contact page
├── education.js         # [NEW] Education page
├── work-experience.js   # [NEW] Work experience page
├── publications.js      # [NEW] Publications page
└── awards.js            # [NEW] Awards page

components/
├── layout.js            # [EXISTING] Layout wrapper (wraps all pages)
├── topbar.js            # [MODIFIED] Add new navigation links, active state detection
├── education.js         # [EXISTING] Education section component
├── experience.js        # [EXISTING] Generic experience/work component
├── publication.js       # [EXISTING] Publications component
├── metadata.js          # [EXISTING] Metadata helper
├── hello.js             # [EXISTING] Hero/intro component
├── footer.js            # [EXISTING] Footer component
└── scrollToTop.js       # [EXISTING] Scroll to top button

public/
└── jsons/
    ├── education.json         # [EXISTING] Education data
    ├── work-experience.json   # [EXISTING] Work experience data
    ├── publications.json      # [EXISTING] Publications data
    └── awards.json            # [EXISTING] Awards data

styles/
└── [existing CSS files]       # [EXISTING] Styling
```

**Structure Decision**: Next.js Pages Router with file-based routing. This is a single web application (not backend/frontend split). New page files in `pages/` directory will automatically create routes. Existing component reuse maximizes code efficiency. No new test directories needed at this phase (manual testing via quickstart.md).

## Phase 0: Outline & Research ✅ COMPLETE

**Status**: Research complete, all decisions documented in [research.md](./research.md)

**Key Decisions Made**:
1. **Routing**: Next.js Pages Router (existing pattern) with new page files
2. **Navigation**: Extend existing Topbar component with new links
3. **Content**: Continue using JSON files in public/jsons/
4. **Components**: Reuse existing Education, Experience, Publication components
5. **SEO**: Next.js Head component with unique meta tags per page
6. **Performance**: SSG for all pages, Link prefetching, ~2KB nav overhead

**No NEEDS CLARIFICATION remain** - All technical decisions resolved.

## Phase 1: Design & Contracts ✅ COMPLETE

**Status**: Design complete, all artifacts generated.

**Outputs**:
1. ✅ **data-model.md**: Entities defined (NavigationItem, NavigationMenu, EducationEntry, WorkExperienceEntry, Publication, Award, PageMetadata)
2. ✅ **contracts/navigation-contract.md**: Enhanced Topbar component contract with 7 nav items, active state, responsive behavior
3. ✅ **contracts/page-routes-contract.md**: Route definitions for /education, /work-experience, /publications, /awards, modified /
4. ✅ **quickstart.md**: Manual testing guide with 10 test suites covering navigation, routing, accessibility, SEO, performance

**Entity Summary**:
- NavigationItem: label, href, isActive
- NavigationMenu: ordered list of NavigationItems
- PageMetadata: title, description, OG tags per page
- Existing entities: EducationEntry, WorkExperienceEntry, Publication, Award (from JSON files)

**Contract Summary**:
- Enhanced Topbar renders 7 navigation items with active state detection (useRouter)
- 4 new page routes (/education, /work-experience, /publications, /awards) + modified home (/)
- Each page has unique metadata, isolated content, accessibility support

**Post-Design Constitution Check**: ✅ PASS - Design complies with all constitutional principles.

## Phase 2: Task Planning Approach

*This section describes what the /tasks command will do - DO NOT execute during /plan*

**Task Generation Strategy**:

1. **From contracts/navigation-contract.md**:
   - Modify Topbar component to add new navigation links
   - Implement active link detection with useRouter
   - Add aria-current="page" to active link
   - Test navigation rendering, active state, mobile offcanvas

2. **From contracts/page-routes-contract.md**:
   - Create pages/education.js with Education component, metadata
   - Create pages/work-experience.js with Experience component, metadata
   - Create pages/publications.js with Publication component, metadata
   - Create pages/awards.js with awards rendering, metadata
   - Modify pages/index.js to remove full section content
   - Test each route loads correctly, content isolated, direct URL access works

3. **From data-model.md**:
   - Define NavigationMenu configuration array (7 items)
   - Create PageMetadata objects for each page (unique titles/descriptions)
   - Ensure JSON data files are correctly imported per page

4. **From quickstart.md**:
   - Manual test navigation visibility (desktop/mobile)
   - Manual test page navigation (all 7 pages)
   - Manual test active link indication
   - Manual test direct URL access
   - Manual test browser back/forward
   - Manual test responsive behavior (375px, 768px, 1920px)
   - Manual test content separation (home not bloated)
   - Manual test accessibility (keyboard nav, focus visible)
   - Manual test SEO metadata (unique titles/descriptions per page)
   - Manual test performance (Lighthouse scores, FCP/TTI on 3G)

**Ordering Strategy**:
1. **Setup**: Verify environment (npm install, dev server running)
2. **Navigation First**: Modify Topbar to add links (enables navigation during development)
3. **Pages in Parallel**: Create all 4 new page files [P] (independent files)
4. **Home Page Modification**: Remove full sections from index.js
5. **Manual Testing**: Execute quickstart.md test suites
6. **Performance Validation**: Run Lighthouse CI, fix any issues
7. **Final Validation**: Ensure all constitutional requirements met

**Estimated Output**: 15-20 numbered, ordered tasks in tasks.md

**Dependencies**:
- Topbar modification blocks navigation testing
- Page creation can happen in parallel [P]
- Home modification depends on new pages existing (users need somewhere to navigate)
- Testing depends on all implementation complete
- Performance validation is final gate

**IMPORTANT**: This phase is executed by the /tasks command, NOT by /plan

## Phase 3+: Future Implementation

*These phases are beyond the scope of the /plan command*

**Phase 3**: Task execution (/tasks command creates tasks.md)
**Phase 4**: Implementation (execute tasks.md following constitutional principles)
**Phase 5**: Validation (run quickstart.md, verify Lighthouse scores, constitutional compliance)

## Complexity Tracking

*No complexity violations - all constitutional principles satisfied without exceptions.*

| Violation | Why Needed | Simpler Alternative Rejected Because |
|-----------|------------|-------------------------------------|
| N/A | N/A | N/A |

## Progress Tracking

**Phase Status**:
- [x] Phase 0: Research complete (/plan command)
- [x] Phase 1: Design complete (/plan command)
- [x] Phase 2: Task planning approach described (/plan command)
- [ ] Phase 3: Tasks generated (/tasks command)
- [ ] Phase 4: Implementation complete
- [ ] Phase 5: Validation passed

**Gate Status**:
- [x] Initial Constitution Check: PASS
- [x] Post-Design Constitution Check: PASS
- [x] All NEEDS CLARIFICATION resolved
- [x] Complexity deviations documented (none)

**Artifacts Generated**:
- [x] research.md - Technical decisions and best practices
- [x] data-model.md - Entity definitions and relationships
- [x] quickstart.md - Manual testing guide (10 test suites, 40+ test cases)
- [x] contracts/navigation-contract.md - Enhanced Topbar component contract
- [x] contracts/page-routes-contract.md - Route definitions and requirements

**Ready for /tasks command**: ✅ YES

---

*Based on Constitution v1.0.0 - See `.specify/memory/constitution.md`*
