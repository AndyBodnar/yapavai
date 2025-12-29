import {
  Hero,
  Services,
  Stats,
  Testimonials,
  ServiceAreas,
  WhyChooseUs,
  CTASection,
} from '@/components/sections';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <Stats />
      <Testimonials />
      <ServiceAreas />
      <WhyChooseUs />
      <CTASection />
    </>
  );
}
