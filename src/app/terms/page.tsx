import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'General service terms for Yavapai Waste Solutions.',
};

const points = [
  'Service details and pricing are confirmed at booking.',
  'Customers are responsible for access and placement permissions.',
  'Do not dispose of hazardous or prohibited materials.',
  'Overweight loads or extended rentals may incur additional fees.',
  'Payment terms are provided during scheduling.',
  'Contact us for project specific requirements.',
];

export default function TermsPage() {
  return (
    <section className="py-20 bg-background">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Terms of <span className="text-accent">Service</span>
          </h1>
          <p className="text-xl text-foreground-muted">
            These general terms help set expectations for service.
          </p>
        </div>
        <div className="card p-8">
          <ul className="space-y-4">
            {points.map((point) => (
              <li key={point} className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent" />
                <span className="text-foreground-muted">{point}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <Link href="/contact" className="btn btn-secondary">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
