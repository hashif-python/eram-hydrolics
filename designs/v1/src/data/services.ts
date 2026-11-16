export interface ServiceItem {
  id: string;
  title: string;
  shortTitle: string;
  category: string;
  image: string;
  description: string;
  applications: string[];
  features: string[];
}

export const services: ServiceItem[] = [
  {
    id: 'offshore-onshore-hydraulics',
    title: 'Offshore & Onshore Hydraulics',
    shortTitle: 'Offshore & Onshore',
    category: 'Offshore',
    image: 'https://images.pexels.com/photos/11139595/pexels-photo-11139595.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    description: 'Comprehensive hydraulic solutions for both offshore platforms and onshore oil & gas facilities. Our expertise covers the design, supply, installation, and maintenance of hydraulic systems operating in the most demanding environments, from deep-water rigs to desert drilling sites.',
    applications: ['Offshore drilling platforms', 'Onshore oil & gas rigs', 'Subsea control systems', 'Drilling riser tensioners', 'Blowout preventer (BOP) systems', 'Pipeline commissioning'],
    features: ['Corrosion-resistant components', 'ATEX/IECEx certified options', 'High-pressure rated systems', 'Remote monitoring capabilities', 'Custom manifold design'],
  },
  {
    id: 'marine-hydraulics',
    title: 'Marine Hydraulics',
    shortTitle: 'Marine',
    category: 'Marine',
    image: 'https://images.pexels.com/photos/262353/pexels-photo-262353.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    description: 'Specialized marine hydraulic systems engineered for vessels, docks, and port infrastructure. From deck machinery to steering gear systems, we deliver reliable hydraulic solutions that withstand harsh saltwater environments and continuous marine operation.',
    applications: ['Deck cranes and winches', 'Steering gear systems', 'Anchor handling winches', 'Hatch cover systems', 'Ballast pump systems', 'Ship-to-shore operations'],
    features: ['Marine-grade materials', 'IP68 sealing options', 'Compact deck-mounted designs', 'Low-noise operation', 'Comprehensive spare parts support'],
  },
  {
    id: 'industrial-hydraulics',
    title: 'Industrial Hydraulics',
    shortTitle: 'Industrial',
    category: 'Industrial',
    image: 'https://images.pexels.com/photos/16058393/pexels-photo-16058393.png?auto=compress&cs=tinysrgb&h=650&w=940',
    description: 'Industrial hydraulic systems for manufacturing plants, steel mills, and processing facilities. We design and supply hydraulic power units, presses, and control systems that keep production lines running at peak efficiency with minimal downtime.',
    applications: ['Hydraulic presses', 'Injection molding machines', 'Steel mill equipment', 'Conveyor systems', 'Material handling', 'Robotics integration'],
    features: ['PLC integration', 'Energy-efficient designs', 'High-cycle durability', 'Modular construction', 'Predictive maintenance support'],
  },
  {
    id: 'mobile-hydraulics',
    title: 'Mobile Hydraulics',
    shortTitle: 'Mobile',
    category: 'Mobile',
    image: 'https://images.pexels.com/photos/39345876/pexels-photo-39345876.png?auto=compress&cs=tinysrgb&h=650&w=940',
    description: 'Mobile hydraulic solutions for construction equipment, cranes, and heavy vehicles. Our systems power the machines that build infrastructure — from excavators to aerial platforms — with robust components built for continuous field operation.',
    applications: ['Excavators and loaders', 'Mobile cranes', 'Aerial work platforms', 'Dump trucks and tippers', 'Snow plows and sweepers', 'Agricultural machinery'],
    features: ['Compact power density', 'Load-sensing technology', 'Shock-resistant construction', 'All-weather performance', 'Field-serviceable components'],
  },
  {
    id: 'troubleshooting',
    title: 'Hydraulic Troubleshooting',
    shortTitle: 'Troubleshooting',
    category: 'Service',
    image: 'https://images.pexels.com/photos/9242180/pexels-photo-9242180.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    description: 'Expert diagnostic and troubleshooting services for hydraulic systems experiencing performance issues, leaks, pressure loss, or failures. Our certified technicians use advanced testing equipment to identify root causes and implement lasting repairs.',
    applications: ['Pressure loss diagnosis', 'Leak detection and repair', 'Valve malfunction analysis', 'Pump cavitation issues', 'Contamination assessment', 'System efficiency audits'],
    features: ['On-site diagnostics', 'Portable test kits', 'Oil analysis services', 'Root-cause analysis reports', 'Emergency response'],
  },
  {
    id: 'cylinder-repairs',
    title: 'Hydraulic Cylinder Repairs',
    shortTitle: 'Cylinder Repairs',
    category: 'Service',
    image: 'https://images.pexels.com/photos/17937676/pexels-photo-17937676.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    description: 'Professional hydraulic cylinder repair and refurbishment services. We restore cylinders to original or better specifications — honing bores, replacing seals, chrome plating rods, and pressure-testing every unit before it returns to service.',
    applications: ['Cylinder honing and boring', 'Seal replacement', 'Rod chrome plating', 'Tube replacement', 'Custom cylinder manufacturing', 'Testing and certification'],
    features: ['Up to 500mm bore capacity', 'On-site cylinder service', 'Genuine seal kits', 'Pressure testing to 700 bar', 'Fast turnaround times'],
  },
  {
    id: 'power-pack-manufacturing',
    title: 'Power Pack Manufacturing',
    shortTitle: 'Power Packs',
    category: 'Manufacturing',
    image: 'https://images.pexels.com/photos/10290625/pexels-photo-10290625.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    description: 'Custom hydraulic power pack design and manufacturing tailored to your exact specifications. From compact mini-power packs to large-scale industrial units, we build reliable power sources with premium components and rigorous quality testing.',
    applications: ['Custom-designed power packs', 'Mini power packs', 'Diesel-driven power packs', 'Explosion-proof units', 'Skid-mounted systems', 'Trolley-mounted units'],
    features: ['Design from 1 kW to 250 kW', 'Pressure up to 700 bar', 'Multiple pressure circuits', 'Integrated filtration', 'CE-marked components'],
  },
  {
    id: 'installation-commissioning',
    title: 'Installation & Commissioning',
    shortTitle: 'Installation',
    category: 'Service',
    image: 'https://images.pexels.com/photos/17572741/pexels-photo-17572741.png?auto=compress&cs=tinysrgb&h=650&w=940',
    description: 'Complete hydraulic system installation and commissioning services. Our experienced team handles everything from site preparation to final testing, ensuring your hydraulic system is installed correctly, safely, and performs to specification from day one.',
    applications: ['System installation', 'Pipe and hose routing', 'Pre-commissioning checks', 'Performance testing', 'Operator training', 'Documentation handover'],
    features: ['Certified installation team', 'Comprehensive testing protocols', 'Safety compliance', 'As-built documentation', 'Operator training programs'],
  },
  {
    id: 'lubrication-systems',
    title: 'Lubrication Systems',
    shortTitle: 'Lubrication',
    category: 'Service',
    image: 'https://images.pexels.com/photos/7937299/pexels-photo-7937299.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    description: 'Design, supply, and installation of centralized and automatic lubrication systems for industrial and mobile equipment. Proper lubrication extends equipment life, reduces friction, and prevents costly unplanned downtime.',
    applications: ['Centralized grease systems', 'Automatic oil lubrication', 'Progressive lubrication', 'Dual-line systems', 'Mist lubrication', 'Lubrication monitoring'],
    features: ['Automated dispensing', 'Multi-point lubrication', 'Programmable controllers', 'Low-level alarms', 'Reduced maintenance costs'],
  },
  {
    id: 'maintenance',
    title: 'Maintenance & Service Contracts',
    shortTitle: 'Maintenance',
    category: 'Service',
    image: 'https://images.pexels.com/photos/28752152/pexels-photo-28752152.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    description: 'Preventive and predictive maintenance contracts designed to keep your hydraulic systems operating at peak performance. Our scheduled service programs reduce downtime, extend equipment life, and provide predictable maintenance costs.',
    applications: ['Scheduled maintenance plans', 'Predictive maintenance', 'Oil sampling and analysis', 'Filter replacement', 'Seal and hose inspection', 'Emergency breakdown support'],
    features: ['Customized service schedules', '24/7 emergency support', 'Dedicated service engineer', 'Maintenance reporting', 'Spare parts management'],
  },
];
