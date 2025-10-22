"use client";

import React from 'react';
import Link from 'next/link';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';

const navLinks = [
  { href: '#about', label: 'Sobre' },
  { href: '#portfolio', label: 'Portfólio' },
  { href: '#contact', label: 'Contato' },
];

export default function Header() {
  const [isSheetOpen, setSheetOpen] = React.useState(false);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // For smooth scrolling on the same page
    if (href.startsWith('#')) {
      e.preventDefault();
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
      setSheetOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-7xl mx-auto flex h-14 items-center justify-between px-4 md:px-6">
        <Link href="#" className="font-bold tracking-wider" onClick={(e) => handleLinkClick(e, '#home')}>
          YAMAGUCHI
        </Link>
        <nav className="hidden md:flex md:items-center md:gap-6">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground" onClick={(e) => handleLinkClick(e, link.href)}>
              {link.label}
            </a>
          ))}
        </nav>
        <div className="md:hidden">
          <Sheet open={isSheetOpen} onOpenChange={setSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="grid gap-6 text-lg font-medium mt-10 p-4">
                <Link href="#" className="font-bold tracking-wider text-xl mb-4" onClick={(e) => handleLinkClick(e, '#home')}>
                  YAMAGUCHI
                </Link>
                {navLinks.map((link) => (
                  <a key={link.href} href={link.href} className="text-muted-foreground transition-colors hover:text-foreground" onClick={(e) => handleLinkClick(e, link.href)}>
                    {link.label}
                  </a>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
