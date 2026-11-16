import { ArrowRight, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { company } from '@/data/company';

interface QuoteCTAProps {
  title?: string;
  text?: string;
}

export default function QuoteCTA({
  title = 'Need a hydraulic solution engineered for your site?',
  text = 'Send us your equipment details and requirements. Our engineers will review your enquiry and respond with next steps.',
}: QuoteCTAProps) {
  return (
    <section className="bg-navy-900">
      <div className="container-page flex flex-col gap-10 py-16 md:flex-row md:items-center md:justify-between md:py-20">
        <div className="max-w-2xl">
          <h2 className="font-serif text-3xl font-bold text-white md:text-4xl">{title}</h2>
          <p className="mt-4 text-lg leading-[1.6] text-steel-200">{text}</p>
        </div>
        <div className="flex flex-col gap-4 sm:flex-row md:flex-col lg:flex-row">
          <Link to="/contact" className="btn-gold">
            Request a Quote
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
          <a href={`tel:${company.phones[0].tel}`} className="btn-outline">
            <Phone className="h-4 w-4" aria-hidden="true" />
            {company.phones[0].display}
          </a>
        </div>
      </div>
    </section>
  );
}
