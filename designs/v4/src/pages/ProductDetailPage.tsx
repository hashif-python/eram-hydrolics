import { ArrowLeft, Check, Mail } from 'lucide-react';
import { Link, Navigate, useParams } from 'react-router-dom';
import HeroBanner from '@/components/HeroBanner';
import ProductCard from '@/components/ProductCard';
import QuoteCTA from '@/components/QuoteCTA';
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';
import { productCategories, products } from '@/data/products';
import { useDocumentMeta } from '@/hooks/useDocumentMeta';

export default function ProductDetailPage() {
  const { slug } = useParams();
  const product = products.find((p) => p.slug === slug);

  useDocumentMeta(product?.name ?? 'Product', product?.summary ?? 'Hydraulic product from ERAM Hydraulics.');

  if (!product) return <Navigate to="/products" replace />;

  const category = productCategories.find((c) => c.id === product.category);
  const isVerified = product.status === 'verified';
  const related = products.filter((p) => p.category === product.category && p.slug !== product.slug).slice(0, 3);

  return (
    <>
      <HeroBanner
        image={product.image}
        eyebrow={category?.title}
        title={product.name}
        description={product.summary}
        breadcrumbs={[
          { label: 'Products', to: '/products' },
          { label: category?.title ?? 'Category', to: `/products?category=${product.category}` },
          { label: product.name },
        ]}
      />

      <section className="section-pad">
        <div className="container-page grid gap-14 lg:grid-cols-[1.6fr_1fr]">
          <Reveal>
            <span
              className={`inline-block rounded-sm px-3 py-1 text-xs font-semibold uppercase tracking-wider ${
                isVerified ? 'bg-success-50 text-success-700' : 'bg-warning-50 text-warning-700'
              }`}
            >
              {isVerified ? 'Verified product information' : 'Suggested category, to be confirmed'}
            </span>
            {product.brand && (
              <p className="mt-6 text-[15px] text-steel-700">
                Brand: <span className="font-semibold text-navy-900">{product.brand}</span>
              </p>
            )}
            <div className="mt-8 space-y-5 text-lg leading-[1.7] text-steel-700">
              {product.overview.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-14 grid gap-10 md:grid-cols-2">
              <div>
                <h2 className="font-serif text-xl font-bold">Key Features</h2>
                <ul className="mt-5 space-y-4">
                  {product.features.map((item) => (
                    <li key={item} className="flex gap-3 text-[15px] leading-[1.6] text-steel-800">
                      <Check className="mt-1 h-4 w-4 shrink-0 text-gold-600" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="font-serif text-xl font-bold">Applications</h2>
                <ul className="mt-5 space-y-4">
                  {product.applications.map((item) => (
                    <li key={item} className="flex gap-3 text-[15px] leading-[1.6] text-steel-800">
                      <Check className="mt-1 h-4 w-4 shrink-0 text-gold-600" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <aside className="card sticky top-32 p-8">
              <h2 className="font-serif text-xl font-bold">Request Pricing &amp; Availability</h2>
              <p className="mt-4 text-[15px] leading-[1.6] text-steel-700">
                Send us the specification or part details and we will confirm availability, options and next steps.
              </p>
              <Link to={`/contact?product=${product.slug}`} className="btn-primary mt-7 w-full">
                <Mail className="h-4 w-4" aria-hidden="true" />
                Enquire About This Product
              </Link>
              <Link to={`/products?category=${product.category}`} className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-navy-800 hover:text-gold-700">
                <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                Back to {category?.title ?? 'products'}
              </Link>
            </aside>
          </Reveal>
        </div>
      </section>

      {related.length > 0 && (
        <section className="section-pad bg-steel-50">
          <div className="container-page">
            <Reveal>
              <SectionHeading eyebrow="Related" title="More in This Category" />
            </Reveal>
            <div className="mt-14 grid gap-8 md:grid-cols-3">
              {related.map((item) => (
                <ProductCard key={item.slug} product={item} />
              ))}
            </div>
          </div>
        </section>
      )}

      <QuoteCTA />
    </>
  );
}
