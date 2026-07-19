import { NavLink, Service, Project, Testimonial, Stat, ProcessStep, FAQ, SiteConfig } from "@/types";

export const siteConfig: SiteConfig = {
  name: "Raya Construction and Solutions",
  description:
    "India's premier construction company delivering luxury residential, commercial, and industrial projects with engineering excellence since 1999.",
  url: "https://rayaconstruction.com",
  phone: "+91 98765 43210",
  email: "info@rayaconstruction.com",
  address: "Mumbai, Maharashtra, India",
  social: {
    facebook: "https://facebook.com/rayaconstruction",
    twitter: "https://twitter.com/rayaconstruction",
    instagram: "https://instagram.com/rayaconstruction",
    linkedin: "https://linkedin.com/company/rayaconstruction",
    youtube: "https://youtube.com/rayaconstruction",
  },
};

export const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  {
    label: "About",
    href: "/about",
    children: [
      { label: "Our Story", href: "/about#story" },
      { label: "Mission & Vision", href: "/about#mission" },
      { label: "Our Team", href: "/about#team" },
      { label: "Awards", href: "/about#awards" },
    ],
  },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Construction", href: "/services#construction" },
      { label: "Architecture", href: "/services#architecture" },
      { label: "Interior Design", href: "/services#interior" },
      { label: "Infrastructure", href: "/services#infrastructure" },
      { label: "Renovation", href: "/services#renovation" },
      { label: "Project Management", href: "/services#project-management" },
    ],
  },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

export const services: Service[] = [
  {
    id: "construction",
    title: "Construction",
    description:
      "End-to-end construction services for residential, commercial, and industrial projects. We build with precision using cutting-edge technology and premium materials.",
    icon: "Building2",
    features: ["Residential Construction", "Commercial Buildings", "Industrial Facilities", "High-Rise Structures", "Smart Buildings", "Green Construction"],
    image: "/images/services/construction.jpg",
  },
  {
    id: "architecture",
    title: "Architecture",
    description:
      "Innovative architectural designs that blend aesthetics with functionality. Our architects create spaces that inspire and stand the test of time.",
    icon: "Compass",
    features: ["Custom Home Design", "Commercial Architecture", "Sustainable Design", "3D Visualization", "Interior Architecture", "Landscape Architecture"],
    image: "/images/services/architecture.jpg",
  },
  {
    id: "interior",
    title: "Interior Design",
    description:
      "Transform spaces into extraordinary experiences with our luxury interior design services. Every detail crafted to perfection.",
    icon: "Palette",
    features: ["Luxury Interiors", "Office Spaces", "Hospitality Design", "Custom Furniture", "Lighting Design", "Material Selection"],
    image: "/images/services/interior.jpg",
  },
  {
    id: "infrastructure",
    title: "Infrastructure",
    description:
      "Building the backbone of modern India with large-scale infrastructure projects including roads, bridges, and public utilities.",
    icon: "Landmark",
    features: ["Roads & Highways", "Bridges", "Water Supply Systems", "Drainage Systems", "Urban Infrastructure", "Smart City Projects"],
    image: "/images/services/infrastructure.jpg",
  },
  {
    id: "commercial",
    title: "Commercial",
    description:
      "Delivering world-class commercial spaces that drive business success. From corporate offices to retail complexes.",
    icon: "Briefcase",
    features: ["Corporate Offices", "Retail Spaces", "Shopping Malls", "Hotels & Resorts", "Restaurants", "Co-working Spaces"],
    image: "/images/services/commercial.jpg",
  },
  {
    id: "renovation",
    title: "Renovation",
    description:
      "Breathe new life into existing structures with our expert renovation services. From modern makeovers to heritage restoration.",
    icon: "Wrench",
    features: ["Home Renovation", "Office Remodeling", "Heritage Restoration", "Structural Upgrades", "Facade Renovation", "Space Optimization"],
    image: "/images/services/renovation.jpg",
  },
  {
    id: "project-management",
    title: "Project Management",
    description:
      "Comprehensive project management ensuring timely delivery, budget optimization, and quality assurance at every phase.",
    icon: "ClipboardList",
    features: ["Planning & Scheduling", "Cost Management", "Quality Control", "Risk Management", "Vendor Coordination", "Progress Reporting"],
    image: "/images/services/project-management.jpg",
  },
  {
    id: "civil-engineering",
    title: "Civil Engineering",
    description:
      "Expert civil engineering solutions from foundation to finish. Structural analysis, soil testing, and engineering design.",
    icon: "HardHat",
    features: ["Structural Analysis", "Soil Investigation", "Foundation Design", "MEP Engineering", "Surveying", "Environmental Assessment"],
    image: "/images/services/civil-engineering.jpg",
  },
];

export const projects: Project[] = [
  {
    id: "1",
    title: "Skyline Tower",
    description: "A 32-story premium residential tower with world-class amenities and sustainable design.",
    category: "Residential",
    location: "Mumbai, Maharashtra",
    year: "2024",
    image: "/images/projects/skyline-tower.jpg",
    tags: ["High-Rise", "Luxury", "Sustainable"],
  },
  {
    id: "2",
    title: "TechPark Business Hub",
    description: "Modern corporate campus with smart building technology and green certifications.",
    category: "Commercial",
    location: "Pune, Maharashtra",
    year: "2024",
    image: "/images/projects/techpark.jpg",
    tags: ["Corporate", "Smart Building", "LEED Certified"],
  },
  {
    id: "3",
    title: "Royal Heritage Villa",
    description: "Luxury villa blending traditional architecture with contemporary living spaces.",
    category: "Residential",
    location: "Jaipur, Rajasthan",
    year: "2023",
    image: "/images/projects/royal-villa.jpg",
    tags: ["Heritage", "Luxury", "Custom Design"],
  },
  {
    id: "4",
    title: "Grand Hyatt Renovation",
    description: "Complete interior renovation of a 5-star hotel lobby and 200 guest rooms.",
    category: "Interior",
    location: "New Delhi",
    year: "2024",
    image: "/images/projects/grand-hyatt.jpg",
    tags: ["Hospitality", "Renovation", "Luxury"],
  },
  {
    id: "5",
    title: "NH-48 Highway Extension",
    description: "25km highway extension project with modern safety features and smart tolling.",
    category: "Infrastructure",
    location: "Maharashtra",
    year: "2023",
    image: "/images/projects/highway.jpg",
    tags: ["Highway", "Government", "Infrastructure"],
  },
  {
    id: "6",
    title: "Azure Commercial Complex",
    description: "Mixed-use commercial complex with retail, office spaces, and entertainment zones.",
    category: "Commercial",
    location: "Bangalore, Karnataka",
    year: "2024",
    image: "/images/projects/azure-complex.jpg",
    tags: ["Mixed-Use", "Retail", "Modern"],
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Rajesh Sharma",
    position: "CEO",
    company: "Sharma Enterprises",
    rating: 5,
    content:
      "Raya Construction delivered our corporate headquarters ahead of schedule with exceptional quality. Their attention to detail and professional approach is unmatched in the industry.",
    avatar: "/images/testimonials/rajesh.jpg",
  },
  {
    id: "2",
    name: "Priya Mehta",
    position: "Director",
    company: "Mehta Group",
    rating: 5,
    content:
      "The luxury villa they built for our family exceeded every expectation. From design to execution, Raya's team demonstrated true craftsmanship and dedication.",
    avatar: "/images/testimonials/priya.jpg",
  },
  {
    id: "3",
    name: "Amit Patel",
    position: "Founder",
    company: "Patel Builders",
    rating: 5,
    content:
      "Working with Raya Construction has been a transformative experience. Their project management capabilities and commitment to timelines is commendable.",
    avatar: "/images/testimonials/amit.jpg",
  },
  {
    id: "4",
    name: "Sunita Reddy",
    position: "Architect",
    company: "Reddy Associates",
    rating: 5,
    content:
      "As an architect, I appreciate Raya's ability to translate complex designs into reality. Their engineering team works seamlessly with our creative vision.",
    avatar: "/images/testimonials/sunita.jpg",
  },
  {
    id: "5",
    name: "Vikram Singh",
    position: "Hotel Manager",
    company: "Grand Palace Hotels",
    rating: 5,
    content:
      "The renovation of our heritage hotel was executed with remarkable sensitivity to its historical character while adding modern amenities. Outstanding work.",
    avatar: "/images/testimonials/vikram.jpg",
  },
];

export const stats: Stat[] = [
  { id: "1", value: 25, suffix: "+", label: "Years Experience" },
  { id: "2", value: 500, suffix: "+", label: "Projects Completed" },
  { id: "3", value: 100, suffix: "+", label: "Expert Engineers" },
  { id: "4", value: 98, suffix: "%", label: "Client Satisfaction" },
];

export const processSteps: ProcessStep[] = [
  {
    id: 1,
    step: "01",
    title: "Planning",
    description: "Comprehensive site analysis, feasibility studies, and detailed project planning to establish a solid foundation for success.",
  },
  {
    id: 2,
    step: "02",
    title: "Design",
    description: "Innovative architectural and engineering designs crafted with precision, incorporating client vision with modern best practices.",
  },
  {
    id: 3,
    step: "03",
    title: "Execution",
    description: "Expert construction with premium materials, cutting-edge technology, and skilled craftsmanship at every stage.",
  },
  {
    id: 4,
    step: "04",
    title: "Quality Check",
    description: "Rigorous quality inspections and testing at every milestone to ensure the highest standards are maintained throughout.",
  },
  {
    id: 5,
    step: "05",
    title: "Delivery",
    description: "Timely handover with complete documentation, warranty, and post-construction support for complete peace of mind.",
  },
];

export const faqs: FAQ[] = [
  {
    id: "1",
    question: "What types of construction projects does Raya handle?",
    answer:
      "Raya Construction handles a wide spectrum of projects including residential buildings, commercial complexes, industrial facilities, infrastructure development, interior design, and renovation projects. We cater to luxury homes, corporate offices, hotels, restaurants, educational institutions, and healthcare facilities.",
  },
  {
    id: "2",
    question: "How do you ensure project quality and safety?",
    answer:
      "We follow strict quality management systems with regular inspections at every phase. Our team includes certified safety engineers, and we comply with all national and international construction safety standards. Every project undergoes rigorous quality checks before handover.",
  },
  {
    id: "3",
    question: "What is the typical project timeline?",
    answer:
      "Project timelines vary based on scope and complexity. A residential project typically takes 8-18 months, while commercial projects may take 12-36 months. We provide detailed timelines during the planning phase and use advanced project management tools to ensure on-time delivery.",
  },
  {
    id: "4",
    question: "Do you provide design and architecture services?",
    answer:
      "Yes, we offer comprehensive design and architecture services through our in-house team of experienced architects and designers. From concept development and 3D visualization to detailed engineering drawings, we handle the complete design lifecycle.",
  },
  {
    id: "5",
    question: "How can I get a quote for my project?",
    answer:
      "You can request a quote by filling out our contact form, calling us directly, or sending an email. Our team will schedule a consultation to understand your requirements and provide a detailed, transparent quotation within 48 hours.",
  },
  {
    id: "6",
    question: "Which cities do you operate in?",
    answer:
      "While headquartered in Mumbai, Maharashtra, Raya Construction operates across India. We have successfully completed projects in Mumbai, Pune, Delhi, Bangalore, Jaipur, Hyderabad, and several other cities nationwide.",
  },
];

export const clients = [
  "Tata Group",
  "L&T",
  "Reliance",
  "Godrej",
  "DLF",
  "Oberoi Realty",
  "Phoenix Mills",
  "ITC Hotels",
  "Marriott",
  "Hilton",
];

export const heroSlides = [
  {
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80",
    alt: "Modern construction site with cranes",
  },
  {
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1920&q=80",
    alt: "High-rise building under construction",
  },
  {
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80",
    alt: "Modern glass commercial building",
  },
  {
    image: "https://images.unsplash.com/photo-1613545325278-f24b0cae1224?w=1920&q=80",
    alt: "Luxury residential architecture",
  },
];

export const aboutImage = "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80";

export const serviceImages: Record<string, string> = {
  construction: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80",
  architecture: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80",
  interior: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=600&q=80",
  infrastructure: "https://images.unsplash.com/photo-1513467535987-fd81bc7d62f8?w=600&q=80",
  commercial: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80",
  renovation: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&q=80",
  "project-management": "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&q=80",
  "civil-engineering": "https://images.unsplash.com/photo-1513467535987-fd81bc7d62f8?w=600&q=80",
};

export const projectImages: Record<string, string> = {
  "1": "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80",
  "2": "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
  "3": "https://images.unsplash.com/photo-1613545325278-f24b0cae1224?w=800&q=80",
  "4": "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80",
  "5": "https://images.unsplash.com/photo-1513467535987-fd81bc7d62f8?w=800&q=80",
  "6": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
};

export const contactHeroImage = "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80";
export const servicesHeroImage = "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80";
export const projectsHeroImage = "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1920&q=80";
export const aboutHeroImage = "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1920&q=80";
