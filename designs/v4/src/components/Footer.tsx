import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone } from 'lucide-react';
import Logo from '@/components/Logo';
import { company } from '@/data/company';
import { primaryNav } from '@/data/navigation';
import { services } from '@/data/services';

const linkClass =
  'font-sans text-[15px] text-steel-300 transition-colors duration-200 hover:text-gold-300';

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-steel-300">
      <div className="container-page grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-6">
          <Logo tone="light" />
          <p className="max-w-xs text-[15px] leading-relaxed">
            Hydraulic, pneumatic and lubrication engineering for industry. {company.certification}.
          </p>
          <ul className="flex gap-5 text-sm">
            {company.social.map((s) => (
              <li key={s.label}>
                <a href={s.href} target="_blank" rel="noopener noreferrer" className="transition hover:text-gold-300">
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="mb-5 font-sans text-xs font-semibold uppercase tracking-[0.2em] text-gold-300">Quick Links</h2>
          <ul className="space-y-3">
            {primaryNav.map((item) => (
              <li key={item.label}>
                <Link to={item.to} className={linkClass}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="mb-5 font-sans text-xs font-semibold uppercase tracking-[0.2em] text-gold-300">Services</h2>
          <ul className="space-y-3">
            {services.map((s) => (
              <li key={s.slug}>
                <Link to={`/services/${s.slug}`} className={linkClass}>
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="mb-5 font-sans text-xs font-semibold uppercase tracking-[0.2em] text-gold-300">Contact</h2>
          <ul className="space-y-4 text-[15px]">
            <li className="flex gap-3">
              <MapPin className="mt-1 h-4 w-4 shrink-0 text-gold-400" aria-hidden="true" />
              <span>
                {company.headOffice.lines.map((line) => (
                  <span key={line} className="block">{line}</span>
                ))}
              </span>
            </li>
            {company.phones.map((p) => (
              <li key={p.tel} className="flex gap-3">
                <Phone className="h-4 w-4 shrink-0 text-gold-400" aria-hidden="true" />
                <a href={`tel:${p.tel}`} className={linkClass}>{p.display}</a>
              </li>
            ))}
            <li className="flex gap-3">
              <Mail className="h-4 w-4 shrink-0 text-gold-400" aria-hidden="true" />
              <a href={`mailto:${company.email}`} className={linkClass}>{company.email}</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-navy-800">
        <div className="container-page flex flex-col gap-3 py-6 text-sm text-steel-400 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} ERAM Hydraulics. All rights reserved.</p>
          <p>{company.group}</p>
        </div>
      </div>
    </footer>
  );
}
