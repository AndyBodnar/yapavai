import Link from 'next/link';
import type { Metadata } from 'next';
import { Phone, Mail, Clock, MapPin } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Contact Yavapai Waste Solutions for dumpster rental, scheduling, and service questions.',
};

const contactItems = [
  {
    icon: Phone,
    title: 'Call Us',
    details: '(928) 713-2710',
    href: 'tel:+19287132710',
    note: 'Fastest way to get pricing and availability.',
  },
  {
    icon: Mail,
    title: 'Email',
    details: 'sales@ywsaz.com',
    href: 'mailto:sales@ywsaz.com',
    note: 'Send project details and we will follow up.',
  },
  {
    icon: Clock,
    title: 'Hours',
    details: 'Mon-Fri: 8AM - 5PM',
    note: 'Weekend deliveries available by request.',
  },
  {
    icon: MapPin,
    title: 'Service Area',
    details: 'Quad Cities, Arizona',
    note: 'Serving the Quad Cities and nearby communities.',
  },
];

export default function ContactPage() {
  return (
    <section className="py-20 bg-background">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Get in <span className="text-accent">Touch</span>
          </h1>
          <p className="text-xl text-foreground-muted max-w-2xl mx-auto">
            Call, email, or request a quote and we will respond quickly.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            {contactItems.map((item) => (
              <div key={item.title} className="card p-6 flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                  <item.icon className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-foreground">
                    {item.title}
                  </h2>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-accent font-semibold hover:text-accent-hover transition-colors"
                    >
                      {item.details}
                    </a>
                  ) : (
                    <p className="text-foreground">{item.details}</p>
                  )}
                  <p className="text-sm text-foreground-muted">{item.note}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="card p-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Request a Quote
            </h2>
            <p className="text-foreground-muted mb-6">
              Tell us about your project and we will help you choose the right
              dumpster size and schedule delivery.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/quote" className="btn btn-primary">
                Get a Free Quote
              </Link>
              <a href="tel:+19287132710" className="btn btn-secondary">
                Call (928) 713-2710
              </a>
            </div>
            <p className="text-sm text-foreground-muted mt-6">
              For immediate service questions, calling is the fastest option.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
