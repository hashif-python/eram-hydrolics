import { Anchor, Factory, Fuel, HardHat, Truck } from 'lucide-react';
import { IMAGES, asset } from '@/lib/images';
import type { Industry } from '@/types/content';

export const industries: Industry[] = [
  {
    slug: 'oil-and-gas',
    title: 'Oil & Gas',
    summary:
      'Hydraulic systems for onshore and offshore drilling, production and handling equipment.',
    challenges: [
      'Equipment must perform reliably in hazardous, remote or offshore locations',
      'Unplanned downtime on drilling and production rigs is extremely costly',
      'Heavy handling loads demand precise, controlled hydraulic movement',
    ],
    solutions: [
      'Service and repair of skidding, jacking and mast-raising systems',
      'Maintenance of iron roughnecks, BOP hoists and winches',
      'Power pack supply and control valve stands for drilling equipment',
    ],
    equipment: [
      'Cantilever skidding systems',
      'Jacking up systems',
      'Mast raise systems',
      'Iron roughnecks',
      'BOP hoists and winches',
      'Coil tubing and wire line units',
      'Pipe handling equipment',
      'Snubbing units',
    ],
    icon: Fuel,
    image: asset(IMAGES.offshorePlatform, 'Offshore oil platform under a clear sky'),
  },
  {
    slug: 'marine-and-offshore',
    title: 'Marine & Offshore',
    summary:
      'Hydraulic systems for vessels, cargo handling, deck machinery and offshore support equipment.',
    challenges: [
      'Salt-laden, corrosive environments accelerate wear and leakage',
      'Vessel schedules leave short windows for maintenance',
      'Safety and documentation requirements are strict',
    ],
    solutions: [
      'Deck machinery and cargo crane hydraulic maintenance',
      'Remote cargo valve control system service',
      'Hydraulic support for dredgers, barges and loading arms',
    ],
    equipment: [
      'Remote cargo valve control systems',
      'Deck machinery and cargo cranes',
      'Hose handling cranes and provision cranes',
      'Davits',
      'Marine loading arms',
      'Pipe-laying and cable-laying barges',
    ],
    icon: Anchor,
    image: asset(IMAGES.cranesShip, 'Ship deck and crane at an industrial harbour'),
  },
  {
    slug: 'industrial-manufacturing',
    title: 'Industrial Manufacturing',
    summary:
      'Hydraulic solutions for metals, plastics, cement and process plants running continuous production.',
    challenges: [
      'Continuous production means every hour of downtime is lost output',
      'Large forces and temperatures place high demands on seals and components',
      'Contamination quickly degrades precision control systems',
    ],
    solutions: [
      'Troubleshooting and repair of rolling mill and press hydraulics',
      'Hydraulic flushing and lubrication to protect precision systems',
      'Custom power packs and control stands for production lines',
    ],
    equipment: [
      'Rolling mills and cold rolling mills',
      'Continuous casting machines',
      'Electric arc furnaces',
      'Pipe mills',
      'Aluminium smelting and extrusion presses',
      'Plastic injection moulding and rubber presses',
      'Cement and ready-mix plants',
    ],
    icon: Factory,
    image: asset(IMAGES.steelPipesYard, 'Stacked steel pipes beside an industrial crane'),
  },
  {
    slug: 'mobile-hydraulics',
    title: 'Mobile Hydraulics',
    summary:
      'Service, repair and component support for hydraulic systems on mobile and lifting equipment.',
    challenges: [
      'Machines work in the field, away from workshop facilities',
      'Hose failures and contamination cause frequent breakdowns',
      'Fleet availability depends on fast, reliable repairs',
    ],
    solutions: [
      'Cylinder repair and seal replacement',
      'Hose and fitting replacement with correct routing',
      'Component overhaul and spare parts supply for fleets',
    ],
    equipment: [
      'Aerial lift platforms',
      'Mobile cranes and truck-mounted cranes',
      'Garbage trucks and compactors',
      'Tipper trucks',
      'Piling machines',
    ],
    icon: Truck,
    image: asset(IMAGES.excavatorArm, 'Hydraulic arm of a mobile machine against a blue sky'),
  },
  {
    slug: 'construction-and-heavy-equipment',
    title: 'Construction & Heavy Equipment',
    summary:
      'Hydraulic service and repair for earth moving, quarrying and mining machinery on demanding sites.',
    challenges: [
      'Heavy duty cycles and dust accelerate hydraulic wear',
      'Remote sites require mobile diagnosis and rapid turnaround',
      'Lubrication and contamination control are often neglected',
    ],
    solutions: [
      'On-site diagnosis and repair of earth moving machinery',
      'Centralised lubrication systems for mining and quarry equipment',
      'Overhaul of pumps, motors and valves for heavy plant',
    ],
    equipment: [
      'Earth moving machinery and excavators',
      'Mining equipment',
      'Piling machines',
      'Quarry and crushing plant',
      'Concrete and asphalt plant',
    ],
    icon: HardHat,
    image: asset(IMAGES.excavatorQuarry, 'Yellow excavator working in a quarry'),
  },
];
