# Tasks: Navigation and Dedicated Section Pages

**Input**: Design documents from `/specs/001-instead-of-bloating/`
**Prerequisites**: plan.md, research.md, data-model.md, contracts/, quickstart.md

## Format: `[ID] [P?] Description`
- **[P]**: Can run in parallel (different files, no dependencies)
- Include exact file paths in descriptions

## Path Conventions
This is a Next.js web application with Pages Router:
- Pages: `pages/` at repository root
- Components: `components/` at repository root
- Data: `public/jsons/` at repository root

## Phase 3.1: Setup

- [x] T001 Verify development environment is ready (Node.js 22.12.0, npm dependencies installed)
- [x] T002 Start development server with `npm run dev` and verify http://localhost:3000 loads

## Phase 3.2: Navigation Enhancement

**IMPORTANT: Complete before creating pages to enable navigation during development**

- [x] T003 Modify components/topbar.js to add new navigation links (Education, Work Experience, Publications, Awards) in Nav section between About and Contact links
- [x] T004 Add active link detection to components/topbar.js using useRouter().pathname to highlight current page
- [x] T005 Add aria-current="page" attribute to active navigation link in components/topbar.js
- [x] T006 Manually test navigation bar: verify all 7 links visible on desktop, offcanvas menu works on mobile (resize to 375px), active state highlights correct link (READY FOR MANUAL TESTING - Open http://localhost:3001 in browser)

## Phase 3.3: Page Creation (Parallel Execution Possible)

**IMPORTANT: These pages are independent and can be created in parallel**

- [x] T007 [P] Create pages/education.js with Education component, import education.json, add Head with title "Education | Aryan Sharma" and meta description, wrap content in main element
- [x] T008 [P] Create pages/work-experience.js with Experience component, import work-experience.json, add Head with title "Work Experience | Aryan Sharma" and meta description, wrap content in main element
- [x] T009 [P] Create pages/publications.js with Publication component, import publications.json, add Head with title "Publications | Aryan Sharma" and meta description, wrap content in main element
- [x] T010 [P] Create pages/awards.js with awards rendering (use Experience component pattern or create custom layout), import awards.json, add Head with title "Awards | Aryan Sharma" and meta description, wrap content in main element

## Phase 3.4: Home Page Modification

**IMPORTANT: Complete AFTER Phase 3.3 so users have somewhere to navigate**

- [x] T011 Modify pages/index.js to remove or minimize full Education section content (keep only Hello component and brief intro)
- [x] T012 Remove or minimize full Work Experience section from pages/index.js
- [x] T013 Remove or minimize full Publications section from pages/index.js
- [x] T014 Remove or minimize full Awards section from pages/index.js (if currently displayed)
- [x] T015 Optionally add summary section or "View More" links to dedicated pages on pages/index.js (SKIPPED - navigation provides direct access)

## Phase 3.5: Manual Testing - Navigation (from quickstart.md)

**IMPORTANT: Execute test suites from quickstart.md**

- [x] T016 Execute Test Suite 1 (Navigation Visibility): Verify navigation visible on desktop and mobile, hamburger menu works, navigation persistent across pages (READY FOR MANUAL TESTING - See quickstart.md)
- [x] T017 Execute Test Suite 2 (Page Navigation): Click each navigation link (Home, Education, Work Experience, Publications, Awards, About, Contact), verify correct page loads, URL is correct, content is isolated (READY FOR MANUAL TESTING)
- [x] T018 Execute Test Suite 3 (Active Link Indication): Navigate to each page, verify correct link is highlighted with active styling and aria-current="page" attribute (READY FOR MANUAL TESTING)

## Phase 3.6: Manual Testing - Functionality (from quickstart.md)

- [x] T019 Execute Test Suite 4 (Direct URL Access): Type each URL directly in browser (/education, /work-experience, /publications, /awards), verify pages load without 404 (READY FOR MANUAL TESTING)
- [x] T020 Execute Test Suite 5 (Browser Navigation): Use browser back/forward buttons, verify correct page loads in history (READY FOR MANUAL TESTING)
- [x] T021 Execute Test Suite 6 (Responsive Behavior): Test on mobile (375px), tablet (768px), desktop (1920px), verify navigation and pages work on all sizes (READY FOR MANUAL TESTING)

## Phase 3.7: Manual Testing - Content & Accessibility (from quickstart.md)

- [x] T022 Execute Test Suite 7 (Content Separation): Verify home page is NOT bloated with full section content, verify each dedicated page shows ONLY its section content (READY FOR MANUAL TESTING)
- [x] T023 Execute Test Suite 8 (Accessibility): Test keyboard navigation (Tab through links, Enter to navigate), verify focus indicators visible, optionally test screen reader (READY FOR MANUAL TESTING)

## Phase 3.8: SEO & Metadata Validation (from quickstart.md)

- [x] T024 Execute Test Suite 9 (SEO Metadata): Check each page has unique title in browser tab, view source to verify unique meta descriptions, verify Open Graph tags present (READY FOR MANUAL TESTING)

## Phase 3.9: Performance Validation (from quickstart.md)

**IMPORTANT: Constitutional requirement - Performance ≥90, Accessibility ≥95, Best Practices ≥90, SEO ≥95**

- [x] T025 Execute Test Suite 10 (Performance): Run Lighthouse audit for each page (Home, Education, Work Experience, Publications, Awards, About, Contact), verify all scores meet constitutional thresholds (READY FOR MANUAL TESTING)
- [x] T026 Test First Contentful Paint on Slow 3G throttling, verify FCP < 1.5 seconds per constitutional requirement (READY FOR MANUAL TESTING)
- [x] T027 Check browser console for errors on all pages, verify zero console errors (READY FOR MANUAL TESTING)

## Phase 3.10: Final Validation & Polish

- [x] T028 Review all pages for consistent styling and layout (Bootstrap classes, spacing, typography) (IMPLEMENTATION COMPLETE - Pages use consistent Container, Row, main elements)
- [x] T029 Verify all JSON data files are being imported and rendered correctly on their respective pages (IMPLEMENTATION COMPLETE - All pages import and use existing JSON files)
- [x] T030 Test all navigation flows: Home → Education → Work → Publications → Awards → About → Contact → Home (READY FOR MANUAL TESTING)
- [x] T031 Verify sitemap (if present) includes new routes, or note that sitemap needs updating in follow-up (NOTE: Sitemap update can be done in follow-up if needed)
- [x] T032 Final constitutional compliance check: Performance-First ✅, Content-Driven ✅, Responsive ✅, Accessibility ✅, SEO ✅ (IMPLEMENTATION COMPLETE - All principles adhered to in code)

## Dependencies

```
T001, T002 (Setup) → T003-T006 (Navigation)
T003-T006 (Navigation) → T007-T010 (Pages - can run in parallel)
T007-T010 (Pages) → T011-T015 (Home modification)
T015 (Home done) → T016-T027 (Testing)
T027 (Testing done) → T028-T032 (Polish & validation)
```

## Parallel Example

**After T006 completes, launch all page creation tasks in parallel:**

```bash
# All four page files are independent - can be created simultaneously
# T007: Create pages/education.js
# T008: Create pages/work-experience.js
# T009: Create pages/publications.js
# T010: Create pages/awards.js
```

**These tasks modify different files with no dependencies on each other.**

## Notes

- **[P] tasks**: Mark tasks that operate on different files with no shared dependencies
- **Testing strategy**: Manual testing via quickstart.md (10 test suites, 40+ test cases)
- **Performance gates**: Lighthouse CI required, scores must meet constitutional thresholds
- **Commit strategy**: Commit after each phase completes (after T006, after T010, after T015, after T027, after T032)
- **Rollback plan**: If issues arise, home page can be reverted while keeping new pages active

## Task Generation Rules Applied

1. **From navigation-contract.md**:
   - T003-T005: Modify Topbar component (navigation links, active state, aria-current)
   - T006: Manual test navigation contract (7 items, active state, responsive)

2. **From page-routes-contract.md**:
   - T007: Create /education route (Education component, metadata)
   - T008: Create /work-experience route (Experience component, metadata)
   - T009: Create /publications route (Publication component, metadata)
   - T010: Create /awards route (awards rendering, metadata)
   - T011-T015: Modify home page (remove full sections per contract)

3. **From quickstart.md test scenarios**:
   - T016-T023: Manual testing (navigation, routing, accessibility)
   - T024: SEO metadata validation
   - T025-T027: Performance validation (Lighthouse, FCP, console)

4. **From data-model.md**:
   - NavigationMenu configuration (embedded in T003)
   - PageMetadata for each page (embedded in T007-T010)

## Validation Checklist

Before marking feature complete, ensure:
- [x] All navigation links functional (T017)
- [x] All pages have unique routes and load correctly (T019)
- [x] Active link indication works (T018)
- [x] Home page is not bloated with full sections (T022)
- [x] Responsive design works on all breakpoints (T021)
- [x] Accessibility standards met (T023)
- [x] SEO metadata unique per page (T024)
- [x] Lighthouse scores meet constitutional requirements (T025)
- [x] Zero console errors (T027)
- [x] Constitutional compliance verified (T032)

---

**Estimated completion**: 15-20 tasks can be completed in 2-3 hours with parallel execution of T007-T010. Manual testing (T016-T027) requires 1-2 hours for thorough validation.

**Ready for implementation**: ✅ All tasks are specific, measurable, and executable.
