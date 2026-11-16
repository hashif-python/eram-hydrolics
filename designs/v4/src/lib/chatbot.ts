import { company } from '@/data/company';
import { productCategories } from '@/data/products';
import { services } from '@/data/services';

export interface ChatLink {
  label: string;
  to: string;
}

export interface ChatReply {
  text: string;
  links?: ChatLink[];
}

export type ChatResponder = (message: string) => ChatReply;

interface Intent {
  keywords: string[];
  reply: ChatReply;
}

const intents: Intent[] = [
  {
    keywords: ['product', 'products', 'pump', 'cylinder', 'valve', 'hose', 'seal', 'filter', 'spare', 'pneumatic', 'lubrication', 'catalogue', 'catalog'],
    reply: {
      text: `We supply and manufacture ${productCategories.length} product categories, including hydraulic cylinders, power packs, valves and control stands, lubrication systems, seals and filtration, and spare parts. Some brands are supplied as an authorised distributor.`,
      links: [{ label: 'Browse all products', to: '/products' }],
    },
  },
  {
    keywords: ['service', 'services', 'repair', 'repairs', 'troubleshoot', 'troubleshooting', 'survey', 'overhaul', 'commission', 'commissioning', 'flush', 'flushing', 'install', 'installation', 'maintenance'],
    reply: {
      text: `We offer ${services.length} hydraulic services, from troubleshooting, surveys and repairs to installation, commissioning, flushing and component overhaul.`,
      links: [{ label: 'View all services', to: '/services' }],
    },
  },
  {
    keywords: ['industry', 'industries', 'oil', 'gas', 'marine', 'offshore', 'manufacturing', 'mobile', 'construction', 'mining', 'sector'],
    reply: {
      text: 'We serve Oil & Gas, Marine & Offshore, Industrial Manufacturing, Mobile Hydraulics, and Construction & Heavy Equipment.',
      links: [{ label: 'See industries served', to: '/industries' }],
    },
  },
  {
    keywords: ['agency', 'agencies', 'distributor', 'distributorship', 'brand', 'brands', 'partner', 'partners'],
    reply: {
      text: 'ERAM Hydraulics is an authorised distributor for several established brands, including Sun Hydraulics, Pall Corporation, Chicago Pneumatic and Bijur Delimon.',
      links: [{ label: 'View agencies and partners', to: '/agencies' }],
    },
  },
  {
    keywords: ['iso', 'certified', 'certification', 'quality', 'about', 'company', 'history', 'who', 'experience', 'mission', 'vision', 'holdings'],
    reply: {
      text: `ERAM Hydraulics is an ${company.certification} company. We are ${company.group.toLowerCase()}, with our main facility in Dammam Second Industrial City and a branch in Riyadh.`,
      links: [{ label: 'About ERAM Hydraulics', to: '/about' }],
    },
  },
  {
    keywords: ['contact', 'phone', 'call', 'address', 'location', 'office', 'email', 'branch', 'riyadh', 'dammam', 'map', 'reach', 'whatsapp'],
    reply: {
      text: `You can reach us at ${company.phones[0].display} or ${company.email}. Our head office is in Dammam, and our Riyadh branch is at Khalidiya.`,
      links: [{ label: 'Contact us', to: '/contact' }],
    },
  },
  {
    keywords: ['quote', 'quotation', 'price', 'pricing', 'cost', 'enquiry', 'enquire', 'inquiry'],
    reply: {
      text: 'For a quotation, please share your equipment and requirements through our contact page or by email. Our team will respond with the appropriate next steps.',
      links: [{ label: 'Request a quote', to: '/contact' }],
    },
  },
];

const FALLBACK: ChatReply = {
  text: 'I am not sure I have the answer to that. You can try one of the quick questions below, or contact our team directly and they will help you.',
  links: [{ label: 'Contact our team', to: '/contact' }],
};

const GREETING_PATTERN = /^(hi|hello|hey|good (morning|afternoon|evening)|salam|as-salamu)\b/;

const normalise = (text: string) => text.toLowerCase().replace(/[^a-z0-9\s&]/g, ' ');

export const respond: ChatResponder = (message) => {
  const normalised = normalise(message).trim();
  if (!normalised) return FALLBACK;

  if (GREETING_PATTERN.test(normalised)) {
    return {
      text: 'Hello, welcome to ERAM Hydraulics. How can I help you today? You can ask about our products, services, company or contact details.',
    };
  }

  const words = new Set(normalised.split(/\s+/));
  let best: { score: number; reply: ChatReply } | null = null;

  for (const intent of intents) {
    const score = intent.keywords.filter((keyword) => words.has(keyword)).length;
    if (score > 0 && (!best || score > best.score)) {
      best = { score, reply: intent.reply };
    }
  }

  return best ? best.reply : FALLBACK;
};

export const quickQuestions: { label: string; message: string }[] = [
  { label: 'Products', message: 'What products do you offer?' },
  { label: 'Services', message: 'What services do you provide?' },
  { label: 'Company', message: 'Tell me about the company' },
  { label: 'Contact', message: 'How can I contact you?' },
];

export const enquiryEmail = {
  to: company.email,
  subject: 'Website enquiry - ERAM Hydraulics',
  body: 'Hello ERAM Hydraulics team,\n\nI would like to enquire about:\n\nName:\nCompany:\nPhone:\nRequirement:\n\nThank you.',
};
