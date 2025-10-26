# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 14 booking and content management system for Mohammed Mutlak Camp, a Bedouin desert tourism company in Wadi Rum, Jordan. The application features a complex booking system with dynamic pricing, 90+ blog posts, tour/package offerings, and accommodation options.

**Critical**: The Next.js project is located in the `mmcupdated/` subdirectory. All commands must be run from within this directory using `cd mmcupdated && <command>`.

**Active Translation Project**: This codebase is undergoing active translation from English-only to a 6-language multilingual system (en, ar, es, fr, de, it). See the "Translation System" section below for critical workflow details. Check `TRANSLATION_PROGRESS.md` for current status.

## Build Commands

```bash
cd mmcupdated && npm run dev      # Start development server (http://localhost:3000)
cd mmcupdated && npm run build    # Production build
cd mmcupdated && npm run start    # Start production server
cd mmcupdated && npm run lint     # Run ESLint
```

Note: TypeScript and ESLint errors are ignored during builds (`ignoreBuildErrors: true`).

## Environment Variables

Required environment variables (create `.env.local` in the `mmcupdated/` directory):

```bash
RESEND_API_KEY=re_xxxxx  # Required for booking email functionality
```

The email system has graceful degradation - if `RESEND_API_KEY` is not set, it falls back to console logging in development.

## Architecture Overview

### Next.js 14 App Router Structure

- **app/**: File-based routing with React Server Components as default
  - **IMPORTANT**: Most pages are being converted to client components for translation support
  - Client components marked with `"use client"` directive (forms, modals, interactive elements, translated pages)
  - Server actions in `app/actions/` for email sending
  - Dynamic routes: `blog/[slug]/page.tsx` for 90+ blog posts
  - Each page originally exported static `metadata` for SEO (being removed during translation conversion)

  **Key Routes**:
  - `/` - Homepage
  - `/desert-experiences` - Tour listing page (14+ tours)
  - `/desert-experiences/[tour-slug]` - Individual tour pages
  - `/packages` - Multi-day package listing (7 packages)
  - `/packages/[package-slug]` - Individual package detail pages
  - `/accommodation` - Accommodation listing
  - `/accommodation/our-tented-camp` - Main camp details
  - `/accommodation/bivouac` - Bivouac camping details
  - `/bubble-camp-partner` - Bubble camp partnership page
  - `/blog` - Blog listing with search/filter
  - `/blog/[slug]` - Individual blog posts (90+ posts)
  - `/about-us` - Company information
  - `/contact-us` - Contact form

- **components/**: Split between Shadcn UI primitives (`components/ui/`) and custom components
  - 45+ Radix UI components in `components/ui/`
  - Key custom components: `booking-form.tsx`, `site-header.tsx`, `tour-card.tsx`, `faq-section.tsx`

- **data/**: Static content stored as TypeScript objects (no database)
  - `data/blog-posts/`: 90+ blog post files
  - Tour data, FAQ data, pricing information
  - All content is statically compiled at build time

- **lib/schema.ts**: Schema.org structured data generators
  - Functions for LocalBusiness, BlogPosting, Tour, FAQ schemas
  - Used in page layouts for SEO optimization

### Styling System

- **Tailwind CSS** with custom design system (amber/golden color scheme)
- HSL-based CSS variables in `styles/globals.css` for theming
- Mobile-first responsive design with breakpoints: sm (640px), md (768px), lg (1024px), 2xl (1536px)
- Consistent pattern for mobile/desktop layouts:
  ```tsx
  <div className="md:hidden">Mobile layout</div>
  <div className="hidden md:block">Desktop layout</div>
  ```

### Form Handling & Validation

The booking system uses a complex multi-step form (`components/booking-form.tsx`):
- Dynamic pricing calculation based on group size, tour selection, and accommodation type
- 15% discount logic for non-hot-air-balloon items
- Conditional free tented camp inclusion
- React Hook Form integration for form state management
- Zod schemas for validation
- Pre-population via optional `tourName` and `packageName` props from URL parameters

### Email Integration

- **Resend** for transactional emails via server action (`app/actions/send-booking-email.ts`)
- Graceful fallback to mock email service when `RESEND_API_KEY` is not set
- Error handling with user-friendly messages
- Emails sent to `mohammed.mutlak.camp@gmail.com`

### Translation System (i18n)

**CRITICAL**: This is an active, ongoing translation project. Always check `TRANSLATION_PROGRESS.md` for current status before adding new pages or components.

#### Overview
- **Languages**: English (en), Arabic (ar), Spanish (es), French (fr), German (de), Italian (it)
- **Default Language**: English (en)
- **Implementation**: `TranslationProvider` context in `lib/translation-context.tsx`
- **Translation files**: Flat JSON files in `translations/` directory (~1,515 keys)
- **RTL Support**: Automatic `dir="rtl"` attribute for Arabic
- **Storage**: Language preference saved to `localStorage`

#### Automatic Language Detection
- Uses IP-based geolocation (`lib/geolocation.ts`) to detect user's country
- Maps 50+ countries to their primary languages
- Uses ipapi.co free API with 3-second timeout
- Falls back to English if detection fails

#### Language Priority
1. User's saved preference (from `localStorage`)
2. IP-based country detection
3. English (default fallback)

#### Usage Pattern
```tsx
// Server components CANNOT use translations - must convert to client component
"use client"
import { useTranslation } from '@/lib/translation-context'

function Component() {
  const { t, language, setLanguage } = useTranslation()
  return <h1>{t('namespace.section.key')}</h1>
}
```

#### Translation Workflow (CRITICAL)

When adding or modifying pages with text content:

1. **Add translation keys to `translations/en.json`** (master file)
   - Use nested namespacing: `pageName.section.subsection`
   - Reuse common keys from `common.*` namespace
   - Example: `desertExperiences.hero.title`

2. **Sync to all language files** using helper script:
   ```bash
   cd mmcupdated && node find-missing-keys.js  # Check for missing keys
   ```
   - Manually copy keys to `ar.json`, `es.json`, `fr.json`, `de.json`, `it.json`
   - Initially use English text as placeholder (will be professionally translated later)

3. **Convert page to client component**:
   - Remove `export const metadata: Metadata = {...}` (causes errors in client components)
   - Add `"use client"` directive at top
   - Import and use `useTranslation()` hook
   - Replace all hardcoded text with `t('key')` calls

4. **Test language switching** to ensure all keys resolve properly

5. **Helper scripts available**:
   - `find-missing-keys.js` - Detects translation keys used in code but missing from `en.json`
   - `scripts/copy-translations.js` - Template for copying new keys across language files
   - `add_balloon_translations.js` - Example of bulk translation addition

#### Important Translation Constraints
- **Server components cannot use translations** - they must be converted to client components
- **Metadata must be removed** when converting to client components (or handled differently)
- **All 6 language files must stay in sync** - missing keys will display as the key name itself
- **Common namespace** (`common.*`) should be used for reusable strings (e.g., `common.bookNow`, `common.from`)
- **Language Selector**: Available in site header via `components/language-selector.tsx`

### Client-Side Interactive Features

- **WhatsApp Chat Widget** (`components/whatsapp-chat.tsx`):
  - Fixed bottom-right floating button
  - Auto-hides when mobile menu is open
  - Links to WhatsApp: `https://wa.link/mwcxbb`

- **Discount Modal** (`components/discount-modal.tsx`):
  - Appears once per user after 5-second delay
  - Tracked via `localStorage` key `hasSeenDiscountModal`
  - Promotes 15% discount and free Wi-Fi

### Data Patterns

All content is static TypeScript data:
```typescript
// Blog post structure (types/blog.ts)
interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt: string
  date: string
  image: string
  category: string
  content: string
}
```

Blog posts exported from `data/blog-posts/index.ts` as a single array.

### Pricing Engine

The booking forms (`components/booking-form.tsx` and `components/bivouac-booking-form.tsx`) implement complex pricing logic:

#### Dynamic Pricing Rules
- **Group size tiers**: Different per-person rates based on group size (1-100 people)
- **Tour-specific pricing**: Each desert experience has its own pricing structure stored in the component
- **Accommodation pricing**: Conditional free inclusion based on selections
- **Package bundling**: Fixed prices for multi-day packages
- **Special cases**:
  - Stargazing: 100 JOD flat rate for 1-3 people
  - Hot Air Balloon: Premium pricing tier
- **15% discount logic**: Applied to non-hot-air-balloon items
- **Conditional free tented camp**: Included based on booking selections

#### Pre-population
- Supports `tourName` and `packageName` props from URL parameters
- Automatically selects and prices the specified tour/package on form load

#### Form State Management
- Uses React Hook Form for complex multi-step form state
- Zod schemas for validation
- Server action integration for email sending (`app/actions/send-booking-email.ts`)

## Key Configuration Files

- **next.config.mjs**:
  - `images.unoptimized: true` for static export compatibility
  - Build error ignoring enabled

- **tailwind.config.ts**:
  - Custom amber palette (50-950)
  - Container max-width: 1400px
  - Custom animations for accordions

- **components.json**: Shadcn CLI configuration
  - TypeScript enabled
  - Path alias: `@/*`
  - Utility function: `lib/utils.ts`

## Common Development Patterns

### Git Workflow

**Repository**: https://github.com/Free-Palestine-4EVER/mmc-translated.git (translation fork)

Standard workflow for translation work:
```bash
cd mmcupdated
git add .
git commit -m "Descriptive commit message"
git push origin main
```

Note: Repository has no main branch set - always use 'main' explicitly for pushes.

### Adding a New Blog Post

1. Create file in `data/blog-posts/your-post-slug.ts`:
```typescript
export const yourPostSlug = {
  id: 'unique-id',
  title: 'Post Title',
  slug: 'your-post-slug',
  excerpt: 'Brief description',
  date: 'Month DD, YYYY',
  image: '/images/your-image.jpg',
  category: 'Travel Tips',
  content: 'Full HTML content...'
}
```

2. Export from `data/blog-posts/index.ts`:
```typescript
export { yourPostSlug } from './your-post-slug'
```

3. Add to main array in `data/blog-posts.ts`:
```typescript
import { yourPostSlug } from './blog-posts'
export const blogPosts = [...existingPosts, yourPostSlug]
```

### Adding a New Tour/Experience

1. Create page: `app/desert-experiences/your-tour/page.tsx`
2. Add metadata export for SEO
3. Create tour card entry in parent listing page
4. Update booking form pricing logic if new pricing tier needed

### Adding Schema.org Markup

Use generators from `lib/schema.ts`:
```tsx
import { generateTourSchema } from '@/lib/schema'

export default function TourPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateTourSchema({
            name: 'Tour Name',
            description: 'Description',
            // ...other fields
          }))
        }}
      />
      {/* Page content */}
    </>
  )
}
```

## Important Notes

- **Working Directory**: Project is in `mmcupdated/` subdirectory - always run commands from there
- **No Database**: All content is stored as TypeScript objects in `/data`
- **Static Export Ready**: Images are unoptimized for compatibility
- **Mobile-First**: Always implement mobile layout before desktop
- **Server Components**: Default rendering strategy; only use `"use client"` when needed for interactivity
- **Client Components**: Required for hooks (`useState`, `useEffect`), event handlers, browser APIs, and **the translation system** (critical limitation)
- **Translation Requirement**: Any page with user-visible text must be a client component to support i18n
- **Path Aliases**: Use `@/` prefix for imports (e.g., `import { cn } from '@/lib/utils'`)
- **Image Paths**: Public images referenced as `/images/filename.jpg`
- **WhatsApp Links**: Direct contact via `wa.me` links (https://wa.link/mwcxbb)
- **LocalStorage Keys**:
  - `language` - User's selected language preference
  - `hasSeenDiscountModal` - Tracks if discount modal was shown
- **Build Warnings**: Line ending warnings (CRLF) are benign on Windows development environment

## Dependencies of Note

- **Radix UI**: Headless accessible component primitives
- **Shadcn**: Pre-built components based on Radix UI
- **Resend**: Email service provider
- **date-fns**: Date manipulation (prefer over moment.js)
- **Lucide React**: Icon library
- **Sonner**: Toast notifications
- **next-themes**: Dark mode support (configured but not heavily used)
- **Vercel Analytics**: Page tracking

## Utility Scripts

Located in project root and `scripts/` directory:

- **`find-missing-keys.js`**: Scans specified tour pages for translation keys and reports which ones are missing from `translations/en.json`. Modify the `tourPages` array to check different files.
  ```bash
  cd mmcupdated && node find-missing-keys.js
  ```

- **`scripts/copy-translations.js`**: Template script for bulk-copying new translation keys from English to other language files with placeholder markers.

- **`add_balloon_translations.js`**: Example script showing how to add specific translations to language files programmatically.

## Testing

No automated test suite currently configured. Manual testing recommended for:
- Booking form calculations (verify pricing at various group sizes)
- Email sending via Resend (or mock email in development)
- Mobile responsiveness across breakpoints
- Schema.org validation via Google Rich Results Test
- RTL layout for Arabic language (use browser DevTools to verify `dir="rtl"`)
- Translation completeness across all 6 languages (use `find-missing-keys.js`)
- WhatsApp widget visibility (should hide when mobile menu is open)
- Discount modal appearance (once per browser, 5-second delay)
- Language switching works on all translated pages

## Quick Reference

### Starting Development
```bash
cd mmcupdated
npm run dev
# Open http://localhost:3000
```

### Translation Task Checklist
When translating a new page:
- [ ] Read current page to understand structure
- [ ] Add all text content as translation keys to `translations/en.json`
- [ ] Copy all new keys to other 5 language files (ar, es, fr, de, it)
- [ ] Convert page to client component (`"use client"`)
- [ ] Remove metadata export (if present)
- [ ] Import and use `useTranslation()` hook
- [ ] Replace all hardcoded text with `t('key')` calls
- [ ] Test in browser with language switching
- [ ] Run `node find-missing-keys.js` to verify no missing keys
- [ ] Commit and push to GitHub

### Common File Locations
- Translation files: `translations/*.json`
- Translation context: `lib/translation-context.tsx`
- Geolocation: `lib/geolocation.ts`
- Schema helpers: `lib/schema.ts`
- Booking forms: `components/booking-form.tsx`, `components/bivouac-booking-form.tsx`
- Site header/footer: `components/site-header.tsx`, `components/site-footer.tsx`
- Blog data: `data/blog-posts/` (90+ individual files)
- FAQ data: `data/desert-experience-faqs.ts`
- Email action: `app/actions/send-booking-email.ts`

### Key Components
- `<TranslationProvider>`: Wraps app in `app/layout.tsx`
- `useTranslation()`: Hook for accessing translations
- `<BookingForm>`: Main multi-step booking form with pricing
- `<LanguageSelector>`: Language switcher in header
- `<WhatsAppChat>`: Floating chat button
- `<DiscountModal>`: One-time promotional modal
- `<FAQSection>`: Reusable FAQ accordion
