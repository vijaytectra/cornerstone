"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Box, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const linkTone = scrolled
    ? "text-black hover:text-black/80"
    : "text-white/80 hover:text-white";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 w-full transition-colors duration-300 ${
        scrolled
          ? "border-b border-border bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/70"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex h-20 items-center justify-between">
        <div className="flex items-center gap-2">
          <Box className={`h-6 w-6 ${scrolled ? "text-primary" : "text-white"}`} />
          <span
            className={`font-heading font-bold tracking-tight text-xl ${
              scrolled ? "text-white lg:text-foreground" : "text-white"
            }`}
          >
            CORNERSTONE
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          <Link href="#routes" className={`text-sm font-medium transition-colors ${linkTone}`}>
            Routes
          </Link>
          <Link href="#tracking" className={`text-sm font-medium transition-colors ${linkTone}`}>
            Tracking
          </Link>
          <Link href="#services" className={`text-sm font-medium transition-colors ${linkTone}`}>
            Services
          </Link>
          <Link href="#business" className={`text-sm font-medium transition-colors ${linkTone}`}>
            Business API
          </Link>
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <Link
            href="/login"
            className={`text-sm font-medium transition-colors ${linkTone}`}
          >
            Sign In
          </Link>
          <Button variant="default" className="font-medium px-6">
            Track Shipment
          </Button>
        </div>

        {/* Mobile menu toggle */}
        <button
          className={`lg:hidden p-2 transition-colors ${
            scrolled ? "text-white lg:text-foreground" : "text-white"
          }`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <line x1="4" x2="20" y1="9" y2="9" />
              <line x1="4" x2="14" y1="15" y2="15" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden border-t border-border bg-background px-4 py-4 space-y-4">
          <Link href="#routes" className="block text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Routes</Link>
          <Link href="#tracking" className="block text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Tracking</Link>
          <Link href="#services" className="block text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Services</Link>
          <Link href="#business" className="block text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Business API</Link>
          <div className="pt-4 border-t border-border flex flex-col gap-2">
            <Link href="/login" className="block text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Sign In</Link>
            <Button variant="default" className="w-full font-medium">Track Shipment</Button>
          </div>
        </div>
      )}
    </header>
  );
}