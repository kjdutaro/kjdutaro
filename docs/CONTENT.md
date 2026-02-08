# Content Guide

Where each type of content lives, how to add new entries, and how to update existing data.

---

## Single Source of Truth: Profile Data

All personal information (name, title, bio, contact, skills, services) lives in one place:

**`src/data/profile.ts`**

Update this file when any of the following change:

- Your name, title, or tagline
- Contact info (email, phone)
- Social links (GitHub, LinkedIn)
- Skill lists
- Service offerings
- Hero highlight stats (e.g. "59+ Tourism Sites")

Every page (hero, meta tags, JSON-LD, resume, footer) pulls from this file automatically.

---

## Content Collections

Astro content collections are defined in `src/content/config.ts` with Zod schemas.

### Projects — `src/content/projects/`

Each project is a Markdown file with frontmatter:

```yaml
---
title: Project Name
description: One-sentence summary.
date: 2025-01-15
tech: ["React", "Firebase", "Tailwind CSS"]
featured: true          # appears on homepage "Featured Work"
image: /images/project.png  # optional
github: https://github.com/user/repo  # optional
liveLink: https://example.com  # optional
---

Detailed project description in Markdown...
```

**To add a project:** create a new `.md` file in `src/content/projects/`.

### Blog — `src/content/blog/`

```yaml
---
title: Post Title
description: Brief summary for cards and SEO.
date: 2025-02-01
tags: [JavaScript, Astro]   # optional
author: Kristee Joy Dutaro  # optional, defaults to profile name in layout
published: true             # set false to hide from listings
---

Post body in Markdown...
```

**To add a post:** create a new `.md` file in `src/content/blog/`.
Posts with `published: false` are hidden from the blog index and homepage.

### Experience — `src/content/experience/`

```yaml
---
title: Job Title
company: Company Name
startDate: 2024-10-01
endDate: 2025-06-30    # omit for current role
description: One-paragraph summary of responsibilities.
current: true          # true for active roles
---
```

### Certifications — `src/content/certifications/`

```yaml
---
title: IT Specialist - Network Security
issuer: Certiport (Pearson VUE)
date: 2025-05-15
credentialId: ABC123        # optional
credentialUrl: https://...  # optional
---

Optional description body in Markdown.
```

---

## Pages

| Route | Source file | Notes |
|-------|-----------|-------|
| `/` | `src/pages/index.astro` | Homepage, pulls from collections + profile |
| `/projects` | `src/pages/projects/index.astro` | All projects |
| `/projects/[slug]` | `src/pages/projects/[slug].astro` | Individual project |
| `/blog` | `src/pages/blog/index.astro` | All published posts |
| `/blog/[slug]` | `src/pages/blog/[slug].astro` | Individual post |
| `/resume` | `src/pages/resume.astro` | Auto-generated from collections |
| `/blog/rss.xml` | `src/pages/blog/rss.xml.js` | RSS feed |

---

## Updating the Resume

The resume page (`/resume`) is **fully dynamic** — it renders from:

- `profile.ts` (name, title, bio, skills)
- `experience` collection (work history)
- `certifications` collection (credentials)
- `projects` collection (featured projects only)

To update your resume, simply update the relevant collection entries or profile data. No need to edit `resume.astro` directly.
