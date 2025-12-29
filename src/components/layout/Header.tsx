'use client';

import Link from 'next/link';
import { useState } from 'react';
import { serviceAreaLinks } from '@/data/service-areas';
import { Phone, Menu, X, ChevronDown } from 'lucide-react';

const navigation = [
  { name: 'Services', href: '/services' },
  { name: 'About', href: '/about' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [serviceMenuOpen, setServiceMenuOpen] = useState(false);
  const [mobileAreasOpen, setMobileAreasOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl font-bold text-foreground">
              Yavapai <span className="text-accent">Waste Solutions</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-foreground-muted hover:text-accent transition-colors"
              >
                {item.name}
              </Link>
            ))}
            <div className="relative group">
              <button
                type="button"
                className="flex items-center gap-1 text-sm font-medium text-foreground-muted hover:text-accent transition-colors"
                aria-haspopup="menu"
                aria-expanded={serviceMenuOpen}
                onMouseEnter={() => setServiceMenuOpen(true)}
                onFocus={() => setServiceMenuOpen(true)}
              >
                Service Areas
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${serviceMenuOpen ? 'rotate-180' : ''}`}
                />
              </button>
              <div
                className={`absolute left-0 top-full mt-3 w-72 rounded-2xl border border-border bg-background-card p-4 shadow-2xl shadow-black/40 transition-all duration-200 ${
                  serviceMenuOpen
                    ? 'translate-y-0 opacity-100'
                    : 'pointer-events-none translate-y-2 opacity-0'
                }`}
                role="menu"
                onMouseEnter={() => setServiceMenuOpen(true)}
                onMouseLeave={() => setServiceMenuOpen(false)}
              >
                <div className="text-xs uppercase tracking-wider text-foreground-subtle mb-3">
                  Quad Cities Coverage
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {serviceAreaLinks.map((area) => (
                    <Link
                      key={area.slug}
                      href={`/service-areas/${area.slug}`}
                      className="rounded-lg px-3 py-2 text-sm text-foreground-muted hover:text-accent hover:bg-background-secondary transition-colors"
                      onClick={() => setServiceMenuOpen(false)}
                    >
                      {area.name}
                    </Link>
                  ))}
                </div>
                <Link
                  href="/service-areas"
                  className="mt-4 inline-flex items-center gap-2 text-sm text-accent hover:text-accent-hover"
                  onClick={() => setServiceMenuOpen(false)}
                >
                  View all areas
                  <ChevronDown className="h-4 w-4 -rotate-90" />
                </Link>
              </div>
            </div>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex md:items-center md:gap-4">
            <a
              href="tel:+19287132710"
              className="flex items-center gap-2 text-accent font-bold hover:text-accent-hover transition-colors"
            >
              <Phone className="h-4 w-4" />
              (928) 713-2710
            </a>
            <Link href="/quote" className="btn btn-primary">
              Get a Quote
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center gap-4">
            <a href="tel:+19287132710" className="text-accent">
              <Phone className="h-6 w-6" />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-foreground"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-lg font-medium text-foreground-muted hover:text-accent transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex flex-col gap-2">
                <button
                  type="button"
                  onClick={() => setMobileAreasOpen((open) => !open)}
                  className="flex items-center justify-between text-lg font-medium text-foreground-muted hover:text-accent transition-colors"
                  aria-expanded={mobileAreasOpen}
                >
                  Service Areas
                  <ChevronDown
                    className={`h-5 w-5 transition-transform ${mobileAreasOpen ? 'rotate-180' : ''}`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    mobileAreasOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="grid grid-cols-2 gap-2 pt-2">
                    {serviceAreaLinks.map((area) => (
                      <Link
                        key={area.slug}
                        href={`/service-areas/${area.slug}`}
                        className="rounded-lg px-3 py-2 text-sm text-foreground-muted hover:text-accent hover:bg-background-secondary transition-colors"
                        onClick={() => {
                          setMobileMenuOpen(false);
                          setMobileAreasOpen(false);
                        }}
                      >
                        {area.name}
                      </Link>
                    ))}
                  </div>
                  <Link
                    href="/service-areas"
                    className="mt-3 inline-flex items-center gap-2 text-sm text-accent hover:text-accent-hover"
                    onClick={() => {
                      setMobileMenuOpen(false);
                      setMobileAreasOpen(false);
                    }}
                  >
                    View all areas
                    <ChevronDown className="h-4 w-4 -rotate-90" />
                  </Link>
                </div>
              </div>
              <Link
                href="/quote"
                className="btn btn-primary mt-4"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get a Quote
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
