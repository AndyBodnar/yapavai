import Link from 'next/link';
import { Truck, Building, HardHat, ArrowRight } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Waste Disposal Services',
  description: 'Professional dumpster rental and waste disposal services in the Quad Cities, AZ.',
};

const services = [
  {
    icon: Truck,
    title: 'Roll-Off Dumpsters',
    description: 'Perfect for home cleanups, remodeling projects, and construction sites.',
    href: '/services/roll-off-dumpsters',
    features: ['Multiple sizes available', 'Flexible rental periods', 'Same-day delivery', 'Competitive pricing'],
  },
  {
    icon: Building,
    title: 'Commercial Front Load',
    description: 'Reliable waste disposal solutions for businesses of all sizes.',
    href: '/services/commercial',
    features: ['Weekly scheduled service', 'Various container sizes', 'Recycling options', 'Flexible scheduling'],
  },
  {
    icon: HardHat,
    title: 'Construction Cleanup',
    description: 'Keep your job site clean and safe. We handle debris removal.',
    href: '/services/construction',
    features: ['Job site cleanup', 'Debris hauling', 'Demolition waste', 'Quick turnaround'],
  },
];

export default function ServicesPage() {
  return (
    <section className="py-20 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Our <span className="text-accent">Services</span>
          </h1>
          <p className="text-xl text-foreground-muted max-w-2xl mx-auto">
            Professional waste disposal solutions for the Quad Cities area.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <Link key={service.title} href={service.href} className="card p-8 hover:border-accent group">
              <service.icon className="h-12 w-12 text-accent mb-4" />
              <h2 className="text-2xl font-bold text-foreground mb-2 group-hover:text-accent transition-colors">{service.title}</h2>
              <p className="text-foreground-muted mb-4">{service.description}</p>
              <ul className="space-y-2 mb-4">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm text-foreground-muted">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <span className="inline-flex items-center gap-2 text-accent font-medium">Learn More <ArrowRight className="h-4 w-4" /></span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
