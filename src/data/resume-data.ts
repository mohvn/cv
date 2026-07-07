import type { ResumeData } from "@/lib/types";

export const RESUME_DATA: ResumeData = {
  name: "Mohan Elias",
  initials: "ME",
  location: "São Paulo, Brazil, BRT",
  locationLink: "https://www.google.com/maps/place/São Paulo",
  about:
    "Software developer passionate about simple, beautiful, and functional digital solutions.",
  summary:
    "Software developer passionate about turning ideas into simple, beautiful, and functional digital solutions. I focus on delivering projects where usability and user experience come first, always striving for clean and efficient code. I have experience with a variety of modern technologies and frameworks. I'm always looking for new challenges and opportunities to learn and grow alongside the industry.",
  avatarUrl:
    "https://media.licdn.com/dms/image/v2/D4D03AQF4VBpzETIwEQ/profile-displayphoto-scale_400_400/B4DZ6JIkCfH4Ag-/0/1780417187783?e=1784764800&v=beta&t=ZITwKXHugzWAzz3fYurJP7RHfipapouzjvL_ZIJ3z98",
  personalWebsiteUrl: "https://mohvn.github.io/portfolio/en",
  contact: {
    email: "mohan.elias@proton.me",
    tel: "+5513988417817",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/mohvn",
        icon: "github",
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/mohanelias",
        icon: "linkedin",
      },
    ],
  },
  education: [
    {
      school: "Universidade Católica de Santos",
      degree: "Bachelor's Degree in Systems Analysis and Development",
      start: "2023",
      end: "2026",
    },
    {
      school: "ETEC - Escola Técnica Estadual de São Paulo",
      degree: "Technical Education in Administration and Business",
      start: "2021",
      end: "2022",
    },
  ],
  work: [
    {
      company: "Empreender",
      link: "https://www.linkedin.com/company/empreender",
      badges: ["Remote", "React", "Next.js", "Tailwind CSS", "SEO"],
      title: "Frontend Developer",
      start: "2024",
      end: null,
      description:
        "Develop and maintain the company's apps using React, Next.js, and Tailwind CSS.",
      highlights: [
        "Implemented responsive design and cross-browser compatibility",
        "Collaborated with the design team to implement new features and improve UX",
        "Optimized apps for SEO and performance",
      ],
    },
    {
      company: "Botslab",
      link: "https://www.linkedin.com/company/botslab",
      badges: ["Remote", "Python", "Selenium", "RPA"],
      title: "Python RPA Developer",
      start: "2024",
      end: "2026",
      description:
        "Automated third-party systems and purchasing workflows using Python-based RPA solutions.",
      highlights: [
        "Automated McCain and SMSGroup integrations in Nimbi and Mercado Eletrônico platforms",
        "Developed and maintained automation solutions for purchasing systems",
        "Built RPA bots with Python, Selenium, and Robot Framework to reduce manual work",
      ],
    },
    {
      company: "Freelancer",
      link: "https://mohvn.github.io/portfolio/en",
      badges: ["Remote", "Next.js", "Astro", "React", "PHP", "WordPress"],
      title: "Full Stack Developer",
      start: "2022",
      end: null,
      description:
        "Deliver end-to-end web solutions for clients, from design to deployment.",
      highlights: [
        "Built custom websites and web applications with Next.js, Astro, and modern web technologies",
        "Implemented responsive designs optimized for performance and SEO",
        "Developed backend systems in PHP and integrated WordPress when needed",
      ],
    },
  ],
  skills: [
    "React/Next.js",
    "TypeScript/JavaScript",
    "Tailwind CSS",
    "Astro",
    "Python",
    "PHP",
    "Node.js/Bun",
    "SEO & Performance",
    "Linux",
  ],
  projects: [
    {
      title: "Py013",
      techStack: ["Next.js", "Tailwind CSS"],
      description:
        "Landing page for the Python community of Baixada Santista",
      link: {
        label: "py013.com.br",
        href: "https://www.py013.com.br/",
      },
    },
    {
      title: "Rastreio.net",
      techStack: ["Next.js", "React", "Tailwind CSS"],
      description: "App for tracking management for ecommerce",
      link: {
        label: "app.rastreio.net",
        href: "http://app.rastreio.net/",
      },
    },
    {
      title: "OVNI",
      techStack: ["Next.js", "React", "Tailwind CSS"],
      description:
        "App for retailers and influencers to form partnerships for selling products through social media",
      link: {
        label: "app.ovni.com.br",
        href: "http://app.ovni.com.br/",
      },
    },
    {
      title: "sttp",
      techStack: ["TypeScript", "Next.js", "Tailwind CSS"],
      description:
        "Minimal dynamic start page for fast research and navigation",
      link: {
        label: "mohvn.github.io/sttp",
        href: "https://mohvn.github.io/sttp/",
      },
    },
    {
      title: "SDS Wiki",
      techStack: ["Astro", "Tailwind CSS", "Markdown"],
      description:
        "Technical documentation platform about Software Defined Storage with fast search",
    },
  ],
} as const;
