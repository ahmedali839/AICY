import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register plugins globally to avoid doing it in every component
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// Centralized configuration for consistency across the portfolio
export const ANIMATION_CONFIG = {
  duration: {
    fast: 0.3,
    normal: 0.6,
    slow: 1.5,
  },
  ease: {
    smooth: "power3.out",
    bounce: "back.out(1.7)",
    linear: "none",
  }
};

export default gsap;