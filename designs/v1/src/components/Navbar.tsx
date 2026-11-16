import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Wrench, Phone, Mail } from 'lucide-react';
import { Logo } from './Logo';

interface NavLink {
  to: string;
  label: string;
  children?: { to: string; label: string }[];
}

const navLinks: NavLink[] = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services', children: [
    { to: '/services#offshore-onshore-hydraulics', label: 'Offshore & Onshore' },
    { to: '/services#marine-hydraulics', label: 'Marine Hydraulics' },
    { to: '/services#industrial-hydraulics', label: 'Industrial Hydraulics' },
    { to: '/services#mobile-hydraulics', label: 'Mobile Hydraulics' },
    { to: '/services#cylinder-repairs', label: 'Cylinder Repairs' },
    { to: '/services#power-pack-manufacturing', label: 'Power Pack Manufacturing' },
  ]},
  { to: '/products', label: 'Products' },
  { to: '/agencies', label: 'Agencies' },
  { to: '/contact', label: 'Contact' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setDropdownOpen(false);
    setMobileServicesOpen(false);
  }, [location.pathname, location.hash]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <>
      {/* Top bar */}
      <div className={`hidden md:block fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? '-translate-y-full' : 'translate-y-0'}`}>
        <div className="bg-charcoal-950 text-steel-400 text-xs">
          <div className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-between">
            <span className="flex items-center gap-2">
              <Wrench className="w-3.5 h-3.5 text-eram-500" />
              ISO 9001:2015 Certified Hydraulic Engineering Company
            </span>
            <div className="flex items-center gap-6">
              <a href="tel:+966500000000" className="flex items-center gap-1.5 hover:text-white transition-colors">
                <Phone className="w-3.5 h-3.5" /> +966 50 000 0000
              </a>
              <a href="mailto:info@eramhydraulics.com" className="flex items-center gap-1.5 hover:text-white transition-colors">
                <Mail className="w-3.5 h-3.5" /> info@eramhydraulics.com
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <nav className={`fixed left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'top-0 glass border-b border-white/5' : 'top-0 md:top-9 bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-18 py-4">
            <Link to="/" className="flex-shrink-0" aria-label="ERAM Hydraulics home">
              <Logo />
            </Link>

            {/* Desktop links */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) =>
                link.children ? (
                  <div
                    key={link.to}
                    className="relative"
                    onMouseEnter={() => setDropdownOpen(true)}
                    onMouseLeave={() => setDropdownOpen(false)}
                  >
                    <Link
                      to={link.to}
                      className={`flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                        isActive(link.to) ? 'text-eram-400' : 'text-steel-200 hover:text-white'
                      }`}
                    >
                      {link.label}
                      <ChevronDown className={`w-4 h-4 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />
                    </Link>
                    <div
                      className={`absolute top-full left-0 mt-1 w-64 glass rounded-xl border border-white/5 overflow-hidden transition-all duration-200 ${
                        dropdownOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                      }`}
                    >
                      <div className="p-2">
                        {link.children.map((child) => (
                          <Link
                            key={child.to}
                            to={child.to}
                            className="block px-3 py-2.5 text-sm text-steel-300 hover:text-white hover:bg-eram-600/20 rounded-lg transition-colors"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    key={link.to}
                    to={link.to}
                    className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                      isActive(link.to) ? 'text-eram-400' : 'text-steel-200 hover:text-white'
                    }`}
                  >
                    {link.label}
                  </Link>
                )
              )}
            </div>

            <div className="hidden lg:flex items-center gap-3">
              <Link
                to="/contact"
                className="px-5 py-2.5 bg-eram-600 hover:bg-eram-700 text-white text-sm font-semibold rounded-lg transition-all hover:shadow-lg hover:shadow-eram-600/30 hover:-translate-y-0.5"
              >
                Request Quote
              </Link>
            </div>

            {/* Mobile toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden text-white p-2 -mr-2"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`lg:hidden fixed inset-0 top-0 bg-charcoal-950/95 backdrop-blur-xl transition-all duration-300 ${
            mobileOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
        >
          <div className="flex flex-col h-full pt-24 px-6 overflow-y-auto">
            {navLinks.map((link) =>
              link.children ? (
                <div key={link.to}>
                  <button
                    onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                    className="flex items-center justify-between w-full py-4 text-lg font-medium text-white border-b border-white/5"
                  >
                    {link.label}
                    <ChevronDown className={`w-5 h-5 transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`} />
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ${mobileServicesOpen ? 'max-h-96' : 'max-h-0'}`}>
                    {link.children.map((child) => (
                      <Link
                        key={child.to}
                        to={child.to}
                        className="block py-3 pl-4 text-base text-steel-300 hover:text-eram-400 border-b border-white/5"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`py-4 text-lg font-medium border-b border-white/5 ${
                    isActive(link.to) ? 'text-eram-400' : 'text-white'
                  }`}
                >
                  {link.label}
                </Link>
              )
            )}
            <Link
              to="/contact"
              className="mt-6 py-3.5 bg-eram-600 text-white text-center font-semibold rounded-lg"
            >
              Request Quote
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
