<!--
SYNC IMPACT REPORT
==================
Version Change: TEMPLATE → 1.0.0
Modified Principles:
  - Added: Performance-First
  - Added: Content-Driven Development
  - Added: Responsive Design
  - Added: Accessibility
  - Added: SEO Optimization
Added Sections:
  - Development Standards
  - Quality Assurance
Removed Sections: None
Templates Status:
  ✅ plan-template.md: Reviewed - Compatible (references constitution for gates)
  ✅ spec-template.md: Reviewed - Compatible (references constitution principles)
  ✅ tasks-template.md: Reviewed - Compatible (can incorporate constitution-driven tasks)
Follow-up TODOs: None
==================
-->

# Portfolio Website Constitution

## Core Principles

### I. Performance-First

Every feature and content update MUST prioritize fast loading times and optimal user experience.
Static Site Generation (SSG) is the default rendering strategy. Client-side JavaScript MUST be
minimized and code-split. Images MUST be optimized and lazy-loaded. Performance budgets:
First Contentful Paint < 1.5s, Time to Interactive < 3.5s on 3G networks.

**Rationale**: Portfolio websites are often first impressions for potential employers or clients.
Slow loading times directly impact engagement and professional perception.

### II. Content-Driven Development

Content updates MUST NOT require code changes. All dynamic content (projects, blog posts, resume
data) MUST be stored in markdown files or JSON configuration. The content structure MUST be
intuitive for non-developers to edit. Version control enables content history tracking.

**Rationale**: Separating content from code allows for rapid updates without deployment friction
and enables non-technical collaborators to contribute.

### III. Responsive Design

All UI components MUST work seamlessly across mobile, tablet, and desktop viewports. Mobile-first
approach is mandatory. Touch targets MUST be at least 44x44px. Text MUST be readable without
zooming (minimum 16px base font). Layout breakpoints follow Bootstrap 5 conventions.

**Rationale**: Over 60% of portfolio traffic comes from mobile devices. Responsive design ensures
accessibility to all potential visitors regardless of device.

### IV. Accessibility

All pages MUST meet WCAG 2.1 Level AA standards. Semantic HTML5 elements are required. Color
contrast ratios MUST be at least 4.5:1 for normal text. All interactive elements MUST be keyboard
navigable. Images MUST have descriptive alt text. Focus indicators MUST be visible.

**Rationale**: Accessibility is both an ethical imperative and expands potential audience reach.
It also improves SEO and overall code quality.

### V. SEO Optimization

All pages MUST include appropriate meta tags (title, description, Open Graph, Twitter Cards).
Structured data (JSON-LD) MUST be implemented for relevant content types. URLs MUST be semantic
and human-readable. Sitemap and robots.txt MUST be maintained. Core Web Vitals MUST pass.

**Rationale**: Discoverability through search engines is crucial for a portfolio site's
effectiveness. Proper SEO ensures professional visibility.

## Development Standards

All new features MUST include:
- Performance impact assessment (bundle size, load time)
- Mobile responsiveness verification
- Accessibility audit (automated + manual testing)
- SEO metadata updates where applicable

Technology stack constraints:
- Next.js framework (current version maintained)
- React 18+ for component development
- Bootstrap 5 for UI consistency
- Markdown for content authoring

## Quality Assurance

Pre-deployment validation MUST include:
- Lighthouse score: Performance ≥90, Accessibility ≥95, Best Practices ≥90, SEO ≥95
- Manual testing on: iOS Safari, Chrome Android, Desktop Chrome/Firefox
- Broken link verification
- Meta tag validation
- Console error check (zero errors in production build)

## Governance

This constitution supersedes all other development practices. All code changes MUST demonstrate
compliance with core principles. Complexity additions MUST be justified against simplicity
principles. Constitution amendments require:
1. Documented rationale for change
2. Impact assessment on existing features
3. Update to dependent templates and documentation
4. Version bump following semantic versioning

All pull requests MUST verify constitutional compliance before merge. Deviations from principles
MUST be explicitly documented with justification in complexity tracking.

**Version**: 1.0.0 | **Ratified**: 2025-10-01 | **Last Amended**: 2025-10-01
