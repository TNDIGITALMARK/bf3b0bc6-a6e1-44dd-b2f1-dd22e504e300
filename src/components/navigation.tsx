"use client"

import Link from 'next/link';
import { useState } from 'react';
import { Phone, Mail, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/projects', label: 'Projects' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="bg-primary text-primary-foreground shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        {/* Top bar with contact info */}
        <div className="hidden md:flex items-center justify-end py-2 text-sm border-b border-white/10">
          <a
            href="tel:4379919026"
            className="flex items-center gap-2 hover:text-secondary transition-colors mr-6"
          >
            <Phone className="w-4 h-4" />
            <span>(437) 991-9026</span>
          </a>
          <a
            href="mailto:premiumdemolitioncontact@gmail.com"
            className="flex items-center gap-2 hover:text-secondary transition-colors"
          >
            <Mail className="w-4 h-4" />
            <span>premiumdemolitioncontact@gmail.com</span>
          </a>
        </div>

        {/* Main navigation */}
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center font-bold text-2xl">
              PD
            </div>
            <div className="hidden sm:block">
              <div className="font-bold text-xl tracking-tight">Premium Demolition</div>
              <div className="text-xs text-white/80">Professional Services in Ontario</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-semibold hover:text-secondary transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Button
              asChild
              variant="secondary"
              size="lg"
              className="ml-4"
            >
              <Link href="/contact">Get a Quote</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 hover:bg-white/10 rounded-lg transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/10">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-semibold hover:text-secondary transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Button
                asChild
                variant="secondary"
                size="lg"
                className="w-full"
              >
                <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                  Get a Quote
                </Link>
              </Button>

              {/* Mobile contact info */}
              <div className="pt-4 border-t border-white/10 space-y-3">
                <a
                  href="tel:4379919026"
                  className="flex items-center gap-2 hover:text-secondary transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span>(437) 991-9026</span>
                </a>
                <a
                  href="mailto:premiumdemolitioncontact@gmail.com"
                  className="flex items-center gap-2 hover:text-secondary transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  <span>premiumdemolitioncontact@gmail.com</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
