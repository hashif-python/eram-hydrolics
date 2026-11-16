import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { productCategories } from '@/data/products';
import type { Product } from '@/types/content';

export default function ProductCard({ product }: { product: Product }) {
  const category = productCategories.find((c) => c.id === product.category);
  const isVerified = product.status === 'verified';
  return (
    <article className="card group flex h-full flex-col overflow-hidden hover:border-navy-300 hover:shadow-lg">
      <Link to={`/products/${product.slug}`} className="relative block aspect-[4/3] overflow-hidden bg-steel-100">
        <img
          src={product.image.src}
          alt={product.image.alt}
          loading="lazy"
          decoding="async"
          width={940}
          height={650}
          className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-105"
        />
      </Link>
      <div className="flex flex-1 flex-col p-6">
        <div className="mb-3 flex flex-wrap items-center gap-2">
          <span className="text-xs font-semibold uppercase tracking-[0.14em] text-steel-600">{category?.title}</span>
          <span
            className={`rounded-sm px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wider ${
              isVerified ? 'bg-success-50 text-success-700' : 'bg-warning-50 text-warning-700'
            }`}
          >
            {isVerified ? 'Verified' : 'Suggested category'}
          </span>
        </div>
        <h3 className="text-lg font-bold leading-snug">
          <Link to={`/products/${product.slug}`} className="transition hover:text-gold-700">
            {product.name}
          </Link>
        </h3>
        <p className="mt-3 flex-1 text-[15px] leading-[1.6] text-steel-700">{product.summary}</p>
        <Link
          to={`/products/${product.slug}`}
          className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-navy-800 transition hover:text-gold-700"
        >
          View product
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}
