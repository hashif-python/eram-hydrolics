import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import {
  Search, ArrowRight, X, CheckCircle2,
  LayoutGrid, Cylinder, Box, Gauge, Cog,
  ToggleLeft, Monitor, GitBranch, Spline,
  Circle, Filter, Droplets,
} from 'lucide-react';
import { useSEO } from '@/hooks/useSEO';
import { Reveal } from '@/components/Reveal';
import { CTASection } from '@/components/CTASection';
import { products, productCategories, type Product } from '@/data/products';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  LayoutGrid, Cylinder, Box, Gauge, Cog, ToggleLeft,
  Monitor, GitBranch, Spline, Circle, Filter, Droplets,
};

export function Products() {
  useSEO({
    title: 'Products',
    description: 'Browse ERAM Hydraulics\' product catalog: hydraulic cylinders, power units, pumps, motors, valves, control panels, manifolds, hoses, fittings, seals, filtration, and lubrication systems.',
  });

  const [activeCategory, setActiveCategory] = useState('all');
  const [search, setSearch] = useState('');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const filtered = useMemo(() => {
    return products.filter((p) => {
      const matchesCategory = activeCategory === 'all' || p.category === activeCategory;
      const matchesSearch =
        search === '' ||
        p.name.toLowerCase().includes(search.toLowerCase()) ||
        p.description.toLowerCase().includes(search.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, search]);

  const activeCategoryName = productCategories.find((c) => c.id === activeCategory)?.name || 'All Products';

  return (
    <div className="bg-charcoal-950">
      {/* Hero */}
      <section className="relative pt-40 pb-20 lg:pt-48 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.pexels.com/photos/10290625/pexels-photo-10290625.jpeg?auto=compress&cs=tinysrgb&w=1920" alt="Hydraulic equipment" className="w-full h-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal-950 via-charcoal-950/90 to-charcoal-950/50" />
          <div className="absolute inset-0 bg-grid opacity-20" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6">
          <Reveal>
            <span className="text-eram-500 text-sm font-semibold tracking-widest uppercase mb-4 block">Product Catalog</span>
            <h1 className="font-display text-display-xl font-bold text-white mb-6 max-w-4xl">
              Premium Hydraulic Components & Systems
            </h1>
            <p className="text-steel-300 text-xl leading-relaxed max-w-3xl">
              Browse our comprehensive catalog of hydraulic products. Request a quote for any item — we supply genuine components from trusted manufacturers.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Catalog */}
      <section className="py-16 lg:py-24 bg-charcoal-900">
        <div className="max-w-7xl mx-auto px-6">
          {/* Search & filters */}
          <Reveal className="mb-10">
            <div className="flex flex-col lg:flex-row gap-4 mb-8">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-steel-500" />
                <input
                  type="text"
                  placeholder="Search products..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full pl-12 pr-4 py-3.5 bg-charcoal-800 border border-white/5 focus:border-eram-600/50 text-white placeholder-steel-500 rounded-xl outline-none transition-colors"
                />
                {search && (
                  <button
                    onClick={() => setSearch('')}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-steel-500 hover:text-white"
                  >
                    <X className="w-5 h-5" />
                  </button>
                )}
              </div>
              <div className="flex items-center gap-2 text-steel-400 text-sm">
                <span className="text-white font-semibold">{filtered.length}</span> products
              </div>
            </div>

            {/* Category pills */}
            <div className="flex flex-wrap gap-2">
              {productCategories.map((cat) => {
                const Icon = iconMap[cat.icon] || Box;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                      activeCategory === cat.id
                        ? 'bg-eram-600 text-white'
                        : 'bg-charcoal-800 text-steel-300 hover:bg-charcoal-700 hover:text-white border border-white/5'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    {cat.name}
                  </button>
                );
              })}
            </div>
          </Reveal>

          {/* Products grid */}
          {filtered.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((product, i) => (
                <Reveal key={product.id} delay={((i % 3) + 1) as 1 | 2 | 3}>
                  <div
                    onClick={() => setSelectedProduct(product)}
                    className="group cursor-pointer rounded-2xl overflow-hidden bg-charcoal-800 border border-white/5 hover:border-eram-600/30 transition-all hover:-translate-y-1"
                  >
                    <div className="aspect-[3/2] overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-6">
                      <span className="text-eram-500 text-xs font-semibold tracking-wider uppercase">
                        {productCategories.find((c) => c.id === product.category)?.name}
                      </span>
                      <h3 className="font-display text-lg font-bold text-white mt-2 mb-3 group-hover:text-eram-400 transition-colors">
                        {product.name}
                      </h3>
                      <p className="text-steel-400 text-sm leading-relaxed line-clamp-2 mb-4">{product.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-steel-300 text-xs">
                          {product.specifications[0].label}: <span className="text-white font-medium">{product.specifications[0].value}</span>
                        </span>
                        <span className="text-eram-400 text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                          Details <ArrowRight className="w-4 h-4" />
                        </span>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-steel-400 text-lg">No products found matching your search.</p>
              <button
                onClick={() => { setSearch(''); setActiveCategory('all'); }}
                className="mt-4 text-eram-400 hover:text-eram-300 font-semibold"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Product detail modal */}
      {selectedProduct && (
        <div
          className="fixed inset-0 z-[90] flex items-center justify-center p-4 bg-charcoal-950/80 backdrop-blur-sm animate-fade-in"
          onClick={() => setSelectedProduct(null)}
        >
          <div
            className="bg-charcoal-800 rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto border border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[16/9] overflow-hidden rounded-t-3xl">
              <img src={selectedProduct.image} alt={selectedProduct.name} className="w-full h-full object-cover" />
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 right-4 w-10 h-10 glass rounded-full flex items-center justify-center text-white hover:bg-eram-600 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-8">
              <span className="text-eram-500 text-xs font-semibold tracking-wider uppercase">
                {productCategories.find((c) => c.id === selectedProduct.category)?.name}
              </span>
              <h2 className="font-display text-2xl font-bold text-white mt-2 mb-4">{selectedProduct.name}</h2>
              <p className="text-steel-300 leading-relaxed mb-8">{selectedProduct.description}</p>

              <h3 className="text-white font-display font-semibold mb-4 text-sm tracking-wider uppercase">Specifications</h3>
              <div className="grid sm:grid-cols-2 gap-3 mb-8">
                {selectedProduct.specifications.map((spec) => (
                  <div key={spec.label} className="flex justify-between p-4 bg-charcoal-700 rounded-xl border border-white/5">
                    <span className="text-steel-400 text-sm">{spec.label}</span>
                    <span className="text-white text-sm font-semibold">{spec.value}</span>
                  </div>
                ))}
              </div>

              <h3 className="text-white font-display font-semibold mb-4 text-sm tracking-wider uppercase">Applications</h3>
              <div className="flex flex-wrap gap-2 mb-8">
                {selectedProduct.applications.map((app) => (
                  <span key={app} className="px-3 py-1.5 bg-charcoal-700 border border-white/5 text-steel-300 text-xs font-medium rounded-lg flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-eram-500" />
                    {app}
                  </span>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  to="/contact"
                  state={{ product: selectedProduct.name }}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-eram-600 hover:bg-eram-700 text-white font-semibold rounded-xl transition-all"
                >
                  Request Quote
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="px-6 py-3.5 border border-steel-600 hover:border-steel-400 text-white font-semibold rounded-xl transition-all hover:bg-white/5"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <CTASection title="Need a Specific Product?" subtitle="If you can't find what you're looking for, our team can source any hydraulic component from our trusted manufacturer network." />
    </div>
  );
}
