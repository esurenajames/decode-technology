# AGENT.md — BrandA Project Rules

This file defines the rules, conventions, and folder structure for this project.
All AI agents and contributors **must** follow these rules strictly.

---

## 🎨 Brand Colors

| Role        | Hex       | Tailwind Custom Class / Usage                  | % of page |
|-------------|-----------|------------------------------------------------|-----------|
| Background  | `#FFFFFF` | `bg-white`                                     | 60%       |
| Primary     | `#19253b` | `bg-primary` / `text-primary`                  | 30%       |
| Accent 1    | `#2F7FF5` | `bg-accent` / `text-accent`                    | 5%        |
| Accent 2    | `#73C4F1` | `bg-accent-light` / `text-accent-light`        | 5%        |

> ⚠️ Never introduce new colors outside this palette. Use Tailwind opacity modifiers (e.g. `bg-accent/10`) for subtle fills.

Brand colors are registered in `globals.css` as both CSS variables AND Tailwind theme tokens via `@theme`:

```css
@theme inline {
  --color-primary:      #19253b;
  --color-accent:       #2F7FF5;
  --color-accent-light: #73C4F1;
}
```

This allows using them directly as Tailwind classes: `text-primary`, `bg-accent`, `border-accent-light`, etc.

---

## 📦 Component Library — Ant Design (antd)

This project uses **Ant Design** (`antd`) + `@ant-design/icons` as the UI component library.

### When to use antd
- Forms, inputs, selects, checkboxes, date pickers
- Tables, modals, drawers, tooltips, dropdowns
- Notifications, alerts, badges, tags
- Any complex interactive UI that antd already solves well

### Styling antd components
- Use the `theme` prop on `<ConfigProvider>` to align antd tokens with brand colors.
- Override component styles with Tailwind classes via `className` where possible.
- Only use `style={{}}` on antd components when `className` is insufficient.
- Never fight antd's default styles with `!important` — use ConfigProvider tokens instead.

### ConfigProvider setup (in `app/layout.tsx` or a client wrapper)
```tsx
import { ConfigProvider } from 'antd';

<ConfigProvider theme={{
  token: {
    colorPrimary: '#2F7FF5',
    colorLink:    '#2F7FF5',
    borderRadius: 8,          // matches our rounded-lg convention
    fontFamily:   'Inter, sans-serif',
  },
}}>
  {children}
</ConfigProvider>
```

### Priority order for styling
1. **antd component props / ConfigProvider tokens** — for antd components
2. **Tailwind classes** — for layout, spacing, color overrides via `className`
3. **inline `style={{}}`** — only for dynamic or non-expressible values

---

## 📁 Folder Structure

```
app/
├── layout.tsx                  ← Root layout ONLY: <html>, <body>, <Navbar>, <Footer>
├── page.tsx                    ← Root page: imports and renders Landing page ONLY
├── globals.css                 ← CSS variables, @theme tokens, resets, non-Tailwind utilities
├── favicon.ico
│
├── layouts/                    ← Shared layout components (used across all pages)
│   ├── Navbar.tsx
│   └── Footer.tsx
│
└── page/                       ← One folder per page
    └── Landing/
        ├── page.tsx            ← Import-only: no logic, just imports components
        └── components/         ← All sections/components for this page
            ├── Hero.tsx
            ├── About.tsx
            ├── Services.tsx
            └── ...
```

---

## 🎨 Styling Rules — Tailwind First

### Primary Rule
**Use Tailwind utility classes as the default for ALL styling.**
Only fall back to inline `style={{}}` or custom CSS for things Tailwind cannot express.

### When to use Tailwind classes
- Layout: `flex`, `grid`, `items-center`, `justify-between`, `gap-4`, etc.
- Spacing: `px-6`, `py-3`, `mt-4`, `mb-2`, etc.
- Typography: `text-sm`, `font-semibold`, `tracking-tight`, `leading-relaxed`, etc.
- Colors: `text-primary`, `bg-accent`, `border-accent-light`, `text-white`, etc.
- Borders: `border`, `border-white/10`, `rounded-full`, `rounded-lg`, etc.
- Shadows: `shadow-md`, `shadow-lg`, etc.
- Transitions: `transition-all`, `duration-200`, `ease-in-out`, etc.
- Hover/focus: `hover:text-accent`, `hover:bg-accent/10`, `focus:outline-none`, etc.
- Responsive: `md:flex`, `lg:hidden`, `sm:text-xl`, etc.
- Opacity: `text-white/80`, `bg-primary/5`, `border-accent/20`, etc.

### When to use inline `style={{}}`
Only when Tailwind cannot express the value, for example:
- Dynamic JS values: `style={{ maxHeight: menuOpen ? '400px' : '0' }}`
- Complex gradients: `style={{ background: 'linear-gradient(...)' }}`
- CSS custom properties: `style={{ paddingTop: 'var(--nav-height)' }}`
- `radial-gradient`, `conic-gradient`, or other non-standard backgrounds

### When to use `globals.css`
- CSS custom property definitions (`:root { --nav-height: 108px; }`)
- `@theme inline` block for Tailwind color tokens
- Reusable component classes that can't be expressed with Tailwind alone (e.g. `.glow-btn`, `.outline-btn`)
- Global resets and base styles

### ❌ Do NOT
- Use inline `style={{}}` for things Tailwind can handle (colors, spacing, flex, etc.)
- Write ad-hoc CSS in component files
- Use hardcoded hex colors in JSX — always use Tailwind classes or CSS variables

---

## 📐 Folder & File Rules

### `app/layout.tsx`
- Contains **only** `<html>`, `<body>`, `<Navbar>`, `<Footer>`, and metadata.
- No page-specific content here.
- Imports `globals.css`.

### `app/page.tsx`
- **Import-only.** No JSX logic or styling.
- Simply imports and renders the Landing page component.
- Example:
  ```tsx
  import LandingPage from './page/Landing/page';
  export default function Home() { return <LandingPage />; }
  ```

### `app/page/[PageName]/page.tsx`
- **Import-only.** No JSX logic or styling.
- Imports all section components for that page and renders them in order.
- Example:
  ```tsx
  import Hero from './components/Hero';
  import About from './components/About';
  export default function LandingPage() {
    return <> <Hero /> <About /> </>;
  }
  ```

### `app/page/[PageName]/components/`
- Each file is a **single section component** (e.g. `Hero.tsx`, `Services.tsx`).
- All actual JSX, styling, and logic lives here.
- Add `'use client'` only if the component uses hooks or event handlers.

### `app/layouts/`
- Only **Navbar** and **Footer** (and any future shared layout wrappers).
- Always `.tsx` files.

---

## 🧩 Component Rules

- **TypeScript only** — all new files use `.tsx` or `.ts`. No `.jsx` or `.js`.
- **Tailwind first** — use utility classes for all styling (see Styling Rules above).
- **No hardcoded hex colors in JSX** — use `text-primary`, `bg-accent`, etc.
- **`'use client'`** required for any component using hooks or event handlers.
- **No inline event handlers** in Server Components — use CSS `:hover` or mark as `'use client'`.
- **Buttons are rectangular with rounded corners** — use `rounded-lg` (never `rounded-full` or pill shapes). Buttons should feel solid and professional, not circular.
- **Use antd components** where they fit (forms, tables, modals, etc.) rather than building from scratch.
- **No borders on images** — images should be clean and borderless. Use shadows for depth if needed, but never borders.
- **Layout Constraint** — Most page content (excluding Landing Page and CTA sections) must be contained within a `max-w-5xl` container to ensure optimal readability and design consistency.
- **Font weights** — Never use `font-black` unless it's a Landing page component. For all other pages, use `font-bold` or lighter.

---

## 🚫 What NOT to Do

- Do not put logic or styling directly in `app/page.tsx` or any `page/[Name]/page.tsx`.
- Do not create new color variables outside of `globals.css :root` / `@theme`.
- Do not use `.jsx` or `.js` file extensions — use `.tsx` / `.ts`.
- Do not use inline `style={{}}` for anything Tailwind can handle.
- Do not add `<html>` or `<body>` anywhere except `app/layout.tsx`.
- Do not hardcode hex values like `color: '#2F7FF5'` in JSX — use Tailwind classes.
