import React, { useEffect, useState, useRef } from "react";

export default function AnimatedCounter({
  value,
  suffix = "",
  isFloat = false,
  duration = 1500,
}) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const countRef = useRef(0);
  const rafRef = useRef(null);

  // Keep countRef in sync with state
  countRef.current = count;

  // Detect when element enters viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  // Animate counter when visible and smoothly adjust whenever target value changes
  useEffect(() => {
    if (!isVisible) return;

    const target = Number(value);
    if (isNaN(target)) return;

    const startVal = countRef.current;
    const diff = target - startVal;

    if (Math.abs(diff) < 0.001) {
      setCount(target);
      return;
    }

    let startTimestamp = null;
    const animDuration = startVal === 0 ? duration : 500;

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / animDuration, 1);
      // Ease out cubic
      const easeOutProgress = 1 - Math.pow(1 - progress, 3);
      const nextVal = startVal + diff * easeOutProgress;

      setCount(nextVal);

      if (progress < 1) {
        rafRef.current = window.requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    };

    if (rafRef.current) {
      window.cancelAnimationFrame(rafRef.current);
    }
    rafRef.current = window.requestAnimationFrame(step);

    return () => {
      if (rafRef.current) {
        window.cancelAnimationFrame(rafRef.current);
      }
    };
  }, [value, isVisible, duration]);

  return (
    <span ref={ref}>
      {isFloat ? count.toFixed(2) : Math.floor(count)}
      {suffix}
    </span>
  );
}
