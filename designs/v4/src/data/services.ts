import { Anchor, Cog, Gauge, Layers, Pipette, Settings2, Wrench, Droplets } from 'lucide-react';
import { IMAGES, asset } from '@/lib/images';
import type { Service } from '@/types/content';

export const services: Service[] = [
  {
    slug: 'troubleshooting-surveys-repairs',
    title: 'Hydraulic Troubleshooting, Surveys & Repairs',
    summary:
      'On-site fault diagnosis, system surveys and repairs for industrial and mobile hydraulic equipment.',
    description: [
      'Hydraulic faults are rarely where they first appear. Our engineers diagnose the whole circuit, from pump and pressure settings to valves, hoses and actuators, using pressure and flow measurement and structured fault-finding.',
      'Where a full survey is needed, we document the existing installation, record performance data and recommend corrective actions, so repairs are prioritised by risk and cost rather than by guesswork.',
    ],
    capabilities: [
      'On-site fault diagnosis with pressure and flow measurement',
      'Complete system surveys and condition reports',
      'Repair of pumps, motors, valves and control blocks',
      'Root-cause analysis to prevent repeat failures',
      'Prioritised corrective action plans',
    ],
    applications: [
      'Industrial production lines',
      'Mobile and heavy equipment',
      'Oil and gas process equipment',
      'Plant shutdown and turnaround work',
    ],
    icon: Wrench,
    image: asset(IMAGES.inspectionAlt, 'Engineer inspecting hydraulic machinery during a site survey'),
  },
  {
    slug: 'marine-offshore-hydraulic-services',
    title: 'Marine & Offshore Hydraulic Services',
    summary:
      'Hydraulic service and support for vessels, cargo handling equipment and offshore installations.',
    description: [
      'Marine and offshore hydraulics operate in harsh, corrosive environments where downtime is expensive. We maintain and repair the hydraulic systems that run deck machinery, cranes and offshore handling equipment.',
      'Our team works to recognised safety practices for isolation, testing and documentation, and supports both scheduled maintenance and urgent breakdown response.',
    ],
    capabilities: [
      'Deck machinery and crane hydraulics service',
      'Remote cargo valve control system maintenance',
      'Offshore skidding, jacking and handling equipment support',
      'Hose handling crane and davit hydraulics',
      'Breakdown response and planned maintenance',
    ],
    applications: [
      'Cargo vessels and tankers',
      'Offshore drilling and production equipment',
      'Dredgers and pipe-laying barges',
      'Port and marine loading arms',
    ],
    icon: Anchor,
    image: asset(IMAGES.cargoShip, 'Cargo ship at a port with cranes for loading and unloading'),
  },
  {
    slug: 'hydraulic-cylinder-repair',
    title: 'Hydraulic Cylinder Repair',
    summary:
      'Full dismantling, inspection, rebuild and testing of hydraulic cylinders of all sizes.',
    description: [
      'A cylinder that leaks or drifts can stop an entire machine. We dismantle each cylinder, inspect the bore, rod, piston and seal grooves, and rebuild it to its specified performance.',
      'Seal selection matters as much as workmanship. We supply seals for standard and non-standard sizes and test every repaired cylinder before it returns to service.',
    ],
    capabilities: [
      'Dismantling and condition inspection of bores and rods',
      'Rod re-chroming and surface assessment',
      'Seal replacement with correct material selection',
      'Pressure testing and drift checks',
      'Documented repair reports',
    ],
    applications: [
      'Mobile cranes and aerial platforms',
      'Earth moving and construction machinery',
      'Industrial presses and press brakes',
      'Offshore handling equipment',
    ],
    icon: Gauge,
    image: asset(IMAGES.goggles, 'Technician inspecting machinery components in a workshop'),
  },
  {
    slug: 'hydraulic-power-pack-manufacturing',
    title: 'Hydraulic Power Pack Design & Manufacturing',
    summary:
      'Custom-engineered power packs and control valve stands, driven by electric motor or engine.',
    description: [
      'A power pack is the heart of any hydraulic system. We design and manufacture engine and electric-motor driven units to match the duty cycle, flow, pressure and environment of your application.',
      'Each unit is assembled with reservoir, filtration, cooling and control valve stands engineered for clean operation and easy maintenance.',
    ],
    capabilities: [
      'Custom design to specified flow, pressure and duty cycle',
      'Electric motor and engine driven configurations',
      'Control valve stand fabrication and assembly',
      'Integrated filtration, cooling and monitoring',
      'Factory testing before dispatch',
    ],
    applications: [
      'Industrial machine tools and presses',
      'Marine and offshore hydraulic systems',
      'Mobile and skid-mounted equipment',
      'Test benches and process plants',
    ],
    icon: Cog,
    image: asset(IMAGES.workshop, 'Hydraulic components and machinery in a workshop'),
  },
  {
    slug: 'installation-commissioning-testing',
    title: 'Installation, Commissioning & Testing',
    summary:
      'Installation of new hydraulic systems followed by structured commissioning and performance testing.',
    description: [
      'Good installation starts before the first component is mounted. We check the layout, mounting, alignment and cleanliness, then bring the system up in controlled stages.',
      'Commissioning is documented: pressure settings, flow rates, temperatures and leak checks are recorded, so the system handover is verifiable.',
    ],
    capabilities: [
      'Installation planning and site preparation',
      'Mounting and alignment of pumps, motors and cylinders',
      'Staged start-up and pressure setting',
      'Performance testing and handover documentation',
      'Operator orientation on completion',
    ],
    applications: [
      'New industrial machine installations',
      'Power pack replacement projects',
      'Offshore and marine hydraulic packages',
      'Plant expansions and retrofits',
    ],
    icon: Settings2,
    image: asset(IMAGES.inspection, 'Engineer in hard hat inspecting large machinery during commissioning'),
  },
  {
    slug: 'hydraulic-pipe-hose-fitting-installation',
    title: 'Hydraulic Pipe, Hose & Fitting Installation',
    summary:
      'Supply and installation of hydraulic pipework, hoses and fittings to correct routing and specification.',
    description: [
      'Pipework and hoses carry the energy of the system, and poor routing causes vibration, abrasion and leaks. We install pipe, hose and fittings with correct bend radii, support spacing and clearance.',
      'We supply the components to specification and install them cleanly, with pressure testing before handover.',
    ],
    capabilities: [
      'Supply of hydraulic pipes, hoses and fittings',
      'Pipe bending, cutting and flaring to specification',
      'Hose routing with correct bend radius and support',
      'Leak and pressure testing',
      'Labelling and documentation of runs',
    ],
    applications: [
      'Machinery and production lines',
      'Mobile equipment hose replacement',
      'Oil and grease lubrication lines',
      'Offshore and marine pipework',
    ],
    icon: Pipette,
    image: asset(IMAGES.pipelines, 'Industrial pipelines in a factory setting'),
  },
  {
    slug: 'hydraulic-flushing-lubrication-systems',
    title: 'Hydraulic Flushing & Lubrication Systems',
    summary:
      'System flushing to remove contamination, plus oil and grease lubrication supply and installation.',
    description: [
      'Contamination is the most common cause of premature hydraulic failure. Before a new system runs, or after a major repair, we flush the circuit to remove debris, particles and residue.',
      'We also supply, install and maintain centralised oil and grease lubrication systems, with distribution lines configured for the application.',
    ],
    capabilities: [
      'Hydraulic circuit flushing to target cleanliness',
      'Particle count monitoring and reporting',
      'Supply and installation of grease and oil lubrication systems',
      'Lubrication line routing and testing',
      'Maintenance schedules for lubrication equipment',
    ],
    applications: [
      'New hydraulic installations before start-up',
      'Post-repair system cleaning',
      'Centralised lubrication for industrial plants',
      'Mining and heavy equipment lubrication',
    ],
    icon: Droplets,
    image: asset(IMAGES.workshop, 'Lubrication and fluid handling equipment in a workshop'),
  },
  {
    slug: 'component-overhaul-maintenance',
    title: 'Component Overhaul & Maintenance',
    summary:
      'Supply, overhaul and testing of hydraulic components and spare parts, with planned maintenance programmes.',
    description: [
      'Overhauling a pump, motor or valve restores it to specified performance at lower cost than replacement. Each component is stripped, measured, rebuilt with correct parts and tested on a test rig before release.',
      'We also supply spare parts and set up maintenance programmes that keep critical components on a predictable schedule.',
    ],
    capabilities: [
      'Overhaul of hydraulic pumps, motors and valves',
      'Test rig performance verification',
      'Supply of genuine and equivalent spare parts',
      'Planned maintenance programmes',
      'Component condition reports',
    ],
    applications: [
      'Plant maintenance departments',
      'Fleet and mobile equipment operators',
      'Marine engineering departments',
      'Spare parts stocking for critical equipment',
    ],
    icon: Layers,
    image: asset(IMAGES.mechanicTools, 'Metal tools and precision components laid out for overhaul'),
  },
];
