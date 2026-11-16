import { ArrowRight, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { Service } from '@/types/content';

export default function ServiceCard({ service }: { service: Service }) {
  const Icon = service.icon;
  return (
    <article className="card group flex h-full flex-col overflow-hidden hover:border-navy-300 hover:shadow-lg">
      <div className="relative aspect-[16/10] overflow-hidden bg-steel-100">
        <img
          src={service.image.src}
          alt={service.image.alt}
          loading="lazy"
          decoding="async"
          width={940}
          height={650}
          className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-7">
        <span className="mb-5 flex h-11 w-11 items-center justify-center rounded-sm border border-gold-400/60 text-gold-700">
          <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
        </span>
        <h3 className="text-xl font-bold leading-snug">{service.title}</h3>
        <p className="mt-3 flex-1 text-[15px] leading-[1.6] text-steel-700">{service.summary}</p>
        <div className="mt-6 flex flex-wrap items-center gap-3 border-t border-steel-200 pt-5">
          <Link
            to={`/services/${service.slug}`}
            className="inline-flex items-center gap-2 text-sm font-semibold text-navy-800 transition hover:text-gold-700"
          >
            View details
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
          </Link>
          <Link
            to={`/contact?service=${service.slug}`}
            className="ml-auto inline-flex items-center gap-2 rounded-sm border border-navy-200 px-3.5 py-2 text-sm font-semibold text-navy-800 transition hover:border-navy-800 hover:bg-navy-800 hover:text-white"
          >
            <Mail className="h-4 w-4" aria-hidden="true" />
            Enquire
          </Link>
        </div>
      </div>
    </article>
  );
}
