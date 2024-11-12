import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Mohan Elias",
  initials: "M",
  url: "https://mohvn.github.io",
  location: "São Paulo, BR",
  locationLink: "https://www.google.com/maps/place/sao+paulo",
  description:
    "Desenvolvedor de Software motivado a aplicar minha base técnica e habilidades de resolução de problemas para criar soluções digitais impactantes",
  summary:
    "Apaixonado por tecnologia e com um forte desejo de contribuir para o meu avanço. Sou **estudante de Análise e Desenvolvimento de Sistemas**, mas já carrego comigo uma bagagem de experiências práticas que me permitem ir além da teoria. Como **Freelancer**, desde cedo, busquei colocar meu conhecimento em prática. Atuei, e atuo como freelancer em diversos projetos, desenvolvendo websites e aplicações web completas, desde a criação da interface até a implementação de funcionalidades complexas.",
  avatarUrl: "cv/static/images/me.png",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Python",
    "Postgres",
    "Docker",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "mohan.elias@hotmail.com",
    tel: "+5513988417817",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/mohvn",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/mohanelias/",
        icon: Icons.linkedin,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Freelancer",
      href: "https://www.linkedin.com/company/bnxadm",
      badges: [],
      location: "Remoto",
      title: "Desenvolvedor de Software",
      logoUrl: "cv/static/images/freelancer.png",
      start: "Jan 2021",
      end: "Atual",
      description:
        "Python, JavaScript, Typescript, PHP, MySQL, WordPress, React, Next, NodeJS, Styled-Components, Sass e Tailwind. Desenvolvimento de soluções completas incluindo interfaces web dinâmicas e interativas, automação de processos, scripts de análise de dados, e integração de sistemas. Foco em criar soluções eficientes e escaláveis utilizando as melhores práticas de desenvolvimento de software.",
    },
    {
      company: "BNX",
      href: "https://www.linkedin.com/company/bnxadm",
      badges: [],
      location: "Presencial",
      title: "Técnico Help Desk",
      logoUrl: "cv/static/images/bnx.png",
      start: "Jun 2023",
      end: "Atual",
      description:
        "Minhas responsabilidades incluem responder prontamente às solicitações de suporte, diagnosticar e resolver problemas técnicos em sistemas operacionais, aplicativos e hardware, além de fornecer orientações claras e soluções eficazes para problemas de TI.",
    },
    {
      company: "Brasil Sorriso",
      href: "https://www.linkedin.com/company/brasil-sorriso/",
      badges: [],
      location: "Presencial",
      title: "Atendimento ao Cliente",
      logoUrl: "cv/static/images/brasilsorriso.png",
      start: "Abr 2022",
      end: "Jun 2023",
      description:
        "Gerenciei eficientemente o agendamento de consultas, otimizando a programação para garantir que os pacientes fossem atendidos pontualmente. Além disso, fui responsável por fazer ligações de confirmação, reduzindo as taxas de cancelamento e reagendamento. Mantive registros precisos dos pacientes, atualizando informações pessoais e detalhes de seguros. Garanti que todos os formulários e documentos fossem preenchidos corretamente, facilitando o processo para a equipe clínica e melhorando a eficiência operacional.",
    },
  ],
  education: [
    {
      school: "Universidade Católica de Santos",
      href: "https://www.unisantos.br/",
      degree: "Graduação em Análise e Desenvolvimento de Sistemas",
      logoUrl: "cv/static/images/unisantos.png",
      start: "2023",
      end: "2024",
    },
    {
      school: "ETEC - Escola Técnica Estadual de São Paulo",
      href: "https://etecsp.cps.sp.gov.br/",
      degree: "Técnico em Administração",
      logoUrl: "cv/static/images/etec.png",
      start: "2021",
      end: "2022",
    },
    {
      school: "CCAA",
      href: "https://ccaa.com.br/",
      degree: "Inglês",
      logoUrl: "cv/static/images/ccaa.png",
      start: "2011",
      end: "2019",
    },
  ],
  projects: [
    {
      title: "Sistema Abelha",
      href: "https://sistema-abelha.com.br/",
      dates: "Jun 2024 - Atual",
      active: true,
      description:
        "Sistema desenvolvido para atualização e otimização de tabelas de imóveis, permitindo o gerenciamento eficiente de dados imobiliários. Implementa funcionalidades de cadastro, edição e consulta de propriedades, além de recursos para análise e acompanhamento do mercado imobiliário.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "TailwindCSS",
        "Mercado Pago",
        "Shadcn UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://sistema-abelha.com.br/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "cv/static/images/sistemaabelha.png",
      video: "",
    },
    {
      title: "Gestão Lojão do Brás",
      href: "https://lojaodoabras.com.br/",
      dates: "Out 2024 - Atual",
      active: true,
      description:
        "Sistema backend desenvolvido em PHP para gerenciamento de benefícios alimentação dos funcionários, permitindo que o RH faça o controle, distribuição e acompanhamento dos vales de forma eficiente e automatizada",
      technologies: [
        "PHP",
        "Bootstrap",
      ],
      image: "cv/static/images/lojaodobras.png",
      links: [],
    },
    {
      title: "SDS Wiki",
      href: "https://sds-wiki.vercel.app/",
      dates: "Abr 2023 - Jun - 2023",
      active: true,
      description:
        "Plataforma de documentação técnica sobre Software Defined Storage (SDS) desenvolvida com Astro, oferecendo busca rápida e interface minimalista. O conteúdo é gerenciado através de arquivos markdown.",
      technologies: [
        "Astro",
        "Typescript",
        "TailwindCSS",
      ],
      links: [
        {
          type: "Website",
          href: "https://sds-wiki.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/mohvn/sds-wiki",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "cv/static/images/sdswiki.png",
    },
    {
      title: "sttp - Página Inicial Dinâmica",
      href: "https://mohvn.github.io/sttp/",
      dates: "Abr 2023 - Atual",
      active: true,
      description:
        "Projeto pessoal de desenvolvimento de uma página inicial dinâmica utilizando React, Typescript e TailwindCSS, demonstrando habilidades em desenvolvimento frontend e design responsivo.",
      technologies: [
        "React",
        "Typescript",
        "TailwindCSS",
      ],
      links: [
        {
          type: "Website",
          href: "https://mohvn.github.io/sttp/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/mohvn/sttp",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "cv/static/images/sttp.png",
    },
  ],
  hackathons: [
    {
      title: "ETIS - Evento Tecnológico de Inverno de Santos",
      dates: "Março 2024",
      location: "Santos, SP",
      description:
        "Participei da squad de Dados no desenvolvimento de um sistema de monitoramento de Outliers dos indicadores ODS para a Prefeitura Municipal de Santos. O evento reuniu equipes multidisciplinares (Front-End, Back-End, Dados, UI/UX, DevOps e Metodologias Ágeis) com o desafio de entregar uma solução completa em apenas um dia. O projeto foi concluído com sucesso, demonstrando a importância do trabalho em equipe e da capacidade de resolver problemas sob pressão.",
      image: "cv/static/images/etis.png",
      mlh: "",
      links: [],
    },
  ],
} as const;
