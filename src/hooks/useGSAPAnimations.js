"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "../lib/animations/gsapConfig";

export const useGSAPAnimation = (animationFn, dependencies = []) => {
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    if (!containerRef.current) return;

    // gsap.context records all animations created inside this function
    const ctx = gsap.context(() => {
      animationFn(containerRef.current);
    }, containerRef);

    // This return function is the magic cleanup that prevents memory leaks
    return () => ctx.revert();
  }, dependencies);

  return containerRef;
};
