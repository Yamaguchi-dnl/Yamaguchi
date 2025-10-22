"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Menu, ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '#portfolio', label: 'Portfólio' },
  { href: '#services', label: 'Serviços' },
  { href: '#contact', label: 'Contato' },
];

export default function Header() {
  const [isSheetOpen, setSheetOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    }
    setSheetOpen(false);
  };

  return (
    <header className={cn(
      "sticky top-0 z-50 w-full transition-all duration-300 ease-in-out",
      isScrolled ? "border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60" : "border-b border-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex h-14 items-center justify-between px-4 md:px-6">
        {/* Left Column */}
        <div className="hidden md:flex flex-1 justify-start">
            <Link href="#home" className="font-bold tracking-wider" onClick={(e) => handleLinkClick(e, '#home')}>
            YAMAGUCHI
            </Link>
        </div>

        {/* Mobile Logo */}
        <Link href="#home" className="font-bold tracking-wider md:hidden" onClick={(e) => handleLinkClick(e, '#home')}>
            YAMAGUCHI
        </Link>
        
        {/* Center Column (Navigation) */}
        <nav className="hidden md:flex flex-1 justify-center items-center gap-6">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground" onClick={(e) => handleLinkClick(e, link.href)}>
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right Column */}
        <div className="hidden md:flex flex-1 justify-end items-center">
           <a href="#contact" className="flex items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-muted-foreground" onClick={(e) => handleLinkClick(e, '#contact')}>
              ENTRAR EM CONTATO
              <span className="bg-primary text-primary-foreground rounded-full p-1.5 hover:bg-primary/90 transition-colors">
                <ArrowUpRight className="h-4 w-4" />
              </span>
            </a>
        </div>
        
        {/* Mobile Menu */}
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
                <Link href="#home" className="font-bold tracking-wider text-xl mb-4" onClick={(e) => handleLinkClick(e, '#home')}>
                  YAMAGUCHI
                </Link>
                {navLinks.map((link) => (
                  <a key={link.href} href={link.href} className="text-muted-foreground transition-colors hover:text-foreground" onClick={(e) => handleLinkClick(e, link.href)}>
                    {link.label}
                  </a>
                ))}
                 <a href="#contact" className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground" onClick={(e) => handleLinkClick(e, '#contact')}>
                    ENTRAR EM CONTATO
                     <span className="bg-primary text-primary-foreground rounded-full p-1.5 hover:bg-primary/90 transition-colors">
                        <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </a>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
