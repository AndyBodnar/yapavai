'use client';

import Link from 'next/link';
import { Phone, FileText } from 'lucide-react';

export default function StickyMobileCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-background-secondary border-t border-border">
      <div className="grid grid-cols-2 divide-x divide-border">
        {/* Call Now Button */}
        <a
          href="tel:+19287132710"
          className="flex items-center justify-center gap-2 py-4 text-accent font-bold hover:bg-background-tertiary transition-colors"
        >
          <Phone className="h-5 w-5" />
          <span>Call Now</span>
        </a>

        {/* Get Quote Button */}
        <Link
          href="/quote"
          className="flex items-center justify-center gap-2 py-4 bg-accent text-background font-bold hover:bg-accent-hover transition-colors"
        >
          <FileText className="h-5 w-5" />
          <span>Get Quote</span>
        </Link>
      </div>
    </div>
  );
}
