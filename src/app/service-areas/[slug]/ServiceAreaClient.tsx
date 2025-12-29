'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  Building2,
  HardHat,
  Home,
  MapPin,
  Phone,
  TrendingUp,
} from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import type { ServiceAreaData } from './data';

gsap.registerPlugin(ScrollTrigger);

const iconMap = {
  home: Home,
  building: Building2,
  hardhat: HardHat,
} as const;

type ServiceAreaClientProps = {
  area: ServiceAreaData;
};

export default function ServiceAreaClient({ area }: ServiceAreaClientProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const photoRef = useRef<HTMLDivElement>(null);
  const factsRef = useRef<HTMLDivElement>(null);
  const marketRef = useRef<HTMLDivElement>(null);
  const trendsRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        heroRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8 }
      );

      gsap.fromTo(
        photoRef.current,
        { opacity: 0, x: 40, scale: 0.96 },
        { opacity: 1, x: 0, scale: 1, duration: 0.9, delay: 0.1 }
      );

      if (factsRef.current?.children.length) {
        gsap.fromTo(
          factsRef.current.children,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.12,
            scrollTrigger: {
              trigger: factsRef.current,
              start: 'top 85%',
            },
          }
        );
      }

      if (marketRef.current?.children.length) {
        gsap.fromTo(
          marketRef.current.children,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.15,
            scrollTrigger: {
              trigger: marketRef.current,
              start: 'top 80%',
            },
          }
        );
      }

      if (trendsRef.current?.children.length) {
        gsap.fromTo(
          trendsRef.current.children,
          { opacity: 0, y: 24 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.12,
            scrollTrigger: {
              trigger: trendsRef.current,
              start: 'top 80%',
            },
          }
        );
      }

      if (projectsRef.current?.children.length) {
        gsap.fromTo(
          projectsRef.current.children,
          { opacity: 0, y: 18 },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            stagger: 0.1,
            scrollTrigger: {
              trigger: projectsRef.current,
              start: 'top 85%',
            },
          }
        );
      }

      gsap.fromTo(
        ctaRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          scrollTrigger: {
            trigger: ctaRef.current,
            start: 'top 85%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-20 lg:py-28 bg-background">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/4 w-[700px] h-[700px] rounded-full bg-accent/5 blur-3xl" />
        <div className="absolute -bottom-1/2 -left-1/4 w-[600px] h-[600px] rounded-full bg-accent/3 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
          <div ref={heroRef}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background-card border border-border mb-6">
              <MapPin className="h-4 w-4 text-accent" />
              <span className="text-sm text-foreground-muted">Service Area</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-5">
              Dumpster Rental in <span className="text-accent">{area.name}</span>
            </h1>
            <p className="text-xl text-foreground-muted mb-6">
              {area.heroTagline}
            </p>
            <p className="text-foreground-muted max-w-2xl">
              {area.heroLead}
            </p>

            <div ref={factsRef} className="mt-8 grid sm:grid-cols-3 gap-4">
              {area.quickFacts.map((fact) => (
                <div key={fact.label} className="card p-4">
                  <div className="text-xs uppercase tracking-wider text-foreground-subtle mb-2">
                    {fact.label}
                  </div>
                  <div className="text-sm font-semibold text-foreground">
                    {fact.value}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div ref={photoRef} className="relative">
            <div className="relative rounded-3xl overflow-hidden border border-border bg-background-card">
              <Image
                src={`/service-areas/${area.slug}.svg`}
                alt={`Photo placeholder for ${area.name}`}
                width={1200}
                height={800}
                priority
                className="h-full w-full object-cover"
                sizes="(min-width: 1024px) 520px, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4">
                <div className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-background/80 backdrop-blur border border-border text-sm text-foreground">
                  <MapPin className="h-4 w-4 text-accent" />
                  <span>{area.photoLabel}</span>
                </div>
              </div>
            </div>
            <div className="mt-4 text-sm text-foreground-muted">{area.photoCaption}</div>
          </div>
        </div>

        <div className="mt-16">
          <div className="flex items-center gap-3 mb-8">
            <TrendingUp className="h-5 w-5 text-accent" />
            <h2 className="text-3xl font-bold text-foreground">Market Focus</h2>
          </div>
          <div ref={marketRef} className="grid lg:grid-cols-3 gap-6">
            {area.marketCards.map((card) => {
              const Icon = iconMap[card.icon];
              return (
                <div key={card.title} className="card p-6">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {card.title}
                  </h3>
                  <p className="text-foreground-muted mb-4">{card.description}</p>
                  <ul className="space-y-2">
                    {card.bullets.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-sm text-foreground-muted"
                      >
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-16">
          <div className="flex items-center gap-3 mb-8">
            <TrendingUp className="h-5 w-5 text-accent" />
            <h2 className="text-3xl font-bold text-foreground">Local Trends</h2>
          </div>
          <div ref={trendsRef} className="grid md:grid-cols-3 gap-6">
            {area.trends.map((trend) => (
              <div key={trend.title} className="card p-6">
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {trend.title}
                </h3>
                <p className="text-foreground-muted">{trend.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16">
          <div className="flex items-center gap-3 mb-6">
            <MapPin className="h-5 w-5 text-accent" />
            <h2 className="text-3xl font-bold text-foreground">
              Popular Projects in {area.name}
            </h2>
          </div>
          <div ref={projectsRef} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {area.projects.map((project) => (
              <div key={project} className="card p-4 text-sm text-foreground-muted">
                {project}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16">
          <div className="card p-8 lg:p-10 bg-gradient-to-br from-background-card to-background-tertiary border-accent/20">
            <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  Services that fit {area.name}
                </h2>
                <p className="text-foreground-muted mb-6">{area.servicesNote}</p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/services/roll-off-dumpsters" className="btn btn-secondary">
                    Roll-Off Dumpsters
                  </Link>
                  <Link href="/services/commercial" className="btn btn-secondary">
                    Commercial Service
                  </Link>
                </div>
              </div>
              <div className="bg-background-secondary border border-border rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Phone className="h-5 w-5 text-accent" />
                  <span className="text-sm text-foreground-muted">Call for availability</span>
                </div>
                <a
                  href="tel:+19287132710"
                  className="text-2xl font-bold text-accent hover:text-accent-hover transition-colors"
                >
                  (928) 713-2710
                </a>
                <p className="text-sm text-foreground-muted mt-4">
                  Fast answers on sizes, placement, and delivery windows.
                </p>
                <div className="mt-4">
                  <Link href="/quote" className="inline-flex items-center gap-2 text-accent font-semibold">
                    Get a Free Quote <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div ref={ctaRef} className="mt-16 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            {area.ctaTitle}
          </h2>
          <p className="text-foreground-muted mb-8 max-w-2xl mx-auto">
            {area.ctaCopy}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/quote" className="btn btn-primary">
              Get a Free Quote
            </Link>
            <a href="tel:+19287132710" className="btn btn-secondary">
              Call (928) 713-2710
            </a>
          </div>
          <div className="mt-6">
            <Link href="/service-areas" className="text-foreground-muted hover:text-foreground">
              View All Service Areas
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
