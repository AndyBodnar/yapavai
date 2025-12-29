import type { Metadata } from 'next';
import AboutClient from './AboutClient';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about Yavapai Waste Solutions, our leadership team, and our commitment to reliable dumpster rental service in the Quad Cities.',
};

export default function AboutPage() {
  return <AboutClient />;
}
