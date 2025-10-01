# Navigation Component Contract

## Component: Enhanced Topbar

### Input Props
None (uses Next.js useRouter internally)

### Output/Behavior
Renders navigation bar with links to all sections.

### Contract Requirements

#### Navigation Items
The component MUST render the following navigation items in order:
1. Home (href="/")
2. Education (href="/education")
3. Work Experience (href="/work-experience")
4. Publications (href="/publications")
5. Awards (href="/awards")
6. About (href="/about")
7. Contact Me (href="/contact")

#### Active State
- The component MUST detect current route using `useRouter().pathname`
- The component MUST apply active styling to link matching current route
- Only ONE link MUST have active state at any time
- Active link MUST have `aria-current="page"` attribute

#### Responsive Behavior
- Desktop (≥992px): All links displayed horizontally
- Mobile (<992px): Links displayed in offcanvas menu
- Hamburger icon MUST be visible on mobile
- Offcanvas menu MUST slide in from right when hamburger clicked

#### Accessibility
- All links MUST be keyboard navigable (Tab key)
- Focus indicator MUST be visible
- Active link MUST be announced to screen readers
- Navigation MUST be wrapped in semantic `<nav>` element

#### Performance
- Component MUST use Next.js Link for client-side navigation
- Link prefetching MUST be enabled (default Next.js behavior)
- No additional JavaScript bundles required beyond existing dependencies

### Test Validation

```javascript
// Pseudo-test for navigation items
expect(navigationItems).toHaveLength(7);
expect(navigationItems[0]).toHaveAttribute('href', '/');
expect(navigationItems[1]).toHaveAttribute('href', '/education');
// ... etc

// Pseudo-test for active state
router.push('/education');
expect(getByText('Education')).toHaveAttribute('aria-current', 'page');
expect(getByText('Home')).not.toHaveAttribute('aria-current', 'page');

// Pseudo-test for mobile responsiveness
setViewportWidth(375);
expect(queryByText('Education')).not.toBeVisible();
expect(getByRole('button', { name: /toggle navigation/i })).toBeVisible();
userEvent.click(getByRole('button', { name: /toggle navigation/i }));
expect(getByText('Education')).toBeVisible();
```

### Breaking Changes
None - extends existing Topbar component.

### Migration Notes
Existing Topbar usage remains unchanged. New navigation links appear automatically on all pages.
