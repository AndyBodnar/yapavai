'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Phone, MapPin, Star, ChevronDown } from 'lucide-react';
import { gsap } from 'gsap';

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const bgLogoRef = useRef<HTMLDivElement>(null);
  const bgGlowRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subheadRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const trustRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo(
        bgLogoRef.current,
        { opacity: 0, x: 160, rotate: -10, scale: 0.92, transformOrigin: '50% 50%' },
        { opacity: 1, x: 0, rotate: 0, scale: 1, duration: 1.05 }
      )
        .fromTo(
          bgGlowRef.current,
          { opacity: 0, scale: 0.95 },
          { opacity: 0.35, scale: 1, duration: 1.1 },
          '-=0.6'
        )
        .fromTo(
          badgeRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6 },
          '-=0.5'
        )
        .fromTo(
          headlineRef.current,
          { opacity: 0, y: 30, scale: 0.95 },
          { opacity: 1, y: 0, scale: 1, duration: 0.8 },
          '-=0.1'
        )
        .fromTo(
          subheadRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6 },
          '-=0.4'
        )
        .fromTo(
          ctaRef.current?.children || [],
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.5, stagger: 0.15 },
          '-=0.3'
        )
        .fromTo(
          trustRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 0.5 },
          '-=0.2'
        );

      gsap.to(bgGlowRef.current, {
        opacity: 0.45,
        scale: 1.03,
        duration: 4.5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: 1.2,
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center bg-background overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background-secondary to-background" />
      
      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/4 w-[800px] h-[800px] rounded-full bg-accent/5 blur-3xl" />
        <div className="absolute -bottom-1/2 -left-1/4 w-[600px] h-[600px] rounded-full bg-accent/3 blur-3xl" />
      </div>

      {/* Background logo */}
      <div
        ref={bgLogoRef}
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-[-12%] flex items-center justify-end opacity-0"
      >
        <div className="relative w-[85vw] max-w-[900px] aspect-square">
          <div
            ref={bgGlowRef}
            className="absolute -bottom-12 left-1/2 -translate-x-1/2 h-[40%] w-[72%] rounded-full bg-[radial-gradient(closest-side,rgba(255,215,0,0.35),rgba(255,215,0,0.12),transparent)] blur-2xl opacity-0 mix-blend-soft-light"
          />
          <Image
            src="/logo.jpg"
            alt=""
            width={1200}
            height={1200}
            priority
            sizes="(min-width: 1024px) 900px, 85vw"
            className="h-full w-full rounded-[2.25rem] object-contain opacity-20"
          />
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="max-w-4xl">
          {/* Badge */}
          <div
            ref={badgeRef}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background-card border border-border mb-8 opacity-0"
          >
            <MapPin className="h-4 w-4 text-accent" />
            <span className="text-sm text-foreground-muted">
              Serving the Quad Cities and Surrounding Areas
            </span>
          </div>

          {/* Headline */}
          <h1
            ref={headlineRef}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-[1.1] opacity-0"
          >
            Reliable Dumpster Rental in{' '}
            <span className="text-accent relative">
              Quad Cities in Arizona
              <svg
                className="absolute -bottom-2 left-0 w-full"
                viewBox="0 0 300 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 10C50 4 150 2 298 10"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  className="text-accent/30"
                />
              </svg>
            </span>
          </h1>

          {/* Subheadline */}
          <p
            ref={subheadRef}
            className="text-xl lg:text-2xl text-foreground-muted mb-10 max-w-2xl leading-relaxed opacity-0"
          >
            Local, transparent, and dependable waste disposal solutions. From
            home cleanouts to construction sites - we have got you covered.
          </p>

          {/* CTAs */}
          <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4 mb-10">
            <Link
              href="/quote"
              className="btn btn-primary text-lg px-10 py-5 font-bold shadow-lg shadow-accent/20 hover:shadow-accent/40 transition-shadow"
            >
              Get a Free Quote
            </Link>
            <a
              href="tel:+19287132710"
              className="btn btn-secondary text-lg px-10 py-5 flex items-center justify-center gap-3 group"
            >
              <Phone className="h-5 w-5 group-hover:animate-pulse" />
              <span>(928) 713-2710</span>
            </a>
          </div>

          {/* Trust Signals */}
          <div
            ref={trustRef}
            className="flex flex-wrap items-center gap-8 text-foreground-muted opacity-0"
          >
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-accent text-accent"
                  />
                ))}
              </div>
              <span className="text-sm font-medium">5-Star Rated</span>
            </div>
            <div className="h-4 w-px bg-border hidden sm:block" />
            <span className="text-sm">Locally Owned & Operated</span>
            <div className="h-4 w-px bg-border hidden sm:block" />
            <span className="text-sm">Same-Day Delivery Available</span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="h-8 w-8 text-foreground-muted" />
      </div>
    </section>
  );
}

