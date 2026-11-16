import { useEffect, useState } from 'react';
import { Menu, Phone, X } from 'lucide-react';
import { company, navLinks } from '@/data/siteContent';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-40">
      <div className="hidden bg-primary-900 text-primary-100 md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2 text-sm">
          <span>Dammam, Saudi Arabia · Riyadh branch available</span>
          <div className="flex items-center gap-6">
            <a href={`mailto:${company.email}`} className="transition-colors hover:text-accent-300">
              {company.email}
            </a>
            <a href={company.phoneHref} className="font-semibold transition-colors hover:text-accent-300">
              {company.phoneDisplay}
            </a>
          </div>
        </div>
      </div>

      <nav
        className={`bg-white transition-shadow duration-300 ${
          scrolled || open ? 'shadow-md shadow-primary-900/10' : ''
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#top" className="flex items-center gap-3">
            <img src="/styles/v3/eram-official-logo.png" width="213" height="71" alt="ERAM Hydraulics official logo" className="h-12 w-auto max-w-[175px] object-contain" />
          </a>

          <ul className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm font-semibold text-primary-900 transition-colors hover:text-accent-600"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="hidden rounded-full bg-accent-500 px-5 py-2.5 text-sm font-semibold text-primary-900 transition-colors hover:bg-accent-400 sm:inline-flex sm:items-center sm:gap-2"
            >
              <Phone className="h-4 w-4" />
              Get a Quote
            </a>
            <button
              type="button"
              onClick={() => setOpen((value) => !value)}
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              className="rounded-md p-2 text-primary-900 transition-colors hover:bg-primary-50 lg:hidden"
            >
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {open && (
          <div className="border-t border-primary-100 bg-white px-6 pb-6 lg:hidden">
            <ul className="flex flex-col">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block border-b border-primary-50 py-4 font-semibold text-primary-900"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
