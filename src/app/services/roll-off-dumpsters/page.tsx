import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Roll-Off Dumpsters',
  description:
    'Roll-off dumpster rentals for home cleanouts, remodels, and construction projects.',
};

const highlights = [
  'Multiple sizes for home cleanouts and remodels',
  'Flexible rental periods that match your schedule',
  'Clear, upfront pricing with local support',
  'Fast delivery across the Quad Cities area',
];

const sizes = ['10 yard', '20 yard', '30 yard', '40 yard'];

export default function RollOffDumpstersPage() {
  return (
    <section className="py-20 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Roll-Off <span className="text-accent">Dumpsters</span>
          </h1>
          <p className="text-xl text-foreground-muted max-w-2xl mx-auto">
            The right container for cleanouts, remodeling, and construction
            debris.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="card p-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Why Choose Roll-Off Service
            </h2>
            <p className="text-foreground-muted mb-6">
              Roll-off dumpsters are ideal for bulky debris and large volumes of
              waste. We deliver to your site and pick up when you are finished.
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
              Available Sizes
            </h2>
            <div className="grid grid-cols-2 gap-4">
              {sizes.map((size) => (
                <div key={size} className="card p-4 text-center">
                  <span className="text-foreground font-semibold">{size}</span>
                </div>
              ))}
            </div>
            <p className="text-foreground-muted mt-6">
              Not sure which size fits your project? Call and we will help.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-4">
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
