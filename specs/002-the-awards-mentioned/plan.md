# Implementation Plan: Display Award Icon for Awards

**Branch**: `002-the-awards-mentioned` | **Date**: 2025-10-01 | **Spec**: [spec.md](./spec.md)
**Input**: Feature specification from `/specs/002-the-awards-mentioned/spec.md`

## Summary

Replace placeholder images on the Awards page with a trophy/award icon. Awards currently use the default placeholder image because the awards.json entries don't specify an image field. Add the `image` field to each award entry pointing to the existing trophy.png icon, ensuring consistent visual representation of achievements.

## Technical Context

**Language/Version**: JavaScript/React 18.2.0, Next.js 14.2.7, Node.js 22.12.0
**Primary Dependencies**: Next.js (pages router), React, React Bootstrap 5.3.0, Next/Image component
**Storage**: Static JSON files in public/jsons/ (awards.json)
**Testing**: Manual visual testing, verify image loads correctly on all devices
**Target Platform**: Web browsers (Chrome, Firefox, Safari), mobile responsive
**Project Type**: Web frontend (Next.js single application)
**Performance Goals**: No impact on existing performance (image already exists, just changing reference)
**Constraints**: Maintain constitutional compliance - Content-Driven Development (Principle II)
**Scale/Scope**: 2 award entries in awards.json, 1 JSON file modification

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

### Principle I: Performance-First ✅ PASS
- **Requirement**: Images optimized and lazy-loaded, performance budgets maintained
- **Implementation**: Trophy.png already exists, Next/Image component handles optimization
- **Validation**: No additional HTTP requests (image file exists), Next/Image provides lazy loading

### Principle II: Content-Driven Development ✅ PASS
- **Requirement**: Content updates in JSON/markdown, no code changes
- **Implementation**: Modification only to awards.json data file, no component code changes
- **Validation**: Future awards can specify image field in JSON without touching code

### Principle III: Responsive Design ✅ PASS
- **Requirement**: Works on all viewports, existing responsive behavior maintained
- **Implementation**: Experience component already handles images responsively
- **Validation**: Trophy icon will use existing responsive image sizing logic

### Principle IV: Accessibility ✅ PASS
- **Requirement**: Images have alt text, accessible to screen readers
- **Implementation**: Experience component already provides alt text from experience.organization
- **Validation**: Alt attribute exists in current implementation

### Principle V: SEO Optimization ✅ PASS
- **Requirement**: Images don't negatively impact SEO, page metadata maintained
- **Implementation**: No changes to page metadata, image reference only
- **Validation**: Awards page SEO unchanged, image enhances visual presentation

**Initial Constitution Check**: ✅ PASS - No violations, simple content update

## Project Structure

### Documentation (this feature)
```
specs/002-the-awards-mentioned/
├── plan.md              # This file (/plan command output)
├── spec.md              # Feature specification
├── research.md          # Phase 0 output (/plan command) - minimal research needed
└── quickstart.md        # Phase 1 output (/plan command) - manual testing guide
```

### Source Code (repository root)

This is a content-only change:

```
public/
└── jsons/
    └── awards.json      # [MODIFIED] Add "image": "/images/trophy.png" to each entry

public/images/
└── trophy.png           # [EXISTING] Trophy icon already available
```

**Structure Decision**: Content-only modification. No component code changes needed. The Experience component already handles the `image` field and falls back to placeholder if missing. We're simply providing the image field for awards to use the trophy icon.

## Phase 0: Outline & Research ✅ COMPLETE

**Status**: Research minimal - straightforward content update

**Key Decisions Made**:
1. **Icon Source**: Use existing `/images/trophy.png` file (already available)
2. **Implementation Approach**: Add `image` field to awards.json entries
3. **Fallback Behavior**: Existing logic already handles missing images (no code change needed)
4. **Component Reuse**: Experience component already displays images from data

**Technical Analysis**:
- Current: Awards use `Experience` component which displays `experience.image ?? "/images/placeholder.png"`
- Awards.json entries don't have `image` field, so they default to placeholder
- Trophy.png exists at `/public/images/trophy.png`
- Solution: Add `"image": "/images/trophy.png"` to each award entry

**No NEEDS CLARIFICATION** - Implementation path is clear.

## Phase 1: Design & Contracts ✅ COMPLETE

**Status**: Design complete - content schema update only

**Outputs**:
1. ✅ **quickstart.md**: Manual testing guide for visual verification

**Data Model**:
Current Award Entry structure:
```json
{
  "title": "string",
  "position": "string",
  "date": "string"
}
```

Updated Award Entry structure:
```json
{
  "title": "string",
  "position": "string",
  "date": "string",
  "image": "/images/trophy.png"  // NEW FIELD
}
```

**Contract**:
- Experience component expects optional `image` field (string, image path)
- If present, displays image; if absent, falls back to placeholder
- No component code changes needed - existing contract satisfied

**Post-Design Constitution Check**: ✅ PASS - Content-driven approach maintained

## Phase 2: Task Planning Approach

*This section describes what the /tasks command will do - DO NOT execute during /plan*

**Task Generation Strategy**:

1. **From spec requirements**:
   - Modify public/jsons/awards.json to add image field
   - Verify trophy.png exists (already confirmed)
   - Test awards page displays trophy icons

2. **From quickstart.md testing**:
   - Visual test on /awards page
   - Verify trophy icon displays instead of placeholder
   - Test responsive behavior on mobile/tablet/desktop
   - Verify image loads with acceptable performance

**Ordering Strategy**:
1. **Content Update**: Add image field to awards.json
2. **Visual Testing**: Verify trophy icons display correctly
3. **Responsive Testing**: Check all device sizes
4. **Performance Verification**: Confirm no performance impact

**Estimated Output**: 5-7 numbered tasks in tasks.md

**Dependencies**:
- Content update before testing
- Testing depends on dev server running

**IMPORTANT**: This phase is executed by the /tasks command, NOT by /plan

## Phase 3+: Future Implementation

*These phases are beyond the scope of the /plan command*

**Phase 3**: Task execution (/tasks command creates tasks.md)
**Phase 4**: Implementation (update awards.json with image field)
**Phase 5**: Validation (visual testing, verify trophy icons display)

## Complexity Tracking

*No complexity violations - simple content update*

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
- [x] All NEEDS CLARIFICATION resolved (none)
- [x] Complexity deviations documented (none)

**Artifacts Generated**:
- [x] plan.md - This implementation plan
- [x] quickstart.md - Manual testing guide (generated below)

**Ready for /tasks command**: ✅ YES

---

*Based on Constitution v1.0.0 - See `.specify/memory/constitution.md`*
