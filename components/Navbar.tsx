"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const navItems = [
  { href: "/#about", label: "About" },
  { href: "/#services", label: "Services" },
  { href: "/#products", label: "Products" },
  { href: "/#collaborators", label: "Collaborators" },
  { href: "/#work-with-us", label: "Work With Us" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (!open) return;
      const target = event.target as Node | null;
      if (containerRef.current && target && !containerRef.current.contains(target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-gray-100 bg-white/95 backdrop-blur-xl">
      <div
        ref={containerRef}
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
      >
        <div className="flex items-center justify-between py-4">
          {/* Logo - Larger size */}
          <Link href="/" className="flex items-center gap-3">
            <div className="relative h-12 w-12 sm:h-16 sm:w-16">
              <Image
                src="/afro_logo.png"
                alt="Afro Addis logo"
                fill
                sizes="64px"
                className="object-contain"
                priority
              />
            </div>
            <span className="text-xl font-semibold tracking-tight text-gray-900 sm:text-2xl">
              Afro Addis
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-8 text-sm font-medium text-gray-600 sm:flex">
            {navItems.map((item) => (
              <Link 
                key={item.href} 
                href={item.href} 
                className="transition-colors hover:text-gray-900 hover:underline hover:underline-offset-4"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/#contact"
              className="bg-gray-900 px-5 py-2.5 text-white transition-all hover:bg-gray-800 hover:shadow-md"
            >
              Contact Us
            </Link>
          </nav>

          <button
            type="button"
            className="inline-flex items-center justify-center p-2.5 text-gray-700 transition-colors hover:bg-gray-50 sm:hidden"
            aria-label="Toggle navigation menu"
            onClick={() => setOpen((prev) => !prev)}
          >
            <span className="sr-only">Toggle navigation menu</span>
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
            >
              {open ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation - Now positioned on the left side */}
        <nav
          className={`sm:hidden fixed top-16 left-4 z-40 text-sm font-medium transition-all duration-200 ease-out ${
            open
              ? "pointer-events-auto translate-x-0 opacity-100"
              : "pointer-events-none -translate-x-full opacity-0"
          }`}
        >
          <div className="w-72 max-w-[85vw] border border-gray-200 bg-white px-6 py-4 shadow-xl">
            <div className="flex flex-col gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="py-3 text-gray-700 transition-colors hover:bg-gray-50 hover:text-gray-900 hover:no-underline"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/#contact"
                className="mt-2 bg-gray-900 px-4 py-3 text-center text-white transition-colors hover:bg-gray-800"
                onClick={() => setOpen(false)}
              >
                Contact Us
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}