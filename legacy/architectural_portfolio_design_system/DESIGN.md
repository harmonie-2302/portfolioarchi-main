---
name: Architectural Portfolio Design System
colors:
  surface: '#faf8ff'
  surface-dim: '#dad9e1'
  surface-bright: '#faf8ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f4f3fa'
  surface-container: '#eeedf4'
  surface-container-high: '#e9e7ef'
  surface-container-highest: '#e3e1e9'
  on-surface: '#1a1b21'
  on-surface-variant: '#444651'
  inverse-surface: '#2f3036'
  inverse-on-surface: '#f1f0f7'
  outline: '#757682'
  outline-variant: '#c5c5d3'
  surface-tint: '#4059aa'
  primary: '#00236f'
  on-primary: '#ffffff'
  primary-container: '#1e3a8a'
  on-primary-container: '#90a8ff'
  inverse-primary: '#b6c4ff'
  secondary: '#505f76'
  on-secondary: '#ffffff'
  secondary-container: '#d0e1fb'
  on-secondary-container: '#54647a'
  tertiary: '#4b1c00'
  on-tertiary: '#ffffff'
  tertiary-container: '#6e2c00'
  on-tertiary-container: '#f39461'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dce1ff'
  primary-fixed-dim: '#b6c4ff'
  on-primary-fixed: '#00164e'
  on-primary-fixed-variant: '#264191'
  secondary-fixed: '#d3e4fe'
  secondary-fixed-dim: '#b7c8e1'
  on-secondary-fixed: '#0b1c30'
  on-secondary-fixed-variant: '#38485d'
  tertiary-fixed: '#ffdbcb'
  tertiary-fixed-dim: '#ffb691'
  on-tertiary-fixed: '#341100'
  on-tertiary-fixed-variant: '#773205'
  background: '#faf8ff'
  on-background: '#1a1b21'
  surface-variant: '#e3e1e9'
typography:
  display-lg:
    fontFamily: Libre Caslon Text
    fontSize: 64px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Libre Caslon Text
    fontSize: 40px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-lg-mobile:
    fontFamily: Libre Caslon Text
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Libre Caslon Text
    fontSize: 28px
    fontWeight: '500'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Metropolis
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Metropolis
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-caps:
    fontFamily: Metropolis
    fontSize: 12px
    fontWeight: '700'
    lineHeight: '1'
    letterSpacing: 0.1em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 8px
  container-max: 1280px
  gutter: 24px
  margin-desktop: 64px
  margin-mobile: 20px
  section-gap: 120px
---

## Brand & Style
This design system is built to communicate the dual nature of architectural practice: the cold precision of structural engineering and the warm humanity of inhabited space. It centers on the narrative of resilience, positioning Architecte Amisi Abecha David as a visionary who builds with both strength and empathy.

The visual style follows a **Modern Editorial** movement, drawing inspiration from high-end architectural journals. It prioritizes clarity and intent through:
- **Generous Whitespace:** Allowing blueprints and photography to breathe.
- **Precision Detailing:** Using hairline borders and structured alignment to mirror technical drawings.
- **Emotional Resonance:** Balancing the "professional" blue with the warm, rich **"Alezan"** to move the viewer from observation to inspiration.

## Colors
The palette is anchored in a deep, authoritative blue that establishes immediate professional trust. This is balanced by a soft off-white background which reduces eye strain and mimics the texture of premium archival paper.

- **Primary (#1E3A8A):** Used for primary navigation, headings, and structural UI elements.
- **Accent (#A65E2E):** Reserved strictly for action-oriented elements and highlights, representing the warm "Alezan" tone that brings character and richness to the design.
- **Secondary (#64748B):** Used for metadata, captions, and supporting text to provide hierarchy without distraction.
- **Neutral (#F8FAFC):** The primary canvas color, creating a warm, inviting atmosphere compared to a sterile pure white.

## Typography
The typography strategy pairings reflect a "History meets Future" philosophy. 

**Libre Caslon Text** is utilized for headlines to evoke the timeless nature of the built environment and the prestige of architectural history. Its elegant serifs provide a rhythmic contrast to the imagery.

**Metropolis** serves as the functional workhorse. As a geometric sans-serif, it mirrors the mathematical precision of modern drafting. It is used for body copy and technical labels to ensure maximum legibility across all digital touchpoints. High-contrast sizing is encouraged to create a clear "Journal" hierarchy.

## Layout & Spacing
The layout utilizes a **Fixed 12-Column Grid** on desktop to maintain the rigid structure expected in architectural design. On mobile, this reflows to a single-column stacked layout with significant vertical padding.

Key layout principles:
- **Asymmetric Balance:** Use empty columns to create focus on specific project details.
- **Section Gaps:** Large vertical distances (120px+) between major portfolio sections to emphasize a "journey" rather than a list.
- **Full-Bleed Imagery:** Specific "hero" moments should break the grid to convey the scale of the architectural works.

## Elevation & Depth
Depth in this design system is achieved through **Tonal Layering** and **Low-Contrast Outlines** rather than heavy shadows. This maintains the "clean lines" aesthetic.

- **Outlines:** Use 1px borders in Sophisticated Grey at 20% opacity for cards and input fields.
- **Subtle Ambient Shadows:** For interactive elements like hover-state cards, use a very soft, diffused shadow: `box-shadow: 0 10px 30px rgba(30, 58, 138, 0.05)`. The tint should be the Primary Blue to maintain color harmony.
- **Image Overlays:** Use a subtle 10% Blue tint on image hover states to create a "blueprint" feel.

## Shapes
The shape language is **Soft (0.25rem)**. While architecture involves many right angles, the slight rounding of UI elements introduces a "human" and "warm" touch to the digital interface.

- **Standard Elements:** 4px (0.25rem) radius for buttons, input fields, and small cards.
- **Large Container/Images:** May remain sharp (0px) to emphasize structural integrity and the "edge" of a building.
- **Icons:** Use thin-stroke (1.5pt) geometric icons with squared ends to match the precision of the sans-serif typeface.

## Components
### Buttons
- **Primary:** Deep Professional Blue background, White Metropolis text (Bold), 4px radius. 
- **CTA:** Warm Energetic Orange background with white text. Use sparingly for "Get in Touch" or "View Project."
- **Ghost:** Primary Blue 1px border with transparent background.

### Cards (Project Showcase)
- High-quality architectural imagery should take up 70% of the card area.
- Text content is placed below the image using the "label-caps" style for categories and "headline-md" for project titles.
- No heavy shadows; use a 1px soft border.

### Input Fields
- Transparent background with a 1px bottom-border in Primary Blue. This mimics the lines on a drafting table.
- Labels use Metropolis in Secondary Grey.

### Portfolio Specifics
- **The "Blueprint" Divider:** A thin, dotted horizontal line used to separate sub-sections, referencing technical drawings.
- **Timeline Component:** A vertical line in Primary Blue used in the "Resilience Journey" section to mark milestones in the architect's career.