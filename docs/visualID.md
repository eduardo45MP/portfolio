# 🎨 Visual Identity – Portfolio Website

> Homepage redesign status: implemented. The homepage deliberately ships as a light editorial experience; the existing theme behaviour on legacy project pages remains independent until their visual system is migrated.

This document defines the **visual identity**, **colour system**, and **design principles** for Eduardo Peixoto's personal portfolio.

The visual system should communicate the intersection of **technology, entrepreneurship, engineering, and personal identity**, while maintaining consistency across the website, project pages, future updates, and external materials connected to the portfolio.

## Homepage composition

The homepage is organised into seven large blocks: Hero, Positioning, What I Build, Selected Work, Beyond the Code, GitHub and Contact. Avoid adding microsections for statistics, roadmaps or future features.

Projects use interface screenshots as their primary visual evidence and follow the sequence **problem → solution → learning/result → technology**. Icons and emoji must not substitute for product evidence.

### Photography

- `eduardo-profile.webp` is the primary professional portrait. It supports recognition and positioning in the Hero, using a tall architectural crop with the face and eyes preserved.
- `eduardo-editorial.webp` is the contextual portrait in Beyond the Code. It carries personality while the copy remains brief and focused on entrepreneurship, technology, languages, research and experimentation.

The two photographs have different narrative jobs and should not be duplicated elsewhere as decoration.

---

## 👤 Brand Hierarchy

The portfolio uses a two-level identity system.

### Primary Identity

**Eduardo Peixoto**

The person's name is the primary identity of the portfolio and should receive the greatest visual prominence.

Primary positioning:

> **Founder · Software Engineer · Business Builder**

The name should be used as the main heading of the homepage and should take precedence over the technical brand name.

### Brand Signature

**Eduardo45MP.dev**

`Eduardo45MP.dev` remains part of the identity, but its role is now that of a **brand signature**, rather than the primary identity.

Recommended hierarchy:

```text
Eduardo Peixoto
Founder · Software Engineer · Business Builder

Eduardo45MP.dev
```

### Usage

- Keep the `Eduardo45MP.dev` logo in the header.
- Give the logo less visual weight than the person's name.
- Do not use `Eduardo45MP.dev` as the main Hero headline.
- Use the signature again in the footer.
- Use **Eduardo Peixoto** as the primary identity in page titles, introductions, and prominent personal references.
- Preserve `Eduardo45MP.dev` where a compact technical or digital signature is appropriate.

---

## 🌈 Colour System

The updated colour system is derived from both the previous Eduardo45MP.dev identity and the portfolio's photographic direction.

The visual language is primarily built around:

- near-black graphite;
- warm off-white;
- sand/beige tones;
- deep editorial blue.

The original dark wine colour is preserved as a heritage accent, but no longer dominates the interface.

### Core Brand Colours

- **Brand Dark:** <span style="display:inline-block;width:14px;height:14px;background:#191C21;border:1px solid #ccc;border-radius:3px;"></span> `#191C21` – Primary identity colour. Used for headings, names, and high-emphasis elements.

- **Brand Blue:** <span style="display:inline-block;width:14px;height:14px;background:#18324A;border:1px solid #ccc;border-radius:3px;"></span> `#18324A` – Primary interaction colour. Used for links, CTAs, professional positioning, and functional emphasis.

- **Brand Warm:** <span style="display:inline-block;width:14px;height:14px;background:#B79A7A;border:1px solid #ccc;border-radius:3px;"></span> `#B79A7A` – Sand/beige tone derived from the photographic identity. Used in subtle backgrounds, metadata, gradients, and editorial details.

- **Brand Wine:** <span style="display:inline-block;width:14px;height:14px;background:#330010;border:1px solid #ccc;border-radius:3px;"></span> `#330010` – Heritage colour from the previous identity. Reserved for small accents, eyebrows, technical details, and selected interaction states.

### Light Theme

- **Background:** <span style="display:inline-block;width:14px;height:14px;background:#F4F0E8;border:1px solid #ccc;border-radius:3px;"></span> `#F4F0E8` – Warm off-white used as the primary page background.

- **Surface:** <span style="display:inline-block;width:14px;height:14px;background:#EBE5DC;border:1px solid #ccc;border-radius:3px;"></span> `#EBE5DC` – Secondary surface used for cards, panels, and supporting components.

- **Primary Text:** <span style="display:inline-block;width:14px;height:14px;background:#1F2328;border:1px solid #ccc;border-radius:3px;"></span> `#1F2328` – Primary reading colour.

- **Secondary Text:** <span style="display:inline-block;width:14px;height:14px;background:#5B6068;border:1px solid #ccc;border-radius:3px;"></span> `#5B6068` – Secondary information and lower-emphasis content.

### Dark Theme

- **Background:** <span style="display:inline-block;width:14px;height:14px;background:#14171B;border:1px solid #ccc;border-radius:3px;"></span> `#14171B`

- **Surface:** <span style="display:inline-block;width:14px;height:14px;background:#1D2228;border:1px solid #ccc;border-radius:3px;"></span> `#1D2228`

- **Primary Text:** <span style="display:inline-block;width:14px;height:14px;background:#F1EEE8;border:1px solid #ccc;border-radius:3px;"></span> `#F1EEE8`

- **Secondary Text:** <span style="display:inline-block;width:14px;height:14px;background:#B9BEC5;border:1px solid #ccc;border-radius:3px;"></span> `#B9BEC5`

- **Brand Blue:** <span style="display:inline-block;width:14px;height:14px;background:#7694AE;border:1px solid #ccc;border-radius:3px;"></span> `#7694AE`

- **Brand Warm:** <span style="display:inline-block;width:14px;height:14px;background:#C8AD8D;border:1px solid #ccc;border-radius:3px;"></span> `#C8AD8D`

- **Brand Wine:** <span style="display:inline-block;width:14px;height:14px;background:#D0A9B4;border:1px solid #ccc;border-radius:3px;"></span> `#D0A9B4`

### Semantic CSS Tokens

New components should use semantic variables instead of depending directly on hexadecimal values.

```css
:root {
  --background: #f4f0e8;
  --surface: #ebe5dc;

  --text-primary: #1f2328;
  --text-secondary: #5b6068;

  --brand-dark: #191c21;
  --brand-warm: #b79a7a;
  --brand-blue: #18324a;
  --brand-wine: #330010;
}
```

Existing `--color-*` variables may remain as compatibility aliases while the stylesheet transitions toward the semantic system.

### Colour Usage Rules

```text
Brand Dark
→ headings
→ Eduardo Peixoto identity
→ high-importance text

Brand Blue
→ links
→ primary CTAs
→ interactive states
→ professional positioning

Brand Warm
→ subtle backgrounds
→ metadata
→ gradients
→ photographic/editorial details

Brand Wine
→ small accents
→ section eyebrows
→ technical details
→ heritage references

Background / Surface
→ content structure
→ visual breathing room
```

> **Rule:** Blue is the primary functional colour. Graphite carries identity and hierarchy. Warm beige supports the photographic language. Wine should be used sparingly and should not compete with the primary interaction colour.

---

## ♿ Colour Contrast & Accessibility

Colour combinations used for normal text must maintain a **minimum WCAG contrast ratio of 4.5:1**.

Important combinations in the light theme include:

| Foreground | Background | Approx. Contrast | Usage |
|---|---|---:|---|
| `#1F2328` | `#F4F0E8` | 13.9:1 | Primary text |
| `#5B6068` | `#F4F0E8` | 5.57:1 | Secondary text |
| `#FFFFFF` | `#18324A` | 13.17:1 | Primary buttons |

Do not assume that a brand colour is suitable for text merely because it belongs to the palette. Contrast must be evaluated according to its actual foreground/background combination.

Interactive elements must also provide visible `:focus-visible` states for keyboard navigation.

---

## ✍️ Typography

The typography combines a contemporary editorial identity with technical references.

### Headings

**Poppins**

Used for:

- `H1`;
- `H2`;
- `H3`;
- professional positioning;
- selected brand elements.

The homepage name should receive significantly greater visual prominence than ordinary page headings.

### Body

**Roboto**

Used for:

- paragraphs;
- lists;
- descriptions;
- navigation;
- supporting information.

### Technical Content

**Fira Code**

Used for:

- code snippets;
- technical identifiers;
- selected metadata;
- developer-oriented content.

### Typographic Hierarchy

The homepage Hero follows this hierarchy:

```text
Eduardo Peixoto
↓
Founder · Software Engineer · Business Builder
↓
Supporting headline
↓
Introduction
↓
Calls to action
```

Project pages should **not inherit the oversized personal-name typography**.

The large editorial heading style belongs specifically to `.hero-name`. Generic `.hero h1` headings should use a smaller responsive scale suitable for project names such as `edu_assistant` and `RussianTrainingHub`.

### Guidelines

- Maintain a contrast ratio ≥ 4.5:1 for normal text.
- Maintain clear visual distinction between identity, positioning, headings, and body text.
- Limit structural heading levels to `H1`, `H2`, and `H3` where practical.
- Avoid excessive font-weight variation.
- Use monospace typography only where it reinforces technical meaning.

---

## 🖼️ Photography & Imagery

Photography is now a **first-class component of the portfolio identity**, rather than merely supporting decoration.

Two primary photographic directions are used.

### Profile Photography

`eduardo-profile.webp`

Purpose:

- professional identification;
- personal introduction;
- high-trust contexts;
- sections where the person should be more important than the environment.

Recommended alternative text:

```text
Portrait of Eduardo Peixoto
```

Visual characteristics:

- neutral/warm background;
- controlled composition;
- professional appearance;
- minimal visual distraction.

### Editorial Photography

`eduardo-editorial.webp`

Purpose:

- storytelling;
- personal identity;
- editorial sections;
- communicating personality beyond purely technical positioning.

Recommended alternative text:

```text
Eduardo Peixoto seated in an editorial setting
```

The blue environment of the editorial photograph is one of the references for `--brand-blue`, while the warmer neutral photography contributes to `--brand-warm` and the off-white surface system.

### Project Images

Project thumbnails should favour:

- real screenshots;
- interface details;
- product mock-ups where useful;
- clean framing;
- consistent aspect ratios.

Avoid decorative stock photography when a real project interface or relevant artifact is available.

---

## 🔹 Icons

Preferred icon systems:

- [Lucide](https://lucide.dev)
- [Feather Icons](https://feathericons.com)

Guidelines:

- use a consistent stroke width;
- prefer outlined icons;
- avoid mixing unrelated icon styles;
- icons should support information, not replace necessary labels;
- decorative icons should be hidden from assistive technologies where appropriate.

---

## 📐 Layout & Components

### Grid System

Use **CSS Grid + Flexbox** for responsive layouts.

### Container

Primary desktop container:

```css
width: min(1140px, 92vw);
margin: 0 auto;
```

General behaviour:

- **Mobile:** fluid width.
- **Tablet:** responsive layout with early column collapse where necessary.
- **Desktop:** maximum content width of `1140px`.

### Hero

The homepage Hero should prioritise:

1. Eduardo Peixoto;
2. professional positioning;
3. supporting message;
4. photography/content;
5. calls to action.

Large Hero typography must not be globally applied to project pages.

Two-column Hero layouts should collapse before content begins competing for horizontal space. Approximately `960px` is the preferred breakpoint when large editorial typography is present.

Grid children containing long technical names should allow proper shrinking:

```css
.hero-content,
.hero-card {
  min-width: 0;
}
```

Technical project names may use:

```css
overflow-wrap: anywhere;
```

when necessary to prevent layout overflow.

### Buttons

Buttons use:

```css
border-radius: 0.75rem;
```

Primary buttons use `--brand-blue`.

Hover states may use:

- subtle vertical movement;
- increased shadow;
- controlled colour changes.

The primary CTA must remain visually dominant over secondary actions.

### Cards

Cards use:

```css
border-radius: 1rem;
```

Characteristics:

- subtle border;
- warm or dark semantic surface;
- soft shadow;
- consistent internal spacing;
- restrained hover movement.

Large featured cards may use:

```css
border-radius: 1.5rem;
```

### Header

The header remains sticky and uses a translucent background with backdrop blur.

`Eduardo45MP.dev` appears here as a **brand signature**, with intentionally lower visual weight than the homepage identity.

### Footer

The footer repeats the identity hierarchy in a compact form:

```text
Eduardo Peixoto
Founder · Software Engineer · Business Builder
Eduardo45MP.dev
```

This reinforces the relationship between the person and the digital brand without making the signature compete with the primary identity.

---

## 🌓 Light & Dark Mode

Both themes are part of the visual system.

### Light Mode

The default light experience uses:

- warm off-white background;
- sand/beige surfaces;
- graphite typography;
- deep blue interactions;
- restrained wine accents.

It should feel warmer and more editorial than a conventional white developer portfolio.

### Dark Mode

Dark mode uses:

- graphite/near-black backgrounds;
- slightly lighter dark surfaces;
- warm off-white text;
- desaturated blue interactions;
- warm beige details.

Dark mode should preserve the same hierarchy as light mode rather than simply invert colours.

### Theme Persistence

The theme switcher remains available in the header.

The selected preference should be stored locally in the browser so that the visitor's choice persists between visits.

---

## ♿ Interaction & Motion

Interactive elements should provide clear:

- `:hover`;
- `:focus-visible`;
- active states where appropriate.

Keyboard focus should use the brand blue and remain clearly visible against both themes.

Motion should remain subtle and functional.

Users who request reduced motion through:

```css
@media (prefers-reduced-motion: reduce)
```

should receive an experience with animations and transitions substantially reduced or disabled.

---

## 🧭 Design Principles

The portfolio should follow five primary principles:

### 1. Person before alias

**Eduardo Peixoto** is the identity.

**Eduardo45MP.dev** is the signature.

### 2. Editorial before decorative

Photography, typography, whitespace, and composition should create personality without unnecessary visual effects.

### 3. Technology without developer-template aesthetics

Technical credibility should come from projects, content, architecture, and selected technical details — not from excessive neon colours, terminal motifs, gradients, or monospace typography.

### 4. Colour with semantic responsibility

Every major colour has a defined role.

Avoid using multiple brand colours interchangeably for the same purpose.

### 5. Accessibility is part of the identity

Contrast, keyboard navigation, responsive behaviour, readable typography, semantic HTML, reduced-motion support, and meaningful alternative text are design requirements rather than optional refinements.

---

## 🔄 Evolution

The visual identity may evolve as the portfolio and professional positioning evolve.

Future changes should preserve:

- the distinction between personal identity and brand signature;
- semantic colour roles;
- accessibility requirements;
- photographic coherence;
- responsive behaviour;
- consistency between the homepage and individual project pages.

When introducing a new colour, typography style, component, or visual convention, document its purpose here before allowing it to become a recurring pattern.

---

✨ Maintained by **Eduardo Peixoto · Eduardo45MP.dev**
