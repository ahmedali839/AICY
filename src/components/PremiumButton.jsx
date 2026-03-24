'use client';

import Link from 'next/link';
import { useEffect } from 'react';
import gsap from 'gsap';
import '../styles/PremiumButton.css';

export default function PremiumButton({ href, children }) {
  useEffect(() => {
    // Animate the border gradient
    gsap.to('.premium-button-border', {
      backgroundPosition: '200% 0',
      duration: 3,
      repeat: -1,
      ease: 'none',
    });

    // Hover animation for inner glow
    const button = document.querySelector('.premium-button');
    if (button) {
      button.addEventListener('mouseenter', () => {
        gsap.to('.premium-button-inner', {
          boxShadow: '0 0 30px rgba(59, 130, 246, 0.6), inset 0 0 20px rgba(59, 130, 246, 0.2)',
          duration: 0.5,
        });

        gsap.to('.premium-button-text', {
          letterSpacing: '2px',
          duration: 0.5,
        });
      });

      button.addEventListener('mouseleave', () => {
        gsap.to('.premium-button-inner', {
          boxShadow: '0 0 20px rgba(59, 130, 246, 0.4), inset 0 0 10px rgba(59, 130, 246, 0.1)',
          duration: 0.5,
        });

        gsap.to('.premium-button-text', {
          letterSpacing: '0px',
          duration: 0.5,
        });
      });
    }
  }, []);

  return (
    <Link href={href} className="premium-button">
      <div className="premium-button-border"></div>
      <div className="premium-button-inner">
        <span className="premium-button-text">{children}</span>
      </div>
    </Link>
  );
}
