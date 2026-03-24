'use client';

import { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import '../styles/ScrollQuote.css';

gsap.registerPlugin(ScrollTrigger);

export default function ScrollQuote() {
  useEffect(() => {
    // Scroll-based opacity animation for quote
    gsap.fromTo(
      '.quote-container',
      {
        opacity: 0.1,
      },
      {
        opacity: 1,
        scrollTrigger: {
          trigger: '.scroll-quote-section',
          start: 'top 80%',
          end: 'top 20%',
          scrub: 1.5,
          markers: false,
        },
        duration: 1,
        ease: 'power2.inOut',
      }
    );

    // Subtle text animation
    gsap.fromTo(
      '.quote-text',
      {
        y: 30,
        opacity: 0.1,
      },
      {
        y: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: '.scroll-quote-section',
          start: 'top 75%',
          end: 'top 25%',
          scrub: 1.5,
          markers: false,
        },
        duration: 1.2,
        ease: 'power3.out',
      }
    );

    // Author animation (slightly delayed)
    gsap.fromTo(
      '.quote-author',
      {
        opacity: 0,
      },
      {
        opacity: 1,
        scrollTrigger: {
          trigger: '.scroll-quote-section',
          start: 'top 60%',
          end: 'top 10%',
          scrub: 1.5,
          markers: false,
        },
        duration: 1.5,
        ease: 'power2.inOut',
      }
    );

    return () => {
      // Cleanup ScrollTrigger instances
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section className="scroll-quote-section">
      <div className="quote-container">
        <div className="quote-background">
          <svg
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            className="quote-wave"
          >
            <path d="M0,50 Q25,25 50,50 T100,50 L100,100 L0,100 Z" fill="currentColor" />
          </svg>
        </div>

        <div className="quote-content">
          <div className="quote-mark quote-mark-top">"</div>
          
          <h2 className="quote-text">
            The only way to do great work is to love what you do. Every line of code you write today is a step towards your dream tomorrow.
          </h2>

          <div className="quote-mark quote-mark-bottom">"</div>

          <p className="quote-author">— Steve Jobs</p>
        </div>

        <div className="scroll-indicator">
          <p>Scroll to reveal</p>
          <svg className="scroll-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </div>
      </div>
    </section>
  );
}
