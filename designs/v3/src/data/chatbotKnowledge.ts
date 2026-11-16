export interface ChatTopic {
  id: string;
  keywords: string[];
  answer: string;
}

export const chatTopics: ChatTopic[] = [
  {
    id: 'greeting',
    keywords: ['hi', 'hello', 'hey', 'salam', 'assalam', 'good morning', 'good evening'],
    answer:
      'Hello, welcome to Eram Hydraulics. I can tell you about our services, products, sectors we serve, branches and how to reach our team.',
  },
  {
    id: 'services',
    keywords: ['service', 'services', 'repair', 'maintenance', 'install', 'installation', 'commission', 'commissioning', 'on-site', 'onsite', 'fabrication', 'design', 'engineering'],
    answer:
      'We offer sales and marketing, design and fabrication, installation and commissioning, on-site hydraulic services, and repair and maintenance. Would you like details on any of these?',
  },
  {
    id: 'products',
    keywords: ['product', 'products', 'pump', 'pumps', 'valve', 'valves', 'cylinder', 'cylinders', 'hose', 'hoses', 'fitting', 'fittings', 'pneumatic', 'filter', 'filtration', 'motor', 'part', 'parts', 'stock'],
    answer:
      'We supply hydraulic pumps and motors, valves, cylinders, hoses and fittings, pneumatic components, lubrication systems, filtration units and complete power units, through our agencies and distributorships. Tell me the part or brand you need and our team will advise.',
  },
  {
    id: 'lubrication',
    keywords: ['lubrication', 'lubricator', 'grease', 'greasing', 'lube', 'lubricant'],
    answer:
      'We supply lubrication products and automatic greasing systems for industrial and heavy equipment. Call or email our team with your equipment details for a recommendation.',
  },
  {
    id: 'sectors',
    keywords: ['marine', 'ship', 'vessel', 'offshore', 'oil', 'gas', 'industrial', 'industry', 'mobile', 'construction', 'excavator', 'sector', 'sectors', 'industries'],
    answer:
      'We serve four main sectors: Marine, Oil & Gas, Industrial, and Mobile Hydraulics for construction and heavy vehicles.',
  },
  {
    id: 'certification',
    keywords: ['iso', 'certified', 'certification', 'certificate', 'quality', 'standard'],
    answer:
      'Eram Hydraulics is an ISO 9001:2015 certified company, so our quality management processes meet an internationally recognized standard.',
  },
  {
    id: 'branches',
    keywords: ['branch', 'branches', 'office', 'offices', 'location', 'address', 'where', 'riyadh', 'dammam', 'visit', 'located'],
    answer:
      'We have three locations: our head office in Dammam (2nd Industrial City), an office in the Al Fayha district of Dammam, and a branch in Riyadh on Dirar ibn Al Hazur Street. You can find full addresses in the Contact section.',
  },
  {
    id: 'contact',
    keywords: ['contact', 'phone', 'call', 'number', 'email', 'mail', 'reach', 'whatsapp', 'talk', 'speak'],
    answer:
      'You can call our head office on +966 13 837 4439 or email info@eramhydraulics.com. For urgent engineering challenges, calling the head office is the fastest route.',
  },
  {
    id: 'quote',
    keywords: ['quote', 'quotation', 'price', 'prices', 'pricing', 'cost', 'estimate', 'budget', 'order'],
    answer:
      'Pricing depends on the product and specification. Share your requirement by email at info@eramhydraulics.com or call +966 13 837 4439 and our sales team will prepare a quotation.',
  },
  {
    id: 'about',
    keywords: ['about', 'company', 'who', 'eram', 'history', 'experience', 'background'],
    answer:
      'Eram Hydraulics specializes in hydraulic fluid power transmission and general engineering across the Middle East, combining sales, design, installation, on-site service and repair under one roof.',
  },
  {
    id: 'thanks',
    keywords: ['thanks', 'thank', 'thank you', 'shukran', 'great', 'perfect'],
    answer: 'You are welcome. Is there anything else I can help you with?',
  },
];

export const chatFallback =
  'I am not sure about that one. You can reach our team directly at info@eramhydraulics.com or +966 13 837 4439 and they will be happy to help.';

export const quickReplies = ['Services', 'Products', 'Sectors we serve', 'Branch locations', 'Request a quote'];
