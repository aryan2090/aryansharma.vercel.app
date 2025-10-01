# Data Model: Navigation and Dedicated Section Pages

## Core Entities

### NavigationItem
Represents a single navigation link in the menu.

**Attributes**:
- `label`: string - Display text for the link (e.g., "Education", "Work Experience")
- `href`: string - Target route path (e.g., "/education", "/work-experience")
- `isActive`: boolean - Whether this is the current page (derived from router state)

**Validation Rules**:
- `label` must not be empty
- `href` must start with "/"
- `href` must correspond to an existing page route

**Relationships**:
- NavigationItem is part of NavigationMenu collection

**State Transitions**:
- `isActive` changes based on current route (useRouter().pathname)

### NavigationMenu
Collection of navigation items displayed in the Topbar.

**Attributes**:
- `items`: NavigationItem[] - Ordered list of navigation links

**Validation Rules**:
- Must contain at least one NavigationItem
- Order matters for display (Home first, Contact last)

**Standard Configuration**:
```javascript
[
  { label: "Home", href: "/" },
  { label: "Education", href: "/education" },
  { label: "Work Experience", href: "/work-experience" },
  { label: "Publications", href: "/publications" },
  { label: "Awards", href: "/awards" },
  { label: "About", href: "/about" },
  { label: "Contact Me", href: "/contact" }
]
```

### EducationEntry
Represents educational background (already exists in education.json).

**Attributes**:
- `institution`: string - Name of educational institution
- `degree`: string - Degree type and field of study
- `date`: string - Date or date range
- `description`: string - Additional details or achievements
- `logo`: string - Path to institution logo image
- `location`: string - Geographic location

**Validation Rules**:
- `institution` and `degree` are required
- `date` should follow consistent format

**Data Source**: `/public/jsons/education.json`

### WorkExperienceEntry
Represents professional work experience (already exists in work-experience.json).

**Attributes**:
- `company`: string - Company name
- `role`: string - Job title
- `date`: string - Employment period
- `description`: string[] - List of responsibilities/achievements
- `logo`: string - Path to company logo image
- `location`: string - Geographic location
- `skills`: string[] - Technologies/skills used

**Validation Rules**:
- `company` and `role` are required
- `description` should be an array of strings

**Data Source**: `/public/jsons/work-experience.json`

### Publication
Represents published work (already exists in publications.json).

**Attributes**:
- `title`: string - Publication title
- `authors`: string - List of authors
- `venue`: string - Publication venue (conference, journal, etc.)
- `date`: string - Publication date
- `abstract`: string - Brief description or abstract
- `links`: object - URLs to paper, code, etc.
- `image`: string - Path to publication thumbnail

**Validation Rules**:
- `title`, `authors`, and `venue` are required
- `links` object may contain `paper`, `code`, `demo`, etc.

**Data Source**: `/public/jsons/publications.json`

### Award
Represents recognition or achievement (already exists in awards.json).

**Attributes**:
- `title`: string - Award name
- `issuer`: string - Issuing organization
- `date`: string - Date received
- `description`: string - Award details

**Validation Rules**:
- `title` and `issuer` are required
- `date` should follow consistent format

**Data Source**: `/public/jsons/awards.json`

### PageMetadata
Represents SEO metadata for each page.

**Attributes**:
- `title`: string - Page title (for browser tab and SEO)
- `description`: string - Meta description for search engines (150-160 chars)
- `ogTitle`: string - Open Graph title for social sharing
- `ogDescription`: string - Open Graph description
- `ogImage`: string - Open Graph image URL
- `twitterCard`: string - Twitter card type ("summary_large_image")
- `canonical`: string - Canonical URL for the page

**Validation Rules**:
- `title` must be unique per page
- `description` should be 150-160 characters
- `canonical` must be absolute URL

**Per-Page Metadata**:
- **Home**: "Aryan Sharma | Data Science Portfolio"
- **Education**: "Education | Aryan Sharma"
- **Work Experience**: "Work Experience | Aryan Sharma"
- **Publications**: "Publications | Aryan Sharma"
- **Awards**: "Awards | Aryan Sharma"
- **About**: "About Me | Aryan Sharma"
- **Contact**: "Contact Me | Aryan Sharma"

## Entity Relationships

```
NavigationMenu
├── NavigationItem (Home) → HomePage
├── NavigationItem (Education) → EducationPage → EducationEntry[]
├── NavigationItem (Work Experience) → WorkExperiencePage → WorkExperienceEntry[]
├── NavigationItem (Publications) → PublicationsPage → Publication[]
├── NavigationItem (Awards) → AwardsPage → Award[]
├── NavigationItem (About) → AboutPage
└── NavigationItem (Contact) → ContactPage

Each Page
└── PageMetadata
```

## Data Flow

1. **Navigation Rendering**:
   - Topbar component loads NavigationMenu configuration
   - For each NavigationItem, render Nav.Link with href
   - useRouter().pathname determines isActive state
   - Active link gets highlighted styling

2. **Page Rendering**:
   - Page component loads PageMetadata
   - Page component imports relevant JSON data file(s)
   - Page component renders section component with data
   - Section component maps over data array and renders entries

3. **Content Updates**:
   - Editor updates JSON file in /public/jsons/
   - Git commit triggers deployment
   - Next.js rebuilds static pages with new content
   - No code changes required (per Constitution Principle II)

## Validation & Error Handling

### Navigation Validation
- All hrefs in NavigationMenu must have corresponding page files
- Missing pages result in 404 (Next.js default behavior)
- Link prefetching ensures fast navigation

### Content Validation
- JSON files must be valid JSON syntax
- Missing required fields log warnings but don't break rendering
- Empty arrays render "No items to display" message

### Metadata Validation
- Missing metadata falls back to default site metadata
- Description length trimmed if > 160 chars
- Images must exist in public/ directory

## Performance Considerations

- All pages use SSG (Static Site Generation) for fast initial load
- JSON files loaded at build time, not runtime
- Navigation prefetching reduces perceived load time
- Total payload for navigation: ~2KB (7 links)
- JSON data files: 1-4KB each
- Images lazy-loaded per Constitution Principle I

## Accessibility Data Requirements

- Each NavigationItem requires descriptive label (no icons-only)
- Active page indicated via aria-current="page"
- Focus visible on keyboard navigation (CSS required)
- Screen reader announces page title on navigation
