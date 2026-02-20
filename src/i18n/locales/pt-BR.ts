export const ptBR = {
  meta: {
    title: "Mohan Elias",
    description: "Olá! Sou Mohan Elias e este é o meu site de portfólio.",
  },
  hero: {
    name: "Mohan Elias",
    roles: ["Freelancer", "Desenvolvedor Frontend", "Desenvolvedor RPA"],
  },
  bio: {
    paragraph1:
      "Olá! Sou o Mohan, desenvolvedor de software apaixonado por transformar ideias em soluções digitais simples, bonitas e funcionais. Foco em entregar projetos em que usabilidade e experiência do usuário vêm em primeiro lugar, sempre buscando código limpo e eficiente.",
    paragraph2:
      "Tenho experiência com diversas tecnologias e frameworks modernos. Acredito que cada projeto merece as ferramentas certas. Estou sempre em busca de novos desafios e oportunidades para aprender e crescer junto com a indústria.",
    socialsLabel: "Aqui estão minhas",
    socialsBold: "redes sociais",
  },
  sections: {
    experiences: "Experiências",
    projects: "Projetos",
    skills: "Habilidades e Tecnologias",
  },
  experiences: {
    empreender: {
      company: "Empreender | Soluções para ecommerce",
      role: "Desenvolvedor Frontend",
      period: "Dez, 2024 - Atual",
      location: "São Paulo, Brasil - Remoto",
      descriptions: [
        "Desenvolvi e mantive os aplicativos da empresa com React, Next.js e Tailwind CSS.",
        "Implementei design responsivo e compatibilidade entre navegadores.",
        "Colaborei com a equipe de design para implementar novas funcionalidades e melhorar a experiência do usuário.",
        "Otimizei os aplicativos para SEO e performance.",
      ],
      technologies: ["React", "Next.js", "Tailwind CSS", "SEO", "Performance"],
    },
    botslab: {
      company: "Botslab",
      role: "Desenvolvedor RPA Python",
      period: "Dez, 2024 - Atual",
      location: "São Paulo, Brasil - Remoto",
      descriptions: [
        "Automatizei sistemas de terceiros (McCain, SMSGroup) nas plataformas Nimbi e Mercado Eletrônico com RPA.",
        "Desenvolvi e mantive soluções de automação para sistemas de compras para agilizar operações.",
        "Criei bots RPA com Python, Selenium e outras ferramentas de automação para reduzir trabalho manual e aumentar a eficiência.",
      ],
      technologies: ["Python", "Selenium", "Robot Framework"],
    },
    freelancer: {
      company: "Freelancer",
      role: "Desenvolvedor Full Stack",
      period: "Jan, 2022 - Atual",
      location: "Brasil - Remoto",
      descriptions: [
        "Desenvolvi e mantive projetos freelance com Next.js, Astro e tecnologias web modernas.",
        "Construí sites e aplicações web sob medida com foco em Next.js, além de WordPress quando necessário.",
        "Implementei designs responsivos e otimizei projetos para performance e SEO.",
        "Entreguei soluções de ponta a ponta, do design ao deploy, para diversos clientes.",
      ],
      technologies: ["Next.js", "Astro", "React", "WordPress", "Tailwind CSS"],
    },
  },
  projects: {
    ovni: {
      title: "OVNI",
      description:
        "Aplicativo para varejistas e influenciadores se cadastrarem e formarem parcerias para venda de produtos pelas redes sociais.",
    },
    sttp: {
      title: "sttp",
      description:
        "Projeto pessoal de uma página inicial dinâmica para pesquisa rápida.",
    },
    caddie: {
      title: "Caddie Consultoria e Estratégia",
      description: "Landing page dos serviços de consultoria e estratégia da Caddie.",
    },
    "another-project": {
      title: "Sistema Abelha",
      description:
        "Sistema para atualização e otimização de tabelas imobiliárias, permitindo gestão eficiente de dados imobiliários.",
    },
    "gestao-lojao-do-bras": {
      title: "Sistema Lojão do Brás",
      description:
        "Sistema backend em PHP para gestão de benefícios de alimentação de colaboradores, permitindo que o RH controle, distribua e acompanhe vales-refeição de forma automatizada.",
    },
    "sds-wiki": {
      title: "SDS Wiki",
      description:
        "Plataforma de documentação técnica sobre Software Defined Storage (SDS), feita com Astro. Busca rápida e interface minimalista; conteúdo em Markdown.",
    },
  },
  status: {
    building: "Em construção",
    live: "No ar",
    comingSoon: "Em breve",
    private: "Privado",
  },
  quote: {
    text: "Trabalhe tanto que seria irracional você não ter sucesso.",
    author: "Alex Hormozi",
  },
} as const;

export type PtBRTranslations = typeof ptBR;
