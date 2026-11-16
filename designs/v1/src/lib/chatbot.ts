import { services } from '@/data/services';
import { products, productCategories } from '@/data/products';
import { agencies } from '@/data/agencies';

export interface BotLink {
  to: string;
  label: string;
}

export interface BotReply {
  text: string;
  links?: BotLink[];
}

interface Topic {
  keywords: string[];
  respond: () => BotReply;
}

const matches = (input: string, keywords: string[]) =>
  keywords.some((keyword) => new RegExp(`\\b${keyword}`).test(input));

const productCategoryNames = productCategories
  .filter((category) => category.id !== 'all')
  .map((category) => category.name);

const topics: Topic[] = [
  {
    keywords: ['hello', 'hey', 'salam', 'assalam', 'good morning', 'good evening'],
    respond: () => ({
      text: 'Hello, welcome to ERAM Hydraulics. I can help you explore our services, products, and partner agencies, or point you to the right page for a quotation. What would you like to know?',
    }),
  },
  {
    keywords: ['quot', 'price', 'pricing', 'cost', 'how much', 'budget', 'rfq'],
    respond: () => ({
      text: 'To request a quotation, share your requirements through our contact form. Include the service or product, your operating conditions, and your company details, and our team will get back to you.',
      links: [{ to: '/contact', label: 'Request a quote' }],
    }),
  },
  {
    keywords: ['human', 'person', 'agent', 'speak', 'talk to', 'representative'],
    respond: () => ({
      text: 'You can reach our team by phone or through the contact form during working hours, Saturday to Thursday, 8:00 AM to 6:00 PM.',
      links: [{ to: '/contact', label: 'Contact details' }],
    }),
  },
  {
    keywords: ['agenc', 'distributor', 'partner', 'brand', 'supplier', 'authoris', 'authoriz'],
    respond: () => ({
      text: `We are an authorised distributor for ${agencies.length} hydraulic component manufacturers, covering cylinders, pumps, valves, filtration, hoses, and lubrication systems.`,
      links: [{ to: '/agencies', label: 'View partner agencies' }],
    }),
  },
  {
    keywords: ['repair', 'refurb', 'service', 'maintenance', 'install', 'commission', 'troubleshoot', 'diagnos', 'offshore', 'onshore', 'marine', 'industrial', 'mobile', 'power pack'],
    respond: () => ({
      text: 'We offer end-to-end hydraulic services, including offshore and onshore, marine, industrial and mobile hydraulics, troubleshooting, cylinder repair, power pack manufacturing, installation and commissioning, lubrication systems, and maintenance.',
      links: [
        ...services.slice(0, 4).map((service) => ({ to: `/services#${service.id}`, label: service.shortTitle })),
        { to: '/services', label: 'All services' },
      ],
    }),
  },
  {
    keywords: ['product', 'catalog', 'catalogue', 'pump', 'valve', 'motor', 'hose', 'fitting', 'filter', 'seal', 'manifold', 'control panel', 'cylinder', 'lubric', 'buy'],
    respond: () => ({
      text: `Our catalogue covers ${productCategoryNames.join(', ')}. We currently list ${products.length} featured products, and you can request a quote for any item.`,
      links: [{ to: '/products', label: 'Browse products' }],
    }),
  },
  {
    keywords: ['about', 'company', 'iso', 'certif', 'quality', 'vision', 'mission', 'who are', 'history', 'facilit'],
    respond: () => ({
      text: 'ERAM Hydraulics is a Saudi Arabian hydraulic engineering company, ISO 9001:2015 certified, with facilities in Dammam and Riyadh.',
      links: [{ to: '/about', label: 'About us' }],
    }),
  },
  {
    keywords: ['contact', 'location', 'address', 'office', 'dammam', 'riyadh', 'where', 'phone', 'call', 'email', 'hours', 'open'],
    respond: () => ({
      text: 'We have offices in Dammam (King Fahd Road, Eastern Province) and Riyadh (Olaya Street). Working hours are Saturday to Thursday, 8:00 AM to 6:00 PM.',
      links: [{ to: '/contact', label: 'Contact page' }],
    }),
  },
];

const fallbackReply: BotReply = {
  text: 'I am not sure I understood that. I can help with services, products, partner agencies, quotations, or contact details.',
};

export function getBotReply(input: string): BotReply {
  const normalized = input.toLowerCase();
  const topic = topics.find((candidate) => matches(normalized, candidate.keywords));
  return topic ? topic.respond() : fallbackReply;
}
