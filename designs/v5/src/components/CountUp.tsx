import { useEffect, useRef, useState } from 'react';

interface CountUpProps {
  value: string;
  duration?: number;
}

export default function CountUp({ value, duration = 1400 }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const numeric = /^\d+$/.test(value);
  const [display, setDisplay] = useState(numeric ? '0' : value);

  useEffect(() => {
    const node = ref.current;
    if (!node || !numeric) return;
    const target = Number(value);
    let frame = 0;

    const run = () => {
      const start = performance.now();
      const tick = (now: number) => {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setDisplay(String(Math.round(target * eased)));
        if (progress < 1) frame = requestAnimationFrame(tick);
      };
      frame = requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          run();
          observer.disconnect();
        }
      },
      { threshold: 0.6 }
    );
    observer.observe(node);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [value, numeric, duration]);

  return <span ref={ref}>{display}</span>;
}
