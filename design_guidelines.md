# Abacuswalla Design Guidelines

## Design Approach

**Selected Approach:** Hybrid Reference-Based (Education + Modern SaaS)

Drawing inspiration from successful educational platforms (Duolingo's playfulness, Khan Academy's trustworthiness) combined with modern SaaS aesthetics (Linear's typography, Airbnb's approachability). The design balances dual audience needs: playful enough for kids, professional enough for parents to trust with their child's education.

**Key Design Principles:**
- Playful Professionalism: Vibrant colors and friendly elements without sacrificing credibility
- Educational Clarity: Clear information hierarchy, easy navigation for both kids and parents
- Interactive Delight: Gamification elements that feel rewarding, not distracting
- Trust Signals: Clean layouts, testimonials, credentials prominently displayed

## Color Palette

**Light Mode:**
- Primary: 220 85% 55% (Trustworthy blue - conveys education and reliability)
- Primary Hover: 220 85% 48%
- Secondary: 280 70% 60% (Playful purple - adds creativity and fun)
- Accent: 160 75% 45% (Success green - for achievements and positive actions)
- Background: 0 0% 100%
- Surface: 220 20% 97%
- Text Primary: 220 15% 20%
- Text Secondary: 220 10% 45%
- Border: 220 15% 88%

**Dark Mode:**
- Primary: 220 80% 65%
- Primary Hover: 220 80% 72%
- Secondary: 280 65% 68%
- Accent: 160 70% 55%
- Background: 220 15% 12%
- Surface: 220 15% 16%
- Text Primary: 220 15% 95%
- Text Secondary: 220 10% 65%
- Border: 220 15% 24%

## Typography

**Font Families:**
- Headings: 'Fredoka' (Google Fonts) - Friendly, rounded sans-serif that appeals to kids while remaining professional
- Body: 'Inter' (Google Fonts) - Clean, highly readable for longer content and parent-focused sections
- Accent/Fun: 'Poppins' (Google Fonts) - For CTAs, badges, and interactive elements

**Hierarchy:**
- Hero H1: text-6xl md:text-7xl font-bold (Fredoka)
- Section H2: text-4xl md:text-5xl font-bold (Fredoka)
- Card H3: text-2xl md:text-3xl font-semibold (Fredoka)
- Body Large: text-lg md:text-xl (Inter)
- Body: text-base (Inter)
- Small/Caption: text-sm (Inter)

## Layout System

**Spacing Primitives:** Tailwind units of 2, 4, 6, 8, 12, 16, 20, 24, 32

**Container Strategy:**
- Full-width sections with inner max-w-7xl for most content
- max-w-6xl for text-heavy sections
- max-w-prose for blog/article content
- Consistent padding: px-4 md:px-6 lg:px-8

**Grid Patterns:**
- Feature cards: grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8
- Programs/Courses: grid-cols-1 md:grid-cols-2 gap-8
- Testimonials: grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6

## Component Library

**Navigation:**
- Sticky header with logo left, main nav center, CTA button right
- Mobile: Slide-in menu with large touch targets for kids
- Secondary nav for Programs/Resources as dropdown

**Hero Section:**
- Large hero image showing happy kids learning with abacus (bright, colorful, authentic)
- Overlayed headline with blur backdrop for readability
- Dual CTAs: "Try Free Puzzle" (primary) + "Book Demo Class" (outline with blur)
- Trust indicators: "500+ Happy Students" badge

**Program Cards:**
- Colorful illustrations/icons representing each level (Junior, Foundation, Advanced, Grand Master)
- Age range badge, duration, key benefits
- Hover: Gentle lift with shadow increase
- "Learn More" + "Enroll Now" CTAs

**Interactive Quiz Components:**
- Card-based question presentation with large, colorful answer buttons
- Progress bar showing current question/total
- Star rating feedback system (animated stars on correct answers)
- Score display with celebratory badges
- Email capture modal for saving progress (with fun illustration)

**Testimonial Cards:**
- Parent photo + child's first name
- Star rating (filled stars in accent color)
- Quote in larger text
- Location and program level as metadata
- Optional: Before/after achievement stats

**Forms:**
- Rounded input fields (rounded-lg) with focus:ring in primary color
- Labels above inputs with helpful placeholder text
- Multi-step form for demo booking (Step indicators at top)
- Success state with confetti animation (very brief)

**Buttons:**
- Primary: bg-primary, rounded-full, px-8 py-3, font-semibold (Poppins)
- Secondary: bg-secondary with same styling
- Outline: border-2 with backdrop-blur-sm when on images
- All buttons: Implement built-in hover/active states

**Badges & Achievements:**
- Rounded-full pills with gradient backgrounds
- Icons from Heroicons for achievements (star, trophy, sparkles)
- Subtle pulse animation on new achievements only

**Download/Resource Cards:**
- Thumbnail preview of worksheet
- Title, grade level, topic tags
- Download button with icon
- Email gate modal (friendly, not aggressive)

## Images

**Hero Section:**
- Large hero image (1920x800px): Bright classroom scene with diverse children using abacuses, engaged and smiling. Colorful, professional photography with warm lighting. Position: Full-width background with overlay.

**About Section:**
- Team photo (1200x600px): Instructors in casual professional attire with students, showing interaction and warmth.

**Program Cards:**
- Four custom illustrations (400x300px each): Playful, colorful graphics representing Junior (small child with mini abacus), Foundation (focused student), Advanced (confident learner), Grand Master (trophy/medal theme).

**Success Stories:**
- 6-8 authentic parent/child photos (300x300px): Headshots or casual portraits for testimonials.

**Interactive Section:**
- Puzzle/game preview (600x400px): Colorful screenshot or illustration of quiz interface with confetti elements.

## Page-Specific Layouts

**Homepage:**
- Hero with dual CTAs + trust badges
- "Why Abacuswalla" 3-column benefits grid
- Programs overview (4 cards)
- Interactive puzzle teaser with "Try Now" CTA
- Testimonials carousel (3 visible)
- Newsletter signup with worksheet offer
- Footer with links, contact, social proof

**Programs Page:**
- Page hero with breadcrumb
- 4 detailed program cards (expandable accordions for curriculum details)
- Comparison table (optional)
- FAQ section specific to programs
- CTA: Schedule demo

**Interactive Games Page:**
- Featured puzzle with large play button
- Grid of available puzzles/quizzes (difficulty levels color-coded)
- Leaderboard section (motivational, not competitive pressure)
- Parent dashboard login for progress tracking

**About Us:**
- Story section with founder photo
- Mission/vision statements in colored cards
- Team grid with photos and credentials
- Awards/certifications badges
- Franchise opportunity CTA

**Contact/Demo Booking:**
- Split layout: Form left, Contact info + map right
- Multi-step booking form (child's age → preferred time → contact info)
- Success state with calendar link and confirmation

## Animations

Use sparingly, only for:
- Scroll-triggered fade-in for section headings (subtle)
- Stars/confetti burst on quiz success (brief, 1-2s)
- Gentle hover lifts on cards
- Progress bar fills
- Badge pulse on achievement unlock (once only)