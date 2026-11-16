import { company, navLinks } from '@/data/siteContent';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-primary-900 text-primary-200">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-3">
        <div>
          <span className="inline-flex rounded-sm bg-white p-2"><img src="/styles/v3/eram-official-logo.png" alt="ERAM Hydraulics official logo" className="h-12 w-auto object-contain" width="213" height="71" /></span>
          <p className="mt-4 max-w-xs leading-relaxed">
            ISO 9001:2015 certified supplier of hydraulic, pneumatic and lubrication solutions across the Middle East.
          </p>
        </div>

        <div>
          <p className="font-semibold text-white">Explore</p>
          <ul className="mt-4 space-y-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="transition-colors hover:text-accent-300">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-semibold text-white">Head Office</p>
          <p className="mt-4 leading-relaxed">{company.address}</p>
          <a href={`mailto:${company.email}`} className="mt-4 block transition-colors hover:text-accent-300">
            {company.email}
          </a>
          <a href={company.phoneHref} className="mt-2 block transition-colors hover:text-accent-300">
            {company.phoneDisplay}
          </a>
        </div>
      </div>

      <div className="border-t border-primary-800">
        <p className="mx-auto max-w-7xl px-6 py-6 text-sm text-primary-300">
          © {year} {company.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
