
'use client';

import React, { useState, useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  useEffect(() => {
    // Header animation
    gsap.fromTo('.contact-header', { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1, ease: 'power3.out' });

    // Form animation
    gsap.fromTo('.contact-form', { opacity: 0, scale: 0.95, y: 40 }, { opacity: 1, scale: 1, y: 0, duration: 0.8, delay: 0.3, ease: 'power2.out' });

    // Contact cards animation
    const cards = document.querySelectorAll('.contact-card');
    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        { opacity: 0, x: -60, rotateY: -30 },
        {
          opacity: 1,
          x: 0,
          rotateY: 0,
          scrollTrigger: {
            trigger: card,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
          duration: 0.8,
          ease: 'back.out(1)',
          delay: index * 0.1,
        }
      );
    });

    return () => ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitStatus(null), 3000);
    } catch (error) {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus(null), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-gradient-to-b from-amber-50 via-orange-50 to-rose-50 text-slate-900">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 pt-20">
        <div className="absolute top-0 left-5 w-96 h-96 bg-gradient-to-br from-orange-200 to-amber-300 rounded-full mix-blend-multiply filter blur-3xl opacity-40"></div>
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-gradient-to-br from-rose-200 to-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-35"></div>

        <div className="contact-header relative z-10 text-center max-w-4xl">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-rose-600">
            Get In Touch
          </h1>
          <p className="text-xl md:text-2xl text-slate-700 max-w-2xl mx-auto leading-relaxed">
            Have a question or ready to start a project? We'd love to hear from you. Let's make something amazing together.
          </p>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="relative py-32 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {[
              {
                icon: '📧',
                title: 'Email',
                value: 'hello@aicy.com',
                color: 'from-orange-100 to-amber-100',
              },
              {
                icon: '📱',
                title: 'Phone',
                value: '+1 (555) 123-4567',
                color: 'from-rose-100 to-pink-100',
              },
              {
                icon: '📍',
                title: 'Address',
                value: 'San Francisco, CA 94105',
                color: 'from-yellow-100 to-orange-100',
              },
            ].map((info, index) => (
              <div
                key={index}
                className="contact-card p-8 bg-gradient-to-br rounded-2xl border border-white/50 backdrop-blur-sm hover:border-orange-300 transition-all duration-300"
                style={{ backgroundImage: `linear-gradient(135deg, var(--tw-gradient-stops))` }}
              >
                <div className={`bg-gradient-to-br ${info.color} rounded-2xl p-8`}>
                  <div className="text-5xl mb-4">{info.icon}</div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-2">{info.title}</h3>
                  <p className="text-slate-700 text-lg">{info.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="relative py-32 px-4 bg-gradient-to-r from-orange-100 via-rose-100 to-pink-100">
        <div className="max-w-3xl mx-auto">
          <form onSubmit={handleSubmit} className="contact-form bg-white rounded-2xl p-12 border-2 border-orange-200 shadow-xl">
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <label htmlFor="name" className="block text-slate-700 font-semibold mb-3">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-6 py-3 bg-orange-50 border-2 border-orange-200 rounded-xl focus:border-orange-500 focus:outline-none text-slate-800 transition-all duration-300"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-slate-700 font-semibold mb-3">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-6 py-3 bg-orange-50 border-2 border-orange-200 rounded-xl focus:border-orange-500 focus:outline-none text-slate-800 transition-all duration-300"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div className="mb-8">
              <label htmlFor="message" className="block text-slate-700 font-semibold mb-3">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="6"
                className="w-full px-6 py-3 bg-orange-50 border-2 border-orange-200 rounded-xl focus:border-orange-500 focus:outline-none text-slate-800 transition-all duration-300"
                placeholder="Tell us about your project..."
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-8 py-4 bg-gradient-to-r from-orange-500 via-rose-500 to-pink-500 text-white font-bold rounded-full text-lg transition-all duration-300 hover:shadow-xl hover:scale-105 hover:-translate-y-1 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>

            {submitStatus === 'success' && (
              <div className="mt-6 p-4 bg-green-100 border-2 border-green-400 text-green-700 rounded-lg text-center font-semibold">
                ✓ Message sent successfully! We'll get back to you soon.
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="mt-6 p-4 bg-red-100 border-2 border-red-400 text-red-700 rounded-lg text-center font-semibold">
                ✗ Error sending message. Please try again.
              </div>
            )}
          </form>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
