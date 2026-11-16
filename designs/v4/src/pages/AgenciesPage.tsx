import { ExternalLink } from 'lucide-react';
import HeroBanner from '@/components/HeroBanner';
import QuoteCTA from '@/components/QuoteCTA';
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';
import { agencies } from '@/data/agencies';
import { useDocumentMeta } from '@/hooks/useDocumentMeta';
import { IMAGES, asset } from '@/lib/images';

export default function AgenciesPage() {
  useDocumentMeta(
    'Agencies & Distributorships',
    'Authorised agencies and distributorship partners of ERAM Hydraulics, including Sun Hydraulics, Pall Corporation, Chicago Pneumatic and Bijur Delimon.',
  );

  return (
    <>
      <HeroBanner
        image={asset(IMAGES.agenciesBanner, 'Warehouse interior with stacked steel pipes and high ceilings')}
        eyebrow="Agencies & Distributorships"
        title="Authorised Partners and Brands"
        description="ERAM supplies the products of established manufacturers and supports them with local engineering, stock and service."
        breadcrumbs={[{ label: 'Agencies & Distributorships' }]}
      />

      <section className="section-pad">
        <div className="container-page">
          <Reveal>
            <SectionHeading
              eyebrow="Partner Brands"
              title="Brands We Work With"
              description="Each partner is listed below with a short description of our relationship. Visit the manufacturer website for their full product information."
            />
          </Reveal>
          <ul className="mt-14 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {agencies.map((agency, i) => (
              <li key={agency.name} className="list-none">
                <Reveal delay={(i % 3) * 0.06} className="h-full">
                  <article className="card group flex h-full flex-col p-8 hover:border-navy-300 hover:shadow-lg">
                    <div className="flex h-20 items-center border-b border-steel-200 pb-6">
                      <span className="font-serif text-2xl font-bold tracking-wide text-navy-900">{agency.name}</span>
                    </div>
                    <p className="mt-6 flex-1 text-[15px] leading-[1.7] text-steel-700">{agency.description}</p>
                    <a
                      href={agency.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-navy-800 transition hover:text-gold-700"
                    >
                      Visit {agency.name} website
                      <ExternalLink className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
                    </a>
                  </article>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <QuoteCTA title="Looking for a partner brand product?" text="Tell us the product and specification you need and we will confirm availability through the relevant partner." />
    </>
  );
}
