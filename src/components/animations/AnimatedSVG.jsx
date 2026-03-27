"use client";

import { useGSAPAnimation } from "../../hooks/useGSAPAnimations";
import gsap, { ANIMATION_CONFIG } from "../../lib/animations/gsapConfig";

export default function AnimatedSVG() {
  const containerRef = useGSAPAnimation((container) => {
    // 1. Select the specific elements inside this container
    const crystal = container.querySelector(".crystal-svg");
    const paths = container.querySelectorAll(".crystal-path");

    // 2. Animate the SVG paths drawing themselves in when scrolled into view
    gsap.fromTo(
      paths,
      {
        strokeDasharray: 400,
        strokeDashoffset: 400,
      },
      {
        strokeDashoffset: 0,
        duration: ANIMATION_CONFIG.duration.slow,
        ease: ANIMATION_CONFIG.ease.smooth,
        stagger: 0.15, // Animates one line after the other
        scrollTrigger: {
          trigger: container,
          start: "top 80%", // Starts when the top of container hits 80% down the screen
        },
      },
    );

    // 3. Make the entire crystal float continuously up and down
    gsap.to(crystal, {
      y: -25,
      duration: 2.5,
      ease: "sine.inOut",
      yoyo: true,
      repeat: -1,
    });
  });

  // The ref is attached to the parent container
  return (
    <div ref={containerRef} className="flex justify-center items-center p-12">
      <svg
        className="crystal-svg w-64 h-64 drop-shadow-[0_0_15px_rgba(242,147,44,0.3)]"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Outer Hexagon */}
        <path
          className="crystal-path"
          d="M50 5 L90 28 L90 72 L50 95 L10 72 L10 28 Z"
          stroke="#f2932c"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        {/* Inner Geometric Lines */}
        <path
          className="crystal-path"
          d="M50 5 L50 95"
          stroke="#f2932c"
          strokeWidth="1.5"
        />
        <path
          className="crystal-path"
          d="M10 28 L90 72"
          stroke="#10b981"
          strokeWidth="1.5"
        />
        <path
          className="crystal-path"
          d="M10 72 L90 28"
          stroke="#10b981"
          strokeWidth="1.5"
        />
        <path
          className="crystal-path"
          d="M50 50 L90 28"
          stroke="#f2932c"
          strokeWidth="1.5"
        />
        <path
          className="crystal-path"
          d="M50 50 L10 28"
          stroke="#f2932c"
          strokeWidth="1.5"
        />
      </svg>
    </div>
  );
}
