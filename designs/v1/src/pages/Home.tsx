import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight, Waves, Factory, Truck, Anchor,
  Wrench, Settings, ShieldCheck, Award, Cpu,
  Zap, Cog, Boxes, Gauge, RefreshCw, CheckCircle2,
} from 'lucide-react';
import { useSEO } from '@/hooks/useSEO';
import { Reveal } from '@/components/Reveal';
import { CTASection } from '@/components/CTASection';
import { services } from '@/data/services';
import { products } from '@/data/products';

const heroImage = 'https://images.pexels.com/photos/11139595/pexels-photo-11139595.jpeg?auto=compress&cs=tinysrgb&w=1920';

const sectors = [
  {
    icon: Anchor,
    title: 'Offshore & Onshore',
    description: 'Hydraulic systems for oil & gas platforms, drilling rigs, and subsea operations in the harshest environments.',
    image: 'https://images.pexels.com/photos/3192662/pexels-photo-3192662.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    icon: Waves,
    title: 'Marine Hydraulics',
    description: 'Deck machinery, steering gear, winches, and hydraulic systems for vessels and port infrastructure.',
    image: 'https://images.pexels.com/photos/262353/pexels-photo-262353.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    icon: Factory,
    title: 'Industrial Hydraulics',
    description: 'Power units, presses, and control systems for manufacturing plants, steel mills, and processing facilities.',
    image: 'https://images.pexels.com/photos/16058393/pexels-photo-16058393.png?auto=compress&cs=tinysrgb&w=800',
  },
  {
    icon: Truck,
    title: 'Mobile Hydraulics',
    description: 'Hydraulic solutions for construction equipment, cranes, and heavy vehicles built for field operation.',
    image: 'https://images.pexels.com/photos/39345876/pexels-photo-39345876.png?auto=compress&cs=tinysrgb&w=800',
  },
];

const capabilities = [
  { icon: Cog, title: 'System Design', description: 'Custom hydraulic system design from concept to commissioning, tailored to your operational requirements.' },
  { icon: Wrench, title: 'Repair & Refurbishment', description: 'Expert cylinder repairs, pump rebuilds, and system refurbishment to extend equipment life.' },
  { icon: Settings, title: 'Power Pack Manufacturing', description: 'In-house manufacturing of custom hydraulic power packs from 1 kW to 250 kW.' },
  { icon: Cpu, title: 'Control Systems', description: 'PLC integration, electronic control panels, and remote monitoring for smart hydraulic operations.' },
  { icon: ShieldCheck, title: 'Quality Assurance', description: 'ISO 9001:2015 certified processes ensuring every system meets stringent quality standards.' },
  { icon: RefreshCw, title: 'Maintenance', description: 'Preventive and predictive maintenance contracts to keep your systems running at peak performance.' },
];

const productCategoriesHome = [
  { icon: Cog, name: 'Cylinders', count: 'Double & single-acting, telescopic' },
  { icon: Boxes, name: 'Power Units', count: 'Custom & standard power packs' },
  { icon: Gauge, name: 'Pumps & Motors', count: 'Gear, piston, and vane types' },
  { icon: Settings, name: 'Valves & Manifolds', count: 'Directional, pressure, flow control' },
  { icon: Zap, name: 'Control Panels', count: 'PLC-based hydraulic control systems' },
  { icon: Wrench, name: 'Hoses & Fittings', count: 'High-pressure hoses and connectors' },
  { icon: ShieldCheck, name: 'Filtration', count: 'Filters and contamination control' },
  { icon: RefreshCw, name: 'Lubrication', count: 'Centralized lubrication systems' },
];

const processSteps = [
  { number: '01', title: 'Consultation', description: 'We begin with a thorough assessment of your hydraulic requirements, operating conditions, and project objectives.' },
  { number: '02', title: 'Design & Engineering', description: 'Our engineers develop detailed system designs, selecting optimal components and configurations for your application.' },
  { number: '03', title: 'Manufacturing & Supply', description: 'Components are manufactured or sourced from our trusted agency partners, with rigorous quality control at every stage.' },
  { number: '04', title: 'Installation & Commissioning', description: 'Our certified team handles installation, testing, and commissioning, ensuring your system performs to specification.' },
  { number: '05', title: 'Maintenance & Support', description: 'Ongoing maintenance contracts, troubleshooting, and technical support keep your systems running reliably.' },
];

export function Home() {
  useSEO({
    title: 'ERAM Hydraulics | Engineering Hydraulic Excellence in Saudi Arabia',
    description: 'Saudi Arabia\'s trusted hydraulic engineering company. Specializing in offshore, marine, industrial, and mobile hydraulic systems. ISO 9001:2015 certified.',
  });

  const [loaded, setLoaded] = useState(false);
  useEffect(() => { setLoaded(true); }, []);

  const featuredServices = services.slice(0, 4);
  const featuredProducts = products.slice(0, 8);

  return (
    <div className="bg-charcoal-950">
      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Offshore hydraulic platform"
            className={`w-full h-full object-cover transition-transform duration-[2000ms] ${loaded ? 'scale-105' : 'scale-100'}`}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal-950 via-charcoal-950/85 to-charcoal-950/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-transparent to-transparent" />
          <div className="absolute inset-0 bg-grid opacity-20" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 w-full pt-20">
          <div className={`max-w-3xl ${loaded ? 'animate-fade-up' : 'opacity-0'}`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-eram-600/15 border border-eram-600/30 rounded-full mb-8">
              <ShieldCheck className="w-4 h-4 text-eram-400" />
              <span className="text-eram-300 text-sm font-medium">ISO 9001:2015 Certified</span>
            </div>
            <h1 className="font-display text-display-2xl font-bold text-white mb-6 leading-[1.05]">
              Engineering <span className="text-gradient">Hydraulic</span> Excellence
            </h1>
            <p className="text-steel-300 text-xl md:text-2xl mb-10 leading-relaxed max-w-2xl">
              Saudi Arabia's trusted hydraulic engineering partner, delivering precision systems for offshore, marine, industrial, and mobile applications since our founding.
            </p>
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-eram-600 hover:bg-eram-700 text-white font-semibold rounded-xl transition-all hover:shadow-xl hover:shadow-eram-600/30 hover:-translate-y-0.5"
              >
                Request a Quotation
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 px-8 py-4 border border-steel-500 hover:border-steel-300 text-white font-semibold rounded-xl transition-all hover:bg-white/5"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 border-t border-white/5 bg-charcoal-950/50 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-6 py-5 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: Award, label: 'ISO 9001:2015', sub: 'Certified Quality' },
              { icon: Anchor, label: '4 Sectors', sub: 'Offshore · Marine · Industrial · Mobile' },
              { icon: Cog, label: 'Custom Manufacturing', sub: 'Power Packs & Cylinders' },
              { icon: Wrench, label: 'Full Lifecycle', sub: 'Design to Maintenance' },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <item.icon className="w-5 h-5 text-eram-500 flex-shrink-0" />
                <div>
                  <p className="text-white text-sm font-semibold">{item.label}</p>
                  <p className="text-steel-500 text-xs">{item.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company intro */}
      <section className="py-24 lg:py-32 bg-charcoal-900 relative overflow-hidden">
        <div className="absolute right-0 top-0 w-1/2 h-full opacity-10">
          <img src="https://images.pexels.com/photos/30335395/pexels-photo-30335395.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="" className="w-full h-full object-cover" loading="lazy" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <Reveal>
              <span className="text-eram-500 text-sm font-semibold tracking-widest uppercase mb-4 block">Who We Are</span>
              <h2 className="font-display text-display-lg font-bold text-white mb-6">
                Precision Hydraulic Engineering for Demanding Environments
              </h2>
              <p className="text-steel-300 text-lg leading-relaxed mb-6">
                ERAM Hydraulics is a Saudi Arabian hydraulic engineering company serving the Kingdom's offshore, marine, industrial, and mobile sectors. We combine deep technical expertise with premium components to deliver hydraulic systems that perform reliably in the most challenging conditions.
              </p>
              <p className="text-steel-400 leading-relaxed mb-8">
                From custom power pack manufacturing to cylinder repair and system maintenance, our comprehensive services cover the full lifecycle of your hydraulic equipment. Our ISO 9001:2015 certification reflects our commitment to quality in every project we undertake.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-eram-400 hover:text-eram-300 font-semibold transition-colors"
              >
                Learn More About Us
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Reveal>
            <Reveal delay={2}>
              <div className="relative">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-white/5">
                  <img src="https://images.pexels.com/photos/5506032/pexels-photo-5506032.jpeg?auto=compress&cs=tinysrgb&w=1000" alt="Hydraulic workshop" className="w-full h-full object-cover" loading="lazy" />
                </div>
                <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-eram-600 rounded-2xl -z-10 flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-white text-4xl font-display font-bold">ISO</p>
                    <p className="text-eram-100 text-sm font-medium">9001:2015</p>
                    <p className="text-eram-200 text-xs mt-1">Certified</p>
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 glass rounded-xl p-4 border border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-eram-600/20 rounded-lg flex items-center justify-center">
                      <Wrench className="w-5 h-5 text-eram-400" />
                    </div>
                    <div>
                      <p className="text-white text-sm font-semibold">Full Service</p>
                      <p className="text-steel-400 text-xs">Design to Maintenance</p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Sectors */}
      <section className="py-24 lg:py-32 bg-charcoal-950">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal className="text-center mb-16">
            <span className="text-eram-500 text-sm font-semibold tracking-widest uppercase mb-4 block">Our Sectors</span>
            <h2 className="font-display text-display-lg font-bold text-white mb-4">
              Four Sectors, One Standard of Excellence
            </h2>
            <p className="text-steel-400 text-lg max-w-2xl mx-auto">
              We serve diverse industries with specialized hydraulic solutions engineered for each sector's unique demands.
            </p>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-6">
            {sectors.map((sector, i) => (
              <Reveal key={sector.title} delay={(i % 2 + 1) as 1 | 2}>
                <Link
                  to="/services"
                  className="group relative block rounded-2xl overflow-hidden h-80 lg:h-96"
                >
                  <img
                    src={sector.image}
                    alt={sector.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/60 to-transparent" />
                  <div className="absolute inset-0 flex flex-col justify-end p-8">
                    <div className="w-12 h-12 bg-eram-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <sector.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-display text-2xl font-bold text-white mb-2">{sector.title}</h3>
                    <p className="text-steel-300 text-sm leading-relaxed mb-4 max-w-md">{sector.description}</p>
                    <span className="inline-flex items-center gap-2 text-eram-400 text-sm font-semibold group-hover:gap-3 transition-all">
                      Learn More <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-24 lg:py-32 bg-charcoal-900">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal className="text-center mb-16">
            <span className="text-eram-500 text-sm font-semibold tracking-widest uppercase mb-4 block">Capabilities</span>
            <h2 className="font-display text-display-lg font-bold text-white mb-4">
              Featured Engineering Capabilities
            </h2>
            <p className="text-steel-400 text-lg max-w-2xl mx-auto">
              Comprehensive hydraulic engineering services from system design to lifetime maintenance.
            </p>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((cap, i) => (
              <Reveal key={cap.title} delay={((i % 3) + 1) as 1 | 2 | 3}>
                <div className="group p-8 bg-charcoal-800 hover:bg-charcoal-700 rounded-2xl border border-white/5 hover:border-eram-600/30 transition-all hover:-translate-y-1">
                  <div className="w-12 h-12 bg-eram-600/15 group-hover:bg-eram-600 rounded-xl flex items-center justify-center mb-6 transition-colors">
                    <cap.icon className="w-6 h-6 text-eram-400 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-white mb-3">{cap.title}</h3>
                  <p className="text-steel-400 text-sm leading-relaxed">{cap.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Product categories */}
      <section className="py-24 lg:py-32 bg-charcoal-950">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal className="text-center mb-16">
            <span className="text-eram-500 text-sm font-semibold tracking-widest uppercase mb-4 block">Products</span>
            <h2 className="font-display text-display-lg font-bold text-white mb-4">
              Comprehensive Product Catalog
            </h2>
            <p className="text-steel-400 text-lg max-w-2xl mx-auto">
              From hydraulic cylinders to control panels, we supply premium components for every hydraulic system need.
            </p>
          </Reveal>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {productCategoriesHome.map((cat, i) => (
              <Reveal key={cat.name} delay={((i % 4) + 1) as 1 | 2 | 3 | 4}>
                <Link
                  to="/products"
                  className="group flex flex-col items-center text-center p-6 bg-charcoal-800 hover:bg-charcoal-700 rounded-xl border border-white/5 hover:border-eram-600/30 transition-all hover:-translate-y-1"
                >
                  <div className="w-12 h-12 bg-eram-600/15 group-hover:bg-eram-600 rounded-xl flex items-center justify-center mb-4 transition-colors">
                    <cat.icon className="w-6 h-6 text-eram-400 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="font-display text-base font-bold text-white mb-1">{cat.name}</h3>
                  <p className="text-steel-500 text-xs">{cat.count}</p>
                </Link>
              </Reveal>
            ))}
          </div>

          <Reveal className="text-center mt-12">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 px-6 py-3 border border-steel-600 hover:border-eram-500 text-white font-semibold rounded-xl transition-all hover:bg-eram-600/10"
            >
              View All Products
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Featured services */}
      <section className="py-24 lg:py-32 bg-charcoal-900">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="text-eram-500 text-sm font-semibold tracking-widest uppercase mb-4 block">Services</span>
              <h2 className="font-display text-display-lg font-bold text-white">
                Featured Engineering Services
              </h2>
            </div>
            <Link to="/services" className="inline-flex items-center gap-2 text-eram-400 hover:text-eram-300 font-semibold whitespace-nowrap">
              All Services <ArrowRight className="w-4 h-4" />
            </Link>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredServices.map((service, i) => (
              <Reveal key={service.id} delay={((i % 4) + 1) as 1 | 2 | 3 | 4}>
                <Link
                  to={`/services#${service.id}`}
                  className="group block rounded-2xl overflow-hidden bg-charcoal-800 border border-white/5 hover:border-eram-600/30 transition-all hover:-translate-y-1"
                >
                  <div className="aspect-[3/2] overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6">
                    <span className="text-eram-500 text-xs font-semibold tracking-wider uppercase">{service.category}</span>
                    <h3 className="font-display text-lg font-bold text-white mt-2 mb-3 group-hover:text-eram-400 transition-colors">
                      {service.shortTitle}
                    </h3>
                    <p className="text-steel-400 text-sm leading-relaxed line-clamp-2">{service.description}</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Agencies strip */}
      <section className="py-20 bg-charcoal-950 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal className="text-center mb-12">
            <span className="text-eram-500 text-sm font-semibold tracking-widest uppercase mb-4 block">Agencies & Partners</span>
            <h2 className="font-display text-2xl font-bold text-white">
              Authorised Distributor of Premium Hydraulic Brands
            </h2>
          </Reveal>
          <Reveal delay={2}>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {['Cylinders', 'Pumps', 'Valves', 'Filtration', 'Hoses', 'Lubrication'].map((cat) => (
                <div key={cat} className="flex flex-col items-center justify-center p-6 bg-charcoal-800 rounded-xl border border-white/5">
                  <div className="w-10 h-10 bg-eram-600/15 rounded-lg flex items-center justify-center mb-3">
                    <Boxes className="w-5 h-5 text-eram-400" />
                  </div>
                  <p className="text-steel-300 text-sm font-medium text-center">{cat}</p>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={3} className="text-center mt-10">
            <Link to="/agencies" className="inline-flex items-center gap-2 text-eram-400 hover:text-eram-300 font-semibold">
              View All Agency Partners <ArrowRight className="w-4 h-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Engineering process */}
      <section className="py-24 lg:py-32 bg-charcoal-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="relative max-w-7xl mx-auto px-6">
          <Reveal className="text-center mb-16">
            <span className="text-eram-500 text-sm font-semibold tracking-widest uppercase mb-4 block">Our Process</span>
            <h2 className="font-display text-display-lg font-bold text-white mb-4">
              From Concept to Commissioning
            </h2>
            <p className="text-steel-400 text-lg max-w-2xl mx-auto">
              A structured engineering process ensuring quality outcomes at every stage of your hydraulic project.
            </p>
          </Reveal>

          <div className="space-y-2">
            {processSteps.map((step, i) => (
              <Reveal key={step.number} delay={((i % 3) + 1) as 1 | 2 | 3}>
                <div className="group flex flex-col md:flex-row items-start md:items-center gap-6 p-8 bg-charcoal-800 hover:bg-charcoal-700/50 rounded-2xl border border-white/5 transition-all">
                  <div className="font-display text-5xl font-bold text-eram-600/30 group-hover:text-eram-600/50 transition-colors flex-shrink-0 w-20">
                    {step.number}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display text-xl font-bold text-white mb-2">{step.title}</h3>
                    <p className="text-steel-400 leading-relaxed">{step.description}</p>
                  </div>
                  <CheckCircle2 className="w-6 h-6 text-steel-600 group-hover:text-eram-500 transition-colors flex-shrink-0" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
