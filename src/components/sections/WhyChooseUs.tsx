'use client';

import { useEffect, useRef } from 'react';
import { Shield, Clock, DollarSign, Leaf, Users, Award } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const features = [
  { icon: Shield, title: 'Reliable Service', description: 'On-time delivery and pickup, every single time. We show up when we say we will.' },
  { icon: DollarSign, title: 'Transparent Pricing', description: 'No hidden fees or surprise charges. What we quote is what you pay.' },
  { icon: Clock, title: 'Same-Day Delivery', description: 'Need a dumpster fast? We offer same-day delivery for most service areas.' },
  { icon: Leaf, title: 'Eco-Friendly', description: 'We prioritize recycling and responsible disposal to minimize landfill waste.' },
  { icon: Users, title: 'Locally Owned', description: 'We are your neighbors. We know the Quad Cities area and care about our community.' },
  { icon: Award, title: 'Licensed & Insured', description: 'Fully licensed and insured for your peace of mind and protection.' },
];

export default function WhyChooseUs() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.feature-card', { opacity: 0, y: 40 }, {
        opacity: 1, y: 0, duration: 0.5, stagger: 0.1,
        scrollTrigger: { trigger: sectionRef.current, start: 'top 70%' },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 lg:py-32 bg-background-secondary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block">Why Us</span>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">Why Choose Yavapai Waste Solutions?</h2>
          <p className="text-xl text-foreground-muted max-w-2xl mx-auto">We are not just another dumpster company. We are your local waste disposal partner.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div key={feature.title} className="feature-card card p-8 hover:border-accent/50 transition-colors">
              <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mb-6">
                <feature.icon className="h-7 w-7 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
              <p className="text-foreground-muted">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
