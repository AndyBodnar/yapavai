'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import Image from 'next/image';
import { Star, Quote, X } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

type Review = {
  name: string;
  date: string;
  rating: number;
  text: string;
};

function GoogleWordmark({ className = '' }: { className?: string }) {
  return (
    <span className={`flex items-center gap-2 ${className}`}>
      <span className="font-semibold leading-none text-2xl sm:text-3xl">
        <span className="text-[#4285F4]">G</span>
        <span className="text-[#EA4335]">o</span>
        <span className="text-[#FBBC05]">o</span>
        <span className="text-[#4285F4]">g</span>
        <span className="text-[#34A853]">l</span>
        <span className="text-[#EA4335]">e</span>
      </span>
      <span className="text-sm sm:text-base text-foreground-muted uppercase tracking-wide">
        Reviews
      </span>
      <span className="sr-only">Google Reviews</span>
    </span>
  );
}

const reviews: Review[] = [
  {
    name: 'Cheyenne Bruner',
    date: '2 months ago',
    rating: 5,
    text: 'From the moment you talk with Kay you will become her best friend. The communication is the best and the service is even better! YWS should be your only option for all things trash!!',
  },
  {
    name: 'Rebelle Anderson',
    date: '8 months ago',
    rating: 5,
    text: 'I have dealt with Kay for years. She is honest and reliable. She knows trash. She has been able to offer advice and some of the best services for the different situations that I have had to manage. She is committed to doing things right.',
  },
  {
    name: 'Lindsay Sherrard',
    date: '8 months ago',
    rating: 5,
    text: 'Kay is absolutely wonderful to work with. I took on the clearing out of a hoarder property for an out-of-state friend. Kay knew exactly what I needed and was able to help me figure out the exact size of roll-off dumpster for this job.',
  },
  {
    name: 'nick anderson',
    date: '8 months ago',
    rating: 5,
    text: 'My wife and I have known Kay for a while now. She is very good at what she does. Kay was kind and very attentive to us and our roll-off needs. Will definitely use their services again. Thanks Yavapai Waste Solutions.',
  },
  {
    name: 'Nate Layton',
    date: '5 months ago',
    rating: 5,
    text: "I just absolutely love this company Kate is always so kind and accommodating and the gentleman who picks up our dumpster is always so prompt and respectful I can't imagine using any other company for trash disposal if I could give 100 stars I would",
  },
  {
    name: 'Tj Austin',
    date: '8 months ago',
    rating: 5,
    text: "I can't say enough good about what an amazing person Kay is!! She's so kind and generous. Thank you for everything you do!",
  },
  {
    name: 'Clara Mahaffey',
    date: '8 months ago',
    rating: 5,
    text: 'I liked being able to talk to a real person. She talked to me like I was family, and explained the process to me. I appreciated her honesty.',
  },
  {
    name: 'Teagan McGurk',
    date: '8 months ago',
    rating: 5,
    text: 'Kay is the sweetest and most reliable person you will ever work with, I higly recommend Yavapai Waste Solutions!!',
  },
  {
    name: 'Lance',
    date: '8 months ago',
    rating: 5,
    text: 'Needed a rental for a large demo, quick response and guided me through the process.',
  },
];

const stackPositions = [
  { x: 0, y: 0, scale: 1, rotate: 0, opacity: 1, zIndex: 3 },
  { x: 48, y: 40, scale: 0.96, rotate: 2, opacity: 0.72, zIndex: 2 },
  { x: 96, y: 80, scale: 0.92, rotate: 4, opacity: 0.5, zIndex: 1 },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [slidesPerView, setSlidesPerView] = useState(1);
  const [activeReview, setActiveReview] = useState<Review | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const cardRefs = useRef<Array<HTMLButtonElement | null>>([]);

  useEffect(() => {
    const updateSlidesPerView = () => {
      if (window.innerWidth >= 1024) {
        setSlidesPerView(3);
      } else if (window.innerWidth >= 768) {
        setSlidesPerView(2);
      } else {
        setSlidesPerView(1);
      }
    };

    updateSlidesPerView();
    window.addEventListener('resize', updateSlidesPerView);

    return () => window.removeEventListener('resize', updateSlidesPerView);
  }, []);

  const visibleReviews = useMemo(
    () =>
      Array.from({ length: slidesPerView }, (_, idx) =>
        reviews[(currentIndex + idx) % reviews.length]
      ),
    [currentIndex, slidesPerView]
  );

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const positions = stackPositions.slice(0, slidesPerView);

    if (!isInView) {
      positions.forEach((_, slotIndex) => {
        const card = cardRefs.current[slotIndex];
        if (!card) return;
        gsap.set(card, { opacity: 0, x: 220, y: 0, rotate: 10, scale: 0.98 });
      });
      return;
    }

    positions.forEach((position, slotIndex) => {
      const card = cardRefs.current[slotIndex];
      if (!card) return;

      if (reduceMotion) {
        gsap.set(card, position);
        return;
      }

      if (slotIndex === 0) {
        gsap.fromTo(
          card,
          { opacity: 0, x: 220, rotate: 10, scale: 0.98 },
          { ...position, duration: 0.85, ease: 'power3.out' }
        );
        return;
      }

      gsap.to(card, {
        ...position,
        duration: 0.6,
        ease: 'power3.out',
        delay: slotIndex * 0.18,
      });
    });
  }, [currentIndex, slidesPerView, visibleReviews, isInView]);

  useEffect(() => {
    const paused = isPaused || Boolean(activeReview) || !isInView;
    if (paused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, 4500);

    return () => clearInterval(interval);
  }, [isPaused, activeReview]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const trigger = ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top 75%',
        end: 'bottom 20%',
        onEnter: () => setIsInView(true),
        onEnterBack: () => setIsInView(true),
        onLeave: () => setIsInView(false),
        onLeaveBack: () => setIsInView(false),
      });

      gsap.fromTo(
        sectionRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
        }
      );

      return () => trigger.kill();
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (!activeReview) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setActiveReview(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeReview]);

  return (
    <section ref={sectionRef} className="py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block">
            Testimonials
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            What People Say About Us
          </h2>
          <div className="flex items-center justify-center gap-2">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, idx) => (
                <Star key={idx} className="h-6 w-6 fill-accent text-accent" />
              ))}
            </div>
            <span className="text-foreground-muted ml-2">5.0 on Google Reviews</span>
          </div>
        </div>

        <div
          className="relative mx-auto max-w-5xl"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocusCapture={() => setIsPaused(true)}
          onBlurCapture={() => setIsPaused(false)}
        >
          <div className="relative min-h-[420px] sm:min-h-[520px] lg:min-h-[600px]">
            {visibleReviews.map((review, slotIndex) => (
              <button
                key={`${review.name}-${slotIndex}`}
                ref={(el) => {
                  cardRefs.current[slotIndex] = el;
                }}
                type="button"
                onClick={() => setActiveReview(review)}
                style={{ zIndex: stackPositions[slotIndex]?.zIndex ?? 1 }}
                className="absolute inset-0 w-full text-left card p-8 overflow-hidden transition-shadow hover:shadow-2xl hover:shadow-accent/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                aria-label={`Read full review from ${review.name}`}
              >
                <Quote className="absolute top-6 right-6 h-12 w-12 text-accent/10 pointer-events-none" />
                <div className="absolute top-4 right-4 w-28 h-28 sm:w-36 sm:h-36 opacity-[0.12] pointer-events-none">
                  <Image
                    src="/logo.jpg"
                    alt=""
                    width={320}
                    height={320}
                    sizes="144px"
                    className="h-full w-full object-contain rounded-[2.5rem]"
                  />
                </div>
                <div className="relative mb-6">
                  <GoogleWordmark className="relative z-10" />
                </div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(review.rating)].map((_, starIndex) => (
                      <Star
                        key={starIndex}
                        className="h-4 w-4 fill-accent text-accent"
                      />
                    ))}
                  </div>
                  <span className="text-xs text-foreground-muted">{review.date}</span>
                </div>
                <p className="text-foreground leading-relaxed mb-6 max-h-[140px] overflow-hidden">
                  {review.text}
                </p>
                <div className="flex items-center justify-between text-sm">
                  <span className="font-semibold text-foreground">{review.name}</span>
                  <span className="text-accent">Read full review</span>
                </div>
              </button>
            ))}
          </div>

          <div className="text-center mt-10">
            <a
              href="https://g.page/yavapaiwastesolutions"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:text-accent-hover font-medium"
            >
              View All Reviews on Google
            </a>
          </div>
        </div>
      </div>

      {activeReview ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4 py-10"
          onClick={() => setActiveReview(null)}
        >
          <div
            role="dialog"
            aria-modal="true"
            className="card w-full max-w-2xl p-8 relative"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActiveReview(null)}
              className="absolute top-5 right-5 text-foreground-muted hover:text-foreground transition-colors"
              aria-label="Close review"
            >
              <X className="h-5 w-5" />
            </button>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-1">
                {[...Array(activeReview.rating)].map((_, starIndex) => (
                  <Star
                    key={starIndex}
                    className="h-5 w-5 fill-accent text-accent"
                  />
                ))}
              </div>
              <span className="text-sm text-foreground-muted">
                {activeReview.date}
              </span>
            </div>
            <p className="text-foreground text-lg leading-relaxed mb-6">
              {activeReview.text}
            </p>
            <div className="text-base font-semibold text-foreground">
              {activeReview.name}
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}
