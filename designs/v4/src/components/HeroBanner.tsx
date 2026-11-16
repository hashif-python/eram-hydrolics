import type { ReactNode } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import Breadcrumbs, { type Crumb } from '@/components/Breadcrumbs';
import type { ImageAsset } from '@/types/content';
import { sized } from '@/lib/images';

interface HeroBannerProps {
  image: ImageAsset;
  eyebrow?: string;
  title: string;
  description?: string;
  breadcrumbs?: Crumb[];
  actions?: ReactNode;
  variant?: 'full' | 'compact';
  priority?: boolean;
}

export default function HeroBanner({
  image,
  eyebrow,
  title,
  description,
  breadcrumbs,
  actions,
  variant = 'compact',
  priority = false,
}: HeroBannerProps) {
  const reduce = useReducedMotion();
  const isFull = variant === 'full';

  return (
    <section
      className={`relative isolate flex w-full items-end overflow-hidden bg-navy-950 ${
        isFull ? 'min-h-[620px] lg:min-h-[720px]' : 'min-h-[340px] md:min-h-[400px]'
      }`}
    >
      <img
        src={sized(image.src, 2000)}
        alt={image.alt}
        loading={priority ? 'eager' : 'lazy'}
        fetchPriority={priority ? 'high' : 'auto'}
        decoding="async"
        width={940}
        height={650}
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-navy-950/80" aria-hidden="true" />

      <motion.div
        initial={reduce ? false : { opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`container-page w-full ${isFull ? 'pb-20 pt-40' : 'pb-14 pt-32'}`}
      >
        {breadcrumbs && <Breadcrumbs items={breadcrumbs} tone="light" className="mb-6" />}
        {eyebrow && (
          <p className="mb-4 font-sans text-xs font-semibold uppercase tracking-[0.25em] text-gold-300">{eyebrow}</p>
        )}
        <h1 className={`max-w-4xl font-serif font-bold text-white ${isFull ? 'text-4xl sm:text-5xl lg:text-6xl' : 'text-3xl sm:text-4xl lg:text-5xl'}`}>
          {title}
        </h1>
        {description && (
          <p className="mt-6 max-w-2xl text-lg leading-[1.6] text-steel-100">{description}</p>
        )}
        {actions && <div className="mt-10 flex flex-col gap-4 sm:flex-row">{actions}</div>}
      </motion.div>
    </section>
  );
}
