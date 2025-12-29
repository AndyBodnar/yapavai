# Yavapai Waste Solutions - Website Rebuild Roadmap

## Company Overview
- **Business Name:** Yavapai Waste Solutions
- **Tagline:** "Reliable, Transparent, Local"
- **Industry:** Waste Disposal / Dumpster Rental
- **Location:** Prescott, Arizona
- **Phone:** (928) 713-2710
- **Email:** sales@ywsaz.com
- **Hours:** Monday-Friday, 8:00 AM - 5:00 PM
- **Facebook:** facebook.com/yavapaiwastesolutions/
- **Instagram:** (TBD)
- **Google Business Profile:** (TBD)

### Social Media Icons (Header/Footer)
- Facebook icon link
- Instagram icon link
- Google Business Profile icon link

---

## Services

### 1. Roll-Off Dumpster Services
- Home cleanups
- Remodeling projects
- Construction projects
- Various sizes available

### 2. Front Load Dumpster Service (Commercial)
- Business waste disposal
- Consistent scheduled pickups
- Efficient commercial solutions

### 3. Construction Waste Disposal
- Junk removal
- Debris removal
- Job site cleanup
- Yard waste

---

## Service Areas (SEO Location Pages Required)

Each location needs its own dedicated landing page for local SEO:

| Location | Page URL | Target Keywords |
|----------|----------|-----------------|
| Prescott | `/service-areas/prescott/` | dumpster rental prescott az, waste solutions prescott |
| Prescott Valley | `/service-areas/prescott-valley/` | dumpster rental prescott valley, roll-off prescott valley az |
| Chino Valley | `/service-areas/chino-valley/` | dumpster rental chino valley az, waste solutions chino valley |
| Paulden | `/service-areas/paulden/` | dumpster rental paulden az, waste disposal paulden |
| Cordes Junction | `/service-areas/cordes-junction/` | dumpster rental cordes junction, roll-off cordes junction az |
| Williamson Valley | `/service-areas/williamson-valley/` | dumpster rental williamson valley az |
| Dewey | `/service-areas/dewey/` | dumpster rental dewey az, waste disposal dewey humboldt |
| Humboldt | `/service-areas/humboldt/` | dumpster rental humboldt az, roll-off humboldt |

### Local Content Strategy Per Area

Each service area page needs unique, personalized content:

**Prescott** - Historic downtown, Courthouse Plaza, Whiskey Row renovations, older homes cleanouts

**Prescott Valley** - Growing families, new construction, suburban development, community events

**Chino Valley** - Rural properties, ranch/farm cleanups, equestrian properties, agricultural debris

**Paulden** - Remote rural area, large property cleanouts, ranch debris, country living

**Cordes Junction** - I-17 corridor, commercial projects, travel center area, highway access

**Williamson Valley** - Upscale rural estates, horse properties, custom home construction

**Dewey** - Small town community, local businesses, residential cleanouts, historic area

**Humboldt** - Mining heritage, residential growth, local community focus

---

## IMPORTANT: Trademark Notice

**DO NOT USE:** "Waste Management" - This is a trademarked company name.

**USE INSTEAD:**
- Waste Solutions
- Waste Disposal
- Waste Services
- Dumpster Services
- Trash Removal
- Debris Removal

---

## Technical Requirements

### SEO Optimization
- [ ] Meta titles & descriptions for all pages
- [ ] Open Graph tags for social sharing
- [ ] Twitter Card tags
- [ ] Canonical URLs
- [ ] H1-H6 heading hierarchy
- [ ] Alt text for all images
- [ ] Internal linking strategy
- [ ] Keyword-optimized content

### GEO/Local SEO
- [ ] Google Business Profile integration
- [ ] NAP (Name, Address, Phone) consistency
- [ ] Local business schema on all pages
- [ ] Location-specific landing pages (8 areas)
- [ ] Embedded Google Maps
- [ ] Local keywords in content

### Google Reviews Integration
- [ ] Pull reviews from Google Business Profile API
- [ ] **FILTER: Only display 4-5 star positive reviews**
- [ ] Testimonials carousel component (auto-rotating)
- [ ] Display on Homepage
- [ ] Star ratings with review count
- [ ] Reviewer name + review snippet
- [ ] "View all reviews on Google" link
- [ ] Schema markup for AggregateRating
- [ ] Cache reviews to avoid API rate limits
- [ ] Fallback to static curated reviews if API fails

**API Options:**
1. Google Places API (official, requires API key)
2. Third-party widget (EmbedSocial, Elfsight, etc.)
3. Manual curation with periodic updates

### Schema Markup (JSON-LD)
```json
Required Schema Types:
- LocalBusiness
- Service
- Organization
- BreadcrumbList
- FAQPage
- Review/AggregateRating
- ServiceArea
- GeoCircle / GeoShape
```

### robots.txt
```
User-agent: *
Allow: /
Disallow: /admin/
Disallow: /api/
Disallow: /_next/
Sitemap: https://yavapaiwastesolutions.com/sitemap.xml
```

### Sitemap Structure
```
sitemap.xml
├── Homepage
├── About
├── Contact
├── Services
│   ├── Roll-Off Dumpsters
│   ├── Commercial Front Load
│   └── Construction Waste
├── Service Areas
│   ├── Prescott
│   ├── Prescott Valley
│   ├── Chino Valley
│   ├── Paulden
│   ├── Cordes Junction
│   ├── Williamson Valley
│   ├── Dewey
│   └── Humboldt
├── Quote Request
├── Blog
│   ├── Blog Post 1
│   ├── Blog Post 2
│   └── (dynamic posts)
└── Privacy Policy / Terms
```

---

## Design & Animation Requirements

### Modern Design Elements
- [ ] Clean, professional layout
- [ ] Mobile-first responsive design
- [ ] Fast loading (Core Web Vitals optimized)
- [ ] **Dark Theme Color Scheme:**
  - Background: Black (#000000 / #0a0a0a)
  - Text: White (#FFFFFF)
  - Accents: Yellow (#FFD700 / Company Yellow)
  - Secondary backgrounds: Dark grays (#111111, #1a1a1a)
- [ ] High-quality imagery (trucks, dumpsters, team)
- [ ] Trust badges (BBB, local certifications)

### Animations - Agency Style (Death to Stock Inspired)

**Hero Section:**
- [ ] Scale + opacity animation on load (start at 0.8 scale, fade in)
- [ ] Staggered text reveal (headline → subhead → CTA)
- [ ] Video background of trucks/operations (autoplay, muted, loop)
- [ ] Parallax depth on scroll

**Scroll Animations (GSAP ScrollTrigger):**
- [ ] Elements fade + translate up on scroll into view
- [ ] Staggered card reveals (service cards appear one by one)
- [ ] Section wipes / overlay transitions between sections
- [ ] Counter animations trigger on scroll (years in business, jobs completed)
- [ ] Image reveal with translateY mask effect

**Hover Effects:**
- [ ] Buttons: Background shifts to yellow, text to black
- [ ] Cards: Subtle scale (1.02-1.05) + shadow lift
- [ ] Links: Color transition to yellow (#FFD700)
- [ ] Images: Slight zoom (scale 1.1) with smooth easing
- [ ] Service icons: Gentle bounce or pulse

**Transitions:**
- [ ] Smooth 0.3-0.5s cubic-bezier easing on all interactions
- [ ] Page transitions: Fade or slide between routes
- [ ] FAQ accordion: Smooth height + opacity reveal
- [ ] Mobile menu: Slide in from right with overlay fade

**Micro-interactions:**
- [ ] Form inputs: Border glow on focus (yellow)
- [ ] Submit button: Loading spinner → checkmark on success
- [ ] Scroll progress indicator (yellow bar at top)
- [ ] Back to top button: Fade in after scroll threshold

**Testimonials Carousel:**
- [ ] Auto-slide with pause on hover
- [ ] Swipe gestures on mobile
- [ ] Fade or slide transition between reviews
- [ ] Star rating animation (stars fill in sequentially)

### Animation Tech Stack
```
Primary:     GSAP + ScrollTrigger (industry standard, performant)
Alternative: Framer Motion (React-native, easier syntax)
Icons:       Lottie (for custom animated icons)
CSS:         Tailwind + custom keyframes for simple effects
```

### Animation Performance Rules
- Use transform/opacity only (GPU accelerated)
- Avoid animating layout properties (width, height, margin)
- Use will-change sparingly
- Reduce motion for users with prefers-reduced-motion
- Lazy load heavy animations below the fold

---

## Phone-First Conversion Strategy

**This is a blue-collar service business. Phone calls close faster than forms.**

### Sticky Mobile Footer (Always Visible)
```
┌─────────────────────────────────────┐
│  📞 Call Now   |   📝 Get Quote    │
└─────────────────────────────────────┘
```
- Fixed to bottom on mobile
- Click-to-call on phone button
- Quote links to form

### Phone Number Placement
- [ ] Hero section (prominent)
- [ ] Mid-page CTA banner
- [ ] Footer (large, clickable)
- [ ] Every service page
- [ ] Every service area page
- [ ] Contact page header
- [ ] Mobile header (icon)

### Click-to-Call Implementation
```html
<a href="tel:+19287132710">(928) 713-2710</a>
```
- All phone numbers are tappable
- Track calls with Google Analytics events
- Consider call tracking number for attribution

### Conversion Priority
1. **Phone calls** - Primary (fastest close)
2. **Quote form** - Secondary (lead capture)
3. **Email** - Tertiary (slower response)

---

## Page Structure

### Homepage
- Hero with CTA (Get a Quote)
- Services overview (3 cards with icons)
- Service areas map
- Why choose us / trust signals
- **Google Reviews Testimonials Carousel** (pulled from Google Business Profile)
- Call to action banner
- Footer with contact info

### About Page
- Company story
- Mission/values (eco-friendly focus)
- Team section
- BBB accreditation
- Community involvement

### Services Pages (3)
- Service description
- Use cases
- Sizing/pricing info
- FAQ section
- CTA to quote

### Service Area Pages (8)
- Location-specific H1
- **Personalized local content for each area:**
  - Local landmarks, neighborhoods, community references
  - Area-specific use cases (e.g., "ranch cleanouts" for rural areas)
  - Local events, trends, or seasonal needs
  - Population/community details for authenticity
  - "We serve YOUR neighborhood" feel
- Service description for that area
- Embedded map centered on that location
- Local testimonials from that area
- Schema markup for location
- CTA to quote

### Contact Page
- Contact form
- Phone/email
- Hours
- Google Maps embed
- Service area list

### Quote Request Page (4 Steps Max - Keep It Short)

**Longer forms = lower completion rates. Keep it tight.**

```
Step 1: Service Type
        ○ Roll-Off Dumpster
        ○ Commercial Front Load
        ○ Construction Cleanup

Step 2: City/Area
        [Dropdown: Prescott, Prescott Valley, Chino Valley, etc.]

Step 3: Project Details
        ○ Dumpster size needed (10yd, 20yd, 30yd, 40yd)
        OR
        ○ Project type (remodel, cleanout, construction, etc.)

Step 4: Contact Info
        Name, Phone, Email (phone required, email optional)
```

- Progress bar showing steps
- Back button on each step
- Mobile-optimized large touch targets
- Auto-focus on inputs
- Phone field with tel input type

### Blog Page (Start Lean - 3-5 Posts Max)

**Don't overproduce. More content later, after launch.**

**Launch Posts (3-5 only):**
1. **Dumpster Size Guide** - "What Size Dumpster Do I Need?"
2. **What You Can/Can't Throw Away** - Prohibited items, hazmat, etc.
3. **Prescott Construction Cleanup Guide** - Local-specific, SEO gold
4. (Optional) Remodeling waste tips
5. (Optional) Yard cleanup seasonal guide

**Blog Features:**
- Simple listing page
- Individual post template
- Schema markup (Article, BlogPosting)
- Social sharing buttons
- Related posts
- CTA to quote at bottom of each post

**Expand later** - Add more posts after site is live and ranking

---

## Tech Stack (Recommended)

```
Framework:    Next.js 14 (App Router)
Styling:      Tailwind CSS
Animations:   Framer Motion
Forms:        React Hook Form + Zod
Email:        Resend or SendGrid
Hosting:      Vercel
CMS:          Optional - Sanity or Contentful
Analytics:    Google Analytics 4 + Search Console
Maps:         Google Maps API
```

---

## Performance Goals
- Lighthouse Score: 90+ all categories
- First Contentful Paint: < 1.5s
- Largest Contentful Paint: < 2.5s
- Cumulative Layout Shift: < 0.1
- Time to Interactive: < 3s

---

## Execution Order (ROI-Optimized)

**LAUNCH LEAN. Don't build everything before going live.**

### Phase 1: Foundation + MVP (LAUNCH THIS)
- [ ] Project setup (Next.js + Tailwind + GSAP)
- [ ] Design system / components
- [ ] Header + Footer + Sticky mobile CTA
- [ ] **Homepage** (hero, services, reviews, CTAs)
- [ ] **Services hub + Roll-Off page** (highest traffic service)
- [ ] **Prescott + Prescott Valley pages** (primary markets)
- [ ] **Quote form** (4-step)
- [ ] Click-to-call everywhere
- [ ] robots.txt + sitemap.xml
- [ ] Basic SEO + schema

**🚀 LAUNCH HERE - Site is functional and can rank**

### Phase 2: Expand Services
- [ ] Commercial Front Load page
- [ ] Construction Waste Disposal page
- [ ] Reviews carousel polish

### Phase 3: Remaining Service Areas
- [ ] Chino Valley page
- [ ] Paulden page
- [ ] Cordes Junction page
- [ ] Williamson Valley page
- [ ] Dewey page
- [ ] Humboldt page

### Phase 4: Content & Polish
- [ ] About page
- [ ] Contact page (full version)
- [ ] Blog (3-5 posts max)
- [ ] Animations refinement
- [ ] Performance optimization

### Phase 5: Post-Launch
- [ ] Google Search Console monitoring
- [ ] Analytics review
- [ ] A/B test CTAs
- [ ] Add more blog content based on search data
- [ ] Gather more reviews

---

## Why This Order?

| Priority | Reason |
|----------|--------|
| Homepage first | Every visitor sees it |
| Roll-Off page | Most searched service |
| Prescott + PV | Biggest markets, most searches |
| Quote + Phone CTAs | Conversions = revenue |
| Other areas later | Lower search volume, build after launch |
| Blog last | SEO boost, but not urgent for launch |

**80% of results come from 20% of pages. Build those first.**

---

## Notes
- Current website is outdated and needs complete rebuild
- Focus on local SEO to capture Prescott area searches
- Eco-friendly messaging is important to the brand
- Mobile experience is critical for service calls
- Phone calls > Forms for this industry
- Launch lean, expand after live

---

## Next Steps

Ready to execute. Options:

### Option A: Project Scaffold
Set up Next.js project with:
- Tailwind + GSAP configured
- Component structure
- Page routes
- Dark theme + yellow accents

### Option B: Homepage Copy + Hero
Write conversion-focused copy:
- Hero headline + subhead
- Service descriptions
- CTAs that drive calls

### Option C: Prescott Template Page
Build one complete service area page:
- Full local SEO content
- Schema markup
- Use as template for other 7 areas

**Recommended: Start with Option A → B → C in sequence.**
