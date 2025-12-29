import Link from 'next/link';
import type { Metadata } from 'next';
import { serviceAreaLinks } from '@/data/service-areas';

export const metadata: Metadata = {
  title: 'Service Areas',
  description: 'Dumpster rental and waste services across the Quad Cities region.',
};

export default function ServiceAreasPage() {
  return (
    <section className="py-20 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Service <span className="text-accent">Areas</span>
          </h1>
          <p className="text-xl text-foreground-muted max-w-2xl mx-auto">
            We deliver dumpsters and provide waste services throughout the
            Quad Cities region.
          </p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {serviceAreaLinks.map((area) => (
            <Link
              key={area.slug}
              href={`/service-areas/${area.slug}`}
              className="card p-6 text-center hover:border-accent group transition-all hover:-translate-y-1"
            >
              <h2 className="font-bold text-foreground text-lg mb-2 group-hover:text-accent transition-colors">
                {area.name}
              </h2>
              <p className="text-sm text-foreground-muted">
                {area.description}
              </p>
            </Link>
          ))}
        </div>
        <div className="mt-12 text-center">
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
    </section>
  );
}
