import type { LucideIcon } from 'lucide-react';

export interface ImageAsset {
  src: string;
  alt: string;
}

export interface Service {
  slug: string;
  title: string;
  summary: string;
  description: string[];
  capabilities: string[];
  applications: string[];
  icon: LucideIcon;
  image: ImageAsset;
}

export type ProductCategoryId =
  | 'hydraulic-cylinders'
  | 'power-units'
  | 'valves-controls'
  | 'pumps-motors'
  | 'hoses-fittings'
  | 'pneumatic'
  | 'lubrication'
  | 'seals-filtration'
  | 'specialty-equipment'
  | 'spare-parts';

export interface ProductCategory {
  id: ProductCategoryId;
  title: string;
  description: string;
}

export type ContentStatus = 'verified' | 'suggested';

export interface Product {
  slug: string;
  name: string;
  category: ProductCategoryId;
  status: ContentStatus;
  summary: string;
  overview: string[];
  features: string[];
  applications: string[];
  brand?: string;
  image: ImageAsset;
}

export interface Industry {
  slug: string;
  title: string;
  summary: string;
  challenges: string[];
  solutions: string[];
  equipment: string[];
  icon: LucideIcon;
  image: ImageAsset;
}

export interface Agency {
  name: string;
  href: string;
  description: string;
}

export interface NavItem {
  label: string;
  to: string;
  children?: { label: string; to: string }[];
}
