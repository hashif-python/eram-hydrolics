import { Mail, MapPin, Phone } from 'lucide-react';
import { useSearchParams } from 'react-router-dom';
import ContactForm from '@/components/ContactForm';
import HeroBanner from '@/components/HeroBanner';
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';
import { company } from '@/data/company';
import { products } from '@/data/products';
import { services } from '@/data/services';
import { useDocumentMeta } from '@/hooks/useDocumentMeta';
import { IMAGES, asset } from '@/lib/images';

function topicFromParams(service: string | null, product: string | null): string | undefined {
  if (service) return services.find((s) => s.slug === service)?.title;
  if (product && products.some((p) => p.slug === product)) return 'Products';
  return undefined;
}

export default function ContactPage() {
  useDocumentMeta(
    'Contact Us',
    'Contact ERAM Hydraulics in Dammam or Riyadh. Request a quote, send an enquiry, or call our team on +966 13 837 4439.',
  );

  const [searchParams] = useSearchParams();
  const service = searchParams.get('service');
  const product = searchParams.get('product');
  const initialTopic = topicFromParams(service, product);
  const formKey = `${service ?? ''}|${product ?? ''}`;

  return (
    <>
      <HeroBanner
        image={asset(IMAGES.contactBanner, 'Engineer reviewing hydraulic equipment on a workshop floor')}
        eyebrow="Contact Us"
        title="Request a Quote or Speak to Our Team"
        description="Share your requirement and our engineers will respond. For urgent support, call our Dammam office directly."
        breadcrumbs={[{ label: 'Contact' }]}
      />

      <section className="section-pad">
        <div className="container-page grid gap-14 lg:grid-cols-[1fr_1.2fr] lg:items-start">
          <Reveal>
            <SectionHeading eyebrow="Quick Contact" title="Get in Touch" />
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              <a href={`tel:${company.phones[0].tel}`} className="card flex items-center gap-4 p-6 hover:border-navy-300 hover:shadow-md">
                <Phone className="h-5 w-5 shrink-0 text-gold-700" aria-hidden="true" />
                <span>
                  <span className="block text-xs font-semibold uppercase tracking-wider text-steel-600">Telephone</span>
                  <span className="mt-1 block font-semibold text-navy-900">{company.phones[0].display}</span>
                </span>
              </a>
              <a href={`mailto:${company.email}`} className="card flex items-center gap-4 p-6 hover:border-navy-300 hover:shadow-md">
                <Mail className="h-5 w-5 shrink-0 text-gold-700" aria-hidden="true" />
                <span>
                  <span className="block text-xs font-semibold uppercase tracking-wider text-steel-600">Email</span>
                  <span className="mt-1 block font-semibold text-navy-900">{company.email}</span>
                </span>
              </a>
            </div>

            <div className="mt-10 space-y-8">
              <div className="flex gap-4">
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-gold-700" aria-hidden="true" />
                <div>
                  <h3 className="font-bold">{company.headOffice.name}</h3>
                  <address className="mt-2 not-italic text-[15px] leading-[1.7] text-steel-700">
                    {company.headOffice.lines.map((line) => <span key={line} className="block">{line}</span>)}
                  </address>
                  <a href={`tel:${company.phones[1].tel}`} className="mt-2 inline-block text-[15px] text-navy-800 hover:text-gold-700">{company.phones[1].display}</a>
                </div>
              </div>
              {company.branches.map((branch) => (
                <div key={branch.name} className="flex gap-4">
                  <MapPin className="mt-1 h-5 w-5 shrink-0 text-gold-700" aria-hidden="true" />
                  <div>
                    <h3 className="font-bold">{branch.name}</h3>
                    <address className="mt-2 not-italic text-[15px] leading-[1.7] text-steel-700">
                      {branch.lines.map((line) => <span key={line} className="block">{line}</span>)}
                    </address>
                    <a href={`tel:${branch.tel}`} className="mt-2 inline-block text-[15px] text-navy-800 hover:text-gold-700">{branch.phone}</a>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="card p-8 md:p-10">
              <h2 className="font-serif text-2xl font-bold">Send an Enquiry</h2>
              <p className="mt-3 text-[15px] text-steel-700">Fields marked with an asterisk are required.</p>
              <div className="mt-8">
                <ContactForm key={formKey} initialTopic={initialTopic} />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="pb-16 md:pb-24">
        <div className="container-page">
          <Reveal>
            <div className="overflow-hidden rounded-sm border border-steel-200">
              <iframe
                title="ERAM Hydraulics location map, 2nd Industrial City, Dammam"
                src={company.mapEmbedUrl}
                className="h-[360px] w-full md:h-[440px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
