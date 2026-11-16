import { Boxes, ArrowRight, CheckCircle2 } from 'lucide-react';
import { useSEO } from '@/hooks/useSEO';
import { Reveal } from '@/components/Reveal';
import { CTASection } from '@/components/CTASection';
import { agencies } from '@/data/agencies';

export function Agencies() {
  useSEO({
    title: 'Agencies & Partners',
    description: 'ERAM Hydraulics is an authorised distributor for premium hydraulic component manufacturers. Browse our verified agency partnerships covering cylinders, pumps, valves, filtration, hoses, and lubrication systems.',
  });

  return (
    <div className="bg-charcoal-950">
      {/* Hero */}
      <section className="relative pt-40 pb-20 lg:pt-48 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.pexels.com/photos/29248902/pexels-photo-29248902.jpeg?auto=compress&cs=tinysrgb&w=1920" alt="Industrial pipes and valves" className="w-full h-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal-950 via-charcoal-950/90 to-charcoal-950/50" />
          <div className="absolute inset-0 bg-grid opacity-20" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6">
          <Reveal>
            <span className="text-eram-500 text-sm font-semibold tracking-widest uppercase mb-4 block">Agencies & Partners</span>
            <h1 className="font-display text-display-xl font-bold text-white mb-6 max-w-4xl">
              Authorised Distributor of Premium Hydraulic Brands
            </h1>
            <p className="text-steel-300 text-xl leading-relaxed max-w-3xl">
              We partner with leading hydraulic component manufacturers to supply genuine, high-quality products across Saudi Arabia. Each partnership is carefully selected to ensure our clients receive components that meet the highest standards of performance and reliability.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Agency cards */}
      <section className="py-24 bg-charcoal-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-6">
            {agencies.map((agency, i) => (
              <Reveal key={agency.id} delay={((i % 2) + 1) as 1 | 2}>
                <div className="group p-8 bg-charcoal-800 rounded-2xl border border-white/5 hover:border-eram-600/30 transition-all hover:-translate-y-1 h-full flex flex-col">
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-14 h-14 bg-eram-600/15 group-hover:bg-eram-600 rounded-xl flex items-center justify-center transition-colors">
                      <Boxes className="w-7 h-7 text-eram-400 group-hover:text-white transition-colors" />
                    </div>
                    <span className="text-xs text-steel-500 font-medium px-3 py-1.5 bg-charcoal-700 rounded-lg">
                      {agency.established}
                    </span>
                  </div>
                  <h3 className="font-display text-xl font-bold text-white mb-4">{agency.name}</h3>
                  <p className="text-steel-400 leading-relaxed mb-6 flex-1">{agency.description}</p>

                  <div>
                    <h4 className="text-white text-xs font-semibold tracking-wider uppercase mb-3">Product Categories</h4>
                    <div className="flex flex-wrap gap-2">
                      {agency.productCategories.map((cat) => (
                        <span key={cat} className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-charcoal-700 border border-white/5 text-steel-300 text-xs font-medium rounded-lg">
                          <CheckCircle2 className="w-3.5 h-3.5 text-eram-500" />
                          {cat}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership info */}
      <section className="py-20 bg-charcoal-950 border-y border-white/5">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Reveal>
            <h2 className="font-display text-3xl font-bold text-white mb-6">
              Become a Partner
            </h2>
            <p className="text-steel-300 text-lg leading-relaxed mb-8">
              We are continually expanding our network of trusted manufacturer partnerships. If you produce premium hydraulic components and are seeking an authorised distributor in Saudi Arabia, we welcome the opportunity to discuss a partnership.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-eram-600 hover:bg-eram-700 text-white font-semibold rounded-xl transition-all hover:shadow-xl hover:shadow-eram-600/30 hover:-translate-y-0.5"
            >
              Contact Us About Partnership
              <ArrowRight className="w-5 h-5" />
            </a>
          </Reveal>
        </div>
      </section>

      <CTASection title="Need Products From Our Partners?" subtitle="Request a quote for any hydraulic component from our trusted manufacturer network." />
    </div>
  );
}
