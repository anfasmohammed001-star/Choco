# CHOCO — UI/UX Pro Max Master Design System Specification
> Generated with **UI/UX Pro Max Skill** v2.0 (`https://github.com/nextlevelbuilder/ui-ux-pro-max-skill`)  
> Strict Three-Color Luxury System + WCAG 2.2 Accessibility + Liquid Glass Translucency

---

## 🎨 1. Core Color System

| Role | Token | Hex | Usage |
| :--- | :--- | :--- | :--- |
| **Primary Background** | `--color-espresso` | `#160D09` | Deep espresso background, dark section backdrops, high-contrast base. |
| **Card / Elevated Surface**| `--color-espresso-card` | `#1C120C` | Subtle elevated surfaces, collection cards, discipline cards. |
| **Darkest Base** | `--color-espresso-deep` | `#0E0704` | Footer, input containers, bottom bars. |
| **Accent / CTA / Highlights** | `--color-gold` | `#D6AD45` | Champagne Gold buttons, active indicators, borders, particles, italic emphasis. |
| **Gold Hover / Shine** | `--color-gold-light` | `#E8C35C` | Button hover state, particle glimmer highlights. |
| **Gold Border** | `--color-gold-border` | `rgba(214, 173, 69, 0.28)` | Delicate 1px borders, dividing rules, focus rings. |
| **Primary Typography** | `--color-ivory` | `#F2E8D5` | Warm ivory headlines, body text, navigation labels, and titles. |
| **Secondary Typography** | `--color-ivory-secondary` | `rgba(242, 232, 213, 0.82)` | Lead paragraphs, card descriptions, readable body copy. |
| **Muted Typography** | `--color-ivory-muted` | `rgba(242, 232, 213, 0.58)` | Metadata, dates, legal notes, secondary tags. |

---

## 🖋️ 2. Typography Hierarchy

- **Heading Display (H1, H2, H3)**:
  - Font: `'Bodoni Moda', 'Cormorant Garamond', Didot, Georgia, serif`
  - Feature: `text-wrap: balance` to prevent typographic orphans.
  - Line Height: `1.12` to `1.2`
  - Italic emphasis: `<em>` styled with `'Cormorant Garamond', serif` in Champagne Gold `#D6AD45`.
- **Body & UI**:
  - Font: `'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif`
  - Line Height: `1.7`
  - Feature: `text-wrap: pretty` for elegant paragraph flow.
- **Eyebrow Category Labels**:
  - Font: `'Inter', sans-serif`
  - Size: `0.72rem` (11.5px)
  - Weight: `600`
  - Letter Spacing: `0.24em` uppercase with leading 18px horizontal gold line.

---

## ⚡ 3. UI/UX Pro Max Interaction Standards

1. **Touch Targets**:
   - Minimum 44×44px hit areas on all buttons, links, inputs, and toggles across all devices.
   - `touch-action: manipulation` applied to eliminate the 300ms mobile tap delay.
2. **Keyboard Accessibility & Focus Appearance (WCAG 2.2 AA / AAA)**:
   - Skip to main content link (`.skip-to-content`) for keyboard users.
   - Visible focus ring: `2px solid var(--color-gold)` with `outline-offset: 3px`.
   - Visible focus not obscured by sticky headers or floating elements.
3. **Micro-interactions & Tactile Feedback**:
   - Buttons: `scale(0.98)` on `:active` for immediate tactile confirmation within 80-100ms.
   - Hover states: Smooth 250-400ms transition with subtle elevation and Champagne Gold glow.
   - Shimmer light reflection effect on cards (`.shimmer-card`).
4. **Form Usability & Validation**:
   - Explicit `<label for="...">` associated with input IDs.
   - Real-time inline field validation on blur and input.
   - Dynamic submit button state (`Check Required Fields` ➔ `Send Enquiry`).
   - Loading indicator with disabled button state to prevent accidental duplicate submissions.
   - Accessibility attributes: `aria-invalid`, `aria-describedby`, and `role="alert"` on success receipt.
5. **Performance & Motion Budget**:
   - Zero Cumulative Layout Shift (CLS < 0.1) using explicit `aspect-ratio` on all media boxes.
   - `IntersectionObserver` video playback: plays videos only when intersecting viewport, pauses when offscreen.
   - Full `@media (prefers-reduced-motion: reduce)` support.

---

## 📱 4. Responsive Breakpoints

- **Desktop (1200px – 1400px)**: Two-column hero, 3-column video & collection grids, 3D mouse parallax.
- **Tablet (810px – 1199px)**: Reflowed 2-column cards, 500px media boxes, preserved typography balance.
- **Mobile (< 810px)**: Single-column stack, 44px minimum tap targets, full-screen blur navigation drawer.

