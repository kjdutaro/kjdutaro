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
  title: "Frontend / Web Developer",
  tagline:
    "I build responsive, performant websites and web apps for clients worldwide — specializing in websites with map integration, Chrome extensions, and modern frameworks like React and Astro.",
  bio: {
    short: "Frontend / Web Developer specializing in React, JavaScript, and modern web technologies. Built 30+ websites with map APIs, 6 Chrome extensions.",
    full: [
      "Frontend / Web Developer specializing in JavaScript, React, and modern web technologies. Built and deployed 30+ websites with integrated map APIs, improving load times by ~20% and search visibility through performance optimization. Developed 6 Chrome extensions using JavaScript and Chrome Extensions API. Expertise in responsive design and delivering maintainable web applications using HTML, CSS, React.js, and Next.js.",
    ],
    seo: "KJ Dutaro (Kristee Joy Dutaro) - Frontend / Web Developer specializing in React, JavaScript, and modern web technologies. Built 30+ websites with map APIs, 6 Chrome extensions. Remote developer based in Philippines available for hire.",
  },
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
  skills: {
    languages: ["JavaScript", "Python", "Java", "PHP", "TypeScript"],
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
        "Interactive maps and location-based features with Mapbox.",
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
  highlights: [
    { label: "Tourism Sites (20+ countries)", value: "59+" },
    { label: "Languages", value: "10+" },
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
    defaultDescription: "KJ Dutaro - Frontend / Web Developer specializing in React, JavaScript, and modern web technologies. Built 30+ touring microsites with map APIs, 6 Chrome extensions. Remote developer based in Philippines available for hire.",
    defaultKeywords: "KJ Dutaro, Frontend Developer, React Developer, JavaScript Developer, Chrome Extension Developer, Touring Microsites, Map API Integration, Remote Developer Philippines, Freelance Web Developer, Web Development Services",
    defaultOgImage: "/img/hero.jpg",
    pages: {
      home: {
        title: "KJ Dutaro – Frontend / Web Developer | Portfolio",
        description: "KJ Dutaro - Frontend / Web Developer specializing in React, JavaScript, and modern web technologies. Built 30+ touring microsites with map APIs, 6 Chrome extensions. Remote developer based in Philippines available for hire.",
        keywords: "KJ Dutaro, Frontend Developer, React Developer, JavaScript Developer, Chrome Extension Developer, Touring Microsites, Map API Integration, Remote Developer Philippines, Freelance Web Developer, Web Development Services",
      },
      projects: {
        title: "Projects – KJ Dutaro | Web Development Portfolio",
        description: "KJ Dutaro - Web development projects: 30+ touring microsites with map API integration, 6 Chrome extensions, custom WordPress themes. React, JavaScript, and modern web applications.",
        keywords: "KJ Dutaro projects, web development portfolio, touring microsites, Chrome extensions, map API integration, React projects, JavaScript applications",
      },
      blog: {
        title: "Blog – KJ Dutaro | Web Development Insights",
        description: "KJ Dutaro - Web development blog featuring React tutorials, Chrome extension development, map API integration, and JavaScript best practices. Coming soon.",
        keywords: "KJ Dutaro blog, web development tutorials, React tutorials, Chrome extension development, JavaScript best practices, map API guides",
      },
      resume: {
        title: "Resume – KJ Dutaro | Frontend / Web Developer",
        description: "KJ Dutaro - Frontend / Web Developer resume: React, JavaScript, 30+ touring microsites, 6 Chrome extensions. Remote developer based in Philippines. Download CV PDF.",
        keywords: "KJ Dutaro resume, frontend developer CV, React developer, remote developer Philippines, Chrome extension developer, download resume PDF",
      },
    },
  },
  stats: {
    totalProjects: 14,
    totalLanguages: 6,
    totalFrameworks: 3,
    totalTools: 8,
    totalCertifications: 3,
    yearsExperience: 2,
  },
};

export default profile;
