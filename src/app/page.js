
'use client';

import Link from 'next/link';
import { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import ScrollQuote from '../components/ScrollQuote';
import AnimatedBanner from '../components/AnimatedBanner';
import PremiumButton from '../components/PremiumButton';
import {
  FaPalette,
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
    <div className="bg-white text-neutral-900 font-sans overflow-x-hidden">
      {/* ===== HERO SECTION ===== */}
      <section className="hero-section relative w-full min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 lg:pt-0">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="hero-bg-1 absolute top-0 left-0 sm:left-5 w-64 h-64 sm:w-96 sm:h-96 bg-gradient-to-br from-blue-200 to-cyan-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 sm:opacity-30"></div>
          <div className="hero-bg-2 absolute top-1/3 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-gradient-to-br from-purple-200 to-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 sm:opacity-25"></div>
          <div className="hero-bg-3 absolute -bottom-20 left-1/2 w-64 h-64 sm:w-96 sm:h-96 bg-gradient-to-br from-blue-200 to-cyan-300 rounded-full mix-blend-multiply filter blur-3xl opacity-15 sm:opacity-20"></div>
        </div>

        {/* Content */}
        <div className="hero-content relative z-10 text-center max-w-5xl lg:max-w-6xl mx-auto">
          <div className="inline-block mb-6 sm:mb-8 px-4 py-2 bg-blue-50 border border-blue-200 rounded-full">
            <p className="text-sm sm:text-base font-semibold text-blue-600">
              ✨ Welcome to Excellence
            </p>
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-6 sm:mb-8 lg:mb-10 leading-[1.1] text-neutral-900">
            Craft Stunning
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Digital Experiences
            </span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-10 sm:mb-14 lg:mb-16 text-neutral-600 max-w-3xl mx-auto leading-relaxed font-light px-2 sm:px-0">
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

      {/* ===== ANIMATED BANNER SECTION ===== */}
      <AnimatedBanner />

      {/* ===== FEATURES SECTION ===== */}
      <section className="relative py-24 lg:py-40 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20 lg:mb-32">
            <p className="text-sm sm:text-base font-semibold text-blue-600 mb-4">OUR SERVICES</p>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 lg:mb-8 text-neutral-900">
              Why Choose Us
            </h2>
            <p className="text-lg lg:text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
              We blend creativity with technology to deliver solutions that exceed expectations and set new industry standards.
            </p>
          </div>

          {/* Feature Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                Icon: FaPalette,
                title: 'Beautiful Design',
                description: 'Stunning interfaces crafted to captivate and engage your users with precision.',
                color: 'from-blue-500 to-cyan-500',
              },
              {
                Icon: FaBolt,
                title: 'Lightning Fast',
                description: 'Optimized performance for the fastest load times and smooth interactions.',
                color: 'from-purple-500 to-pink-500',
              },
              {
                Icon: FaMobileAlt,
                title: 'Fully Responsive',
                description: 'Perfect experience across all devices, screens, and browsers.',
                color: 'from-emerald-500 to-teal-500',
              },
              {
                Icon: FaLock,
                title: 'Secure & Safe',
                description: 'Enterprise-grade security protecting your data and privacy.',
                color: 'from-orange-500 to-red-500',
              },
              {
                Icon: FaRocket,
                title: 'Scalable Growth',
                description: 'Solutions that grow with your business needs effortlessly.',
                color: 'from-indigo-500 to-purple-500',
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
                  className="feature-card group relative p-8 lg:p-10 bg-white rounded-2xl border border-neutral-200 hover:border-neutral-300 hover:shadow-xl transition-all duration-500 h-full overflow-hidden"
                >
                  {/* Gradient background on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl`}></div>

                  {/* Icon container */}
                  <div className={`mb-6 lg:mb-8 w-14 h-14 lg:w-16 lg:h-16 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center transform group-hover:scale-110 transition-all duration-300 shadow-lg`}>
                    <Icon className="w-6 h-6 lg:w-8 lg:h-8 text-white" />
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                    <h3 className="text-xl lg:text-2xl font-bold mb-3 lg:mb-4 text-neutral-900 group-hover:text-blue-600 transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-neutral-600 text-sm lg:text-base leading-relaxed group-hover:text-neutral-700 transition-colors duration-300">
                      {feature.description}
                    </p>
                  </div>

                  {/* Bottom accent */}
                  <div className={`absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r ${feature.color} group-hover:w-full transition-all duration-500`}></div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== STATS SECTION ===== */}
      <section className="relative py-24 lg:py-40 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-neutral-50 via-blue-50/50 to-purple-50/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 lg:mb-32">
            <p className="text-sm sm:text-base font-semibold text-blue-600 mb-4">PROVEN RESULTS</p>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-neutral-900">
              Our Track Record
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {[
              { number: 250, label: 'Projects Delivered', suffix: '+' },
              { number: 98, label: 'Client Satisfaction', suffix: '%' },
              { number: 75, label: 'Team Members', suffix: '+' },
              { number: 15, label: 'Years Experience', suffix: '+' },
            ].map((stat, index) => (
              <div key={index} className="stat-item group relative text-center p-8 sm:p-10 lg:p-12 bg-white border border-neutral-200 rounded-2xl hover:border-blue-300 hover:shadow-xl transition-all duration-500 overflow-hidden">
                {/* Background accent */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/40 to-purple-50/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Content */}
                <div className="relative z-10">
                  <div className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-4 sm:mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
                    <span className="stat-number" data-target={stat.number}>
                      0
                    </span>
                    <span className="text-2xl sm:text-3xl">{stat.suffix}</span>
                  </div>
                  <p className="text-neutral-600 text-sm sm:text-base lg:text-lg font-semibold tracking-wide group-hover:text-neutral-900 transition-colors duration-300">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PROJECTS SECTION ===== */}
      <section className="relative py-24 lg:py-40 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 lg:mb-32">
            <p className="text-sm sm:text-base font-semibold text-blue-600 mb-4">OUR WORK</p>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 lg:mb-8 text-neutral-900">
              Featured Projects
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-neutral-600 max-w-3xl mx-auto px-2 sm:px-0">
              Explore our most impactful work that delivers real results
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
                  className="project-card group relative overflow-hidden rounded-3xl bg-white p-8 sm:p-10 lg:p-12 border border-neutral-200 hover:border-blue-300 hover:shadow-2xl transition-all duration-500"
                >
                  {/* Animated gradient background */}
                  <div className="project-glow absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-purple-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Badge */}
                  <div className="relative z-10 inline-block mb-6 px-4 py-2 bg-blue-50 border border-blue-200 rounded-full">
                    <p className="text-xs sm:text-sm font-semibold text-blue-600">PROJECT #{index + 1}</p>
                  </div>

                  <div className="relative z-10">
                    {/* Icon */}
                    <div className="mb-6 lg:mb-8 w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center transform group-hover:scale-110 transition-all duration-300">
                      <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                    </div>

                    {/* Title & Description */}
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-5 text-neutral-900 group-hover:text-blue-600 transition-colors duration-300">{project.title}</h3>
                    <p className="text-neutral-600 mb-6 sm:mb-8 text-base sm:text-lg leading-relaxed group-hover:text-neutral-700 transition-colors duration-300">{project.description}</p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 sm:gap-3 mb-8 sm:mb-10">
                      {project.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="px-4 sm:px-5 py-2 sm:py-2.5 bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 font-medium rounded-full text-xs sm:text-sm border border-blue-200 group-hover:border-blue-300 transition-all duration-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* CTA Link */}
                    <Link
                      href="#"
                      className="inline-flex items-center text-blue-600 hover:text-purple-600 font-semibold text-base sm:text-lg transition-all duration-300 group/link"
                    >
                      View Project
                      <svg
                        className="w-5 h-5 sm:w-6 sm:h-6 ml-2 group-hover/link:translate-x-2 group-hover/link:text-purple-600 transition-all duration-300"
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
      <section className="relative py-24 lg:py-40 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 lg:mb-32">
            <p className="text-sm sm:text-base font-semibold text-blue-600 mb-4">TESTIMONIALS</p>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-neutral-900">
              What Clients Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                quote: 'Transformed our entire digital presence in just 3 months.',
                author: 'Sarah Johnson',
                role: 'CEO, Tech Startup',
                avatar: '🚀',
              },
              {
                quote: 'Outstanding quality and exceeded all our expectations.',
                author: 'Michael Chen',
                role: 'Product Manager',
                avatar: '💎',
              },
              {
                quote: 'Best investment we made for our brand this year.',
                author: 'Emma Williams',
                role: 'Marketing Director',
                avatar: '⭐',
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="testimonial-card group relative bg-white rounded-3xl p-8 sm:p-10 border border-neutral-200 hover:border-blue-300 hover:shadow-2xl transition-all duration-500 overflow-hidden"
              >
                {/* Background accent */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/40 via-transparent to-purple-50/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Stars */}
                  <div className="flex gap-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <FaStar
                        key={i}
                        className="w-4 h-4 sm:w-5 sm:h-5 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-neutral-700 text-base sm:text-lg mb-8 italic leading-relaxed font-light group-hover:text-neutral-900 transition-colors duration-300">
                    "{testimonial.quote}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-4 pt-6 border-t border-neutral-200">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center text-xl sm:text-2xl">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <p className="font-bold text-neutral-900 text-sm sm:text-base">{testimonial.author}</p>
                      <p className="text-blue-600 text-xs sm:text-sm font-medium">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section className="cta-section relative py-32 lg:py-48 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-neutral-50 via-blue-50/50 to-purple-50/50">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="max-w-5xl mx-auto relative z-10 text-center">
          <div className="group relative bg-white rounded-3xl sm:rounded-4xl lg:rounded-5xl p-10 sm:p-16 lg:p-20 border border-neutral-200 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
            {/* Gradient background on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-transparent to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            {/* Content */}
            <div className="relative z-10">
              <p className="text-sm sm:text-base font-semibold text-blue-600 mb-6">READY TO ELEVATE?</p>
              
              <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-8 sm:mb-10 lg:mb-12 leading-[1.1] text-neutral-900 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                Ready to Transform Your Vision Into Reality?
              </h2>

              <p className="text-lg sm:text-xl lg:text-2xl text-neutral-600 mb-10 sm:mb-14 lg:mb-16 max-w-3xl mx-auto leading-relaxed font-light group-hover:text-neutral-700 transition-colors duration-300">
                Let's collaborate to create something extraordinary that drives real results and sets new industry standards.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
                <Link
                  href="/contact"
                  className="cta-button relative px-10 sm:px-12 lg:px-14 py-4 sm:py-5 lg:py-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white font-bold text-base sm:text-lg lg:text-xl rounded-full inline-block hover:shadow-2xl hover:shadow-blue-600/50 transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 overflow-hidden group/btn"
                >
                  <span className="relative z-10">Start Your Project</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-blue-600 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                </Link>

                <Link
                  href="/about"
                  className="relative px-10 sm:px-12 lg:px-14 py-4 sm:py-5 lg:py-6 border-2 border-blue-600 text-blue-600 font-bold text-base sm:text-lg lg:text-xl rounded-full hover:text-white hover:bg-blue-600 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-600/30"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
