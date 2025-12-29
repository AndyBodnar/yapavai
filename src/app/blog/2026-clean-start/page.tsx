import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '2026 Clean Start: The Quad Cities Guide to Post-Holiday Cleanouts',
  description:
    'A practical, local guide to clearing holiday clutter across the Quad Cities, with tips on planning, dumpster sizes, and smooth cleanup days.',
  keywords: [
    '2026 clean start',
    'post-holiday cleanout',
    'Quad Cities cleanup',
    'dumpster rental guide',
    'Yavapai Waste Solutions',
  ],
};

const checklist = [
  'Holiday decor and seasonal storage bins',
  'Gift packaging, broken boxes, and old wrapping',
  'Guest room or spare room resets',
  'Garage corners and storage shelves',
  'Old furniture and bulky items that need to go',
];

const planningTips = [
  'Set a clear goal for each space before you start.',
  'Stage a sorting zone for keep, donate, and toss.',
  'Schedule delivery for a day you can fill the dumpster.',
  'Clear driveway access and protect surfaces with plywood if needed.',
  'Ask about items that require special handling.',
];

const sizeGuide = [
  {
    title: 'Small cleanouts',
    description: 'Great for a single room, light garage cleanup, or light debris.',
  },
  {
    title: 'Medium projects',
    description: 'Ideal for multi-room cleanouts, larger furniture, or small remodels.',
  },
  {
    title: 'Large cleanouts',
    description: 'Best for estate cleanups, whole-home resets, or major construction.',
  },
];

const serviceAreas = [
  'Prescott',
  'Prescott Valley',
  'Chino Valley',
  'Dewey',
  'Humboldt',
  'Paulden',
  'Williamson Valley',
  'Cordes Junction',
];

export default function BlogPostPage() {
  return (
    <article className="py-20 bg-background">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Link
          href="/blog"
          className="inline-flex items-center text-sm text-foreground-muted hover:text-foreground transition-colors"
        >
          Back to Blog
        </Link>

        <div className="mt-6">
          <p className="text-accent text-sm uppercase tracking-wider font-semibold mb-3">
            2026 Clean Start
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            2026 Clean Start: The Quad Cities Guide to Post-Holiday Cleanouts
          </h1>
          <p className="text-sm text-foreground-muted">
            Published January 2026 · Quad Cities, Arizona
          </p>
        </div>

        <div className="mt-10 space-y-8 text-lg text-foreground-muted leading-relaxed">
          <p>
            January is the best time to reset your home, jobsite, or rental
            property. The holidays leave behind boxes, extra clutter, and
            seasonal storage that quickly piles up. A clean start means
            clearing the space, keeping the essentials, and giving your home
            or business room to breathe.
          </p>
          <p>
            This guide is built for the Quad Cities. Whether you are in
            Prescott, Prescott Valley, Chino Valley, or one of the surrounding
            communities, a structured cleanout plan saves time and keeps the
            process stress-free.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="card p-6">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Quick cleanout checklist
            </h2>
            <ul className="space-y-3">
              {checklist.map((item) => (
                <li key={item} className="flex items-start gap-2 text-foreground-muted">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="card p-6">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Plan your cleanup day
            </h2>
            <ul className="space-y-3">
              {planningTips.map((tip) => (
                <li key={tip} className="flex items-start gap-2 text-foreground-muted">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent" />
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 card p-8">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Choose the right dumpster size
          </h2>
          <p className="text-foreground-muted mb-6">
            The right size depends on how much volume you expect. If you are
            unsure, call for guidance and we will help you pick the best fit.
          </p>
          <div className="grid gap-4 sm:grid-cols-3">
            {sizeGuide.map((size) => (
              <div key={size.title} className="rounded-2xl border border-border bg-background-secondary p-4">
                <p className="font-semibold text-foreground mb-2">{size.title}</p>
                <p className="text-sm text-foreground-muted">{size.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="card p-6">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Keep the cleanup smooth
            </h2>
            <p className="text-foreground-muted">
              Clear a driveway path, reserve your delivery window, and keep
              heavy items close to the dumpster. If you have materials that
              need special handling, ask first so you avoid delays.
            </p>
          </div>
          <div className="card p-6">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Serving the Quad Cities
            </h2>
            <div className="flex flex-wrap gap-2">
              {serviceAreas.map((area) => (
                <span
                  key={area}
                  className="rounded-full border border-border px-3 py-1 text-sm text-foreground-muted"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 card p-8 text-center">
          <h2 className="text-2xl font-bold text-foreground mb-3">
            Ready to start your 2026 cleanout?
          </h2>
          <p className="text-foreground-muted mb-6">
            Tell us about your cleanup and we will recommend the right dumpster
            size and delivery window.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/quote" className="btn btn-primary">
              Get a Free Quote
            </Link>
            <a href="tel:+19287132710" className="btn btn-secondary">
              Call (928) 713-2710
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
