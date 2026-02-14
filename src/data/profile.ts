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
  /** Full legal name for formal contexts */
  fullName: string;
  title: string;
  tagline: string;
  bio: {
    /** Short bio for social media/meta descriptions */
    short: string;
    /** Full bio for about/resume sections */
    full: string[];
    /** SEO-optimized description for search engines */
    seo: string;
  };
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
  /** Technologies listed in JSON-LD "knowsAbout" field */
  knowsAbout: string[];
  /** Structured data for SEO */
  structuredData: {
    person: {
      address: {
        addressLocality: string;
        addressCountry: string;
      };
      alumniOf: {
        name: string;
      };
      hasCredential: Array<{
        name: string;
        credentialCategory: string;
      }>;
    };
  };
  /** SEO configuration for different page types */
  seo: {
    /** Default SEO meta description */
    defaultDescription: string;
    /** Default keywords */
    defaultKeywords: string;
    /** Default Open Graph image */
    defaultOgImage: string;
    /** Page-specific SEO configurations */
    pages: {
      home: {
        title: string;
        description: string;
        keywords: string;
      };
      projects: {
        title: string;
        description: string;
        keywords: string;
      };
      blog: {
        title: string;
        description: string;
        keywords: string;
      };
      resume: {
        title: string;
        description: string;
        keywords: string;
      };
    };
  };
  /** Computed statistics */
  stats: {
    totalProjects: number;
    totalLanguages: number;
    totalFrameworks: number;
    totalTools: number;
    totalCertifications: number;
    yearsExperience: number;
  };
}

/* ---- Data ---- */

const profile: Profile = {
  name: "KJ Dutaro",
  fullName: "Kristee Joy Dutaro",
  title: "Frontend Web Developer",
  tagline:
    "I build responsive, performant websites and web apps for clients worldwide — adapting to project needs, specializing in map integration, and modern frameworks like Astro and React.",
  bio: {
    short: "Frontend Web Developer specializing in JavaScript, HTML, CSS, Mapbox integration, and WordPress theme development. Built 60+ responsive websites with a focus on UI/UX, performance optimization, and technical SEO.",
    full: [
      "Frontend Web Developer with expertise in vanilla JavaScript, HTML, CSS, and modern web technologies. Built and deployed 60+ responsive websites featuring interactive Mapbox maps, custom WordPress themes, and performance-optimized interfaces. Strong focus on UI/UX, responsive design, technical SEO, and delivering clean, maintainable code. Contributed UI fixes to 4 Chrome extensions. Adaptable to project needs - experienced with PHP/WordPress theming and Tailwind CSS. Currently strengthening React skills through personal projects. Experienced working remotely and delivering projects independently.",
    ],
    seo: "KJ Dutaro (Kristee Joy Dutaro) - Frontend Web Developer specializing in JavaScript, HTML, CSS, Mapbox integration, and WordPress themes. Built 60+ responsive websites. Remote developer based in Philippines available for hire.",
  },
  location: "Davao City, Philippines",
  contact: {
    email: "kjdutaro@gmail.com",
    phone: "+63 956 179 3552",
  },
  social: {
    github: "https://github.com/kjorken",
    linkedin: "https://linkedin.com/in/kjdutaro",
  },
  siteUrl: "https://kjorken.xyz",
  skills: {
    languages: ["JavaScript", "PHP", "TypeScript"],
    frameworks: ["Astro", "React", "Next.js"],
    tools: [
      "Git/GitHub",
      "Figma",
      "Firebase",
      "Cloudflare",
      "Vercel",
      "Tailwind CSS",
      "Mapbox GL JS",
    ],
    specializations: [
      "Mapbox Integration",
      "WordPress Theme Development",
      "Technical SEO",
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
        "Interactive maps and location-based features with Mapbox.",
    },
  ],
  knowsAbout: [
    "JavaScript",
    "TypeScript",
    "HTML5",
    "CSS3",
    "Astro",
    "React",
    "Next.js",
    "WordPress",
    "PHP",
    "Tailwind CSS",
    "Mapbox GL JS",
    "UI/UX Design",
    "SEO",
    "Localization",
  ],
  highlights: [
    { label: "Websites Built", value: "60+" },
    { label: "Languages", value: "4" },
    { label: "WP Themes", value: "9+" },
  ],
  structuredData: {
    person: {
      address: {
        addressLocality: "Davao City",
        addressCountry: "PH",
      },
      alumniOf: {
        name: "University of Mindanao",
      },
      hasCredential: [
        {
          name: "IT Specialist - Network Security",
          credentialCategory: "certificate",
        },
        {
          name: "IT Specialist - Database",
          credentialCategory: "certificate",
        },
        {
          name: "IT Specialist - Java",
          credentialCategory: "certificate",
        },
      ],
    },
  },
  seo: {
    defaultDescription: "KJ Dutaro - Frontend Web Developer specializing in JavaScript, HTML, CSS, Mapbox integration, and WordPress themes. Built 60+ responsive websites. Remote developer based in Philippines available for hire.",
    defaultKeywords: "KJ Dutaro, Frontend Web Developer, JavaScript Developer, HTML CSS Developer, Mapbox Integration, WordPress Theme Developer, Touring Microsites, Remote Developer Philippines, Freelance Web Developer, Web Development Services",
    defaultOgImage: "/assets/img/hero.jpg",
    pages: {
      home: {
        title: "KJ Dutaro – Frontend Web Developer | Portfolio",
        description: "KJ Dutaro - Frontend Web Developer specializing in JavaScript, HTML, CSS, Mapbox integration, and WordPress themes. Built 60+ tourism microsites with focus on UI/UX and performance. Remote developer based in Philippines available for hire.",
        keywords: "KJ Dutaro, Frontend Web Developer, JavaScript Developer, HTML CSS Developer, Mapbox Integration, WordPress Themes, Touring Microsites, Remote Developer Philippines, Freelance Web Developer",
      },
      projects: {
        title: "Projects – KJ Dutaro | Web Development Portfolio",
        description: "KJ Dutaro - Frontend development projects: 60+ responsive websites with Mapbox integration, custom WordPress themes, Chrome extension UI development. JavaScript, HTML, CSS, Tailwind CSS.",
        keywords: "KJ Dutaro projects, web development portfolio, websites, WordPress themes, Chrome extensions, Mapbox integration, JavaScript projects",
      },
      blog: {
        title: "Blog – KJ Dutaro | Web Development Insights",
        description: "KJ Dutaro - Frontend development blog featuring JavaScript tutorials, WordPress theme development, map API integration, performance optimization, and UI/UX best practices.",
        keywords: "KJ Dutaro blog, web development tutorials, JavaScript tutorials, WordPress theme development, performance optimization, UI/UX best practices",
      },
      resume: {
        title: "Resume – KJ Dutaro | Frontend Web Developer",
        description: "KJ Dutaro - Frontend Web Developer resume: JavaScript, 60+ responsive websites, Mapbox integration, WordPress themes, technical SEO. Remote developer based in Philippines.",
        keywords: "KJ Dutaro resume, frontend web developer CV, JavaScript developer, WordPress theme developer, remote developer Philippines, download resume PDF",
      },
    },
  },
  stats: {
    totalProjects: 12,
    totalLanguages: 4,
    totalFrameworks: 3,
    totalTools: 10,
    totalCertifications: 3,
    yearsExperience: 1,
  },
};

export default profile;
