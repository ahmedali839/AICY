'use client';

import Link from 'next/link';
import { FaLinkedin, FaYoutube, FaInstagram, FaEnvelope, FaPhone } from 'react-icons/fa';

function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: FaYoutube,
      href: 'https://www.youtube.com/@AiandCodewithYar',
      label: 'YouTube',
      color: 'hover:text-red-600',
    },
    {
      icon: FaLinkedin,
      href: 'https://www.linkedin.com/in/ahmed-yar-rasheed/',
      label: 'LinkedIn',
      color: 'hover:text-blue-600',
    },
    {
      icon: FaInstagram,
      href: 'https://www.instagram.com/aiandcodewithyar/',
      label: 'Instagram',
      color: 'hover:text-pink-600',
    },
    {
      icon: FaEnvelope,
      href: 'mailto:ahmedyarr1212@gmail.com',
      label: 'Email',
      color: 'hover:text-orange-600',
    },
    {
      icon: FaPhone,
      href: 'tel:+923715335433',
      label: 'Phone',
      color: 'hover:text-green-600',
    },
  ];

  const footerSections = {
    Product: [
      { name: 'Features', href: '#features' },
      { name: 'Pricing', href: '#pricing' },
      { name: 'Security', href: '#security' },
      { name: 'Performance', href: '#performance' },
    ],
    Company: [
      { name: 'About', href: '/about' },
      { name: 'Blog', href: '#blog' },
      { name: 'Careers', href: '#careers' },
      { name: 'Press', href: '#press' },
    ],
    Resources: [
      { name: 'Documentation', href: '#docs' },
      { name: 'API Reference', href: '#api' },
      { name: 'Support', href: '#support' },
      { name: 'Contact', href: '/contact' },
    ],
    Legal: [
      { name: 'Privacy', href: '#privacy' },
      { name: 'Terms', href: '#terms' },
      { name: 'Cookie Policy', href: '#cookies' },
      { name: 'License', href: '#license' },
    ],
  };

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-12">
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">A</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">AICY</h3>
                <p className="text-xs text-gray-600">Digital Solutions</p>
              </div>
            </Link>
            <p className="text-sm text-gray-600 mb-6 leading-relaxed">
              Transforming visions into exceptional digital experiences. We craft solutions that inspire, engage, and drive results for forward-thinking companies.
            </p>

            <div className="flex gap-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className={`text-gray-600 transition-colors duration-300 ${social.color} text-lg md:text-xl`}
                  >
                    <Icon />
                  </a>
                );
              })}
            </div>
          </div>

          {Object.entries(footerSections).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-sm font-semibold text-gray-900 mb-4">{category}</h4>
              <ul className="space-y-3">
                {links.map((link, index) => (
                  <li key={index}>
                    <Link href={link.href} className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-300">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-200 pt-8 mt-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div>
              <h4 className="text-sm font-semibold text-gray-900 mb-2">Get in Touch</h4>
              <div className="space-y-2 text-sm text-gray-600">
                <p>
                  <a href="mailto:ahmedyarr1212@gmail.com" className="hover:text-gray-900 transition-colors">
                    ahmedyarr1212@gmail.com
                  </a>
                </p>
                <p>
                  <a href="tel:+923715335433" className="hover:text-gray-900 transition-colors">
                    +92 371 533 5433
                  </a>
                </p>
              </div>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-gray-900 mb-2">Follow Us</h4>
              <p className="text-sm text-gray-600">
                Connect with us on social media for updates, tips, and insights.
              </p>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-8">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-600">
              <p>{`© ${currentYear}`} AICY. All rights reserved.</p>
              <div className="flex gap-6">
                <Link href="#privacy" className="hover:text-gray-900 transition-colors">
                  Privacy Policy
                </Link>
                <Link href="#terms" className="hover:text-gray-900 transition-colors">
                  Terms of Service
                </Link>
                <Link href="#cookies" className="hover:text-gray-900 transition-colors">
                  Cookies
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
