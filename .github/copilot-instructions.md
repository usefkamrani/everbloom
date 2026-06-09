## Purpose

Short, actionable guidance for AI coding agents working on the EverBloom codebase.

## Quick facts

- Framework: Next.js (app router, Next 15) + TypeScript + Tailwind.
- Language / locale: Persian (fa-IR). Layout uses RTL (see `src/app/layout.tsx` dir="rtl").
- Path alias: `@/*` → `src/*` (see `tsconfig.json`).
- Dev commands (powershell):

```powershell
npm run dev    # starts Next dev (script uses `next dev --turbopack`)
npm run build  # builds for production
npm run start  # starts a built app
npm run lint   # runs next lint
```

## Architecture — high level (what matters)

- App directory (server components by default): `src/app/` contains pages, nested layouts, and API routes.
  - Root layout: `src/app/layout.tsx` (sets RTL and site metadata).
  - Feature routes: `src/app/product/[slug]/`, `src/app/shop/`, `src/app/cart/`, and `src/app/admin/`.
- API routes live under the app router: e.g. `src/app/api/admin/products/route.ts` (returns NextResponse JSON).
- Shared UI and admin widgets are in `src/components/` (organized by area: `layout`, `products`, `admin`, `ui`).
- Canonical product data: `src/lib/products.ts` — small in-memory dataset used by storefront pages.
- Utilities: `src/lib/formatPrice.ts` and `src/lib/utils.ts` contain locale-aware formatters and helpers (e.g. Persian digits handling, `cn` helper that wraps `clsx` + `tailwind-merge`).

Why this matters for agents: most pages are server components; only files with `"use client"` at the top are client components. If you need browser APIs or state/hooks, move logic into a client component (see `src/app/product/[slug]/ProductDetailsClient.tsx`).

## Patterns & conventions to follow

- Server vs. Client: default is server — avoid using window/document in server components. Add `"use client"` at file top for client-only code.
- Import paths use the `@` alias: e.g. `import { MyHeader } from "@/components/layout/header"`.
- Images stored in `public/` and referenced with Next `Image` component, for example:
  - `src/app/product/[slug]/ProductDetailsClient.tsx` uses `src={`/plants/productImages/${product.img}.png`}`.
- Formatting/numbers: always use `formatPrice` from `src/lib/formatPrice.ts` or `toEnglishDigits` when parsing user input to normalize Persian/Arabic digits.
- Styling: prefer the `cn(...)` helper in `src/lib/utils.ts` to combine Tailwind classes and avoid class duplication.

## API and data flow notes

- Admin API routes are simple Next.js route handlers that return NextResponse JSON. Follow the same pattern when adding endpoints (export functions like `export async function GET()` / `POST()` in `route.ts`).
- Storefront pages often import `src/lib/products.ts` directly (static dataset). If adding dynamic data, keep API contracts consistent (JSON with an `items` array like existing admin products route).

## Key files to inspect when making changes (examples)

- `src/app/layout.tsx` — site-level layout, RTL and metadata.
- `src/lib/products.ts` — product types and sample data.
- `src/lib/formatPrice.ts` — Persian digit handling & number formatting.
- `src/app/product/[slug]/ProductDetailsClient.tsx` — example client component with state/hooks.
- `src/app/api/admin/products/route.ts` — example API route returning JSON.
- `src/components/layout/header.tsx` and `src/components/layout/footer.tsx` — header/footer composition and mobile menu patterns.

## Common gotchas

- Remember RTL: CSS/layout decisions assume right-to-left reading; test layout changes in RTL.
- Persian numerals: input values sometimes contain Persian/Arabic-Indic digits — use `toEnglishDigits` before numeric parsing.
- Next.js app router: new file placement matters (nested `layout.tsx` files create layout boundaries).
- Client components must opt-in (`"use client"`) — moving code without adding this will cause runtime/build errors.

## How to add a small API route (example)

Create `src/app/api/your-area/route.ts` and export handlers:

- `export async function GET() { return NextResponse.json({ items: [...] }) }`

Use `NextResponse.json(...)` as in `src/app/api/admin/products/route.ts`.

## When to run typecheck and lint

- Quick typecheck: `npx tsc --noEmit` (uses `tsconfig.json`).
- Lint: `npm run lint` (relies on Next's built-in lint runner). Run these before opening large PRs.

---

If anything is unclear or you'd like more detail in a specific area (admin APIs, image pipeline, or adding new pages/components), tell me which part and I will expand this file. 
