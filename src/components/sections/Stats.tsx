'use client';

import { useEffect, useRef, useState } from 'react';
import { Star } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: 10, suffix: '+', label: 'Years in Business' },
  { value: 5000, suffix: '+', label: 'Jobs Completed' },
  { value: 8, suffix: '', label: 'Service Areas' },
  { value: 5, suffix: '', label: 'Star Rating', showStar: true },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const trigger = ScrollTrigger.create({
      trigger: el,
      start: 'top 80%',
      onEnter: () => {
        if (hasAnimated.current) return;
        hasAnimated.current = true;
        gsap.to({ val: 0 }, {
          val: value,
          duration: 2,
          ease: 'power2.out',
          onUpdate: function() { setCount(Math.floor(this.targets()[0].val)); },
        });
      },
    });

    return () => trigger.kill();
  }, [value]);

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
}

export default function Stats() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.stat-item', { opacity: 0, y: 30 }, {
        opacity: 1, y: 0, duration: 0.6, stagger: 0.15,
        scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-accent">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat) => (
            <div key={stat.label} className="stat-item text-center">
              <div className="relative inline-flex items-center justify-center mb-2">
                {stat.showStar && (
                  <div className="stat-star absolute -inset-6 flex items-center justify-center pointer-events-none">
                    <Star className="h-16 w-16 lg:h-20 lg:w-20 text-white/65 fill-white/65" />
                  </div>
                )}
                <div className="relative z-10 text-4xl lg:text-5xl font-bold text-background">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </div>
              </div>
              <div className="text-background/80 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
