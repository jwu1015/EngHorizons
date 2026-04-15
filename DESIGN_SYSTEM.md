# EngHorizons Club — Design System

Single source of truth for the club website. Every value used in UI must come from here.

---

## 1. Colors & Visual

- **No** default purple gradients unless they match club branding.
- **No** sparkles or emojis in hero headings.
- **No** generic glowing hover effects.

Define in implementation:
- Primary / secondary / accent (brand-aligned).
- Neutral scale (backgrounds, borders, text).
- Semantic (success, warning, error) if needed.

---

## 2. Typography

- **Weight hierarchy:** Consistent (e.g. headings one step bolder than body; avoid oversized headings + ultra-thin body).
- **Line-height & spacing:** Uniform across body and headings; consistent paragraph spacing.
- **Type scale:** Define one scale and stick to it (e.g. 12, 14, 16, 18, 24, 32, 40).

Define in implementation:
- Font families (heading vs body).
- Scale steps and line-heights.
- Letter-spacing where needed.

---

## 3. Layout & Components

- **Placement:** Identical component placement across pages (nav, footer, content structure).
- **Border radius:** 2–3 values max (e.g. `--radius-sm`, `--radius-md`, `--radius-lg`).
- **Hover:** Subtle only; 2–4px lift max (or equivalent opacity/scale).
- **Icons:** Sizes proportional to adjacent text; use one small set of sizes.
- **Social:** Remove or replace any non-functional social icons.

Define in implementation:
- Spacing scale (e.g. 4, 8, 12, 16, 24, 32, 48, 64).
- Radius tokens.
- Component patterns (cards, buttons, nav).

---

## 4. Animations & Interactions

- **Easing:** Use cubic-bezier (or named curves from the system); no linear default for UI.
- **Stagger:** Intentional timing (e.g. list items, cards); consistent delay steps.
- **Purpose:** Every animation supports feedback or clarity; remove decorative-only motion.

Define in implementation:
- 2–3 shared duration values (e.g. 150ms, 250ms, 400ms).
- 2–3 easing curves (e.g. ease-out, ease-in-out, custom cubic-bezier).

---

## 5. UX Behaviors

- **Async:** Loading states for all async actions (buttons, forms, fetches).
- **Buttons:** Progress or loading indicators on submit/primary actions.
- **Toggles / carousels / tabs:** Must be functional and keyboard-accessible.
- **Data-heavy sections:** Skeleton screens or placeholders while loading.

---

## 6. Copywriting

- **No** em-dash overuse.
- **Avoid** vague phrases: "Launch faster", "Build your dreams", "Create without limits".
- **No** fake testimonials.
- **No** generic AI placeholder names (e.g. "Sarah Chen") or stock faces.

Use real club context, events, and member-focused language.

---

## 7. Implementation Checklist

When building or reviewing UI:

1. Spacing → from spacing scale.
2. Colors → from color tokens.
3. Radius → from 2–3 radius tokens.
4. Type → from type scale and weight hierarchy.
5. Motion → from duration + easing; purposeful only.
6. Components → same structure and placement across pages.
7. Copy → concrete, club-specific; no placeholders or vague marketing speak.

Reference this file and the design tokens (e.g. in CSS variables or theme) for every new component or page.
