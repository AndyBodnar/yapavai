'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { Truck, Building, HardHat, ArrowRight } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    icon: Truck,
    title: 'Roll-Off Dumpsters',
    description:
      'Perfect for home cleanups, remodeling, and construction projects. Available in 10, 20, 30, and 40 yard sizes.',
    href: '/services/roll-off-dumpsters',
    features: ['Flexible rental periods', 'Same-day delivery', 'All-inclusive pricing'],
  },
  {
    icon: Building,
    title: 'Commercial Service',
    description:
      'Reliable waste disposal for businesses. Consistent, scheduled pickups to keep your operations running.',
    href: '/services/commercial',
    features: ['Weekly service', 'Multiple sizes', 'Recycling options'],
  },
  {
    icon: HardHat,
    title: 'Construction Cleanup',
    description:
      'Keep your job site clean and safe. We handle debris removal so you can focus on building.',
    href: '/services/construction',
    features: ['Job site cleanup', 'Debris hauling', 'Quick turnaround'],
  },
];

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading animation
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: headingRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Cards stagger animation
      const cards = cardsRef.current?.children;
      if (cards) {
        gsap.fromTo(
          cards,
          { opacity: 0, y: 60, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            stagger: 0.15,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: cardsRef.current,
              start: 'top 75%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 lg:py-32 bg-background-secondary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div ref={headingRef} className="text-center mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block">
            What We Offer
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Our Services
          </h2>
          <p className="text-xl text-foreground-muted max-w-2xl mx-auto">
            Professional waste disposal solutions tailored to your needs
          </p>
        </div>

        <div ref={cardsRef} className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className="group relative card p-8 hover:border-accent transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-accent/10"
            >
              {/* Icon */}
              <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                <service.icon className="h-8 w-8 text-accent" />
              </div>
              <svg
                className="block w-[calc(100%+4rem)] h-6 -mx-8 text-accent/50 mb-6"
                viewBox="0 0 600 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M0 18C140 0 360 0 600 18"
                  stroke="currentColor"
                  strokeWidth="6"
                  strokeLinecap="round"
                />
              </svg>

              {/* Content */}
              <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
                {service.title}
              </h3>
              <p className="text-foreground-muted mb-6">{service.description}</p>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-2 text-sm text-foreground-muted"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Link */}
              <span className="inline-flex items-center gap-2 text-accent font-semibold group-hover:gap-3 transition-all">
                Learn More
                <ArrowRight className="h-4 w-4" />
              </span>

              {/* Hover gradient */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
