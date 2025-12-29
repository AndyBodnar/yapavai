'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { Phone, ArrowRight } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function CTASection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(sectionRef.current, { opacity: 0, scale: 0.98 }, {
        opacity: 1, scale: 1, duration: 0.8,
        scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="card p-12 lg:p-16 text-center bg-gradient-to-br from-background-card to-background-tertiary border-accent/20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-foreground-muted mb-10 max-w-2xl mx-auto">
            Get a free quote in minutes. Same-day delivery available for most locations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/quote" className="btn btn-primary text-lg px-10 py-5 font-bold shadow-lg shadow-accent/20">
              Get Your Free Quote <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <a href="tel:+19287132710" className="btn btn-secondary text-lg px-10 py-5 flex items-center justify-center gap-3">
              <Phone className="h-5 w-5" />
              (928) 713-2710
            </a>
          </div>
          <p className="mt-8 text-foreground-muted">
            <span className="text-accent font-semibold">Pro tip:</span> Calling is the fastest way to get a dumpster
          </p>
        </div>
      </div>
    </section>
  );
}
