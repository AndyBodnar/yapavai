'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { MapPin } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { serviceAreaLinks } from '@/data/service-areas';

gsap.registerPlugin(ScrollTrigger);

export default function ServiceAreas() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.area-card', { opacity: 0, y: 40, scale: 0.95 }, {
        opacity: 1, y: 0, scale: 1, duration: 0.5, stagger: 0.1,
        scrollTrigger: { trigger: sectionRef.current, start: 'top 70%' },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 lg:py-32 bg-background-secondary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block">Coverage Area</span>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">Service Areas</h2>
          <p className="text-xl text-foreground-muted max-w-2xl mx-auto">Proudly serving communities throughout the Quad Cities area</p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {serviceAreaLinks.map((area) => (
            <Link key={area.slug} href={'/service-areas/' + area.slug} className="area-card card p-6 text-center hover:border-accent group transition-all hover:-translate-y-1">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors">
                <MapPin className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-bold text-foreground text-lg mb-1 group-hover:text-accent transition-colors">{area.name}</h3>
              <p className="text-sm text-foreground-muted">{area.description}</p>
            </Link>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link href="/service-areas" className="btn btn-secondary">View All Service Areas</Link>
        </div>
      </div>
    </section>
  );
}
