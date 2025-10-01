# Quickstart: Navigation and Dedicated Section Pages

## Manual Testing Guide

This document provides step-by-step validation of the navigation and dedicated section pages feature.

### Prerequisites

1. Development server running: `npm run dev`
2. Browser open to http://localhost:3000
3. Browser DevTools open (for console errors and network inspection)
4. Test on multiple viewports: Mobile (375px), Tablet (768px), Desktop (1920px)

### Test Suite 1: Navigation Visibility

**Objective**: Verify navigation menu is visible and accessible on all pages.

#### TC-1.1: Desktop Navigation Display
1. Open http://localhost:3000 in desktop viewport (1920px wide)
2. Verify navigation bar is visible at top of page
3. Verify all 7 navigation items are visible: Home, Education, Work Experience, Publications, Awards, About, Contact Me
4. ✅ **Pass**: All items visible horizontally
5. ❌ **Fail**: Any item missing or hidden

#### TC-1.2: Mobile Navigation Display
1. Resize browser to mobile viewport (375px wide)
2. Verify hamburger menu icon appears in top right
3. Click hamburger menu
4. Verify offcanvas menu slides in from right
5. Verify all 7 navigation items are visible in mobile menu
6. ✅ **Pass**: Mobile menu works, all items visible
7. ❌ **Fail**: Menu doesn't open or items missing

#### TC-1.3: Navigation Persistence
1. Navigate to Education page
2. Verify navigation bar is still visible at top
3. Navigate to Work Experience page
4. Verify navigation bar is still visible at top
5. Repeat for Publications, Awards, About, Contact pages
6. ✅ **Pass**: Navigation visible on all pages
7. ❌ **Fail**: Navigation missing on any page

### Test Suite 2: Page Navigation

**Objective**: Verify all navigation links work and lead to correct pages.

#### TC-2.1: Home Navigation
1. Navigate to any non-home page (e.g., /education)
2. Click "Home" in navigation
3. Verify browser URL is "/" or "/index"
4. Verify home page content is displayed
5. ✅ **Pass**: Home page loads correctly
6. ❌ **Fail**: 404 error or wrong content

#### TC-2.2: Education Page Navigation
1. From home page, click "Education" in navigation
2. Verify browser URL is "/education"
3. Verify only education content is displayed (no work experience, publications, etc.)
4. Verify education data from education.json is rendered
5. ✅ **Pass**: Education page shows only education content
6. ❌ **Fail**: Wrong content, mixed sections, or 404

#### TC-2.3: Work Experience Page Navigation
1. From any page, click "Work Experience" in navigation
2. Verify browser URL is "/work-experience"
3. Verify only work experience content is displayed
4. Verify work experience data from work-experience.json is rendered
5. ✅ **Pass**: Work Experience page shows only work content
6. ❌ **Fail**: Wrong content, mixed sections, or 404

#### TC-2.4: Publications Page Navigation
1. From any page, click "Publications" in navigation
2. Verify browser URL is "/publications"
3. Verify only publications content is displayed
4. Verify publications data from publications.json is rendered
5. ✅ **Pass**: Publications page shows only publications
6. ❌ **Fail**: Wrong content, mixed sections, or 404

#### TC-2.5: Awards Page Navigation
1. From any page, click "Awards" in navigation
2. Verify browser URL is "/awards"
3. Verify only awards content is displayed
4. Verify awards data from awards.json is rendered
5. ✅ **Pass**: Awards page shows only awards
6. ❌ **Fail**: Wrong content, mixed sections, or 404

#### TC-2.6: About Page Navigation
1. From any page, click "About" in navigation
2. Verify browser URL is "/about"
3. Verify about content is displayed
4. ✅ **Pass**: About page loads correctly
5. ❌ **Fail**: 404 or wrong content

#### TC-2.7: Contact Page Navigation
1. From any page, click "Contact Me" in navigation
2. Verify browser URL is "/contact"
3. Verify contact information or form is displayed
4. ✅ **Pass**: Contact page loads correctly
5. ❌ **Fail**: 404 or wrong content

### Test Suite 3: Active Link Indication

**Objective**: Verify current page is clearly indicated in navigation.

#### TC-3.1: Active Home Link
1. Navigate to home page (/)
2. Inspect "Home" navigation link
3. Verify "Home" link has visual distinction (e.g., different color, underline, or active class)
4. Verify other links do not have active styling
5. ✅ **Pass**: Home link visually distinct
6. ❌ **Fail**: No distinction or wrong link highlighted

#### TC-3.2: Active Education Link
1. Navigate to /education
2. Verify "Education" link has active styling
3. Verify other links do not have active styling
4. ✅ **Pass**: Education link visually distinct
5. ❌ **Fail**: No distinction or wrong link highlighted

#### TC-3.3: Active State for All Pages
1. Navigate to each page: Work Experience, Publications, Awards, About, Contact
2. For each page, verify corresponding navigation link has active styling
3. Verify no other links have active styling
4. ✅ **Pass**: Correct link highlighted on every page
5. ❌ **Fail**: Wrong link highlighted or no highlighting

### Test Suite 4: Direct URL Access

**Objective**: Verify pages can be accessed by typing URL directly.

#### TC-4.1: Direct Education Access
1. In browser address bar, type: http://localhost:3000/education
2. Press Enter
3. Verify Education page loads without 404
4. Verify content is displayed correctly
5. ✅ **Pass**: Page loads successfully
6. ❌ **Fail**: 404 or error

#### TC-4.2: Direct Work Experience Access
1. In browser address bar, type: http://localhost:3000/work-experience
2. Press Enter
3. Verify Work Experience page loads without 404
4. ✅ **Pass**: Page loads successfully
5. ❌ **Fail**: 404 or error

#### TC-4.3: Direct Publications Access
1. Type: http://localhost:3000/publications
2. Verify page loads successfully
3. ✅ **Pass** | ❌ **Fail**

#### TC-4.4: Direct Awards Access
1. Type: http://localhost:3000/awards
2. Verify page loads successfully
3. ✅ **Pass** | ❌ **Fail**

### Test Suite 5: Browser Navigation

**Objective**: Verify browser back/forward buttons work correctly.

#### TC-5.1: Back Button Navigation
1. Navigate: Home → Education → Work Experience → Publications
2. Click browser back button (3 times)
3. Verify sequence: Publications → Work Experience → Education → Home
4. Verify each page loads correctly with correct content
5. ✅ **Pass**: Back button navigates correctly through history
6. ❌ **Fail**: Wrong page loads or 404

#### TC-5.2: Forward Button Navigation
1. After TC-5.1, click browser forward button (3 times)
2. Verify sequence: Education → Work Experience → Publications
3. Verify each page loads correctly
4. ✅ **Pass**: Forward button works correctly
5. ❌ **Fail**: Wrong page loads

### Test Suite 6: Responsive Behavior

**Objective**: Verify navigation works on all device sizes.

#### TC-6.1: Mobile Navigation (375px)
1. Set viewport to 375px wide (iPhone SE)
2. Verify hamburger menu is visible
3. Click hamburger, verify offcanvas opens
4. Click each navigation link, verify page loads
5. ✅ **Pass**: All features work on mobile
6. ❌ **Fail**: Navigation broken or pages don't load

#### TC-6.2: Tablet Navigation (768px)
1. Set viewport to 768px wide (iPad)
2. Verify navigation display (hamburger or horizontal)
3. Test all navigation links
4. ✅ **Pass**: All features work on tablet
5. ❌ **Fail**: Layout broken or links don't work

#### TC-6.3: Desktop Navigation (1920px)
1. Set viewport to 1920px wide
2. Verify horizontal navigation bar
3. Test all navigation links
4. ✅ **Pass**: All features work on desktop
5. ❌ **Fail**: Layout issues

### Test Suite 7: Content Separation

**Objective**: Verify home page is not bloated with full section content.

#### TC-7.1: Home Page Content
1. Navigate to home page (/)
2. Scroll through entire page
3. Verify NO full Education section content is displayed
4. Verify NO full Work Experience section content is displayed
5. Verify NO full Publications section content is displayed
6. Verify NO full Awards section content is displayed
7. Note: Summary or highlights are acceptable, but not full lists
8. ✅ **Pass**: Home page is concise, not bloated
9. ❌ **Fail**: Full section content displayed on home

#### TC-7.2: Dedicated Page Content
1. Visit /education
2. Verify ONLY education content is shown (no publications, awards, etc.)
3. Visit /work-experience
4. Verify ONLY work experience content is shown
5. Repeat for Publications and Awards
6. ✅ **Pass**: Each page shows only its section
7. ❌ **Fail**: Mixed content on any page

### Test Suite 8: Accessibility

**Objective**: Verify navigation is accessible via keyboard and screen readers.

#### TC-8.1: Keyboard Navigation
1. Reload page and press Tab key
2. Verify focus indicator appears on first navigation link
3. Press Tab repeatedly, verify focus moves through all navigation links
4. Press Enter on focused link, verify navigation occurs
5. ✅ **Pass**: All links keyboard navigable
6. ❌ **Fail**: Focus not visible or Enter doesn't work

#### TC-8.2: Focus Indicators
1. Use keyboard to focus each navigation link
2. Verify visible focus indicator (outline, highlight, etc.)
3. Verify indicator is clearly visible against background
4. ✅ **Pass**: Focus visible on all links
5. ❌ **Fail**: Focus not visible

#### TC-8.3: Screen Reader (Optional)
1. Enable screen reader (VoiceOver on Mac, NVDA on Windows)
2. Navigate through menu
3. Verify screen reader announces link text
4. Verify active page is announced (aria-current="page")
5. ✅ **Pass**: Screen reader works correctly
6. ❌ **Fail**: Links not announced or active state missing

### Test Suite 9: SEO Metadata

**Objective**: Verify each page has unique SEO metadata.

#### TC-9.1: Page Titles
1. Visit each page: Home, Education, Work Experience, Publications, Awards, About, Contact
2. For each page, check browser tab title
3. Verify each page has unique title (e.g., "Education | Aryan Sharma")
4. ✅ **Pass**: All pages have unique titles
5. ❌ **Fail**: Duplicate titles or missing titles

#### TC-9.2: Meta Descriptions
1. View page source for each page
2. Find meta description tag: `<meta name="description" content="...">`
3. Verify each page has unique description
4. Verify descriptions are 150-160 characters
5. ✅ **Pass**: All pages have unique descriptions
6. ❌ **Fail**: Missing or duplicate descriptions

#### TC-9.3: Open Graph Tags
1. View page source for each page
2. Verify presence of Open Graph tags: og:title, og:description, og:image
3. Verify tags are unique per page
4. ✅ **Pass**: OG tags present and unique
5. ❌ **Fail**: Missing or duplicate OG tags

### Test Suite 10: Performance

**Objective**: Verify performance budgets are met per constitution.

#### TC-10.1: Lighthouse Score
1. Open Chrome DevTools
2. Go to Lighthouse tab
3. Run audit for each page with "Mobile" device
4. Verify scores:
   - Performance ≥ 90
   - Accessibility ≥ 95
   - Best Practices ≥ 90
   - SEO ≥ 95
5. ✅ **Pass**: All scores meet thresholds
6. ❌ **Fail**: Any score below threshold

#### TC-10.2: First Contentful Paint
1. Open Network tab in DevTools
2. Enable "Slow 3G" throttling
3. Hard refresh page (Cmd+Shift+R)
4. Check FCP in Performance tab
5. Verify FCP < 1.5 seconds
6. ✅ **Pass**: FCP under 1.5s
7. ❌ **Fail**: FCP over 1.5s

#### TC-10.3: Console Errors
1. Open Console tab in DevTools
2. Navigate to each page
3. Verify no errors in console (warnings acceptable)
4. ✅ **Pass**: Zero console errors
5. ❌ **Fail**: Any console errors present

## Test Results Template

```
Date: YYYY-MM-DD
Tester: [Name]
Environment: [Browser, OS, Node version]

| Test Suite | Test Case | Status | Notes |
|------------|-----------|--------|-------|
| TS-1 | TC-1.1 | ✅ |  |
| TS-1 | TC-1.2 | ✅ |  |
| TS-1 | TC-1.3 | ✅ |  |
| TS-2 | TC-2.1 | ✅ |  |
| ... | ... | ... | ... |

Overall Status: PASS / FAIL
```

## Regression Testing

When making changes to navigation or pages, re-run:
- Test Suite 2 (Page Navigation)
- Test Suite 3 (Active Link Indication)
- Test Suite 7 (Content Separation)
- Test Suite 10 (Performance)

## Automated Testing Considerations

While this is a manual testing guide, consider automating:
- TC-2.x (Page Navigation) - Playwright/Cypress
- TC-4.x (Direct URL Access) - Playwright/Cypress
- TC-10.1 (Lighthouse Score) - Lighthouse CI
- TC-10.3 (Console Errors) - Playwright/Cypress

## Known Limitations

- Mobile testing assumes standard portrait orientation
- Screen reader testing requires manual verification
- Lighthouse scores may vary based on hardware
- 3G throttling simulates network, not actual device performance
