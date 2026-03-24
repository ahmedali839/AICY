'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaBars, FaTimes } from 'react-icons/fa';
import gsap from 'gsap';

/**
 * Premium Navigation Bar Component
 * FAANG-inspired design with smooth animations and professional aesthetics
 */
const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth menu animation
  useEffect(() => {
    if (isOpen) {
      gsap.to('.mobile-menu', {
        height: 'auto',
        opacity: 1,
        duration: 0.3,
        ease: 'power2.out',
      });
    } else {
      gsap.to('.mobile-menu', {
        height: 0,
        opacity: 0,
        duration: 0.3,
        ease: 'power2.in',
      });
    }
  }, [isOpen]);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Projects', href: '/projects' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (href) => {
    if (href === '/' && pathname === '/') return true;
    if (href !== '/' && pathname.startsWith(href)) return true;
    return false;
  };

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 backdrop-blur-xl shadow-md border-b border-neutral-200/50'
          : 'bg-gradient-to-b from-white/95 via-white/90 to-white/0 border-b border-white/0'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 sm:gap-3 group"
          >
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
              <span className="text-white font-bold text-lg sm:text-xl">A</span>
            </div>
            <span className="hidden sm:inline text-lg sm:text-xl font-bold text-neutral-900 group-hover:text-blue-600 transition-colors duration-300">
              AICY
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-4 lg:px-5 py-2 rounded-lg font-medium text-sm lg:text-base transition-all duration-300 relative group ${
                  isActive(item.href)
                    ? 'text-blue-600 bg-blue-50'
                    : 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100/50'
                }`}
              >
                {item.name}
                <span
                  className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 ${
                    isActive(item.href) ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                ></span>
              </Link>
            ))}
          </div>

          {/* CTA Button & Mobile Menu */}
          <div className="flex items-center gap-2 sm:gap-4">
            <Link
              href="/contact"
              className="hidden sm:inline-block px-5 sm:px-6 py-2 sm:py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-blue-600/30 transform hover:scale-105 transition-all duration-300 text-sm lg:text-base"
            >
              Get Started
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-neutral-100 transition-colors duration-300"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <FaTimes className="w-6 h-6 text-neutral-900" />
              ) : (
                <FaBars className="w-6 h-6 text-neutral-900" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className="mobile-menu md:hidden overflow-hidden h-0 opacity-0"
          style={{ transformOrigin: 'top' }}
        >
          <div className="pb-4 space-y-2 border-t border-neutral-200/50 pt-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`block px-4 py-2.5 rounded-lg font-medium transition-all duration-300 ${
                  isActive(item.href)
                    ? 'text-blue-600 bg-blue-50'
                    : 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100/50'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/contact"
              className="block px-4 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg text-center mt-4 hover:shadow-lg transition-all duration-300"
              onClick={() => setIsOpen(false)}
            >
              Get Started
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};


export default Navbar;
