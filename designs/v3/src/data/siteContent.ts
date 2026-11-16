import type { LucideIcon } from 'lucide-react';
import { Anchor, Cog, Droplets, Factory, Fuel, Gauge, Truck, Wrench } from 'lucide-react';

export const company = {
  name: 'Eram Hydraulics',
  tagline: 'Your one-stop shop for all hydraulic and pneumatic solutions',
  email: 'info@eramhydraulics.com',
  phoneDisplay: '+966 13 837 4439',
  phoneHref: 'tel:+966138374439',
  secondPhoneDisplay: '+966 13 808 7776',
  secondPhoneHref: 'tel:+966138087776',
  address: 'PB NO: 95589, 148th Cross Road, 67th Street, 2nd Industrial City, Dammam 3195, KSA',
};

export const heroSlides = [
  {
    eyebrow: 'Hydraulic & Pneumatic Solutions',
    title: 'Engineering challenges, delivered at any time.',
    description:
      'We supply, design, fabricate and service fluid power systems for the Middle East’s most demanding sectors.',
    image:
      'https://images.pexels.com/photos/36825977/pexels-photo-36825977.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    eyebrow: 'Design & Manufacturing',
    title: 'Custom hydraulic systems and equipment built to specification.',
    description:
      'From concept drawings to commissioning, our engineers take your system from idea to reliable operation.',
    image:
      'https://images.pexels.com/photos/15970028/pexels-photo-15970028.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    eyebrow: 'On-Site Support',
    title: 'Installation, commissioning and repair where your equipment runs.',
    description:
      'Our field teams keep marine, oil and gas, industrial and mobile fleets moving with expert on-site service.',
    image:
      'https://images.pexels.com/photos/39345876/pexels-photo-39345876.png?auto=compress&cs=tinysrgb&h=650&w=940',
  },
];

export const stats = [
  { value: 'ISO 9001', label: 'Certified quality management (2015)' },
  { value: '4', label: 'Core sectors served across the Middle East' },
  { value: '3', label: 'Offices in Dammam and Riyadh' },
];

export interface Service {
  title: string;
  description: string;
  icon: LucideIcon;
}

export const services: Service[] = [
  {
    title: 'Sales & Marketing',
    description: 'Supply of hydraulic, pneumatic and lubrication components from trusted brands, with expert product selection.',
    icon: Gauge,
  },
  {
    title: 'Design & Fabrication',
    description: 'Custom hydraulic power units, manifolds and equipment engineered and fabricated to your specifications.',
    icon: Cog,
  },
  {
    title: 'Installation & Commissioning',
    description: 'Careful installation and start-up of new systems, tested and handed over ready for operation.',
    icon: Wrench,
  },
  {
    title: 'On-Site Hydraulic Services',
    description: 'Field technicians who diagnose and resolve hydraulic faults directly at your facility or vessel.',
    icon: Truck,
  },
  {
    title: 'Repair & Maintenance',
    description: 'Planned maintenance programs and rapid repairs that reduce downtime and extend equipment life.',
    icon: Droplets,
  },
];

export interface Sector {
  name: string;
  description: string;
  icon: LucideIcon;
}

export const sectors: Sector[] = [
  {
    name: 'Marine',
    description: 'Steering, winch, crane and deck machinery systems for vessels and offshore support.',
    icon: Anchor,
  },
  {
    name: 'Oil & Gas',
    description: 'Robust fluid power and lubrication solutions for upstream, midstream and plant operations.',
    icon: Fuel,
  },
  {
    name: 'Industrial',
    description: 'Presses, automation, material handling and production lines that run around the clock.',
    icon: Factory,
  },
  {
    name: 'Mobile Hydraulics',
    description: 'Hydraulic systems for construction, earthmoving and heavy vehicle fleets.',
    icon: Truck,
  },
];

export const productCategories = [
  'Hydraulic pumps and motors',
  'Directional, pressure and flow valves',
  'Hydraulic cylinders',
  'Hoses, fittings and couplings',
  'Pneumatic components',
  'Lubrication and greasing systems',
  'Filtration and fluid conditioning',
  'Hydraulic power units',
];

export const branches = [
  {
    city: 'Dammam (Head Office)',
    address: 'PB NO: 95589, 148th Cross Road, 67th Street, 2nd Industrial City, Dammam 3195',
    phone: '+966 13 837 4439',
    phoneHref: 'tel:+966138374439',
    email: 'info@eramhydraulics.com',
  },
  {
    city: 'Dammam (Al Fayha)',
    address: 'Opposite to Dallah Driving School, Al Fayha District, Dammam 32442',
    phone: '+966 13 837 4676',
    phoneHref: 'tel:+966138374676',
    email: 'info@eramhydraulics.com',
  },
  {
    city: 'Riyadh',
    address: 'Dirar ibn Al Hazur Street, Khalidiya, Ali bin Abi Talib Road, Riyadh',
    phone: '+966 11 415 3337',
    phoneHref: 'tel:+966114153337',
    email: 'info@eramhydraulics.com',
  },
];

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Products', href: '#products' },
  { label: 'Sectors', href: '#sectors' },
  { label: 'Contact', href: '#contact' },
];

export const certifications = ['ISO 9001:2015 Certified', 'Authorized agencies & distributorships', 'Engineering & on-site support'];
