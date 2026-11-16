import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { Industry } from '@/types/content';

export default function IndustryCard({ industry }: { industry: Industry }) {
  const Icon = industry.icon;
  return (
    <Link
      to={`/industries#${industry.slug}`}
      className="card group flex h-full flex-col overflow-hidden hover:-translate-y-1 hover:border-navy-300 hover:shadow-lg"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-steel-100">
        <img
          src={industry.image.src}
          alt={industry.image.alt}
          loading="lazy"
          decoding="async"
          width={940}
          height={650}
          className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="mb-3 flex items-center gap-3">
          <Icon className="h-5 w-5 text-gold-700" strokeWidth={1.75} aria-hidden="true" />
          <h3 className="text-lg font-bold">{industry.title}</h3>
        </div>
        <p className="flex-1 text-[15px] leading-[1.6] text-steel-700">{industry.summary}</p>
        <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-navy-800 transition group-hover:text-gold-700">
          Explore solutions
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
        </span>
      </div>
    </Link>
  );
}
