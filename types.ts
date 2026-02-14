import { LucideIcon } from 'lucide-react';

export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  eligibility: string[];
  documents: string[];
  icon: LucideIcon;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface VisaCategory {
  title: string;
  description: string;
}

export interface Country {
  name: string;
  code: string; // ISO 2-letter code
  flagUrl?: string; // Optional override
  heroImage: string;
  description: string;
  visaCategories: VisaCategory[];
  documents: string[];
  process: string[];
  fees: string;
  processingTime: string;
}

export interface NavItem {
  label: string;
  path: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string; // HTML string for rich text content
  author: string;
  role: string;
  date: string;
  category: string;
  imageUrl: string;
  readTime: string;
  tags: string[];
}