'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Phone } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const values = [
  {
    title: 'Straightforward pricing',
    description: 'Clear quotes, no surprises, and honest guidance on sizing.',
  },
  {
    title: 'Reliable delivery windows',
    description: 'We plan routes carefully so your job stays on schedule.',
  },
  {
    title: 'Responsible disposal',
    description: 'We prioritize smart disposal practices and recycling options.',
  },
];

const teamMembers = [
  {
    name: 'Nathaniel Murphy',
    title: 'Owner & Logistics',
    description:
      'Nathaniel brings a U.S. Air Force background and years of logistics experience to every route. He keeps deliveries precise, solves access challenges fast, and makes sure your dumpster shows up ready to work.',
    image: '/about/nathaniel.jpg',
  },
  {
    name: 'Kay Lopez',
    title: 'Owner & Sales',
    description:
      'Kay is the friendly expert guiding customers to the right size and the right schedule. With decades of local knowledge, she keeps quotes clear, answers questions quickly, and makes every rental feel effortless.',
    image: '/about/kay.jpg',
  },
];

const galleryPhotos = [
  { src: '/about/carousel/people-01.jpeg', alt: 'Yavapai Waste Solutions team member' },
  { src: '/about/carousel/people-02.jpeg', alt: 'Yavapai Waste Solutions team member' },
  { src: '/about/carousel/people-03.jpeg', alt: 'Yavapai Waste Solutions team member' },
  { src: '/about/carousel/people-04.jpeg', alt: 'Yavapai Waste Solutions team member' },
  { src: '/about/carousel/people-05.jpg', alt: 'Yavapai Waste Solutions team member' },
  { src: '/about/carousel/people-06.jpg', alt: 'Yavapai Waste Solutions team member' },
  { src: '/about/carousel/people-07.jpg', alt: 'Yavapai Waste Solutions team member' },
  { src: '/about/carousel/people-08.jpg', alt: 'Yavapai Waste Solutions team member' },
  { src: '/about/carousel/people-09.jpg', alt: 'Yavapai Waste Solutions team member' },
  { src: '/about/carousel/people-10.jpg', alt: 'Yavapai Waste Solutions team member' },
  { src: '/about/carousel/people-11.jpg', alt: 'Yavapai Waste Solutions team member' },
];

export default function AboutClient() {
  const [activePhoto, setActivePhoto] = useState<(typeof galleryPhotos)[number] | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const heroTextRef = useRef<HTMLDivElement>(null);
  const heroImageRef = useRef<HTMLDivElement>(null);
  const heroImageFrameRef = useRef<HTMLDivElement>(null);
  const heroGlowRef = useRef<HTMLDivElement>(null);
  const azRef = useRef<HTMLDivElement>(null);
  const valuesRef = useRef<HTMLDivElement>(null);
  const teamRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);
  const commitmentImageRef = useRef<HTMLDivElement>(null);
  const commitmentImageFrameRef = useRef<HTMLDivElement>(null);
  const commitmentTextRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        [heroTextRef.current, heroImageRef.current],
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.15 }
      );

      if (azRef.current) {
        gsap.to(azRef.current, {
          y: -10,
          rotate: -2,
          scale: 1.03,
          duration: 7,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
        });
      }

      if (heroImageFrameRef.current) {
        gsap.to(heroImageFrameRef.current, {
          y: -10,
          duration: 4,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
        });
      }

      if (heroGlowRef.current) {
        gsap.to(heroGlowRef.current, {
          opacity: 0.6,
          scale: 1.08,
          duration: 3.8,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
        });
      }

      if (valuesRef.current?.children.length) {
        gsap.fromTo(
          valuesRef.current.children,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            stagger: 0.12,
            scrollTrigger: {
              trigger: valuesRef.current,
              start: 'top 85%',
            },
          }
        );
      }

      if (teamRef.current?.children.length) {
        gsap.fromTo(
          teamRef.current.children,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.15,
            scrollTrigger: {
              trigger: teamRef.current,
              start: 'top 80%',
            },
          }
        );
      }

      if (galleryRef.current) {
        gsap.fromTo(
          galleryRef.current,
          { opacity: 0, y: 24 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            scrollTrigger: {
              trigger: galleryRef.current,
              start: 'top 85%',
            },
          }
        );
      }

      gsap.fromTo(
        [commitmentImageRef.current, commitmentTextRef.current],
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          scrollTrigger: {
            trigger: commitmentTextRef.current,
            start: 'top 80%',
          },
        }
      );

      if (commitmentImageFrameRef.current) {
        gsap.to(commitmentImageFrameRef.current, {
          y: -8,
          duration: 4.5,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          delay: 0.6,
        });
      }

      gsap.fromTo(
        ctaRef.current,
        { opacity: 0, y: 24 },
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

  useEffect(() => {
    if (!activePhoto) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setActivePhoto(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activePhoto]);

  return (
    <div ref={sectionRef} className="bg-background">
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <div
            ref={azRef}
            aria-hidden="true"
            className="absolute bottom-4 -left-16 h-[520px] w-[520px] opacity-[0.12]"
          >
            <Image
              src="/about/az.png"
              alt=""
              fill
              priority
              sizes="(min-width: 1024px) 520px, 70vw"
              className="object-contain grayscale brightness-0"
            />
          </div>
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative z-10 grid lg:grid-cols-[1.05fr_0.95fr] gap-12 items-center">
            <div ref={heroTextRef}>
              <p className="text-accent text-sm uppercase tracking-wider font-semibold mb-4">
                Local. Reliable. Straightforward.
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                A local dumpster team built for real projects
              </h1>
              <p className="text-lg text-foreground-muted mb-4">
                Yavapai Waste Solutions helps homeowners, contractors, and
                businesses stay clean and on schedule across the Quad Cities.
              </p>
              <p className="text-lg text-foreground-muted">
                From fast remodel cleanouts to multi-week construction runs, we
                deliver the right container with clear communication and fair,
                predictable pricing.
              </p>
              <div
                ref={valuesRef}
                className="mt-8 grid gap-4 sm:grid-cols-3 text-sm"
              >
                {values.map((value) => (
                  <div
                    key={value.title}
                    className="rounded-2xl border border-border bg-background-card p-4 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-lg hover:shadow-black/20"
                  >
                    <p className="font-semibold text-foreground mb-2">
                      {value.title}
                    </p>
                    <p className="text-foreground-muted">
                      {value.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div ref={heroImageRef} className="relative">
              <div
                ref={heroGlowRef}
                aria-hidden="true"
                className="pointer-events-none absolute -inset-6 rounded-[2.5rem] bg-accent/20 blur-3xl opacity-30"
              />
              <div
                ref={heroImageFrameRef}
                className="relative z-10 aspect-video w-full overflow-hidden rounded-[2rem] border border-border bg-background-card shadow-2xl shadow-black/40 transition-transform duration-500"
              >
                <Image
                  src="/about/about-hero.jpg"
                  alt="Yavapai Waste Solutions team at a delivery"
                  fill
                  sizes="(min-width: 1024px) 520px, 100vw"
                  priority
                  className="object-cover object-center transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-background-secondary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-accent text-sm uppercase tracking-wider font-semibold mb-3">
              Local Leadership
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Meet the owners behind every delivery
            </h2>
            <p className="text-foreground-muted">
              Hands-on leadership means you get real answers, real timing, and
              a team that cares about the details.
            </p>
          </div>

          <div ref={teamRef} className="grid lg:grid-cols-2 gap-8">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="team-card group rounded-[2rem] border border-border bg-background-card p-6 shadow-2xl shadow-black/30 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-2xl hover:shadow-black/40"
              >
                <div className="grid gap-6 sm:grid-cols-[220px_1fr] items-center">
                  <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-border bg-background-secondary">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      sizes="(min-width: 1024px) 220px, 60vw"
                      className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                  </div>
                  <div>
                    <p className="text-sm uppercase tracking-wider text-accent font-semibold mb-2">
                      {member.title}
                    </p>
                    <h3 className="text-2xl font-bold text-foreground mb-3">
                      {member.name}
                    </h3>
                    <p className="text-foreground-muted leading-relaxed">
                      {member.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div ref={galleryRef} className="mt-14 flex justify-center">
            <div className="w-full max-w-5xl rounded-[2rem] border border-border bg-background-card px-6 py-8 shadow-2xl shadow-black/30">
              <div className="text-center mb-6">
                <p className="text-accent text-sm uppercase tracking-wider font-semibold mb-2">
                  Community Driven
                </p>
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  Yavapai Waste Solutions in the community
                </h3>
                <p className="text-foreground-muted text-sm">
                  Local moments that show how we support the Quad Cities.
                </p>
              </div>

              <div className="space-y-4">
                <div className="overflow-hidden">
                  <div className="carousel-track carousel-track-right">
                    {[...galleryPhotos, ...galleryPhotos].map((photo, index) => (
                      <button
                        key={`${photo.src}-top-${index}`}
                        type="button"
                        onClick={() => setActivePhoto(photo)}
                        className="relative h-28 w-40 sm:h-32 sm:w-48 overflow-hidden rounded-2xl border border-border bg-background-secondary shadow-lg shadow-black/30 transition-transform duration-300 hover:scale-[1.03]"
                        aria-label={`Open ${photo.alt}`}
                      >
                        <Image
                          src={photo.src}
                          alt={photo.alt}
                          fill
                          sizes="200px"
                          className="object-cover object-center"
                        />
                      </button>
                    ))}
                  </div>
                </div>
                <div className="overflow-hidden">
                  <div className="carousel-track carousel-track-left">
                    {[...galleryPhotos, ...galleryPhotos].map((photo, index) => (
                      <button
                        key={`${photo.src}-bottom-${index}`}
                        type="button"
                        onClick={() => setActivePhoto(photo)}
                        className="relative h-28 w-40 sm:h-32 sm:w-48 overflow-hidden rounded-2xl border border-border bg-background-secondary shadow-lg shadow-black/30 transition-transform duration-300 hover:scale-[1.03]"
                        aria-label={`Open ${photo.alt}`}
                      >
                        <Image
                          src={photo.src}
                          alt={photo.alt}
                          fill
                          sizes="200px"
                          className="object-cover object-center"
                        />
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-12 items-center">
            <div ref={commitmentImageRef} className="relative">
              <div
                ref={commitmentImageFrameRef}
                className="relative aspect-video w-full overflow-hidden rounded-[2rem] border border-border bg-background-card shadow-2xl shadow-black/40 transition-transform duration-500"
              >
                <Image
                  src="/about/about-commitment.jpg"
                  alt="Yavapai Waste Solutions roll-off service"
                  fill
                  sizes="(min-width: 1024px) 520px, 100vw"
                  className="object-cover object-center transition-transform duration-700"
                />
              </div>
            </div>

            <div ref={commitmentTextRef}>
              <p className="text-accent text-sm uppercase tracking-wider font-semibold mb-4">
                Welcome to Yavapai Waste Solutions
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Built for the way you work and the way you live here
              </h2>
              <div className="space-y-4 text-foreground-muted leading-relaxed">
                <p>
                  We built Yavapai Waste Solutions around a simple promise:
                  make cleanup fast, clear, and dependable for every customer
                  in the Quad Cities.
                </p>
                <p>
                  From the first call to final pickup, you work with the same
                  local team that understands neighborhood access, busy
                  schedules, and the importance of clear communication.
                </p>
                <p>
                  Our roll-off dumpsters and debris solutions flex with your
                  timeline, whether you need a quick weekend rental or a
                  multi-week build plan.
                </p>
                <p>
                  We also prioritize responsible disposal practices and clean,
                  respectful placement so your property stays protected.
                </p>
                <p>
                  If you are unsure on size or placement, we guide you to the
                  right fit so your cleanup stays smooth from start to finish.
                </p>
              </div>
            </div>
          </div>

          <div ref={ctaRef} className="mt-14 text-center">
            <p className="text-foreground-muted mb-6">
              Ready to start your next cleanup or construction project?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/quote" className="btn btn-primary">
                Get a Free Quote
              </Link>
              <a href="tel:+19287132710" className="btn btn-secondary">
                <span className="inline-flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  Call (928) 713-2710
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {activePhoto && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 px-4 py-10"
          onClick={() => setActivePhoto(null)}
        >
          <div
            className="w-full max-w-5xl overflow-hidden rounded-[2rem] border border-border bg-background-card shadow-2xl shadow-black/60"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="relative w-full aspect-video max-h-[80vh]">
              <Image
                src={activePhoto.src}
                alt={activePhoto.alt}
                fill
                sizes="(min-width: 1024px) 900px, 100vw"
                className="object-contain bg-black/80"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
