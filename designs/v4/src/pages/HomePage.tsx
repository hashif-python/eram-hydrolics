import { ArrowRight, Award, BadgeCheck, CheckCircle2, Factory, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import HeroBanner from '@/components/HeroBanner';
import IndustryCard from '@/components/IndustryCard';
import ProductCard from '@/components/ProductCard';
import QuoteCTA from '@/components/QuoteCTA';
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';
import ServiceCard from '@/components/ServiceCard';
import { agencies } from '@/data/agencies';
import { company } from '@/data/company';
import { productCategories, products } from '@/data/products';
import { industries } from '@/data/industries';
import { services } from '@/data/services';
import { useDocumentMeta } from '@/hooks/useDocumentMeta';
import { IMAGES, asset } from '@/lib/images';

const capabilities = [
  'Hydraulic troubleshooting, surveys and on-site repairs',
  'Design and fabrication of power packs and control valve stands',
  'Hydraulic cylinder repair and seal manufacturing',
  'Installation, start-up and commissioning',
  'Pipe, hose and fitting installation with testing',
  'Flushing and oil and grease lubrication systems',
  'Overhaul and testing of components and spare parts',
];

const whyChoose = [
  { icon: Award, title: 'ISO 9001:2015 Certified', text: 'Our operations are governed by a recognised international quality management standard.' },
  { icon: Factory, title: 'Dedicated Industrial Facility', text: 'A state-of-the-art workshop in Dammam Second Industrial City for design, fabrication and overhaul.' },
  { icon: MapPin, title: 'Two Saudi Branches', text: 'Offices in Dammam and Riyadh to support customers across the Kingdom.' },
  { icon: BadgeCheck, title: 'Authorised Brands', text: 'Authorised distribution for established manufacturers, backed by in-house engineering.' },
];

export default function HomePage() {
  useDocumentMeta(
    'Hydraulic, Pneumatic & Lubrication Engineering',
    'ERAM Hydraulics, an ISO 9001:2015 certified company in Dammam, provides hydraulic design, manufacturing, repair, lubrication and pneumatic solutions for marine, oil and gas, industrial and mobile sectors.',
  );

  const featuredProducts = products.filter((p) => p.status === 'verified').slice(0, 3);

  return (
    <>
      <HeroBanner
        variant="full"
        priority
        image={asset(IMAGES.homeHero, 'Close-up of large industrial hydraulic machinery outdoors')}
        eyebrow={company.certification}
        title="Hydraulic Engineering Built for Heavy Industry"
        description="From design and manufacture to on-site repair and commissioning, ERAM Hydraulics keeps marine, oil and gas, industrial and mobile hydraulic systems performing reliably."
        actions={
          <>
            <Link to="/contact" className="btn-gold">
              Request a Quote <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link to="/services" className="btn-outline">
              Explore Our Services
            </Link>
          </>
        }
      />

      <section className="section-pad">
        <div className="container-page grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <p className="eyebrow mb-4">Introduction</p>
            <h2 className="font-serif text-3xl font-bold md:text-4xl">A Trusted Hydraulic Engineering Partner</h2>
            <span className="mt-6 block h-0.5 w-16 bg-gold-500" aria-hidden="true" />
            <p className="mt-6 text-lg leading-[1.6] text-steel-700">{company.about[0]}</p>
            <p className="mt-4 leading-[1.6] text-steel-700">{company.about[1]}</p>
            <Link to="/about" className="mt-8 inline-flex items-center gap-2 font-semibold text-navy-800 transition hover:text-gold-700">
              Read more about ERAM <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="card p-8 md:p-10">
              <h3 className="text-xl font-bold">Engineering Capabilities</h3>
              <ul className="mt-6 space-y-4">
                {capabilities.map((item) => (
                  <li key={item} className="flex gap-3 text-[15px] leading-[1.55] text-steel-800">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-gold-600" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-steel-200 bg-steel-50">
        <div className="container-page flex flex-col items-start gap-6 py-10 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-5">
            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-sm bg-navy-900 text-gold-400">
              <Award className="h-7 w-7" strokeWidth={1.5} aria-hidden="true" />
            </span>
            <div>
              <p className="font-serif text-xl font-bold text-navy-900">ISO 9001:2015 Certified Company</p>
              <p className="text-[15px] text-steel-700">Quality management that governs our design, service and supply work.</p>
            </div>
          </div>
          <Link to="/about#quality" className="btn-primary">Our Quality Commitment</Link>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-page">
          <Reveal>
            <SectionHeading
              eyebrow="Core Services"
              title="Hydraulic Services From Survey to Maintenance"
              description="Eight focused services cover the full life of a hydraulic system, from the first survey to planned maintenance and overhaul."
            />
          </Reveal>
          <div className="mt-14 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {services.slice(0, 6).map((service, i) => (
              <Reveal key={service.slug} delay={(i % 3) * 0.08}>
                <ServiceCard service={service} />
              </Reveal>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link to="/services" className="btn-primary">View All Services</Link>
          </div>
        </div>
      </section>

      <section className="section-pad bg-steel-50">
        <div className="container-page">
          <Reveal>
            <SectionHeading
              eyebrow="Product Categories"
              title="Equipment, Components and Brands"
              description="Hydraulic cylinders, power units, valves, lubrication, seals, filtration and spare parts, from in-house manufacture and authorised distributors."
            />
          </Reveal>
          <div className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-sm border border-steel-200 bg-steel-200 md:grid-cols-3 lg:grid-cols-5">
            {productCategories.map((category) => (
              <Link
                key={category.id}
                to={`/products?category=${category.id}`}
                className="group flex min-h-[150px] flex-col justify-between bg-white p-6 transition duration-300 hover:bg-navy-900"
              >
                <span className="font-serif text-lg font-bold text-navy-900 transition group-hover:text-white">{category.title}</span>
                <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-gold-700 transition group-hover:text-gold-300">
                  Browse
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
                </span>
              </Link>
            ))}
          </div>
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {featuredProducts.map((product, i) => (
              <Reveal key={product.slug} delay={i * 0.08}>
                <ProductCard product={product} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-page">
          <Reveal>
            <SectionHeading
              eyebrow="Industries Served"
              title="Experience Across Demanding Sectors"
              description="We support equipment in the sectors that depend on hydraulic reliability most."
            />
          </Reveal>
          <div className="mt-14 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {industries.map((industry, i) => (
              <Reveal key={industry.slug} delay={(i % 3) * 0.08}>
                <IndustryCard industry={industry} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-steel-50">
        <div className="container-page">
          <Reveal>
            <SectionHeading
              eyebrow="Agencies & Distributorships"
              title="Authorised Partner Brands"
              description="ERAM works with established manufacturers, supplying their products and supporting them with local engineering."
            />
          </Reveal>
          <ul className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-sm border border-steel-200 bg-steel-200 sm:grid-cols-2 lg:grid-cols-4">
            {agencies.slice(0, 4).map((agency) => (
              <li key={agency.name} className="bg-white">
                <a href={agency.href} target="_blank" rel="noopener noreferrer" className="group flex h-full flex-col p-7 transition duration-300 hover:bg-steel-50">
                  <span className="font-serif text-lg font-bold text-navy-900">{agency.name}</span>
                  <span className="mt-3 text-sm leading-[1.6] text-steel-700">{agency.description}</span>
                  <span className="mt-5 text-sm font-semibold text-gold-700 transition group-hover:underline">Visit website</span>
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-10 text-center">
            <Link to="/agencies" className="inline-flex items-center gap-2 font-semibold text-navy-800 transition hover:text-gold-700">
              View all partners <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-page grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:items-start">
          <Reveal>
            <SectionHeading
              eyebrow="Why Choose ERAM"
              title="Dependable Engineering You Can Verify"
              description="We combine documented quality practice, in-house manufacturing and local presence to keep your equipment running."
            />
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a href={`tel:${company.phones[0].tel}`} className="btn-primary">
                <Phone className="h-4 w-4" aria-hidden="true" />
                {company.phones[0].display}
              </a>
              <a href={`mailto:${company.email}`} className="btn-outline border-navy-300 text-navy-900 hover:border-navy-900 hover:bg-navy-900 hover:text-white">
                {company.email}
              </a>
            </div>
          </Reveal>
          <div className="grid gap-6 sm:grid-cols-2">
            {whyChoose.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.08}>
                <div className="card h-full p-7 hover:border-navy-300 hover:shadow-md">
                  <item.icon className="h-6 w-6 text-gold-700" strokeWidth={1.75} aria-hidden="true" />
                  <h3 className="mt-5 text-lg font-bold">{item.title}</h3>
                  <p className="mt-3 text-[15px] leading-[1.6] text-steel-700">{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <QuoteCTA />
    </>
  );
}
