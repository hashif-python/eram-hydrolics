import { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Wrench } from 'lucide-react';
import { useSEO } from '@/hooks/useSEO';
import { Reveal } from '@/components/Reveal';
import { CTASection } from '@/components/CTASection';
import { services } from '@/data/services';

export function Services() {
  useSEO({
    title: 'Services',
    description: 'Comprehensive hydraulic services from ERAM Hydraulics: offshore/onshore hydraulics, marine hydraulics, industrial hydraulics, mobile hydraulics, troubleshooting, cylinder repairs, power pack manufacturing, installation, commissioning, lubrication, and maintenance.',
  });

  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const el = document.getElementById(location.hash.slice(1));
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 200);
      }
    }
  }, [location.hash]);

  return (
    <div className="bg-charcoal-950">
      {/* Hero */}
      <section className="relative pt-40 pb-20 lg:pt-48 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.pexels.com/photos/16058393/pexels-photo-16058393.png?auto=compress&cs=tinysrgb&w=1920" alt="Industrial facility" className="w-full h-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal-950 via-charcoal-950/90 to-charcoal-950/50" />
          <div className="absolute inset-0 bg-grid opacity-20" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6">
          <Reveal>
            <span className="text-eram-500 text-sm font-semibold tracking-widest uppercase mb-4 block">Our Services</span>
            <h1 className="font-display text-display-xl font-bold text-white mb-6 max-w-4xl">
              Comprehensive Hydraulic Engineering Services
            </h1>
            <p className="text-steel-300 text-xl leading-relaxed max-w-3xl">
              From system design to lifetime maintenance, we cover every aspect of your hydraulic operation with precision engineering and certified expertise.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Quick nav */}
      <section className="py-8 bg-charcoal-900 border-y border-white/5 sticky top-16 lg:top-0 z-30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap gap-2">
            {services.map((service) => (
              <a
                key={service.id}
                href={`#${service.id}`}
                className="px-3 py-1.5 text-xs font-medium text-steel-300 hover:text-white bg-charcoal-800 hover:bg-eram-600/20 rounded-lg transition-colors"
              >
                {service.shortTitle}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Service sections */}
      {services.map((service, index) => (
        <section
          key={service.id}
          id={service.id}
          className={`py-20 lg:py-28 scroll-mt-32 ${index % 2 === 0 ? 'bg-charcoal-950' : 'bg-charcoal-900'}`}
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className={`grid lg:grid-cols-2 gap-16 items-center ${index % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}>
              {/* Image */}
              <Reveal className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                <div className="relative">
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-white/5">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="absolute top-4 left-4 px-4 py-2 glass rounded-lg border border-white/10">
                    <span className="text-eram-400 text-xs font-semibold tracking-wider uppercase">{service.category}</span>
                  </div>
                </div>
              </Reveal>

              {/* Content */}
              <Reveal delay={2} className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-eram-600 rounded-lg flex items-center justify-center">
                    <Wrench className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-steel-500 text-sm font-medium">{String(index + 1).padStart(2, '0')} / {String(services.length).padStart(2, '0')}</span>
                </div>
                <h2 className="font-display text-3xl lg:text-4xl font-bold text-white mb-5">
                  {service.title}
                </h2>
                <p className="text-steel-300 leading-relaxed mb-8">
                  {service.description}
                </p>

                {/* Applications */}
                <div className="mb-8">
                  <h3 className="text-white font-display font-semibold mb-4 text-sm tracking-wider uppercase">Applications</h3>
                  <div className="grid sm:grid-cols-2 gap-2">
                    {service.applications.map((app) => (
                      <div key={app} className="flex items-center gap-2 text-steel-400 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-eram-500 flex-shrink-0" />
                        {app}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div className="mb-8">
                  <h3 className="text-white font-display font-semibold mb-4 text-sm tracking-wider uppercase">Key Features</h3>
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature) => (
                      <span key={feature} className="px-3 py-1.5 bg-charcoal-800 border border-white/5 text-steel-300 text-xs font-medium rounded-lg">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                <Link
                  to="/contact"
                  state={{ service: service.title }}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-eram-600 hover:bg-eram-700 text-white font-semibold rounded-xl transition-all hover:shadow-lg hover:shadow-eram-600/30"
                >
                  Enquire About This Service
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Reveal>
            </div>
          </div>
        </section>
      ))}

      <CTASection />
    </div>
  );
}
