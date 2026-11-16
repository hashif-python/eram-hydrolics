import { useEffect, useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { company, navLinks } from '@/data/siteContent';

function Logo() {
  return <a href="#top" className="inline-flex shrink-0 items-center rounded-sm bg-white px-2.5 py-1.5" aria-label="ERAM Hydraulics home">
    <img src="/styles/v5/eram-official-logo.png" width="213" height="71" alt="ERAM Hydraulics official logo" className="block h-11 w-auto max-w-[170px] object-contain" />
  </a>;
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${
        scrolled || open ? 'border-b border-white/10 bg-ink-950/90 py-3 backdrop-blur-md' : 'py-5'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6">
        <Logo />

        <ul className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/5 p-1 backdrop-blur lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="block rounded-full px-4 py-2 text-sm font-semibold text-ink-100 transition-colors hover:bg-white/10 hover:text-signal-300"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href={company.phoneHref}
            className="group hidden items-center gap-2 rounded-full bg-signal-400 px-5 py-2.5 text-sm font-bold text-ink-950 transition-colors hover:bg-signal-300 sm:inline-flex"
          >
            {company.phoneDisplay}
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            className="rounded-full border border-white/15 p-2.5 text-white transition-colors hover:border-signal-400 lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="mt-3 border-t border-white/10 bg-ink-950 px-6 pb-8 pt-4 lg:hidden">
          <ul className="flex flex-col">
            {navLinks.map((link, index) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="flex items-baseline gap-4 border-b border-white/10 py-4 font-display text-3xl font-bold uppercase text-white"
                >
                  <span className="text-sm text-signal-400">0{index + 1}</span>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
