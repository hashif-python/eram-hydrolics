import HeroBanner from '@/components/HeroBanner';
import QuoteCTA from '@/components/QuoteCTA';
import Reveal from '@/components/Reveal';
import ServiceCard from '@/components/ServiceCard';
import { services } from '@/data/services';
import { useDocumentMeta } from '@/hooks/useDocumentMeta';
import { IMAGES, asset } from '@/lib/images';

export default function ServicesPage() {
  useDocumentMeta(
    'Services',
    'Hydraulic troubleshooting, marine and offshore services, cylinder repair, power pack manufacturing, installation, commissioning, flushing, lubrication and component overhaul from ERAM Hydraulics.',
  );

  return (
    <>
      <HeroBanner
        image={asset(IMAGES.servicesBanner, 'Engineer inspecting hydraulic machinery during a site survey')}
        eyebrow="Our Services"
        title="Hydraulic Services Across the Equipment Lifecycle"
        description="From the first survey to design, installation, testing and planned maintenance, our engineers support hydraulic systems at every stage."
        breadcrumbs={[{ label: 'Services' }]}
      />

      <section className="section-pad">
        <div className="container-page grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={service.slug} delay={(i % 3) * 0.08}>
              <ServiceCard service={service} />
            </Reveal>
          ))}
        </div>
      </section>

      <QuoteCTA
        title="Not sure which service you need?"
        text="Describe the problem or the equipment and we will advise on the right starting point, whether that is a survey, a repair or a new installation."
      />
    </>
  );
}
