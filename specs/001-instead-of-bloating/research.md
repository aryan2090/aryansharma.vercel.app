# Research: Navigation and Dedicated Section Pages

## Technical Context Decisions

### Next.js Routing Approach
**Decision**: Use Next.js Pages Router (already in use) with new page files for each section
**Rationale**:
- Project already uses Pages Router (pages/index.js, pages/about/index.js, pages/contact.js)
- File-based routing is idiomatic and simple
- SSG support for all pages ensures fast load times per Constitution Principle I (Performance-First)
**Alternatives considered**:
- App Router (Next.js 13+): Would require migration of existing pages
- Client-side routing only: Would violate Performance-First principle (no SSG)

### Navigation Component Strategy
**Decision**: Extend existing Topbar component (components/topbar.js) to include new navigation links
**Rationale**:
- Topbar already provides persistent navigation with Home, About, Contact Me
- Maintains consistent styling and behavior (theme toggle, offcanvas mobile menu)
- Responsive Bootstrap Navbar already handles mobile/desktop views
- Active link highlighting can be added with Next.js useRouter
**Alternatives considered**:
- Create new navigation component: Would duplicate code and break consistency
- Modify layout component: Topbar is already the navigation component

### Content Management Approach
**Decision**: Continue using JSON files in public/jsons/ directory for content
**Rationale**:
- Aligns with Constitution Principle II (Content-Driven Development)
- JSON files already exist: education.json, work-experience.json, publications.json, awards.json
- Components already consume these: Education, Experience, Publication components
- Non-developers can edit JSON without touching code
**Alternatives considered**:
- Markdown files: Would require parsing setup, more complex than current approach
- CMS integration: Overkill for portfolio site, adds complexity

### Page Component Pattern
**Decision**: Create dedicated page components that import existing section components
**Rationale**:
- Reuse existing components: Education, Experience (with work-experience data), Publication
- Each page renders only its section's component
- Home page remains uncluttered per FR-011
**Alternatives considered**:
- Duplicate content rendering logic: Would violate DRY principle
- Single dynamic page with query params: Less SEO-friendly, worse UX

### SEO Metadata Strategy
**Decision**: Add unique meta tags (title, description, Open Graph) to each new page using Next.js Head component
**Rationale**:
- Required by Constitution Principle V (SEO Optimization)
- Each section page needs distinct metadata for search engines
- Next.js Head component is standard approach
- Existing metadata.js component can be extended or replicated per page
**Alternatives considered**:
- Shared metadata: Would hurt SEO, pages not individually discoverable
- No metadata: Violates constitution

### Responsive Design Validation
**Decision**: Test navigation and pages on Bootstrap 5 breakpoints (sm, md, lg, xl, xxl)
**Rationale**:
- Constitution Principle III requires mobile-first responsive design
- Existing Topbar uses Bootstrap responsive Navbar with Offcanvas for mobile
- Touch targets already 44x44px per Bootstrap defaults
- New navigation links will inherit responsive behavior
**Alternatives considered**:
- Custom breakpoints: Would conflict with existing Bootstrap 5 usage
- Desktop-only testing: Violates constitution and reality (60% mobile traffic)

### Accessibility Implementation
**Decision**: Ensure semantic HTML5, ARIA labels, keyboard navigation, and visible focus indicators
**Rationale**:
- Required by Constitution Principle IV (WCAG 2.1 Level AA)
- Next.js Link component provides accessible navigation by default
- Bootstrap Navbar provides keyboard navigation support
- Active link indication helps screen reader users understand current location
**Alternatives considered**:
- Skip accessibility: Violates constitution and ethical standards
- Add ARIA after launch: Should be built-in from start

### Performance Budget Verification
**Decision**: Measure FCP and TTI for each new page, ensure <1.5s and <3.5s on 3G
**Rationale**:
- Constitution Principle I specifies performance budgets
- Next.js SSG provides fast initial load
- Navigation adds minimal JavaScript (Next.js prefetching)
- JSON data files are small (<5KB each)
**Alternatives considered**:
- Skip performance testing: Violates constitution
- Client-side rendering: Would fail performance budgets

## Technology Stack Summary

- **Framework**: Next.js 14.2.7 (Pages Router)
- **UI Library**: React 18.2.0
- **Styling**: Bootstrap 5.3.0
- **Routing**: Next.js file-based routing
- **Content**: JSON files in public/jsons/
- **SEO**: Next.js Head component with meta tags
- **Animations**: GSAP 3.12.2 (already in use for scroll animations)

## Dependencies & Integration Points

### Existing Components to Reuse
- `components/topbar.js` - Add new navigation links
- `components/education.js` - Render on /education page
- `components/experience.js` - Render on /work-experience page (with work-experience.json)
- `components/publication.js` - Render on /publications page
- `components/layout.js` - Wrap all new pages

### Existing Data Files
- `public/jsons/education.json` - Education data
- `public/jsons/work-experience.json` - Work experience data
- `public/jsons/publications.json` - Publications data
- `public/jsons/awards.json` - Awards data

### New Files Required
- `pages/education.js` - Education page
- `pages/work-experience.js` - Work experience page
- `pages/publications.js` - Publications page
- `pages/awards.js` - Awards page

### Modified Files
- `components/topbar.js` - Add navigation links, active state
- `pages/index.js` - Remove or minimize full section content display

## Best Practices

### Next.js Pages Router Patterns
- Use `getStaticProps` if data fetching is needed (currently JSON imported directly)
- Export default function component for each page
- Use `next/link` for client-side navigation with prefetching
- Use `next/head` for per-page metadata
- Use `useRouter` from `next/router` for active link detection

### React Bootstrap Navigation
- Use `Nav.Link` with `as={Link}` for Next.js integration
- Use `active` prop or custom className for active state
- Maintain mobile offcanvas menu for small screens
- Preserve theme toggle functionality

### Accessibility Best Practices
- Use semantic nav element (already in Navbar)
- Provide aria-current="page" for active link
- Ensure focus visible on keyboard navigation
- Use descriptive link text (already present)
- Maintain skip-to-content link if adding one

### SEO Best Practices
- Unique title for each page (e.g., "Education | Aryan Sharma")
- Unique meta description (150-160 chars)
- Open Graph tags for social sharing
- Twitter Card tags
- Canonical URLs
- Structured data (JSON-LD) for relevant types

## Unknown/Clarification Items

None - all requirements are clear and technical approach is well-defined based on existing codebase patterns.
