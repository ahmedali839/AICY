'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { FaYoutube, FaTwitch, FaInstagram, FaTwitter, FaDiscord, FaSpotify } from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

export default function AnimatedBanner() {
  const scrollingTextRef = useRef(null);
  const bannerRef = useRef(null);

  useEffect(() => {
    if (!scrollingTextRef.current) return;

    // Clone the text for seamless looping
    const text = scrollingTextRef.current;
    const clone = text.cloneNode(true);
    scrollingTextRef.current.parentElement.appendChild(clone);

    // Animate both text elements for seamless loop - smooth right to left
    gsap.to([text, clone], {
      x: -text.offsetWidth,
      duration: 25,
      ease: 'none',
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize((x) => parseFloat(x) % text.offsetWidth),
      },
    });

    // Pause animation on hover
    const container = scrollingTextRef.current.parentElement;
    const handleMouseEnter = () => {
      gsap.to([text, clone], { paused: true });
    };

    const handleMouseLeave = () => {
      gsap.to([text, clone], { paused: false });
    };

    container.addEventListener('mouseenter', handleMouseEnter);
    container.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      container.removeEventListener('mouseenter', handleMouseEnter);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  // Social media links
  const socialLinks = [
    { icon: FaYoutube, color: 'hover:text-red-500' },
    { icon: FaTwitch, color: 'hover:text-purple-500' },
    { icon: FaInstagram, color: 'hover:text-pink-500' },
    { icon: FaTwitter, color: 'hover:text-blue-500' },
    { icon: FaDiscord, color: 'hover:text-indigo-500' },
    { icon: FaSpotify, color: 'hover:text-green-500' },
  ];

  return (
    <section ref={bannerRef} className="relative w-full h-screen overflow-hidden">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(15,23,42,0.7) 0%, rgba(88,28,135,0.5) 50%, rgba(25,25,112,0.6) 100%),
                           url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 600"><defs><linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:%231e3a8a;stop-opacity:0.3" /><stop offset="100%" style="stop-color:%23581c87;stop-opacity:0.2" /></linearGradient></linearGradient></defs><rect width="1200" height="600" fill="%23001a33"/><rect width="1200" height="600" fill="url(%23grad)"/></svg>')`,
          backgroundPosition: 'center',
        }}
      >
        {/* Animated glow circles */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute -bottom-10 left-1/3 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        
        {/* Premium Glass Morphism Card */}
        <div className="relative w-full max-w-4xl">
          {/* Animated Glass Card */}
          <div className="relative backdrop-blur-xl bg-black/40 border border-white/20 rounded-3xl p-8 sm:p-12 lg:p-16 shadow-2xl">
            {/* Gradient border glow effect */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            {/* Inner content */}
            <div className="relative z-20">
              
              {/* Main heading */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-center mb-4 sm:mb-8 leading-tight">
                <span className="text-white">Join the</span>
                <br />
                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent drop-shadow-lg">
                  Chill Crew
                </span>
              </h1>

              {/* Animated scrolling text inside image */}
              <div className="relative my-8 sm:my-12 lg:my-16 overflow-hidden bg-black/50 backdrop-blur-md border border-purple-500/30 rounded-2xl py-4 sm:py-6">
                <div className="flex whitespace-nowrap overflow-hidden">
                  <div
                    ref={scrollingTextRef}
                    className="flex items-center gap-6 sm:gap-8 text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold"
                  >
                    <span className="text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text">
                      🎧 Smooth Animations
                    </span>
                    <span className="text-purple-400">•</span>
                    <span className="text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text">
                      🚀 Premium Experience
                    </span>
                    <span className="text-blue-400">•</span>
                    <span className="text-transparent bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text">
                      ✨ Infinite Scrolling
                    </span>
                    <span className="text-purple-400">•</span>
                  </div>
                </div>

                {/* Fade gradient overlays */}
                <div className="absolute left-0 top-0 w-24 sm:w-32 lg:w-48 h-full bg-gradient-to-r from-black/100 to-transparent pointer-events-none z-30"></div>
                <div className="absolute right-0 top-0 w-24 sm:w-32 lg:w-48 h-full bg-gradient-to-l from-black/100 to-transparent pointer-events-none z-30"></div>
              </div>

              {/* Social media icons */}
              <div className="flex justify-center items-center gap-4 sm:gap-6 mt-8 sm:mt-12">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href="#"
                      className={`p-3 sm:p-4 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/40 transition-all duration-300 transform hover:scale-110 ${social.color}`}
                    >
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                    </a>
                  );
                })}
              </div>

              {/* Call to action buttons */}
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mt-10 sm:mt-14">
                <button className="relative px-8 sm:px-10 py-3 sm:py-4 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 text-white font-bold rounded-full text-sm sm:text-base lg:text-lg hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105 overflow-hidden group">
                  <span className="relative z-10">Join Now</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
                <button className="px-8 sm:px-10 py-3 sm:py-4 border-2 border-cyan-400 text-cyan-400 font-bold rounded-full text-sm sm:text-base lg:text-lg hover:bg-cyan-400/10 hover:shadow-lg hover:shadow-cyan-400/30 transition-all duration-300 transform hover:-translate-y-1">
                  Explore More
                </button>
              </div>
            </div>
          </div>

          {/* Bottom accent line */}
          <div className="mt-6 sm:mt-8 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
        </div>
      </div>

      {/* Animated background shapes */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-purple-600/30 to-transparent rounded-full blur-3xl opacity-50 animate-pulse"></div>
      <div className="absolute top-1/2 -left-48 w-96 h-96 bg-gradient-to-br from-blue-600/20 to-transparent rounded-full blur-3xl opacity-30"></div>
    </section>
  );
}
