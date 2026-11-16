import { Target, Eye, ShieldCheck, HardHat, Wrench, Ruler } from 'lucide-react';
import { Link } from 'react-router-dom';
import HeroBanner from '@/components/HeroBanner';
import QuoteCTA from '@/components/QuoteCTA';
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';
import { company } from '@/data/company';
import { useDocumentMeta } from '@/hooks/useDocumentMeta';
import { IMAGES, asset } from '@/lib/images';

const expertise = [
  { icon: Ruler, title: 'Design & Fabrication', text: 'Custom power packs, cylinders, lubrication systems and control valve stands engineered to the duty and site.' },
  { icon: Wrench, title: 'Installation & Commissioning', text: 'Structured installation, start-up, pressure setting and documented handover.' },
  { icon: HardHat, title: 'On-Site Services', text: 'Troubleshooting, surveys and repairs carried out at the customer’s plant, vessel or site.' },
];

const commitments = [
  'Quality management aligned with ISO 9001:2015',
  'Documented testing of repaired and newly built equipment',
  'Safe isolation and site safety practices on every job',
  'Clear reporting so customers can verify each outcome',
];

export default function AboutPage() {
  useDocumentMeta(
    'About Us',
    'Learn about ERAM Hydraulics, an ISO 9001:2015 certified hydraulic engineering company in Dammam, its mission, values, engineering expertise and quality commitments.',
  );

  return (
    <>
      <HeroBanner
        image={asset(IMAGES.aboutBanner, 'Engineer working on hydraulic equipment in a workshop')}
        eyebrow="About ERAM Hydraulics"
        title="Engineering Heritage in Hydraulic Fluid Power"
        description={company.certification + ' hydraulic, pneumatic and lubrication specialists serving the Middle East.'}
        breadcrumbs={[{ label: 'About Us' }]}
      />

      <section className="section-pad">
        <div className="container-page grid gap-14 lg:grid-cols-[1.2fr_1fr] lg:items-start">
          <Reveal>
            <SectionHeading eyebrow="Company Introduction" title="Who We Are" />
            <div className="mt-8 space-y-5 text-lg leading-[1.7] text-steel-700">
              {company.about.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="card overflow-hidden">
              <img
                src={IMAGES.pipelines}
                alt="Industrial pipework and equipment inside a manufacturing facility"
                loading="lazy"
                width={940}
                height={650}
                className="aspect-[4/3] w-full object-cover"
              />
              <div className="p-7">
                <p className="text-sm font-semibold uppercase tracking-[0.14em] text-gold-700">Part of Eram Holdings</p>
                <p className="mt-3 text-[15px] leading-[1.6] text-steel-700">{company.group}, spanning Oil and Gas, Power, Construction, Manufacturing and more.</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-pad bg-navy-900">
        <div className="container-page">
          <Reveal>
            <SectionHeading tone="dark" eyebrow="Direction" title="Mission, Vision & Values" align="center" />
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            <Reveal>
              <div className="h-full rounded-sm border border-navy-700 bg-navy-950/40 p-8">
                <Target className="h-7 w-7 text-gold-400" strokeWidth={1.5} aria-hidden="true" />
                <h3 className="mt-5 font-serif text-2xl font-bold text-white">Our Mission</h3>
                <p className="mt-4 text-[16px] leading-[1.7] text-steel-200">{company.mission}</p>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="h-full rounded-sm border border-navy-700 bg-navy-950/40 p-8">
                <Eye className="h-7 w-7 text-gold-400" strokeWidth={1.5} aria-hidden="true" />
                <h3 className="mt-5 font-serif text-2xl font-bold text-white">Our Vision</h3>
                <p className="mt-4 text-[16px] leading-[1.7] text-steel-200">{company.vision}</p>
              </div>
            </Reveal>
          </div>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {company.values.map((value, i) => (
              <Reveal key={value.title} delay={i * 0.06}>
                <div className="h-full border-t-2 border-gold-500 bg-navy-950/40 p-6">
                  <h3 className="font-serif text-lg font-bold text-white">{value.title}</h3>
                  <p className="mt-3 text-[15px] leading-[1.6] text-steel-200">{value.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-page">
          <Reveal>
            <SectionHeading eyebrow="Engineering Expertise" title="What We Bring to Your Plant" description="Our team covers the full cycle of hydraulic work, from first design to long-term maintenance." />
          </Reveal>
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {expertise.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.08}>
                <div className="card h-full p-8">
                  <item.icon className="h-7 w-7 text-gold-700" strokeWidth={1.5} aria-hidden="true" />
                  <h3 className="mt-5 text-xl font-bold">{item.title}</h3>
                  <p className="mt-3 leading-[1.6] text-steel-700">{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="quality" className="section-pad scroll-mt-28 bg-steel-50">
        <div className="container-page grid gap-14 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <SectionHeading eyebrow="Quality & Safety" title="Our Commitments" />
            <p className="mt-6 text-lg leading-[1.7] text-steel-700">
              ERAM Hydraulics is ISO 9001:2015 certified. Our quality management system shapes how we design, build, test and document every job.
            </p>
            <Link to="/services" className="mt-8 inline-flex items-center gap-2 font-semibold text-navy-800 transition hover:text-gold-700">
              Review our services
            </Link>
          </Reveal>
          <Reveal delay={0.1}>
            <ul className="space-y-4">
              {commitments.map((item) => (
                <li key={item} className="flex gap-4 rounded-sm border border-steel-200 bg-white p-5">
                  <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-success-700" aria-hidden="true" />
                  <span className="text-[15px] leading-[1.6] text-steel-800">{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-page">
          <Reveal>
            <SectionHeading eyebrow="Company Capabilities" title="Facilities and Locations" description="Our Dammam facility supports design, fabrication and overhaul. Our branches support customers across the Kingdom." />
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            <div className="card p-7">
              <h3 className="text-lg font-bold">Head Office &amp; Facility</h3>
              <address className="mt-4 not-italic text-[15px] leading-[1.7] text-steel-700">
                {company.headOffice.lines.map((line) => <span key={line} className="block">{line}</span>)}
              </address>
            </div>
            {company.branches.map((branch) => (
              <div key={branch.name} className="card p-7">
                <h3 className="text-lg font-bold">{branch.name}</h3>
                <address className="mt-4 not-italic text-[15px] leading-[1.7] text-steel-700">
                  {branch.lines.map((line) => <span key={line} className="block">{line}</span>)}
                </address>
                <a href={`tel:${branch.tel}`} className="mt-4 inline-block text-[15px] font-semibold text-navy-800 hover:text-gold-700">{branch.phone}</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <QuoteCTA />
    </>
  );
}
