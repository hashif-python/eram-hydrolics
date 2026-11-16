import { useRef, type ReactNode } from 'react';
import { useReveal } from '@/hooks/useReveal';

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: 1 | 2 | 3 | 4;
}

export function Reveal({ children, className = '', delay }: RevealProps) {
  const { ref, isVisible } = useReveal<HTMLDivElement>();
  const delayClass = delay ? `reveal-delay-${delay}` : '';

  return (
    <div ref={ref} className={`reveal ${delayClass} ${isVisible ? 'is-visible' : ''} ${className}`}>
      {children}
    </div>
  );
}
