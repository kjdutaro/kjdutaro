/**
 * Centralized profile data — single source of truth for personal information
 * used across the entire site (hero, meta tags, JSON-LD schema, resume,
 * contact section, footer, layouts).
 *
 * Update this file when your info changes; every page will reflect the update.
 */

/* ---- Type definitions ---- */

export interface ProfileHighlight {
  label: string;
  value: string;
}

export interface Service {
  /** Lucide icon component name (must match an import in the consuming component) */
  icon: string;
  title: string;
  description: string;
}

export interface Profile {
  name: string;
  title: string;
  tagline: string;
  bio: string[];
  location: string;
  contact: {
    email: string;
    phone: string;
  };
  social: {
    github: string;
    linkedin: string;
  };
  siteUrl: string;
  highlights: ProfileHighlight[];
  skills: {
    languages: string[];
    frameworks: string[];
    tools: string[];
    specializations: string[];
  };
  services: Service[];
  /** Technologies listed in the JSON-LD "knowsAbout" field */
  knowsAbout: string[];
}

/* ---- Data ---- */

const profile: Profile = {
  name: "Kristee Joy Dutaro",
  title: "Frontend / Web Developer",
  tagline:
    "I build responsive, performant websites and web apps for clients worldwide — specializing in touring microsites with map integration, Chrome extensions, and modern frameworks like React and Astro.",
  bio: [
    "Frontend / Web Developer specializing in JavaScript, React, and modern web technologies. Built and deployed 30+ touring microsites with integrated map APIs, improving load times by ~20% and search visibility through performance optimization. Developed 6 Chrome extensions using JavaScript and Chrome Extensions API. Expertise in responsive design and delivering maintainable web applications using HTML, CSS, React.js, and Next.js.",
  ],
  location: "Philippines (Remote)",
  contact: {
    email: "kjdutaro@gmail.com",
    phone: "+63 956 179 3552",
  },
  social: {
    github: "https://github.com/kjorken",
    linkedin: "https://linkedin.com/in/kjdutaro",
  },
  siteUrl: "https://kjorken.xyz",
  highlights: [
    { label: "Tourism Sites (20+ countries)", value: "59+" },
    { label: "Languages", value: "10+" },
    { label: "WP Themes", value: "9+" },
  ],
  skills: {
    languages: ["JavaScript", "HTML/CSS", "Python", "Java", "PHP", "TypeScript"],
    frameworks: ["React", "Next.js", "Astro"],
    tools: [
      "Git/GitHub",
      "VS Code",
      "Cursor IDE",
      "Figma",
      "Firebase",
      "Cloudflare",
      "Vercel",
      "Tailwind CSS",
    ],
    specializations: [
      "Static Site Generation",
      "WordPress Theme Development",
      "Multi-language Localization",
      "Blog Content Generation",
      "Mapbox Integration",
      "Responsive Design",
    ],
  },
  services: [
    {
      icon: "Globe",
      title: "Web Development",
      description:
        "Static sites and dynamic apps with Astro, React, Next.js. Responsive design, performance, and clean code.",
    },
    {
      icon: "Paintbrush",
      title: "WordPress Themes",
      description:
        "Custom themes from Figma. Theme customization, plugin work, and template creation.",
    },
    {
      icon: "Wrench",
      title: "Maintenance",
      description:
        "Updates, security, performance, and ongoing improvement for existing sites.",
    },
    {
      icon: "FileText",
      title: "Blog & Content",
      description:
        "AI-assisted blog content, SEO, and content strategy for organic traffic.",
    },
    {
      icon: "Languages",
      title: "Localization",
      description:
        "Multi-language translation and localization for consistent UX across regions.",
    },
    {
      icon: "MapPin",
      title: "Mapbox",
      description:
        "Interactive maps, tour guides, and location-based features with Mapbox.",
    },
  ],
  knowsAbout: [
    "TypeScript",
    "JavaScript",
    "React",
    "Next.js",
    "Astro",
    "WordPress",
    "UI/UX Design",
    "SEO",
    "Localization",
    "Tourism Web Development",
    "Multi-language Localization",
    "International SEO",
  ],
};

export default profile;
