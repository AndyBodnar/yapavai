import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Commercial Front Load',
  description:
    'Commercial waste service with reliable pickups and flexible scheduling.',
};

const highlights = [
  'Scheduled pickups that keep your site clean',
  'Container sizes for retail, offices, and restaurants',
  'Recycling options and responsible disposal',
  'Local support and clear billing',
];

const idealFor = ['Restaurants', 'Retail centers', 'Offices', 'Property managers'];

export default function CommercialServicePage() {
  return (
    <section className="py-20 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Commercial <span className="text-accent">Front Load</span>
          </h1>
          <p className="text-xl text-foreground-muted max-w-2xl mx-auto">
            Dependable waste service that keeps your business running smoothly.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="card p-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Reliable Commercial Service
            </h2>
            <p className="text-foreground-muted mb-6">
              We provide consistent pickups with flexible scheduling. Our team
              works with you to choose the right container size and service
              frequency.
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
              Ideal For
            </h2>
            <ul className="space-y-3">
              {idealFor.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 text-foreground-muted"
                >
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent" />
                  <span>{item}</span>
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
