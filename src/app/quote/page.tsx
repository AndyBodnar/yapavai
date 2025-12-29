import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Get a Free Quote',
  description: 'Request a free quote for dumpster rental in the Quad Cities, AZ. Fast response, competitive pricing.',
};

export default function QuotePage() {
  return (
    <section className="py-20 bg-background">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Get a <span className="text-accent">Free Quote</span>
          </h1>
          <p className="text-xl text-foreground-muted">
            Fill out the form below and we will get back to you within 24 hours.
          </p>
        </div>
        <div className="card p-8">
          <p className="text-foreground-muted text-center">Quote form coming soon...</p>
          <div className="mt-8 text-center">
            <p className="text-foreground-muted mb-4">Or call us directly:</p>
            <a href="tel:+19287132710" className="text-2xl font-bold text-accent hover:text-accent-hover">(928) 713-2710</a>
          </div>
        </div>
      </div>
    </section>
  );
}
