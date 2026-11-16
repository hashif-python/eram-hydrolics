import { ArrowLeft, Check, Mail } from 'lucide-react';
import { Link, Navigate, useParams } from 'react-router-dom';
import HeroBanner from '@/components/HeroBanner';
import QuoteCTA from '@/components/QuoteCTA';
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';
import ServiceCard from '@/components/ServiceCard';
import { services } from '@/data/services';
import { useDocumentMeta } from '@/hooks/useDocumentMeta';

export default function ServiceDetailPage() {
  const { slug } = useParams();
  const service = services.find((s) => s.slug === slug);

  useDocumentMeta(
    service?.title ?? 'Service',
    service?.summary ?? 'Hydraulic service details from ERAM Hydraulics.',
  );

  if (!service) return <Navigate to="/services" replace />;

  const related = services.filter((s) => s.slug !== service.slug).slice(0, 3);
  const Icon = service.icon;

  return (
    <>
      <HeroBanner
        image={service.image}
        eyebrow="Service"
        title={service.title}
        description={service.summary}
        breadcrumbs={[{ label: 'Services', to: '/services' }, { label: service.title }]}
        actions={
          <Link to={`/contact?service=${service.slug}`} className="btn-gold">
            <Mail className="h-4 w-4" aria-hidden="true" />
            Enquire About This Service
          </Link>
        }
      />

      <section className="section-pad">
        <div className="container-page grid gap-14 lg:grid-cols-[1.6fr_1fr]">
          <Reveal>
            <div className="flex items-center gap-4">
              <span className="flex h-12 w-12 items-center justify-center rounded-sm border border-gold-400/60 text-gold-700">
                <Icon className="h-6 w-6" strokeWidth={1.75} aria-hidden="true" />
              </span>
              <h2 className="font-serif text-2xl font-bold md:text-3xl">Service Overview</h2>
            </div>
            <div className="mt-8 space-y-5 text-lg leading-[1.7] text-steel-700">
              {service.description.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-14 grid gap-10 md:grid-cols-2">
              <div>
                <h3 className="text-xl font-bold">Key Capabilities</h3>
                <ul className="mt-5 space-y-4">
                  {service.capabilities.map((item) => (
                    <li key={item} className="flex gap-3 text-[15px] leading-[1.6] text-steel-800">
                      <Check className="mt-1 h-4 w-4 shrink-0 text-gold-600" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold">Typical Applications</h3>
                <ul className="mt-5 space-y-4">
                  {service.applications.map((item) => (
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
              <h3 className="font-serif text-xl font-bold">Start an Enquiry</h3>
              <p className="mt-4 text-[15px] leading-[1.6] text-steel-700">
                Tell us about your equipment, location and the problem. We will confirm the scope and the next steps.
              </p>
              <Link to={`/contact?service=${service.slug}`} className="btn-primary mt-7 w-full">
                <Mail className="h-4 w-4" aria-hidden="true" />
                Enquire Now
              </Link>
              <Link to="/services" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-navy-800 hover:text-gold-700">
                <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                Back to all services
              </Link>
            </aside>
          </Reveal>
        </div>
      </section>

      <section className="section-pad bg-steel-50">
        <div className="container-page">
          <Reveal>
            <SectionHeading eyebrow="Related Services" title="Other Services You May Need" />
          </Reveal>
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {related.map((item) => (
              <ServiceCard key={item.slug} service={item} />
            ))}
          </div>
        </div>
      </section>

      <QuoteCTA />
    </>
  );
}
