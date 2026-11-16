import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, ArrowRight, Wrench } from 'lucide-react';
import { Logo } from './Logo';

export function Footer() {
  return (
    <footer className="bg-charcoal-950 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 pt-20 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-1">
            <Logo className="mb-6" />
            <p className="text-steel-400 text-sm leading-relaxed mb-6">
              Engineering hydraulic excellence across Saudi Arabia. Specializing in offshore, marine, industrial, and mobile hydraulic systems with ISO 9001:2015 certification.
            </p>
            <div className="flex items-center gap-2 text-xs text-steel-500">
              <Wrench className="w-3.5 h-3.5 text-eram-500" />
              ISO 9001:2015 Certified
            </div>
          </div>

          <div>
            <h4 className="text-white font-display font-semibold mb-5 text-sm tracking-wider uppercase">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { to: '/', label: 'Home' },
                { to: '/about', label: 'About Us' },
                { to: '/services', label: 'Services' },
                { to: '/products', label: 'Products' },
                { to: '/agencies', label: 'Agencies & Partners' },
                { to: '/contact', label: 'Contact' },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-steel-400 hover:text-eram-400 text-sm transition-colors flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-display font-semibold mb-5 text-sm tracking-wider uppercase">Services</h4>
            <ul className="space-y-3">
              {[
                'Offshore & Onshore Hydraulics',
                'Marine Hydraulics',
                'Cylinder Repairs',
                'Power Pack Manufacturing',
                'Troubleshooting',
                'Maintenance Contracts',
              ].map((s) => (
                <li key={s}>
                  <Link to="/services" className="text-steel-400 hover:text-eram-400 text-sm transition-colors">
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-display font-semibold mb-5 text-sm tracking-wider uppercase">Contact</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3 text-steel-400">
                <MapPin className="w-4 h-4 text-eram-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-white font-medium text-xs mb-0.5">Dammam</p>
                  <p>King Fahd Road, Dammam, Eastern Province, Saudi Arabia</p>
                </div>
              </li>
              <li className="flex items-start gap-3 text-steel-400">
                <MapPin className="w-4 h-4 text-eram-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-white font-medium text-xs mb-0.5">Riyadh</p>
                  <p>Olaya Street, Riyadh, Saudi Arabia</p>
                </div>
              </li>
              <li className="flex items-center gap-3 text-steel-400">
                <Phone className="w-4 h-4 text-eram-500 flex-shrink-0" />
                <a href="tel:+966500000000" className="hover:text-eram-400 transition-colors">+966 50 000 0000</a>
              </li>
              <li className="flex items-center gap-3 text-steel-400">
                <Mail className="w-4 h-4 text-eram-500 flex-shrink-0" />
                <a href="mailto:info@eramhydraulics.com" className="hover:text-eram-400 transition-colors">info@eramhydraulics.com</a>
              </li>
              <li className="flex items-center gap-3 text-steel-400">
                <Clock className="w-4 h-4 text-eram-500 flex-shrink-0" />
                <span>Sat – Thu, 8:00 AM – 6:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-steel-500 text-xs">
            &copy; {new Date().getFullYear()} ERAM Hydraulics. All rights reserved.
          </p>
          <p className="text-steel-500 text-xs">
            Engineering Hydraulic Excellence
          </p>
        </div>
      </div>
    </footer>
  );
}
