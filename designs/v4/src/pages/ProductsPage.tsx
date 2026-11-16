import { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import HeroBanner from '@/components/HeroBanner';
import ProductCard from '@/components/ProductCard';
import QuoteCTA from '@/components/QuoteCTA';
import Reveal from '@/components/Reveal';
import { productCategories, products } from '@/data/products';
import { useDocumentMeta } from '@/hooks/useDocumentMeta';
import { IMAGES, asset } from '@/lib/images';
import type { ProductCategoryId } from '@/types/content';

const isCategoryId = (value: string | null): value is ProductCategoryId =>
  productCategories.some((c) => c.id === value);

export default function ProductsPage() {
  useDocumentMeta(
    'Products',
    'Browse ERAM Hydraulics products: hydraulic cylinders, power units, valves and controls, lubrication equipment, seals and filtration, pneumatic components and spare parts.',
  );

  const [searchParams, setSearchParams] = useSearchParams();
  const requested = searchParams.get('category');
  const active: ProductCategoryId | 'all' = isCategoryId(requested) ? requested : 'all';

  const visible = useMemo(
    () => (active === 'all' ? products : products.filter((p) => p.category === active)),
    [active],
  );

  const select = (id: ProductCategoryId | 'all') => {
    if (id === 'all') {
      setSearchParams({}, { replace: true });
    } else {
      setSearchParams({ category: id }, { replace: true });
    }
  };

  const filters: { id: ProductCategoryId | 'all'; title: string }[] = [
    { id: 'all', title: 'All Products' },
    ...productCategories.map((c) => ({ id: c.id, title: c.title })),
  ];

  return (
    <>
      <HeroBanner
        image={asset(IMAGES.productsBanner, 'Industrial hydraulic valves in a workshop')}
        eyebrow="Our Products"
        title="Hydraulic, Pneumatic & Lubrication Products"
        description="Manufactured in our Dammam facility and supplied through authorised brand partnerships."
        breadcrumbs={[{ label: 'Products' }]}
      />

      <section className="section-pad">
        <div className="container-page">
          <Reveal>
            <div className="flex flex-col gap-6 border-b border-steel-200 pb-8">
              <div className="flex flex-wrap gap-2" role="group" aria-label="Filter products by category">
                {filters.map((f) => (
                  <button
                    key={f.id}
                    type="button"
                    onClick={() => select(f.id)}
                    aria-pressed={active === f.id}
                    className={`rounded-sm border px-4 py-2 text-sm font-semibold transition duration-200 ${
                      active === f.id
                        ? 'border-navy-800 bg-navy-800 text-white'
                        : 'border-steel-300 bg-white text-navy-800 hover:border-navy-700 hover:bg-steel-50'
                    }`}
                  >
                    {f.title}
                  </button>
                ))}
              </div>
              <p className="text-sm text-steel-600">
                Showing {visible.length} {visible.length === 1 ? 'product' : 'products'}. Items marked "Suggested category" are proposed ranges, not confirmed inventory.
              </p>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-3" aria-live="polite">
            {visible.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </div>
      </section>

      <QuoteCTA title="Need a product that is not listed?" text="Tell us the specification you need. We can design, manufacture or source the component through our authorised partners." />
    </>
  );
}
