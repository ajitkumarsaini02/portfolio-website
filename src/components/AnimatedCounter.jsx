import React, { useEffect, useState, useRef } from 'react';

export default function AnimatedCounter({ value, suffix = '', isFloat = false, duration = 2000 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  const currentCountRef = useRef(0);

  useEffect(() => {
    currentCountRef.current = count;
  }, [count]);

  useEffect(() => {
    const target = Number(value);

    if (hasAnimated) {
      let startTimestamp = null;
      const startVal = currentCountRef.current;
      const diff = target - startVal;
      if (Math.abs(diff) < 0.001) return;

      const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / 600, 1);
        const easeOutProgress = 1 - Math.pow(1 - progress, 3);
        const nextVal = startVal + diff * easeOutProgress;
        setCount(nextVal);

        if (progress < 1) {
          window.requestAnimationFrame(step);
        } else {
          setCount(target);
        }
      };
      const animId = window.requestAnimationFrame(step);
      return () => window.cancelAnimationFrame(animId);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          let startTimestamp = null;
          const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            // Ease out cubic
            const easeOutProgress = 1 - Math.pow(1 - progress, 3);
            const currentVal = target * easeOutProgress;

            setCount(currentVal);

            if (progress < 1) {
              window.requestAnimationFrame(step);
            } else {
              setCount(target);
            }
          };

          window.requestAnimationFrame(step);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [value, duration, hasAnimated]);

  return (
    <span ref={ref}>
      {isFloat ? count.toFixed(2) : Math.floor(count)}
      {suffix}
    </span>
  );
}
