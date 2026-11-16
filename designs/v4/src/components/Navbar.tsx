import { useEffect, useRef, useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { ChevronDown, Mail, Menu, Phone, X } from 'lucide-react';
import Logo from '@/components/Logo';
import { company } from '@/data/company';
import { primaryNav } from '@/data/navigation';
import type { NavItem } from '@/types/content';

const linkBase =
  'relative py-2 font-sans text-[15px] font-semibold tracking-wide text-navy-900 transition-colors duration-200 hover:text-gold-700 after:absolute after:inset-x-0 after:-bottom-0.5 after:h-0.5 after:origin-left after:scale-x-0 after:bg-gold-500 after:transition-transform after:duration-300 hover:after:scale-x-100';
const linkActive = 'text-gold-700 after:scale-x-100';

function DesktopItem({
  item,
  open,
  onToggle,
  onOpen,
  onClose,
}: {
  item: NavItem;
  open: boolean;
  onToggle: () => void;
  onOpen: () => void;
  onClose: () => void;
}) {
  if (!item.children) {
    return (
      <NavLink to={item.to} end={item.to === '/'} className={({ isActive }) => `${linkBase} ${isActive ? linkActive : ''}`}>
        {item.label}
      </NavLink>
    );
  }

  return (
    <div className="relative flex items-center gap-1" onMouseEnter={onOpen} onMouseLeave={onClose}>
      <NavLink to={item.to} className={({ isActive }) => `${linkBase} ${isActive ? linkActive : ''}`}>
        {item.label}
      </NavLink>
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        aria-label={`Show ${item.label} menu`}
        className="rounded-sm p-1 text-navy-900 transition hover:text-gold-700"
      >
        <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${open ? 'rotate-180' : ''}`} aria-hidden="true" />
      </button>
      <div
        className={`absolute left-0 top-full z-50 pt-3 transition duration-200 ${
          open ? 'visible translate-y-0 opacity-100' : 'invisible -translate-y-1 opacity-0'
        }`}
      >
        <ul className="w-80 rounded-sm border border-steel-200 bg-white py-2 shadow-xl">
          {item.children.map((child) => (
            <li key={child.to}>
              <Link
                to={child.to}
                onClick={onClose}
                className="block border-l-2 border-transparent px-5 py-2.5 font-sans text-[15px] text-steel-800 transition hover:border-gold-500 hover:bg-steel-50 hover:text-navy-900"
              >
                {child.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpenMenu(null);
        setMobileOpen(false);
      }
    };
    const onPointer = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) setOpenMenu(null);
    };
    document.addEventListener('keydown', onKey);
    document.addEventListener('mousedown', onPointer);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('mousedown', onPointer);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const closeAll = () => {
    setOpenMenu(null);
    setMobileOpen(false);
    setMobileExpanded(null);
  };

  return (
    <header
      ref={navRef}
      className={`sticky top-0 z-50 bg-white transition-shadow duration-300 ${
        scrolled ? 'shadow-md' : 'border-b border-steel-200'
      }`}
    >
      <div className="hidden bg-navy-900 text-steel-200 lg:block">
        <div className="container-page flex h-9 items-center justify-between text-[13px]">
          <div className="flex items-center gap-6">
            <a href={`mailto:${company.email}`} className="inline-flex items-center gap-2 transition hover:text-gold-300">
              <Mail className="h-3.5 w-3.5" aria-hidden="true" />
              {company.email}
            </a>
            <a href={`tel:${company.phones[0].tel}`} className="inline-flex items-center gap-2 transition hover:text-gold-300">
              <Phone className="h-3.5 w-3.5" aria-hidden="true" />
              {company.phones[0].display}
            </a>
          </div>
          <p className="tracking-wide">{company.certification}</p>
        </div>
      </div>

      <nav aria-label="Main" className="container-page flex h-20 items-center justify-between">
        <Logo />

        <ul className="hidden items-center gap-7 lg:flex">
          {primaryNav.map((item) => (
            <li key={item.label}>
              <DesktopItem
                item={item}
                open={openMenu === item.label}
                onToggle={() => setOpenMenu(openMenu === item.label ? null : item.label)}
                onOpen={() => setOpenMenu(item.children ? item.label : null)}
                onClose={() => setOpenMenu(null)}
              />
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <Link to="/contact" className="btn-primary">
            Request a Quote
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setMobileOpen((v) => !v)}
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          className="inline-flex h-11 w-11 items-center justify-center rounded-sm border border-steel-300 text-navy-900 transition hover:border-navy-700 lg:hidden"
        >
          {mobileOpen ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
        </button>
      </nav>

      <div
        id="mobile-nav"
        className={`fixed inset-x-0 bottom-0 top-[80px] overflow-y-auto bg-white transition duration-300 lg:hidden ${
          mobileOpen ? 'visible opacity-100' : 'invisible opacity-0'
        }`}
      >
        <ul className="container-page divide-y divide-steel-200 py-4">
          {primaryNav.map((item) => {
            const expanded = mobileExpanded === item.label;
            return (
              <li key={item.label} className="py-1">
                {item.children ? (
                  <>
                    <div className="flex items-center justify-between">
                      <NavLink to={item.to} onClick={closeAll} className="py-3 font-serif text-lg text-navy-900">
                        {item.label}
                      </NavLink>
                      <button
                        type="button"
                        onClick={() => setMobileExpanded(expanded ? null : item.label)}
                        aria-expanded={expanded}
                        aria-label={`Show ${item.label} submenu`}
                        className="rounded-sm p-3 text-navy-900"
                      >
                        <ChevronDown className={`h-5 w-5 transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`} aria-hidden="true" />
                      </button>
                    </div>
                    {expanded && (
                      <ul className="mb-3 space-y-1 border-l-2 border-gold-500 pl-4">
                        {item.children.map((child) => (
                          <li key={child.to}>
                            <Link to={child.to} onClick={closeAll} className="block py-2 text-[15px] text-steel-700 hover:text-navy-900">
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                ) : (
                  <NavLink to={item.to} onClick={closeAll} className="block py-3 font-serif text-lg text-navy-900">
                    {item.label}
                  </NavLink>
                )}
              </li>
            );
          })}
        </ul>
        <div className="container-page space-y-3 pb-10 pt-4">
          <Link to="/contact" onClick={closeAll} className="btn-primary w-full">
            Request a Quote
          </Link>
          <a href={`tel:${company.phones[0].tel}`} className="btn-outline w-full border-navy-300 text-navy-900 hover:border-navy-900 hover:bg-navy-900 hover:text-white">
            <Phone className="h-4 w-4" aria-hidden="true" />
            {company.phones[0].display}
          </a>
        </div>
      </div>
    </header>
  );
}
