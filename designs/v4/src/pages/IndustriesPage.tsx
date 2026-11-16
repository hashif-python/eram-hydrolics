import { ArrowRight, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import HeroBanner from '@/components/HeroBanner';
import QuoteCTA from '@/components/QuoteCTA';
import Reveal from '@/components/Reveal';
import { industries } from '@/data/industries';
import { useDocumentMeta } from '@/hooks/useDocumentMeta';
import { IMAGES, asset } from '@/lib/images';

export default function IndustriesPage() {
  useDocumentMeta(
    'Industries',
    'Hydraulic engineering solutions for Oil & Gas, Marine & Offshore, Industrial Manufacturing, Mobile Hydraulics and Construction & Heavy Equipment.',
  );

  return (
    <>
      <HeroBanner
        image={asset(IMAGES.industriesBanner, 'Offshore oil platform under a bright sky')}
        eyebrow="Industries We Serve"
        title="Hydraulic Solutions for Demanding Sectors"
        description="Each industry places different demands on hydraulic equipment. Here is how ERAM supports the systems that matter most in each."
        breadcrumbs={[{ label: 'Industries' }]}
      />

      {industries.map((industry, index) => {
        const Icon = industry.icon;
        const reversed = index % 2 === 1;
        return (
          <section
            key={industry.slug}
            id={industry.slug}
            className={`section-pad scroll-mt-28 ${index % 2 === 0 ? 'bg-white' : 'bg-steel-50'}`}
          >
            <div className="container-page grid items-start gap-14 lg:grid-cols-2">
              <Reveal className={reversed ? 'lg:order-2' : ''}>
                <div className="card overflow-hidden">
                  <img
                    src={industry.image.src}
                    alt={industry.image.alt}
                    loading="lazy"
                    decoding="async"
                    width={940}
                    height={650}
                    className="aspect-[4/3] w-full object-cover"
                  />
                </div>
              </Reveal>
              <Reveal delay={0.1} className={reversed ? 'lg:order-1' : ''}>
                <div className="flex items-center gap-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-sm border border-gold-400/60 text-gold-700">
                    <Icon className="h-6 w-6" strokeWidth={1.75} aria-hidden="true" />
                  </span>
                  <p className="eyebrow">Industry {String(index + 1).padStart(2, '0')}</p>
                </div>
                <h2 className="mt-5 font-serif text-3xl font-bold md:text-4xl">{industry.title}</h2>
                <p className="mt-5 text-lg leading-[1.7] text-steel-700">{industry.summary}</p>

                <div className="mt-10 space-y-8">
                  <div>
                    <h3 className="text-lg font-bold">Engineering Challenges</h3>
                    <ul className="mt-4 space-y-3">
                      {industry.challenges.map((item) => (
                        <li key={item} className="text-[15px] leading-[1.6] text-steel-700">
                          <span className="mr-2 inline-block h-1.5 w-1.5 translate-y-[-3px] rounded-full bg-steel-500" aria-hidden="true" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">Our Solutions</h3>
                    <ul className="mt-4 space-y-3">
                      {industry.solutions.map((item) => (
                        <li key={item} className="flex gap-3 text-[15px] leading-[1.6] text-steel-800">
                          <Check className="mt-1 h-4 w-4 shrink-0 text-gold-600" aria-hidden="true" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">Typical Equipment</h3>
                    <ul className="mt-4 flex flex-wrap gap-2">
                      {industry.equipment.map((item) => (
                        <li key={item} className="rounded-sm border border-steel-300 bg-white px-3 py-1.5 text-sm text-steel-800">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <Link to="/contact" className="btn-primary mt-10">
                  Discuss Your {industry.title} Requirement <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </Reveal>
            </div>
          </section>
        );
      })}

      <QuoteCTA />
    </>
  );
}
