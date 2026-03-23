
'use client';

import Link from 'next/link';
import { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

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
            toggleActions: 'play none none reverse',
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
            toggleActions: 'play none none reverse',
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
    <div className="bg-gradient-to-b from-amber-50 via-orange-50 to-rose-50 text-slate-900 font-sans overflow-x-hidden">
      {/* ===== HERO SECTION ===== */}
      <section className="hero-section relative min-h-screen flex items-center justify-center overflow-hidden px-4 pt-20">
        {/* Parallax background elements */}
        <div className="hero-bg-1 absolute top-0 left-5 w-96 h-96 bg-gradient-to-br from-orange-200 to-amber-300 rounded-full mix-blend-multiply filter blur-3xl opacity-40"></div>
        <div className="hero-bg-2 absolute top-1/3 right-0 w-96 h-96 bg-gradient-to-br from-rose-200 to-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-35"></div>
        <div className="hero-bg-3 absolute -bottom-20 left-1/2 w-96 h-96 bg-gradient-to-br from-yellow-200 to-orange-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>

        {/* Content */}
        <div className="hero-content relative z-10 text-center max-w-5xl">
          <h1 className="text-6xl md:text-8xl font-extrabold mb-8 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-orange-600 via-rose-500 to-pink-600">
            Craft Stunning Digital Experiences
          </h1>
          <p className="text-xl md:text-2xl mb-12 text-slate-700 max-w-3xl mx-auto leading-relaxed font-light">
            Transform your vision into beautiful, responsive, and high-performance web solutions that captivate users and drive results.
          </p>
          <div className="hero-buttons flex justify-center gap-6 flex-wrap">
            <Link
              href="/projects"
              className="px-10 py-4 bg-gradient-to-r from-orange-500 via-rose-500 to-pink-500 text-white font-semibold rounded-full text-lg transition-all duration-300 hover:shadow-2xl hover:scale-105 hover:-translate-y-1"
            >
              Explore Work
            </Link>
            <Link
              href="/about"
              className="px-10 py-4 border-2 border-orange-400 text-orange-600 hover:bg-orange-50 font-semibold rounded-full text-lg transition-all duration-300"
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* ===== FEATURES SECTION ===== */}
      <section className="relative py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-rose-600">
              Why Choose Us
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              We blend creativity with technology to deliver solutions that exceed expectations
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: '✨',
                title: 'Beautiful Design',
                description: 'Stunning interfaces crafted to captivate and engage your users.',
                color: 'from-orange-100 to-amber-100',
              },
              {
                icon: '⚡',
                title: 'Lightning Fast',
                description: 'Optimized performance for the fastest load times possible.',
                color: 'from-amber-100 to-yellow-100',
              },
              {
                icon: '📱',
                title: 'Fully Responsive',
                description: 'Perfect experience across all devices and screen sizes.',
                color: 'from-rose-100 to-pink-100',
              },
              {
                icon: '🔒',
                title: 'Secure & Safe',
                description: 'Enterprise-grade security protecting your data always.',
                color: 'from-pink-100 to-rose-100',
              },
              {
                icon: '🚀',
                title: 'Scalable Growth',
                description: 'Solutions that grow with your business needs effortlessly.',
                color: 'from-yellow-100 to-orange-100',
              },
              {
                icon: '🤝',
                title: 'Expert Support',
                description: 'Dedicated team ready to help you succeed always.',
                color: 'from-orange-100 to-rose-100',
              },
            ].map((feature, index) => (
              <div
                key={index}
                className={`feature-card p-8 bg-gradient-to-br ${feature.color} rounded-2xl border border-white/50 backdrop-blur-sm hover:border-orange-300 transition-all duration-300 group cursor-pointer h-full`}
              >
                <div className="feature-icon text-6xl mb-6 transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3 text-slate-800">{feature.title}</h3>
                <p className="text-slate-600 text-base leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== STATS SECTION ===== */}
      <section className="relative py-32 px-4 bg-gradient-to-r from-orange-100 via-rose-100 to-pink-100">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-20 text-slate-800">
            Our Track Record
          </h2>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: 250, label: 'Projects Delivered', suffix: '+' },
              { number: 98, label: 'Client Satisfaction', suffix: '%' },
              { number: 75, label: 'Team Members', suffix: '+' },
              { number: 15, label: 'Years Experience', suffix: '+' },
            ].map((stat, index) => (
              <div key={index} className="stat-item text-center">
                <div className="text-6xl md:text-7xl font-black mb-4 text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-rose-600">
                  <span className="stat-number" data-target={stat.number}>
                    0
                  </span>
                  {stat.suffix}
                </div>
                <p className="text-slate-700 text-lg font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PROJECTS SECTION ===== */}
      <section className="relative py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-rose-600">
              Featured Projects
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Explore some of our most impactful work
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {[
              {
                title: 'E-Commerce Revolution',
                description: 'Next-gen shopping platform with 40% conversion increase.',
                tags: ['React', 'Next.js', 'Stripe'],
                color: 'from-orange-300 to-amber-400',
              },
              {
                title: 'Analytics Dashboard',
                description: 'Real-time insights platform handling 1M+ daily events.',
                tags: ['Next.js', 'D3.js', 'PostgreSQL'],
                color: 'from-rose-300 to-pink-400',
              },
              {
                title: 'Mobile-First App',
                description: '2M+ downloads across iOS and Android with 4.8★ rating.',
                tags: ['React Native', 'Firebase', 'GraphQL'],
                color: 'from-yellow-300 to-orange-400',
              },
              {
                title: 'Content Hub',
                description: 'Headless CMS for 500+ content creators managing millions.',
                tags: ['Headless CMS', 'API-First', 'CDN'],
                color: 'from-pink-300 to-rose-400',
              },
            ].map((project, index) => (
              <div
                key={index}
                className="project-card group relative overflow-hidden rounded-2xl bg-white p-10 border-2 border-orange-100 hover:border-orange-300 transition-all duration-300 shadow-sm hover:shadow-xl"
              >
                <div className={`project-glow absolute top-0 right-0 w-48 h-48 bg-gradient-to-br ${project.color} opacity-10 rounded-full -mr-24 -mt-24 group-hover:scale-125 transition-transform duration-300`}></div>
                <div className="relative z-10">
                  <h3 className="text-3xl font-bold mb-3 text-slate-800">{project.title}</h3>
                  <p className="text-slate-600 mb-6 text-lg">{project.description}</p>
                  <div className="flex flex-wrap gap-3 mb-8">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-4 py-2 bg-gradient-to-r from-orange-100 to-rose-100 text-orange-700 rounded-full text-sm font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link
                    href="#"
                    className="inline-flex items-center text-orange-600 hover:text-rose-600 font-semibold transition-colors duration-300 group/link"
                  >
                    View Project
                    <svg
                      className="w-5 h-5 ml-2 group-hover/link:translate-x-2 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS SECTION ===== */}
      <section className="relative py-32 px-4 bg-gradient-to-r from-orange-50 via-rose-50 to-pink-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-20 text-slate-800">
            What Clients Say
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
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
                className="testimonial-card bg-white rounded-2xl p-8 border border-orange-100 shadow-sm"
              >
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">★</span>
                  ))}
                </div>
                <p className="text-slate-700 text-lg mb-6 italic leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div>
                  <p className="font-bold text-slate-800">{testimonial.author}</p>
                  <p className="text-orange-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section className="cta-section relative py-32 px-4 overflow-hidden">
        {/* Background glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-orange-200 via-rose-200 to-pink-200 opacity-30 blur-3xl"></div>

        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <div className="bg-gradient-to-br from-white to-orange-50 rounded-3xl p-12 md:p-16 border-2 border-orange-200 shadow-xl">
            <h2 className="text-5xl md:text-6xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-rose-600">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl text-slate-700 mb-12 max-w-2xl mx-auto leading-relaxed">
              Let's collaborate to create something extraordinary that drives real results for your business.
            </p>
            <Link
              href="/contact"
              className="cta-button inline-block px-12 py-5 bg-gradient-to-r from-orange-500 via-rose-500 to-pink-500 text-white font-bold text-xl rounded-full transition-all duration-300 hover:shadow-2xl hover:scale-105 hover:-translate-y-2 shadow-lg"
            >
              Get Started Today
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
