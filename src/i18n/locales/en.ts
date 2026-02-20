export const en = {
  meta: {
    title: "Mohan Elias",
    description: "Hey! I'm Mohan Elias, and this is my portfolio website.",
  },
  hero: {
    name: "Mohan Elias",
    roles: ["Freelancer", "Frontend Developer", "RPA Developer"],
  },
  bio: {
    paragraph1:
      "Hello! I'm Mohan, a software developer passionate about turning ideas into simple, beautiful, and functional digital solutions. I focus on delivering projects where usability and user experience come first, always striving for clean and efficient code.",
    paragraph2:
      "I have experience with a variety of modern technologies and frameworks—I believe every project deserves the right tools. I'm always looking for new challenges and opportunities to learn and grow alongside the industry.",
    socialsLabel: "Here are my",
    socialsBold: "socials",
  },
  sections: {
    experiences: "Experiences",
    projects: "Projects",
    skills: "Skills and Technologies",
  },
  experiences: {
    empreender: {
      company: "Empreender | Soluções para ecommerce",
      role: "Frontend Developer",
      period: "Dec, 2024 - Present",
      location: "São Paulo, Brazil - Remote",
      descriptions: [
        "Developed and maintained the company's apps using React, Next.js, and Tailwind CSS.",
        "Implemented responsive design and cross-browser compatibility.",
        "Collaborated with the design team to implement new features and improve the user experience.",
        "Optimized the apps for SEO and performance.",
      ],
      technologies: ["React", "Next.js", "Tailwind CSS", "SEO", "Performance"],
    },
    botslab: {
      company: "Botslab",
      role: "Python RPA Developer",
      period: "Dec, 2024 - Present",
      location: "São Paulo, Brazil - Remote",
      descriptions: [
        "Automated third-party systems (McCain, SMSGroup) in Nimbi and Mercado Eletrônico platforms using RPA.",
        "Developed and maintained automation solutions for purchasing systems to streamline operations.",
        "Created RPA bots using Python, Selenium, and other automation tools to reduce manual work and improve efficiency.",
      ],
      technologies: ["Python", "Selenium", "Robot Framework"],
    },
    freelancer: {
      company: "Freelancer",
      role: "Full Stack Developer",
      period: "Jan, 2022 - Present",
      location: "Brazil - Remote",
      descriptions: [
        "Developed and maintained freelance projects using Next.js, Astro, and modern web technologies.",
        "Built custom websites and web applications with focus on Next.js, though also worked with WordPress when needed.",
        "Implemented responsive designs and optimized projects for performance and SEO.",
        "Delivered end-to-end solutions from design to deployment for various clients.",
      ],
      technologies: ["Next.js", "Astro", "React", "WordPress", "Tailwind CSS"],
    },
  },
  projects: {
    ovni: {
      title: "OVNI",
      description:
        "App for retailers and influencers to register and form partnerships for selling products through social media.",
    },
    sttp: {
      title: "sttp",
      description:
        "Personal project development of a dynamic initial page for fast research.",
    },
    caddie: {
      title: "Caddie Consultoria e Estratégia",
      description: "Landing page for Caddie consulting and strategy services.",
    },
    "another-project": {
      title: "Abelha System",
      description:
        "System developed for updating and optimizing real estate tables, enabling efficient management of real estate data.",
    },
    "gestao-lojao-do-bras": {
      title: "Lojão do Brás System",
      description:
        "Backend system developed in PHP for managing employee meal benefits, enabling HR to efficiently control, distribute, and track meal vouchers in an automated manner.",
    },
    "sds-wiki": {
      title: "SDS Wiki",
      description:
        "Technical documentation platform about Software Defined Storage (SDS), built with Astro. Fast search and minimalist interface; content managed via Markdown.",
    },
  },
  status: {
    building: "Building",
    live: "Live",
    comingSoon: "Coming Soon",
    private: "Private",
  },
  quote: {
    text: "Do so much work that it would be unreasonable for you to not be successful.",
    author: "Alex Hormozi",
  },
} as const;

export type EnTranslations = typeof en;
