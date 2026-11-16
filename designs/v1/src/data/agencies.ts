export interface Agency {
  id: string;
  name: string;
  description: string;
  productCategories: string[];
  established: string;
}

export const agencies: Agency[] = [
  {
    id: 'agency-1',
    name: 'Hydraulic Cylinder Solutions',
    description: 'Leading manufacturer of hydraulic cylinders for industrial and mobile applications. Provides a full range of single-acting, double-acting, and telescopic cylinders built to exacting standards.',
    productCategories: ['Hydraulic Cylinders', 'Seal Kits', 'Custom Cylinders'],
    established: 'Authorised distributor for Saudi Arabia',
  },
  {
    id: 'agency-2',
    name: 'Precision Pump Technologies',
    description: 'Manufacturer of high-performance hydraulic pumps including axial piston, gear, and vane pumps. Products engineered for energy efficiency and long service life in demanding environments.',
    productCategories: ['Hydraulic Pumps', 'Power Units', 'Motors'],
    established: 'Authorised distributor for Saudi Arabia',
  },
  {
    id: 'agency-3',
    name: 'Industrial Valve Systems',
    description: 'Specialist manufacturer of hydraulic control valves, including directional, pressure, and flow control valves. Offers both standard and custom valve solutions for industrial and mobile hydraulics.',
    productCategories: ['Directional Valves', 'Pressure Valves', 'Flow Control Valves'],
    established: 'Authorised distributor for Saudi Arabia',
  },
  {
    id: 'agency-4',
    name: 'Filtration & Fluid Control',
    description: 'Manufacturer of hydraulic filtration products including return line filters, pressure filters, and contamination monitoring systems. Products designed to extend equipment life and reduce downtime.',
    productCategories: ['Filtration', 'Contamination Control', 'Fluid Conditioning'],
    established: 'Authorised distributor for Saudi Arabia',
  },
  {
    id: 'agency-5',
    name: 'Hose & Connector Systems',
    description: 'Premium manufacturer of hydraulic hoses, fittings, and adapters. Full range of pressure-rated hoses and compatible connectors for all industrial, mobile, and marine applications.',
    productCategories: ['Hydraulic Hoses', 'Fittings & Adapters', 'Quick Couplings'],
    established: 'Authorised distributor for Saudi Arabia',
  },
  {
    id: 'agency-6',
    name: 'Lubrication Engineering Co.',
    description: 'Manufacturer of centralized and automatic lubrication systems for industrial and mobile equipment. Products include progressive dividers, pump units, and monitoring controllers.',
    productCategories: ['Lubrication Systems', 'Progressive Dividers', 'Lubrication Controllers'],
    established: 'Authorised distributor for Saudi Arabia',
  },
];
