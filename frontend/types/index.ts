export interface NavLink {
  label: string;
  href: string;
  children?: NavLink[];
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  image?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  location: string;
  year: string;
  image: string;
  tags: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  position: string;
  company: string;
  rating: number;
  content: string;
  avatar: string;
}

export interface TeamMember {
  id: string;
  name: string;
  position: string;
  image: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export interface Stat {
  id: string;
  value: number;
  suffix: string;
  label: string;
}

export interface ProcessStep {
  id: number;
  step: string;
  title: string;
  description: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  service?: string;
}

export interface SiteConfig {
  name: string;
  description: string;
  url: string;
  phone: string;
  email: string;
  address: string;
  social: {
    facebook: string;
    twitter: string;
    instagram: string;
    linkedin: string;
    youtube: string;
  };
}

export interface OfficeLocation {
  id: string;
  city: string;
  address: string;
  phone: string;
  email: string;
  mapUrl: string;
}
