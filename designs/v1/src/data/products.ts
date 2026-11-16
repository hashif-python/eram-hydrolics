export interface Product {
  id: string;
  name: string;
  category: string;
  image: string;
  description: string;
  specifications: { label: string; value: string }[];
  applications: string[];
}

export interface ProductCategory {
  id: string;
  name: string;
  icon: string;
  description: string;
}

export const productCategories: ProductCategory[] = [
  { id: 'all', name: 'All Products', icon: 'LayoutGrid', description: 'Browse our complete catalog' },
  { id: 'cylinders', name: 'Hydraulic Cylinders', icon: 'Cylinder', description: 'Single and double-acting cylinders' },
  { id: 'power-units', name: 'Power Units', icon: 'Box', description: 'Custom and standard power packs' },
  { id: 'pumps', name: 'Hydraulic Pumps', icon: 'Gauge', description: 'Gear, piston, and vane pumps' },
  { id: 'motors', name: 'Hydraulic Motors', icon: 'Cog', description: 'High-torque hydraulic motors' },
  { id: 'valves', name: 'Valves', icon: 'ToggleLeft', description: 'Directional, pressure, and flow control' },
  { id: 'control-panels', name: 'Control Panels', icon: 'Monitor', description: 'PLC and electronic control systems' },
  { id: 'manifolds', name: 'Manifolds', icon: 'GitBranch', description: 'Custom manifold blocks' },
  { id: 'hoses-fittings', name: 'Hoses & Fittings', icon: 'Spline', description: 'High-pressure hoses and connectors' },
  { id: 'seals', name: 'Seals & Kits', icon: 'Circle', description: 'Seal kits and replacement seals' },
  { id: 'filtration', name: 'Filtration', icon: 'Filter', description: 'Filters and contamination control' },
  { id: 'lubrication', name: 'Lubrication Systems', icon: 'Droplets', description: 'Centralized lubrication components' },
];

export const products: Product[] = [
  {
    id: 'double-acting-cylinder',
    name: 'Double-Acting Hydraulic Cylinder',
    category: 'cylinders',
    image: 'https://images.pexels.com/photos/39345876/pexels-photo-39345876.png?auto=compress&cs=tinysrgb&h=650&w=940',
    description: 'Heavy-duty double-acting hydraulic cylinders engineered for high-cycle industrial applications. Chrome-plated rods and honed bores ensure smooth operation and extended seal life.',
    specifications: [
      { label: 'Bore Size', value: '40mm – 500mm' },
      { label: 'Stroke Length', value: 'Up to 6000mm' },
      { label: 'Max Pressure', value: '350 bar' },
      { label: 'Mounting', value: 'Multiple options' },
    ],
    applications: ['Press machines', 'Lifting equipment', 'Material handling', 'Marine systems'],
  },
  {
    id: 'telescopic-cylinder',
    name: 'Telescopic Hydraulic Cylinder',
    category: 'cylinders',
    image: 'https://images.pexels.com/photos/27330792/pexels-photo-27330792.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    description: 'Multi-stage telescopic cylinders providing long stroke from compact retracted dimensions. Ideal for tipper trucks and applications requiring extended reach in limited space.',
    specifications: [
      { label: 'Stages', value: '2 – 8 stages' },
      { label: 'Extended Length', value: 'Up to 8000mm' },
      { label: 'Max Pressure', value: '250 bar' },
      { label: 'Mounting', value: 'Front/rear flange' },
    ],
    applications: ['Tipper trucks', 'Dump trailers', 'Elevating platforms', 'Lifting gates'],
  },
  {
    id: 'custom-power-pack',
    name: 'Custom Hydraulic Power Pack',
    category: 'power-units',
    image: 'https://images.pexels.com/photos/10290625/pexels-photo-10290625.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    description: 'Bespoke hydraulic power units designed and manufactured to your exact requirements. Available with electric, diesel, or pneumatic drives in a range of configurations.',
    specifications: [
      { label: 'Power Range', value: '1 kW – 250 kW' },
      { label: 'Max Pressure', value: '700 bar' },
      { label: 'Tank Capacity', value: '10L – 2000L' },
      { label: 'Drive Options', value: 'Electric / Diesel' },
    ],
    applications: ['Industrial machinery', 'Testing equipment', 'Mobile systems', 'Marine deck equipment'],
  },
  {
    id: 'mini-power-pack',
    name: 'Mini Hydraulic Power Pack',
    category: 'power-units',
    image: 'https://images.pexels.com/photos/27383276/pexels-photo-27383276.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    description: 'Compact mini power packs for applications requiring minimal space without compromising performance. AC and DC powered options available.',
    specifications: [
      { label: 'Power Range', value: '0.5 kW – 5.5 kW' },
      { label: 'Max Pressure', value: '300 bar' },
      { label: 'Tank Capacity', value: '2L – 20L' },
      { label: 'Drive', value: 'AC / DC motor' },
    ],
    applications: ['Lifting tables', 'Scissor lifts', 'Tail lifts', 'Small presses'],
  },
  {
    id: 'piston-pump',
    name: 'Axial Piston Pump',
    category: 'pumps',
    image: 'https://images.pexels.com/photos/18905774/pexels-photo-18905774.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    description: 'High-efficiency axial piston pumps with variable displacement for demanding hydraulic applications. Offers excellent controllability and energy efficiency.',
    specifications: [
      { label: 'Displacement', value: '10 – 500 cc/rev' },
      { label: 'Max Pressure', value: '450 bar' },
      { label: 'Speed Range', value: '500 – 3000 rpm' },
      { label: 'Control', value: 'Pressure / Flow / Power' },
    ],
    applications: ['Industrial presses', 'Mobile equipment', 'Marine systems', 'Test rigs'],
  },
  {
    id: 'gear-pump',
    name: 'Hydraulic Gear Pump',
    category: 'pumps',
    image: 'https://images.pexels.com/photos/5503819/pexels-photo-5503819.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    description: 'Reliable external gear pumps for low-to-medium pressure applications. Simple construction, compact size, and cost-effective performance for a wide range of hydraulic circuits.',
    specifications: [
      { label: 'Displacement', value: '1 – 200 cc/rev' },
      { label: 'Max Pressure', value: '250 bar' },
      { label: 'Speed Range', value: '500 – 4000 rpm' },
      { label: 'Ports', value: 'SAE / BSP / NPT' },
    ],
    applications: ['Lubrication systems', 'Cooling circuits', 'Low-pressure transfer', 'Filtration units'],
  },
  {
    id: 'hydraulic-motor',
    name: 'High-Torque Hydraulic Motor',
    category: 'motors',
    image: 'https://images.pexels.com/photos/34207359/pexels-photo-34207359.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    description: 'Orbital and axial piston hydraulic motors delivering high torque at low speeds. Built for continuous duty in demanding industrial and mobile applications.',
    specifications: [
      { label: 'Displacement', value: '50 – 2000 cc/rev' },
      { label: 'Max Pressure', value: '420 bar' },
      { label: 'Torque Range', value: 'Up to 12,000 Nm' },
      { label: 'Speed Range', value: '5 – 1500 rpm' },
    ],
    applications: ['Conveyor drives', 'Winch systems', 'Slew drives', 'Auger drives'],
  },
  {
    id: 'directional-valve',
    name: 'Directional Control Valve',
    category: 'valves',
    image: 'https://images.pexels.com/photos/29248902/pexels-photo-29248902.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    description: 'Solenoid-operated directional control valves for precise hydraulic circuit control. Available in single and multiple bank configurations.',
    specifications: [
      { label: 'Flow Rate', value: 'Up to 200 L/min' },
      { label: 'Max Pressure', value: '350 bar' },
      { label: 'Spool Positions', value: '2 / 3 position' },
      { label: 'Actuation', value: 'Solenoid / Manual / Pilot' },
    ],
    applications: ['Mobile equipment', 'Industrial machinery', 'Marine systems', 'Material handling'],
  },
  {
    id: 'pressure-relief-valve',
    name: 'Pressure Relief Valve',
    category: 'valves',
    image: 'https://images.pexels.com/photos/7937292/pexels-photo-7937292.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    description: 'Pilot-operated pressure relief valves for system protection against overpressure conditions. Precise pressure setting and excellent repeatability.',
    specifications: [
      { label: 'Pressure Range', value: '10 – 350 bar' },
      { label: 'Flow Rate', value: 'Up to 500 L/min' },
      { label: 'Connection', value: 'Threaded / Flanged' },
      { label: 'Adjustment', value: 'Manual / Proportional' },
    ],
    applications: ['System protection', 'Pressure regulation', 'Safety circuits', 'Test equipment'],
  },
  {
    id: 'plc-control-panel',
    name: 'PLC Hydraulic Control Panel',
    category: 'control-panels',
    image: 'https://images.pexels.com/photos/19233057/pexels-photo-19233057.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    description: 'Custom-built PLC-based hydraulic control panels integrating electronic control with hydraulic system operation. Touchscreen HMI, remote monitoring, and data logging capabilities.',
    specifications: [
      { label: 'PLC Brand', value: 'Siemens / Allen-Bradley' },
      { label: 'HMI Display', value: '7" – 15" touchscreen' },
      { label: 'I/O Points', value: 'Up to 256' },
      { label: 'Communication', value: 'Profinet / Modbus / Ethernet' },
    ],
    applications: ['Automated machinery', 'Process control', 'Remote monitoring', 'Test stations'],
  },
  {
    id: 'custom-manifold',
    name: 'Custom Hydraulic Manifold Block',
    category: 'manifolds',
    image: 'https://images.pexels.com/photos/17728787/pexels-photo-17728787.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    description: 'Precision-machined custom manifold blocks consolidating multiple valve functions into a single, compact unit. Reduces plumbing, leak points, and installation time.',
    specifications: [
      { label: 'Material', value: 'Aluminium / Ductile Iron / Steel' },
      { label: 'Max Pressure', value: '350 bar' },
      { label: 'Port Size', value: 'Up to 1" SAE' },
      { label: 'Design', value: 'Custom / 3D modeling' },
    ],
    applications: ['Space-constrained systems', 'Mobile equipment', 'Industrial presses', 'Test benches'],
  },
  {
    id: 'high-pressure-hose',
    name: 'High-Pressure Hydraulic Hose',
    category: 'hoses-fittings',
    image: 'https://images.pexels.com/photos/36825977/pexels-photo-36825977.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    description: 'Premium hydraulic hoses rated for high-pressure applications. Available in multiple sizes and pressure ratings, with compatible fittings for every connection need.',
    specifications: [
      { label: 'Size Range', value: '1/4" – 2"' },
      { label: 'Pressure Rating', value: 'Up to 700 bar' },
      { label: 'Standards', value: 'SAE / EN / ISO' },
      { label: 'Temperature', value: '-40°C to +120°C' },
    ],
    applications: ['Mobile equipment', 'Industrial machinery', 'Offshore systems', 'Emergency repairs'],
  },
  {
    id: 'hydraulic-fittings',
    name: 'Hydraulic Fittings & Adapters',
    category: 'hoses-fittings',
    image: 'https://images.pexels.com/photos/33514501/pexels-photo-33514501.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    description: 'Comprehensive range of hydraulic fittings, adapters, and connectors in various thread types and configurations. Stainless steel options available for corrosive environments.',
    specifications: [
      { label: 'Thread Types', value: 'BSP / NPT / JIC / ORFS / SAE' },
      { label: 'Material', value: 'Carbon steel / Stainless' },
      { label: 'Sizes', value: '1/8" – 2"' },
      { label: 'Finish', value: 'Zinc-plated / Stainless' },
    ],
    applications: ['Hose assemblies', 'Pipe connections', 'Adapter conversions', 'Instrumentation'],
  },
  {
    id: 'seal-kits',
    name: 'Hydraulic Seal Kits',
    category: 'seals',
    image: 'https://images.pexels.com/photos/30335251/pexels-photo-30335251.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    description: 'Comprehensive hydraulic seal kits for cylinders, valves, and pumps. Premium materials including NBR, FKM, and PTFE compounds for long service life.',
    specifications: [
      { label: 'Materials', value: 'NBR / FKM / PTFE / PU' },
      { label: 'Temperature', value: '-30°C to +200°C' },
      { label: 'Pressure', value: 'Up to 700 bar' },
      { label: 'Compatibility', value: 'All major brands' },
    ],
    applications: ['Cylinder overhauls', 'Valve maintenance', 'Pump rebuilds', 'Preventive maintenance'],
  },
  {
    id: 'return-filter',
    name: 'Hydraulic Return Line Filter',
    category: 'filtration',
    image: 'https://images.pexels.com/photos/5506032/pexels-photo-5506032.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    description: 'High-efficiency return line filters with replaceable elements and visual/electronic clogging indicators. Essential for maintaining fluid cleanliness and system reliability.',
    specifications: [
      { label: 'Filtration Rating', value: '1 – 25 microns' },
      { label: 'Flow Rate', value: 'Up to 1000 L/min' },
      { label: 'Connection', value: 'Threaded / Flanged' },
      { label: 'Indicator', value: 'Visual / Electronic' },
    ],
    applications: ['Return line filtration', 'Off-line circuits', 'Bypass filtration', 'Fluid conditioning'],
  },
  {
    id: 'pressure-filter',
    name: 'High-Pressure Inline Filter',
    category: 'filtration',
    image: 'https://images.pexels.com/photos/14637831/pexels-photo-14637831.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    description: 'Pressure line filters designed for high-pressure hydraulic circuits. Protect sensitive downstream components like servo valves and proportional controls.',
    specifications: [
      { label: 'Filtration Rating', value: '1 – 10 microns' },
      { label: 'Max Pressure', value: '420 bar' },
      { label: 'Flow Rate', value: 'Up to 400 L/min' },
      { label: 'Bypass', value: 'Cracking at 3.5 bar' },
    ],
    applications: ['Servo valve protection', 'Proportional circuits', 'Test equipment', 'Critical systems'],
  },
  {
    id: 'lubrication-unit',
    name: 'Centralized Lubrication Unit',
    category: 'lubrication',
    image: 'https://images.pexels.com/photos/28752152/pexels-photo-28752152.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    description: 'Automatic centralized lubrication units delivering precise grease or oil quantities to multiple lubrication points. Programmable cycles and monitoring ensure optimal equipment protection.',
    specifications: [
      { label: 'Reservoir', value: '2kg – 60kg' },
      { label: 'Lubricant', value: 'Grease / Oil' },
      { label: 'Points', value: 'Up to 200 points' },
      { label: 'Control', value: 'Programmable timer' },
    ],
    applications: ['Mobile equipment', 'Industrial machinery', 'Wind turbines', 'Conveyor systems'],
  },
];
