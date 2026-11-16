import { productCategories } from '@/data/products';
import { services } from '@/data/services';
import type { NavItem } from '@/types/content';

export const primaryNav: NavItem[] = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  {
    label: 'Services',
    to: '/services',
    children: services.map((s) => ({ label: s.title, to: `/services/${s.slug}` })),
  },
  {
    label: 'Products',
    to: '/products',
    children: productCategories.map((c) => ({ label: c.title, to: `/products?category=${c.id}` })),
  },
  { label: 'Industries', to: '/industries' },
  { label: 'Agencies', to: '/agencies' },
  { label: 'Contact', to: '/contact' },
];
