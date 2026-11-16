import { useEffect } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import Logo from '@/components/Logo';

interface LoadingScreenProps {
  onComplete: () => void;
}

const DURATION_MS = 1900;

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const reduce = useReducedMotion();

  useEffect(() => {
    const timer = window.setTimeout(onComplete, reduce ? 300 : DURATION_MS);
    return () => window.clearTimeout(timer);
  }, [onComplete, reduce]);

  return (
    <motion.div
      role="status"
      aria-label="Loading ERAM Hydraulics"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.6, ease: 'easeInOut' } }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-navy-950"
    >
      <motion.div
        initial={reduce ? false : { opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      >
        <Logo tone="light" />
      </motion.div>
      <div className="mt-10 h-px w-56 overflow-hidden bg-navy-800">
        <motion.span
          className="block h-full bg-gold-400"
          initial={{ x: '-100%' }}
          animate={{ x: '0%' }}
          transition={{ duration: reduce ? 0 : DURATION_MS / 1000 - 0.3, ease: 'easeInOut' }}
        />
      </div>
      <p className="mt-6 font-sans text-xs uppercase tracking-[0.3em] text-steel-300">Engineering Excellence</p>
    </motion.div>
  );
}
