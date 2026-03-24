
'use client';

import Link from 'next/link';
import { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import ScrollQuote from '../components/ScrollQuote';
import PremiumButton from '../components/PremiumButton';
import {
  FaSparkles,
  FaBolt,
  FaMobileAlt,
  FaLock,
  FaRocket,
  FaUsers,
  FaArrowDown,
  FaStar,
  FaChartLine,
  FaCode,
} from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  useEffect(() => {
    // ===== HERO SECTION =====
    // Hero background parallax
    gsap.to('.hero-bg-1', {
      scrollTrigger: {
        trigger: '.hero-section',
        start: 'top top',
        end: 'bottom top',
        scrub: 1,
      },
      y: 200,
      ease: 'none',
    });

    gsap.to('.hero-bg-2', {
      scrollTrigger: {
        trigger: '.hero-section',
        start: 'top top',
        end: 'bottom top',
        scrub: 1,
      },
      y: -150,
      ease: 'none',
    });

    gsap.to('.hero-bg-3', {
      scrollTrigger: {
        trigger: '.hero-section',
        start: 'top top',
        end: 'bottom top',
        scrub: 1,
      },
      y: 100,
      ease: 'none',
    });

    // Hero content
    gsap.fromTo(
      '.hero-content h1',
      { opacity: 0, y: 60 },
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
    );

    gsap.fromTo(
      '.hero-content p',
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 1, delay: 0.2, ease: 'power3.out' }
    );

    gsap.fromTo(
      '.hero-buttons > *',
      { opacity: 0, scale: 0.9 },
      { 
        opacity: 1, 
        scale: 1, 
        duration: 0.8, 
        delay: 0.4, 
        stagger: 0.15, 
        ease: 'back.out(1.5)' 
      }
    );

    // ===== FEATURES SECTION =====
    const features = document.querySelectorAll('.feature-card');
    features.forEach((feature, index) => {
      gsap.fromTo(
        feature,
        { opacity: 0, y: 80, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          scrollTrigger: {
            trigger: feature,
            start: 'top 85%',
            end: 'top 50%',
            scrub: 1,
          },
          ease: 'power2.out',
        }
      );

      // Icon rotation based on scroll
      gsap.fromTo(
        feature.querySelector('.feature-icon'),
        { rotation: -45, scale: 0.5 },
        {
          rotation: 0,
          scale: 1,
          scrollTrigger: {
            trigger: feature,
            start: 'top 85%',
            end: 'top 50%',
            scrub: 1,
          },
          ease: 'back.out(1)',
        }
      );

      // Background gradient animation
      gsap.to(feature, {
        scrollTrigger: {
          trigger: feature,
          start: 'top 60%',
          end: 'bottom 40%',
          scrub: 1,
        },
        '--glow-opacity': 0.3,
        ease: 'none',
      });
    });

    // ===== STATS SECTION =====
    const stats = document.querySelectorAll('.stat-item');
    stats.forEach((stat, index) => {
      const number = stat.querySelector('.stat-number');
      const target = parseInt(number.getAttribute('data-target'));

      gsap.fromTo(
        number,
        { textContent: 0 },
        {
          textContent: target,
          duration: 2.5,
          scrollTrigger: {
            trigger: stat,
            start: 'top 75%',
            toggleActions: 'play none none none',
          },
          snap: { textContent: 1 },
          ease: 'power1.inOut',
          onUpdate: function () {
            number.textContent = Math.ceil(number.textContent);
          },
        }
      );

      // Stat card scale animation
      gsap.fromTo(
        stat,
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          scrollTrigger: {
            trigger: stat,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
          duration: 0.6,
          ease: 'back.out(1.5)',
          delay: index * 0.1,
        }
      );
    });

    // ===== PROJECTS SECTION =====
    const projects = document.querySelectorAll('.project-card');
    projects.forEach((project, index) => {
      // Card entrance
      gsap.fromTo(
        project,
        { 
          opacity: 0, 
          x: index % 2 === 0 ? -100 : 100,
          rotationY: index % 2 === 0 ? -15 : 15,
        },
        {
          opacity: 1,
          x: 0,
          rotationY: 0,
          duration: 1,
          scrollTrigger: {
            trigger: project,
            start: 'top 75%',
            end: 'top 25%',
            scrub: 1,
          },
          ease: 'power2.out',
        }
      );

      // Glow effect on scroll
      const glow = project.querySelector('.project-glow');
      gsap.to(glow, {
        scrollTrigger: {
          trigger: project,
          start: 'top 75%',
          end: 'bottom 25%',
          scrub: 1,
        },
        opacity: 0.4,
        scale: 1.2,
        ease: 'none',
      });
    });

    // ===== TESTIMONIALS SECTION =====
    const testimonials = document.querySelectorAll('.testimonial-card');
    testimonials.forEach((card, index) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          scrollTrigger: {
            trigger: card,
            start: 'top 80%',
            end: 'top 50%',
            scrub: 1,
          },
          duration: 0.8,
          ease: 'power2.out',
          delay: index * 0.1,
        }
      );
    });

    // ===== CTA SECTION =====
    gsap.fromTo(
      '.cta-section',
      { opacity: 0, scale: 0.85, y: 50 },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        scrollTrigger: {
          trigger: '.cta-section',
          start: 'top 70%',
          end: 'top 30%',
          scrub: 1,
        },
        ease: 'power2.out',
      }
    );

    // CTA button glow
    gsap.to('.cta-button', {
      scrollTrigger: {
        trigger: '.cta-section',
        start: 'top 70%',
        end: 'bottom 30%',
        scrub: 1,
      },
      '--button-glow': 1,
      ease: 'none',
    });

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="bg-gradient-to-b from-gray-50 via-white to-gray-50 text-gray-900 font-sans overflow-x-hidden">
      {/* ===== HERO SECTION ===== */}
      <section className="hero-section relative w-full min-h-[90vh] sm:min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 pb-8 sm:pb-0">
        {/* Parallax background elements - responsive sizing */}
        <div className="hero-bg-1 absolute top-0 left-0 sm:left-5 w-64 h-64 sm:w-96 sm:h-96 bg-gradient-to-br from-blue-200 to-cyan-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 sm:opacity-40"></div>
        <div className="hero-bg-2 absolute top-1/3 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-gradient-to-br from-purple-200 to-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-25 sm:opacity-35"></div>
        <div className="hero-bg-3 absolute -bottom-20 left-1/2 w-64 h-64 sm:w-96 sm:h-96 bg-gradient-to-br from-blue-200 to-cyan-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 sm:opacity-30"></div>

        {/* Content */}
        <div className="hero-content relative z-10 text-center max-w-4xl lg:max-w-5xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 sm:mb-6 lg:mb-8 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
            Craft Stunning Digital Experiences
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-8 sm:mb-12 text-gray-600 max-w-3xl mx-auto leading-relaxed font-light px-2 sm:px-0">
            Transform your vision into beautiful, responsive, and high-performance web solutions that captivate users and drive real results.
          </p>
          <div className="hero-buttons flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 flex-wrap px-2 sm:px-0">
            <PremiumButton href="/projects">
              Explore Work
            </PremiumButton>
            <Link
              href="/about"
              className="px-8 sm:px-10 py-3 sm:py-4 border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold rounded-full text-sm sm:text-base lg:text-lg transition-all duration-300"
            >
              Learn More
            </Link>
          </div>
        </div>

      {/* ===== SCROLL INDICATOR ===== */}
        <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <FaArrowDown className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
        </div>
      </section>

      {/* ===== SCROLL QUOTE SECTION ===== */}
      <ScrollQuote />

      {/* ===== FEATURES SECTION ===== */}
      <section className="relative py-20 lg:py-32 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 lg:mb-20">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 lg:mb-6 text-gray-900">
              Why Choose Us
            </h2>
            <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
              We blend creativity with technology to deliver solutions that exceed expectations
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                Icon: FaSparkles,
                title: 'Beautiful Design',
                description: 'Stunning interfaces crafted to captivate and engage your users.',
              },
              {
                Icon: FaBolt,
                title: 'Lightning Fast',
                description: 'Optimized performance for the fastest load times possible.',
              },
              {
                Icon: FaMobileAlt,
                title: 'Fully Responsive',
                description: 'Perfect experience across all devices and screen sizes.',
              },
              {
                Icon: FaLock,
                title: 'Secure & Safe',
                description: 'Enterprise-grade security protecting your data always.',
              },
              {
                Icon: FaRocket,
                title: 'Scalable Growth',
                description: 'Solutions that grow with your business needs effortlessly.',
              },
              {
                Icon: FaUsers,
                title: 'Expert Support',
                description: 'Dedicated team ready to help you succeed always.',
              },
            ].map((feature, index) => {
              const Icon = feature.Icon;
              return (
                <div
                  key={index}
                  className="feature-card p-6 lg:p-8 bg-white rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300 group h-full"
                >
                  <div className="mb-4 lg:mb-6">
                    <Icon className="w-10 h-10 lg:w-12 lg:h-12 text-blue-600 group-hover:text-cyan-600 transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl lg:text-2xl font-bold mb-2 lg:mb-3 text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm lg:text-base leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== STATS SECTION ===== */}
      <section className="relative py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-center mb-12 sm:mb-16 lg:mb-20 text-gray-900">
            Our Track Record
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {[
              { number: 250, label: 'Projects Delivered', suffix: '+' },
              { number: 98, label: 'Client Satisfaction', suffix: '%' },
              { number: 75, label: 'Team Members', suffix: '+' },
              { number: 15, label: 'Years Experience', suffix: '+' },
            ].map((stat, index) => (
              <div key={index} className="stat-item text-center p-4 sm:p-6 border border-gray-200 rounded-lg bg-white/50 backdrop-blur hover:bg-white transition-all duration-300">
                <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-2 sm:mb-3 lg:mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  <span className="stat-number" data-target={stat.number}>
                    0
                  </span>
                  {stat.suffix}
                </div>
                <p className="text-gray-700 text-xs sm:text-sm md:text-base lg:text-lg font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PROJECTS SECTION ===== */}
      <section className="relative py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              Featured Projects
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-2 sm:px-0">
              Explore some of our most impactful work
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
            {[
              {
                title: 'E-Commerce Revolution',
                description: 'Next-gen shopping platform with 40% conversion increase.',
                tags: ['React', 'Next.js', 'Stripe'],
                icon: FaChartLine,
              },
              {
                title: 'Analytics Dashboard',
                description: 'Real-time insights platform handling 1M+ daily events.',
                tags: ['Next.js', 'D3.js', 'PostgreSQL'],
                icon: FaCode,
              },
              {
                title: 'Mobile-First App',
                description: '2M+ downloads across iOS and Android with 4.8/5 rating.',
                tags: ['React Native', 'Firebase', 'GraphQL'],
                icon: FaMobileAlt,
              },
              {
                title: 'Content Hub',
                description: 'Headless CMS for 500+ content creators managing millions.',
                tags: ['Headless CMS', 'API-First', 'CDN'],
                icon: FaCode,
              },
            ].map((project, index) => {
              const Icon = project.icon;
              return (
                <div
                  key={index}
                  className="project-card group relative overflow-hidden rounded-xl sm:rounded-2xl bg-white p-6 sm:p-8 lg:p-10 border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 sm:w-48 sm:h-48 bg-gradient-to-br from-blue-100 to-purple-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full -mr-16 -mt-16"></div>
                  
                  <div className="relative z-10">
                    <div className="mb-4 sm:mb-6">
                      <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-blue-600 group-hover:text-purple-600 transition-colors duration-300" />
                    </div>
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-2 sm:mb-3 text-gray-900">{project.title}</h3>
                    <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base lg:text-lg leading-relaxed">{project.description}</p>
                    <div className="flex flex-wrap gap-2 sm:gap-3 mb-6 sm:mb-8">
                      {project.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="px-3 sm:px-4 py-1.5 sm:py-2 bg-blue-50 text-blue-700 rounded-full text-xs sm:text-sm font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <Link
                      href="#"
                      className="inline-flex items-center text-blue-600 hover:text-purple-600 font-semibold text-sm sm:text-base transition-colors duration-300 group/link"
                    >
                      View Project
                      <svg
                        className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover/link:translate-x-2 transition-transform duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS SECTION ===== */}
      <section className="relative py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-center mb-12 sm:mb-16 lg:mb-20 text-gray-900">
            What Clients Say
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                quote: 'Transformed our entire digital presence in just 3 months.',
                author: 'Sarah Johnson',
                role: 'CEO, Tech Startup',
              },
              {
                quote: 'Outstanding quality and exceeded all our expectations.',
                author: 'Michael Chen',
                role: 'Product Manager',
              },
              {
                quote: 'Best investment we made for our brand this year.',
                author: 'Emma Williams',
                role: 'Marketing Director',
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="testimonial-card bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-gray-200 hover:border-blue-300 shadow-sm hover:shadow-lg transition-all duration-300"
              >
              <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      className="fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-gray-700 text-sm sm:text-base lg:text-lg mb-6 italic leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div>
                  <p className="font-bold text-gray-900 text-sm sm:text-base">{testimonial.author}</p>
                  <p className="text-blue-600 text-xs sm:text-sm">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section className="cta-section relative py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 opacity-30 blur-3xl"></div>

        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <div className="bg-gradient-to-br from-white to-blue-50 rounded-2xl sm:rounded-3xl p-8 sm:p-12 lg:p-16 border border-blue-200 shadow-lg hover:shadow-xl transition-all duration-300">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 sm:mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              Ready to Start Your Journey?
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-700 mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed px-2 sm:px-0">
              Let's collaborate to create something extraordinary that drives real results for your business.
            </p>
            <Link
              href="/contact"
              className="cta-button inline-block px-8 sm:px-12 py-3 sm:py-5 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white font-bold text-sm sm:text-base lg:text-lg rounded-full transition-all duration-300 hover:shadow-2xl hover:scale-105 hover:-translate-y-2 shadow-lg"
            >
              Get Started Today
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
