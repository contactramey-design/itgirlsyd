---
name: Creator Hub SaaS Build
overview: Build an AI-powered, all-in-one SaaS platform for content creators featuring personalized landing pages, media kit generation, brand collaboration tools, social media management, and AI assistance customized to each creator's niche.
todos:
  - id: phase1-setup
    content: Initialize Next.js 14 project with Supabase, Stripe, and Tailwind
    status: completed
  - id: phase1-auth
    content: Build authentication system (email, Google OAuth, protected routes)
    status: completed
  - id: phase1-db
    content: Create database schema in Supabase (users, pages, links, etc.)
    status: completed
  - id: phase2-pages
    content: Build dynamic landing page system with /[username] routes
    status: completed
  - id: phase2-editor
    content: Create dashboard page editor with themes and customization
    status: completed
  - id: phase3-ai-setup
    content: Set up OpenAI API integration and rate limiting
    status: completed
  - id: phase3-ai-features
    content: "Build AI features: captions, media kit, outreach, analytics"
    status: completed
  - id: phase4-brands
    content: Build brand database and collaboration tracker
    status: completed
  - id: phase5-social
    content: Build social dashboard with stats aggregation and Buffer integration
    status: completed
  - id: phase6-payments
    content: Implement Stripe subscriptions and feature gating
    status: completed
  - id: phase7-launch
    content: Polish, test, and launch beta
    status: completed
---

# Creator Hub SaaS - Full Development Plan

## Tech Stack

| Layer | Technology | Why |

|-------|------------|-----|

| Frontend | Next.js 14 + Tailwind | SSR, API routes, your existing design |

| Database | Supabase (PostgreSQL) | Auth, realtime, storage, free tier |

| AI | OpenAI API (GPT-4) | Captions, outreach, analysis |

| Payments | Stripe | Subscriptions, one-time purchases |

| Email | Resend or SendGrid | Transactional emails |

| Hosting | Vercel | Easy deploy, edge functions |

| Social APIs | Meta, TikTok, Pinterest | Pull stats (read-only) |

---

## Phase 1: Foundation (Week 1-2)

### Setup

- Initialize Next.js 14 project with App Router
- Configure Supabase (database + auth)
- Set up Stripe account and API keys
- Port existing Tailwind config and design system from `itgirlcontent`
- Environment variables and deployment pipeline

### Database Schema

```sql
-- Core tables to create
users, profiles, pages, links, products, media_kits, 
brands, collaborations, ai_usage, subscriptions
```

### Auth System

- Email/password signup
- Google OAuth
- Magic link option
- Protected routes

---

## Phase 2: Landing Page Builder (Week 3-4)

### Features

- Dynamic routes: `/[username]` for each creator
- Drag-and-drop link ordering
- Theme selector (5+ themes, including your current pink aesthetic)
- Custom colors picker
- Bio editor with character limit
- Profile photo upload to Supabase Storage
- Social links with platform icons
- Shop section for digital products

### Key Files to Create

- `app/[username]/page.tsx` - Public landing page
- `app/dashboard/page/page.tsx` - Page editor
- `components/PagePreview.tsx` - Live preview
- `components/LinkEditor.tsx` - Manage links

---

## Phase 3: AI Integration (Week 5-7)

### OpenAI Setup

- Create `/api/ai/[feature]/route.ts` API routes
- Implement rate limiting per user tier
- Track AI credits usage

### AI Features

**1. Niche Detection (Onboarding)**

```
Input: User's social profiles, bio, content description
Output: Detected niche, recommended themes, brand categories
```

**2. Caption Generator**

```
Input: Photo description, tone preference, platform
Output: 3-5 caption options with hashtags
```

**3. Media Kit Generator**

```
Input: Stats, niche, past collaborations
Output: Professional PDF with AI-written bio and selling points
```

**4. Brand Outreach Writer**

```
Input: Brand name, product type, creator's stats
Output: Personalized pitch email
```

**5. Analytics Insights**

```
Input: Growth data over time
Output: "Your Reels are performing 40% better than carousels. 
        Post more between 7-9pm when your audience is most active."
```

**6. Best Posting Times**

```
Input: Platform, historical engagement data
Output: Weekly schedule with optimal times
```

---

## Phase 4: Brand Collaboration Hub (Week 8-9)

### Brand Database

- Curated list of brands seeking creators
- Filter by: niche, follower requirements, compensation type
- Save favorites, track applications

### Collaboration Tracker

- Status: Pitched, Negotiating, Contracted, Completed
- Payment tracking
- Contract upload/storage
- Notes and communication log

### Rate Calculator

- Input follower counts + engagement rate
- Output suggested rates per platform per content type
- Based on industry standards

---

## Phase 5: Social Dashboard (Week 10-11)

### Stats Aggregation

- Connect social accounts (OAuth where available)
- Manual entry fallback
- Daily stats sync (cron job)
- Growth charts and trends

### Scheduling (Buffer Integration)

- Connect Buffer account via OAuth
- Schedule posts from dashboard
- View upcoming queue
- Post performance after publishing

---

## Phase 6: Payments and Subscriptions (Week 12)

### Stripe Integration

- Subscription plans (Free, Creator $12, Pro $24, Business $49)
- Usage-based AI credits
- Customer portal for billing management
- Webhook handlers for subscription events

### Feature Gating

```javascript
// Example middleware
if (user.tier === 'free' && feature === 'ai_outreach') {
  return { error: 'Upgrade to Pro for AI outreach' }
}
```

---

## Phase 7: Polish and Launch (Week 13-14)

### Final Tasks

- Mobile responsive testing
- SEO optimization
- Legal pages (Terms, Privacy)
- Onboarding flow refinement
- Beta user testing
- Marketing landing page
- Launch!

---

## Pricing Structure (Recommended)

| Tier | Price | Features |

|------|-------|----------|

| **Free** | $0 | Basic page, 5 links, watermark, no AI |

| **Creator** | $12/mo | Unlimited links, media kit, 50 AI credits |

| **Pro** | $24/mo | Brand database, outreach tools, 200 AI credits |

| **Business** | $49/mo | Custom domain, team seats, unlimited AI |

---

## File Structure

```
creator-hub-saas/
├── app/
│   ├── (auth)/login/page.tsx
│   ├── (auth)/signup/page.tsx
│   ├── (dashboard)/
│   │   ├── layout.tsx
│   │   ├── page.tsx (overview)
│   │   ├── my-page/page.tsx
│   │   ├── media-kit/page.tsx
│   │   ├── collabs/page.tsx
│   │   ├── ai-tools/page.tsx
│   │   ├── social/page.tsx
│   │   └── settings/page.tsx
│   ├── [username]/page.tsx (public pages)
│   └── api/
│       ├── ai/caption/route.ts
│       ├── ai/mediakit/route.ts
│       ├── ai/outreach/route.ts
│       ├── stripe/webhook/route.ts
│       └── social/sync/route.ts
├── components/
├── lib/
│   ├── supabase.ts
│   ├── stripe.ts
│   └── openai.ts
└── types/
```

---

## Estimated Costs (Monthly at Launch)

| Service | Free Tier | Growth |

|---------|-----------|--------|

| Vercel | $0 | $20/mo |

| Supabase | $0 | $25/mo |

| OpenAI | ~$20-50 | Scales with users |

| Stripe | 2.9% + 30c per transaction | Same |

| Domain | $12/year | Same |

**Break-even:** ~5-10 paying users covers costs

---

## Next Steps

1. **Name the platform** - What will it be called?
2. **Set up new repo** - Fresh Next.js project or convert existing?
3. **Create Supabase project** - Free tier to start
4. **Get OpenAI API key** - For AI features
5. **Begin Phase 1** - Foundation setup