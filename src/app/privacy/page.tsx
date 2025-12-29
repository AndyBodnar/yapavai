import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'How Yavapai Waste Solutions handles your information.',
};

const points = [
  'We collect information you provide when requesting a quote or scheduling service.',
  'We use your information to respond to requests and deliver service.',
  'We do not sell personal information.',
  'We may share information with service partners as needed for delivery or compliance.',
  'Contact us if you have questions about your data.',
];

export default function PrivacyPage() {
  return (
    <section className="py-20 bg-background">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Privacy <span className="text-accent">Policy</span>
          </h1>
          <p className="text-xl text-foreground-muted">
            We respect your privacy and handle your information responsibly.
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
