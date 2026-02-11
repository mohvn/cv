export type ProjectStatus = "building" | "live" | "comingSoon" | "private";

export interface Project {
  slug: string;
  title: string;
  description: string;
  longDescription: string[];
  screenshot: string;
  buildingGif?: string;
  github?: string;
  website?: string;
  status: ProjectStatus;
  stack: { name: string; href?: string }[];
}

export const projects: Project[] = [
  {
    slug: "ovni",
    title: "OVNI",
    description: "App for retailers and influencers to register and form partnerships for selling products through social media.",
    longDescription: [
      "OVNI is an application that connects retailers and influencers so they can form partnerships and sell products through social media.",
      "Retailers register their products and campaigns; influencers discover opportunities and apply. The platform streamlines the entire partnership workflow.",
    ],
    screenshot: "/static/images/ovni.png",
    github: undefined,
    website: "http://ovni.com.br/",
    status: "live",
    stack: [
      { name: "Next.js", href: "https://www.google.com/search?q=Next.js" },
      { name: "Tailwind", href: "https://www.google.com/search?q=Tailwind" },
      { name: "React", href: "https://www.google.com/search?q=React" },
    ],
  },
  {
    slug: "sttp",
    title: "sttp",
    description: "Personal project development of a dynamic initial page for fast research.",
    longDescription: [
      "A dynamic landing page built for quick research and navigation. Focused on performance and a clean user experience.",
    ],
    screenshot: "/static/images/sttp.png",
    github: undefined,
    website: "https://mohvn.github.io/sttp/",
    status: "live",
    stack: [
      { name: "Next.js", href: "https://www.google.com/search?q=Next.js" },
      { name: "Tailwind", href: "https://www.google.com/search?q=Tailwind" },
    ],
  },
  {
    slug: "caddie",
    title: "Caddie Consultoria e Estratégia",
    description: "Landing page for Caddie consulting and strategy services.",
    longDescription: [
      "Landing page for Caddie consulting and strategy services. Built to present the company's offerings and capture leads.",
    ],
    screenshot: "/static/images/caddie.png",
    github: undefined,
    website: "https://www.caddieestrategia.com.br/",
    status: "live",
    stack: [
      { name: "Next.js", href: "https://www.google.com/search?q=Next.js" },
      { name: "Tailwind", href: "https://www.google.com/search?q=Tailwind" },
    ],
  },
  {
    slug: "abelha-system",
    title: "Abelha System",
    description: "System developed for updating and optimizing real estate tables.",
    longDescription: [
      "System developed for updating and optimizing real estate tables, enabling efficient management of real estate data.",
    ],
    screenshot: "/static/images/sistemaabelha.png",
    github: undefined,
    website: "https://www.sistema-abelha.com.br/",
    status: "live",
    stack: [
      { name: "React", href: "https://www.google.com/search?q=React" },
      { name: "Next.js", href: "https://www.google.com/search?q=Next.js" },
    ],
  },
  {
    slug: "gestao-lojao-do-bras",
    title: "Lojão do Brás System",
    description: "Backend system for managing employee meal benefits.",
    longDescription: [
      "Backend system developed in PHP for managing employee meal benefits, enabling HR to efficiently control, distribute, and track meal vouchers in an automated manner.",
    ],
    screenshot: "/static/images/lojaodobras.png",
    github: undefined,
    website: undefined,
    status: "private",
    stack: [
      { name: "PHP", href: "https://www.google.com/search?q=PHP" },
    ],
  },
  {
    slug: "project-name",
    title: "sttp",
    description: "Personal project development of a dynamic initial page for fast research.",
    longDescription: [
      "Personal project development of a dynamic initial page for fast research.",
    ],
    screenshot: "/static/images/sttp.png",
    github: undefined,
    website: "https://mohvn.github.io/sttp/",
    status: "live",
    stack: [
      { name: "Next.js", href: "https://www.google.com/search?q=Next.js" },
      { name: "Tailwind", href: "https://www.google.com/search?q=Tailwind" },
    ],
  },
  {
    slug: "sds-wiki",
    title: "SDS Wiki",
    description: "Technical documentation platform about Software Defined Storage (SDS), built with Astro. Fast search and minimalist interface; content managed via Markdown.",
    longDescription: [
      "Freelance project: a technical documentation platform about Software Defined Storage (SDS), developed with Astro.",
      "The site offers fast search and a minimalist interface. All content is managed through Markdown files.",
    ],
    screenshot: "/static/images/sds.png",
    github: undefined,
    website: "https://sds-wiki.vercel.app/",
    status: "live",
    stack: [
      { name: "Astro", href: "https://astro.build" },
      { name: "Tailwind", href: "https://tailwindcss.com" },
    ],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
