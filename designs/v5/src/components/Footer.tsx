import { company, navLinks } from '@/data/siteContent';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-ink-950 text-ink-300">
      <div className="mx-auto max-w-7xl px-6 pt-20">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <span className="inline-flex rounded-sm bg-white p-2"><img src="/styles/v5/eram-official-logo.png" alt="ERAM Hydraulics official logo" className="h-12 w-auto object-contain" width="213" height="71" /></span>
            <p className="mt-4 max-w-xs leading-relaxed">
              ISO 9001:2015 certified supplier of hydraulic, pneumatic and lubrication solutions across the Middle East.
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-signal-300">Explore</p>
            <ul className="mt-5 space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="font-semibold text-ink-200 transition-colors hover:text-signal-300">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-signal-300">Head Office</p>
            <p className="mt-5 leading-relaxed">{company.address}</p>
            <a href={`mailto:${company.email}`} className="mt-4 block font-semibold text-ink-200 transition-colors hover:text-signal-300">
              {company.email}
            </a>
            <a href={company.phoneHref} className="mt-2 block font-semibold text-ink-200 transition-colors hover:text-signal-300">
              {company.phoneDisplay}
            </a>
          </div>
        </div>

        <p
          aria-hidden
          className="mt-16 select-none text-center font-display text-[clamp(3.5rem,15vw,13rem)] font-bold uppercase leading-none text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.14)]"
        >
          Eram Hydraulics
        </p>
      </div>

      <div className="border-t border-white/10">
        <p className="mx-auto max-w-7xl px-6 py-6 text-sm text-ink-400">
          © {year} {company.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
