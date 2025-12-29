import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Construction Cleanup',
  description:
    'Construction cleanup and debris removal with fast delivery and pickup.',
};

const highlights = [
  'Job site cleanup and debris hauling',
  'Reliable delivery and pickup windows',
  'Multiple sizes for construction waste',
  'Local support for project schedules',
];

const materials = [
  'Drywall and lumber',
  'Roofing materials',
  'Concrete and masonry',
  'General construction debris',
];

export default function ConstructionCleanupPage() {
  return (
    <section className="py-20 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Construction <span className="text-accent">Cleanup</span>
          </h1>
          <p className="text-xl text-foreground-muted max-w-2xl mx-auto">
            Keep your job site safe and efficient with dependable dumpster
            service.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="card p-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Built for Construction Sites
            </h2>
            <p className="text-foreground-muted mb-6">
              We support contractors and builders with fast delivery, flexible
              pickup windows, and clear communication throughout the project.
            </p>
            <ul className="space-y-3">
              {highlights.map((highlight) => (
                <li
                  key={highlight}
                  className="flex items-start gap-2 text-foreground-muted"
                >
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="card p-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Common Materials
            </h2>
            <ul className="space-y-3">
              {materials.map((material) => (
                <li
                  key={material}
                  className="flex items-start gap-2 text-foreground-muted"
                >
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent" />
                  <span>{material}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link href="/quote" className="btn btn-primary">
                Get a Free Quote
              </Link>
              <a href="tel:+19287132710" className="btn btn-secondary">
                Call (928) 713-2710
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link href="/services" className="btn btn-secondary">
            Back to Services
          </Link>
        </div>
      </div>
    </section>
  );
}
