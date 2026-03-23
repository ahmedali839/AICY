'use client';

import React, { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const teamMembers = [
  {
    name: "John Doe",
    role: "CEO & Founder",
    icon: "👨‍💼",
    bio: "Visionary leader with 15+ years experience",
  },
  {
    name: "Jane Smith",
    role: "Lead Designer",
    icon: "🎨",
    bio: "Creative mind behind our stunning designs",
  },
  {
    name: "Sam Wilson",
    role: "Lead Developer",
    icon: "👨‍💻",
    bio: "Technical expert powering our solutions",
  },
];

const AboutPage = () => {
  useEffect(() => {
    // Header animation
    gsap.fromTo('.about-header', { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1, ease: 'power3.out' });

    // Feature cards animation
    const cards = document.querySelectorAll('.feature-item');
    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        { opacity: 0, x: index % 2 === 0 ? -80 : 80, rotateY: -30 },
        {
          opacity: 1,
          x: 0,
          rotateY: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: card,
            start: 'top 80%',
            end: 'top 50%',
            scrub: 1,
          },
          ease: 'power2.out',
        }
      );
    });

    // Team members animation
    const teamCards = document.querySelectorAll('.team-card');
    teamCards.forEach((card, index) => {
      gsap.fromTo(
        card,
        { opacity: 0, scale: 0.7, y: 60 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
          duration: 0.8,
          ease: 'back.out(1.5)',
          delay: index * 0.15,
        }
      );
    });

    return () => ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  }, []);

  return (
    <div className="bg-gradient-to-b from-amber-50 via-orange-50 to-rose-50 text-slate-900">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 pt-20">
        <div className="absolute top-0 left-5 w-96 h-96 bg-gradient-to-br from-orange-200 to-amber-300 rounded-full mix-blend-multiply filter blur-3xl opacity-40"></div>
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-gradient-to-br from-rose-200 to-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-35"></div>

        <div className="about-header relative z-10 text-center max-w-4xl">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-rose-600">
            About Our Company
          </h1>
          <p className="text-xl md:text-2xl text-slate-700 max-w-2xl mx-auto leading-relaxed">
            We're a passionate team dedicated to creating exceptional digital experiences that transform businesses
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section className="relative py-32 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-20 bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-rose-600">
            Our Values
          </h2>

          <div className="space-y-8">
            {[
              {
                title: 'Innovation',
                description: 'We stay ahead of the curve, constantly exploring new technologies and approaches.',
                icon: '💡',
              },
              {
                title: 'Quality',
                description: 'Excellence is not an option—it\'s our standard in every project we undertake.',
                icon: '✨',
              },
              {
                title: 'Collaboration',
                description: 'We believe the best solutions come from working closely with our clients.',
                icon: '🤝',
              },
            ].map((feature, index) => (
              <div key={index} className="feature-item p-8 bg-gradient-to-br from-orange-100 to-rose-100 rounded-2xl border border-white/50 backdrop-blur-sm hover:border-orange-300 transition-all duration-300 flex gap-6 items-start">
                <div className="text-5xl flex-shrink-0">{feature.icon}</div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-3">{feature.title}</h3>
                  <p className="text-slate-700 text-lg">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="relative py-32 px-4 bg-gradient-to-r from-orange-100 via-rose-100 to-pink-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-20 text-slate-800">
            Meet Our Team
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="team-card bg-white rounded-2xl p-8 border-2 border-orange-100 hover:border-orange-300 shadow-sm hover:shadow-xl transition-all duration-300 text-center"
              >
                <div className="text-8xl mb-4">{member.icon}</div>
                <h3 className="text-2xl font-bold text-slate-800 mb-2">{member.name}</h3>
                <p className="text-orange-600 font-semibold mb-4">{member.role}</p>
                <p className="text-slate-600">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-32 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-16 bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-rose-600">
            Our Journey
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { number: '10+', label: 'Years Experience' },
              { number: '250+', label: 'Projects Completed' },
              { number: '100+', label: 'Happy Clients' },
            ].map((stat, index) => (
              <div key={index} className="p-8 bg-gradient-to-br from-orange-100 to-amber-100 rounded-2xl border border-white/50">
                <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-rose-600">
                  {stat.number}
                </div>
                <p className="text-slate-700 font-semibold mt-3">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
