'use client';

import Link from 'next/link';
import { FaLinkedin, FaYoutube, FaInstagram, FaTwitter, FaDiscord, FaSpotify, FaArrowUp } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import gsap from 'gsap';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    gsap.to(window, {
      scrollTo: 0,
      duration: 1,
      ease: 'power2.inOut',
    });
  };

  const socialLinks = [
    { icon: FaLinkedin, href: '#', label: 'LinkedIn', color: 'hover:text-blue-700' },
    { icon: FaYoutube, href: '#', label: 'YouTube', color: 'hover:text-red-600' },
    { icon: FaInstagram, href: '#', label: 'Instagram', color: 'hover:text-pink-600' },
    { icon: FaTwitter, href: '#', label: 'Twitter', color: 'hover:text-blue-400' },
    { icon: FaDiscord, href: '#', label: 'Discord', color: 'hover:text-indigo-500' },
    { icon: FaSpotify, href: '#', label: 'Spotify', color: 'hover:text-green-500' },
  ];

  const footerLinks = {
    Product: [
      { name: 'Features', href: '#' },
      { name: 'Pricing', href: '#' },
      { name: 'Security', href: '#' },
      { name: 'Enterprise', href: '#' },
    ],
    Company: [
      { name: 'About', href: '/about' },
      { name: 'Blog', href: '#' },
      { name: 'Careers', href: '#' },
      { name: 'Press', href: '#' },
    ],
    Resources: [
      { name: 'Documentation', href: '#' },
      { name: 'API Reference', href: '#' },
      { name: 'Community', href: '#' },
      { name: 'Support', href: '#' },
    ],
    Legal: [
      { name: 'Privacy', href: '#' },
      { name: 'Terms', href: '#' },
      { name: 'Cookies', href: '#' },
      { name: 'License', href: '#' },
    ],
  };

  return (
    <footer className="relative bg-gradient-to-b from-white via-neutral-50 to-neutral-900 border-t border-neutral-200 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Top section */}
        <div className="px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="max-w-7xl mx-auto">
            {/* Main footer content */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 sm:gap-12 lg:gap-8 mb-16 lg:mb-24">
              {/* Brand section */}
              <div className="lg:col-span-2">
                <Link href="/" className="flex items-center gap-2 mb-6 group">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white font-bold text-lg">A</span>
                  </div>
                  <span className="text-xl font-bold text-neutral-900 group-hover:text-blue-600 transition-colors duration-300">AICY</span>
                </Link>
                <p className="text-neutral-600 leading-relaxed mb-8 max-w-sm">
                  Transform your vision into stunning digital experiences with our premium web solutions.
                </p>
                <div className="flex gap-3 flex-wrap">
                  {socialLinks.map((social) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={social.label}
                        href={social.href}
                        aria-label={social.label}
                        className={`w-10 h-10 rounded-lg bg-neutral-100 hover:bg-blue-50 flex items-center justify-center text-neutral-600 transition-all duration-300 transform hover:scale-110 ${social.color}`}
                      >
                        <Icon className="w-4 h-4" />
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* Links section */}
              {Object.entries(footerLinks).map(([category, links]) => (
                <div key={category}>
                  <h3 className="text-sm lg:text-base font-bold text-neutral-900 mb-4 lg:mb-6 uppercase tracking-wide">{category}</h3>
                  <ul className="space-y-3">
                    {links.map((link) => (
                      <li key={link.name}>
                        <Link
                          href={link.href}
                          className="text-neutral-600 hover:text-blue-600 text-sm transition-colors duration-300 font-medium group flex items-center gap-2"
                        >
                          <span className="w-0 h-0.5 bg-blue-600 group-hover:w-4 transition-all duration-300"></span>
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Divider */}
            <div className="h-px bg-gradient-to-r from-transparent via-neutral-300 to-transparent mb-12 lg:mb-16"></div>

            {/* Bottom section */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <p className="text-neutral-600 text-sm">
                © {currentYear} AICY. All rights reserved.
              </p>
              <div className="flex items-center gap-6">
                <p className="text-neutral-600 text-sm">
                  Made with <span className="text-red-500">❤</span> by passionate developers
                </p>
                
                {/* Scroll to top button */}
                {showScrollTop && (
                  <button
                    onClick={scrollToTop}
                    className="w-10 h-10 rounded-lg bg-blue-600 text-white flex items-center justify-center hover:bg-purple-600 transform hover:scale-110 transition-all duration-300 shadow-lg"
                    aria-label="Scroll to top"
                  >
                    <FaArrowUp className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Footer gradient background */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-b from-transparent to-neutral-900 pointer-events-none"></div>
      </div>
    </footer>
  );
}
