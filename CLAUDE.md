# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 14 booking and content management system for Mohammed Mutlak Camp, a Bedouin desert tourism company in Wadi Rum, Jordan. The application features a complex booking system with dynamic pricing, 90+ blog posts, tour/package offerings, and accommodation options.

**Important**: The Next.js project is located in the `mmcupdated/` subdirectory. All commands must be run from within this directory using `cd mmcupdated && <command>`.

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
  - Most pages are server components (static generation)
  - Client components marked with `"use client"` directive (forms, modals, interactive elements)
  - Server actions in `app/actions/` for email sending
  - Dynamic routes: `blog/[slug]/page.tsx` for 90+ blog posts
  - Each page exports static `metadata` for SEO

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

### Internationalization (i18n)

The application supports 6 languages with a custom client-side translation system:

- **Languages**: English (en), Arabic (ar), Spanish (es), French (fr), German (de), Italian (it)
- **Default Language**: English (en)
- **Implementation**: `TranslationProvider` context in `lib/translation-context.tsx`
- **Translation files**: JSON files in `translations/` directory
- **RTL Support**: Automatic `dir="rtl"` attribute for Arabic language
- **Storage**: Language preference saved to `localStorage`

- **Automatic Language Detection**:
  - Uses IP-based geolocation (`lib/geolocation.ts`) to detect user's country
  - Automatically sets appropriate language on first visit
  - Maps 50+ countries to their primary languages
  - Uses ipapi.co free API with 3-second timeout
  - Falls back to English if detection fails
  - User's manual language selection always takes priority over auto-detection

- **Language Priority**:
  1. User's saved preference (from `localStorage`)
  2. IP-based country detection
  3. English (default fallback)

- **Usage**:
  ```tsx
  import { useTranslation } from '@/lib/translation-context'

  function Component() {
    const { t, language, setLanguage } = useTranslation()
    return <h1>{t('welcome.title')}</h1>
  }
  ```
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

Complex pricing logic in booking forms:
- Group size tiers (1-100 people) with different per-person rates
- Tour-specific pricing stored in data objects
- Accommodation pricing with conditional free inclusion
- Package bundling with fixed prices
- Special cases (e.g., stargazing: 100 JOD for 1-3 people)

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

### Adding Translations

When adding new translatable content:

1. Add key-value pairs to all translation files in `translations/`:
   - `en.json` (English - primary)
   - `ar.json` (Arabic - RTL)
   - `es.json`, `fr.json`, `de.json`, `it.json`

2. Use the translation hook in components:
```tsx
const { t } = useTranslation()
<p>{t('new.translation.key')}</p>
```

3. For Arabic RTL: Ensure layouts work bidirectionally or add specific RTL styles when needed.

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
- **Client Components**: Required for hooks (`useState`, `useEffect`), event handlers, browser APIs, and the translation system
- **Path Aliases**: Use `@/` prefix for imports (e.g., `import { cn } from '@/lib/utils'`)
- **Image Paths**: Public images referenced as `/images/filename.jpg`
- **WhatsApp Links**: Direct contact via `wa.me` links throughout the site
- **LocalStorage Keys**:
  - `language` - User's selected language preference
  - `hasSeenDiscountModal` - Tracks if discount modal was shown

## Dependencies of Note

- **Radix UI**: Headless accessible component primitives
- **Shadcn**: Pre-built components based on Radix UI
- **Resend**: Email service provider
- **date-fns**: Date manipulation (prefer over moment.js)
- **Lucide React**: Icon library
- **Sonner**: Toast notifications
- **next-themes**: Dark mode support (configured but not heavily used)
- **Vercel Analytics**: Page tracking

## Testing

No test suite currently configured. Manual testing recommended for:
- Booking form calculations (verify pricing at various group sizes)
- Email sending via Resend (or mock email in development)
- Mobile responsiveness across breakpoints
- Schema.org validation via Google Rich Results Test
- RTL layout for Arabic language
- Translation completeness across all 6 languages
- WhatsApp widget visibility (should hide when mobile menu is open)
- Discount modal appearance (once per browser, 5-second delay)
