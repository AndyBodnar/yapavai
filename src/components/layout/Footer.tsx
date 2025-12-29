import Link from 'next/link';
import { Phone, Mail, Clock, MapPin, Facebook, Instagram } from 'lucide-react';
import { serviceAreaLinks } from '@/data/service-areas';

const services = [
  { name: 'Roll-Off Dumpsters', href: '/services/roll-off-dumpsters' },
  { name: 'Commercial Front Load', href: '/services/commercial' },
  { name: 'Construction Waste', href: '/services/construction' },
];

const company = [
  { name: 'About Us', href: '/about' },
  { name: 'Contact', href: '/contact' },
  { name: 'Blog', href: '/blog' },
  { name: 'Get a Quote', href: '/quote' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background-secondary border-t border-border">
      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <span className="text-xl font-bold text-foreground">
                Yavapai <span className="text-accent">Waste Solutions</span>
              </span>
            </Link>
            <p className="text-foreground-muted text-sm mb-6">
              Reliable, Transparent, Local. Serving the Quad Cities area with professional waste disposal services.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <a
                href="tel:+19287132710"
                className="flex items-center gap-3 text-accent font-bold text-lg hover:text-accent-hover transition-colors"
              >
                <Phone className="h-5 w-5" />
                (928) 713-2710
              </a>
              <a
                href="mailto:sales@ywsaz.com"
                className="flex items-center gap-3 text-foreground-muted hover:text-foreground transition-colors"
              >
                <Mail className="h-5 w-5" />
                sales@ywsaz.com
              </a>
              <div className="flex items-center gap-3 text-foreground-muted">
                <Clock className="h-5 w-5" />
                Mon-Fri: 8AM - 5PM
              </div>
              <div className="flex items-center gap-3 text-foreground-muted">
                <MapPin className="h-5 w-5" />
                Quad Cities, Arizona
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 mt-6">
              <a
                href="https://facebook.com/yavapaiwastesolutions"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground-muted hover:text-accent transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a
                href="https://instagram.com/yavapaiwastesolutions"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground-muted hover:text-accent transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-6 w-6" />
              </a>
              {/* Google Business - using a simple icon placeholder */}
              <a
                href="https://g.page/yavapaiwastesolutions"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground-muted hover:text-accent transition-colors"
                aria-label="Google Business"
              >
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.545 10.239v3.821h5.445c-.712 2.315-2.647 3.972-5.445 3.972a6.033 6.033 0 110-12.064c1.498 0 2.866.549 3.921 1.453l2.814-2.814A9.969 9.969 0 0012.545 2C7.021 2 2.543 6.477 2.543 12s4.478 10 10.002 10c8.396 0 10.249-7.85 9.426-11.748l-9.426-.013z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
              Services
            </h3>
            <ul className="space-y-3">
              {services.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-foreground-muted hover:text-accent transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
              Service Areas
            </h3>
            <ul className="space-y-3">
              {serviceAreaLinks.map((item) => (
                <li key={item.slug}>
                  <Link
                    href={`/service-areas/${item.slug}`}
                    className="text-foreground-muted hover:text-accent transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/service-areas"
                  className="text-accent hover:text-accent-hover transition-colors"
                >
                  View All Areas -&gt;
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              {company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-foreground-muted hover:text-accent transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-foreground-subtle text-sm">
              Copyright {currentYear} Yavapai Waste Solutions. All rights reserved.
            </p>
            <a
              href="https://azdevops.io"
              target="_blank"
              rel="noopener noreferrer"
              className="devcollective-shake text-foreground-subtle hover:text-accent transition-colors"
            >
              <span className="text-sm">Built by </span>
              <span className="text-base font-semibold">DevCollective</span>
            </a>
            <div className="flex items-center gap-6 text-sm">
              <Link href="/privacy" className="text-foreground-subtle hover:text-foreground transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-foreground-subtle hover:text-foreground transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

