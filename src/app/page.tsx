import { HackathonCard } from "@/components/hackathon-card";
import { Icons } from "@/components/icons";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { ModeToggle } from "@/components/mode-toggle";
import { ProjectCard } from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Markdown from "react-markdown";

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10">
      <div className="absolute top-2 right-2">
        <ModeToggle />
      </div>
      <section id="hero">
        <div className="mx-auto w-full max-w-2xl space-y-8">
          <div className="gap-2 flex justify-between">
            <div className="flex-col flex flex-1 space-y-1.5">
              <BlurFadeText
                delay={BLUR_FADE_DELAY}
                className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                yOffset={8}
                text="Olá, eu sou Mohan"
              />
              <BlurFadeText
                className="max-w-[600px] md:text-xl"
                delay={BLUR_FADE_DELAY}
                text="Desenvolvedor de Software com experiência em desenvolvimento web e automação de processos. Especializado em Python, JavaScript, TypeScript e PHP."
              />
              <BlurFade delay={BLUR_FADE_DELAY * 2}>
                <div className="flex gap-4 text-muted-foreground">
                  <Link href="mailto:mohanelias@outlook.com" className="hover:text-foreground">
                    <span className="sr-only">Email</span>
                    <Icons.email className="size-5" />
                  </Link>
                  <Link href="https://wa.me/5513988417817" className="hover:text-foreground">
                    <span className="sr-only">WhatsApp</span>
                    <Icons.phone className="size-5" />
                  </Link>
                  <Link href="https://github.com/mohvn" className="hover:text-foreground">
                    <span className="sr-only">GitHub</span>
                    <Icons.github className="size-5" />
                  </Link>
                  <Link href="https://linkedin.com/in/mohanelias" className="hover:text-foreground">
                    <span className="sr-only">LinkedIn</span>
                    <Icons.linkedin className="size-5" />
                  </Link>

                </div>
              </BlurFade>
            </div>
            <BlurFade delay={BLUR_FADE_DELAY}>
              <Avatar className="size-28 border">
                <AvatarImage alt="Mohan Elias" src="static/images/me.png" />
                <AvatarFallback>ME</AvatarFallback>
              </Avatar>
            </BlurFade>

          </div>
        </div>
      </section>
      <section id="about">
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <h2 className="text-xl font-bold">Sobre</h2>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <Markdown className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
            **Desenvolvedor de Software** especializado em **Python**, **JavaScript**, **TypeScript** e **PHP**, com foco em **desenvolvimento web** e **automação**. Cursando **Análise e Desenvolvimento de Sistemas** na Universidade Católica de Santos. Experiência em criar **soluções completas e escaláveis** seguindo as melhores práticas.
          </Markdown>
        </BlurFade>
      </section>
      <section id="work">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <h2 className="text-xl font-bold">Experiência Profissional</h2>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 6}>
            <ResumeCard
              logoUrl="static/images/freelancer.png"
              altText="Freelancer"
              title="Freelancer"
              subtitle="Desenvolvedor de Software"
              href="https://www.linkedin.com/company/bnxadm"
              badges={[]}
              period="Jan 2021 - Atual"
              description="Python, JavaScript, Typescript, PHP, MySQL, WordPress, React, Next, NodeJS, Styled-Components, Sass e Tailwind. Desenvolvimento de soluções completas incluindo interfaces web dinâmicas e interativas, automação de processos, scripts de análise de dados, e integração de sistemas. Foco em criar soluções eficientes e escaláveis utilizando as melhores práticas de desenvolvimento de software."
            />
          </BlurFade>

          <BlurFade delay={BLUR_FADE_DELAY * 6.05}>
            <ResumeCard
              logoUrl="static/images/bnx.png"
              altText="BNX"
              title="BNX"
              subtitle="Técnico Help Desk"
              href="https://www.linkedin.com/company/bnxadm"
              badges={[]}
              period="Jun 2023 - Atual"
              description="Minhas responsabilidades incluem responder prontamente às solicitações de suporte, diagnosticar e resolver problemas técnicos em sistemas operacionais, aplicativos e hardware, além de fornecer orientações claras e soluções eficazes para problemas de TI."
            />
          </BlurFade>

          <BlurFade delay={BLUR_FADE_DELAY * 6.1}>
            <ResumeCard
              logoUrl="static/images/brasilsorriso.png"
              altText="Brasil Sorriso"
              title="Brasil Sorriso"
              subtitle="Atendimento ao Cliente"
              href="https://www.linkedin.com/company/brasil-sorriso/"
              badges={[]}
              period="Abr 2022 - Jun 2023"
              description="Gerenciei eficientemente o agendamento de consultas, otimizando a programação para garantir que os pacientes fossem atendidos pontualmente. Além disso, fui responsável por fazer ligações de confirmação, reduzindo as taxas de cancelamento e reagendamento. Mantive registros precisos dos pacientes, atualizando informações pessoais e detalhes de seguros. Garanti que todos os formulários e documentos fossem preenchidos corretamente, facilitando o processo para a equipe clínica e melhorando a eficiência operacional."
            />
          </BlurFade>
        </div>
      </section>
      <section id="education">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <h2 className="text-xl font-bold">Educação</h2>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 8}>
            <ResumeCard
              href="https://www.unisantos.br/"
              logoUrl="static/images/unisantos.png"
              altText="Universidade Católica de Santos"
              title="Universidade Católica de Santos"
              subtitle="Graduação em Análise e Desenvolvimento de Sistemas"
              period="2023 - 2024"
            />
          </BlurFade>

          <BlurFade delay={BLUR_FADE_DELAY * 8.05}>
            <ResumeCard
              href="https://etecsp.cps.sp.gov.br/"
              logoUrl="static/images/etec.png"
              altText="ETEC - Escola Técnica Estadual de São Paulo"
              title="ETEC - Escola Técnica Estadual de São Paulo"
              subtitle="Técnico em Administração"
              period="2021 - 2022"
            />
          </BlurFade>

          <BlurFade delay={BLUR_FADE_DELAY * 8.1}>
            <ResumeCard
              href="https://sos.com.br/"
              logoUrl="static/images/sos.jpg"
              altText="SOS - Tecnologia e Educação"
              title="SOS - Tecnologia e Educação"
              subtitle="Programação de Computadores"
              period="2016 - 2017"
            />
          </BlurFade>

          <BlurFade delay={BLUR_FADE_DELAY * 8.15}>
            <ResumeCard
              href="https://sos.com.br/"
              logoUrl="static/images/sos.jpg"
              altText="SOS - Tecnologia e Educação"
              title="SOS - Tecnologia e Educação"
              subtitle="Técnico em Informática"
              period="2016 - 2016"
            />
          </BlurFade>

          <BlurFade delay={BLUR_FADE_DELAY * 8.2}>
            <ResumeCard
              href="https://ccaa.com.br/"
              logoUrl="static/images/ccaa.png"
              altText="CCAA"
              title="CCAA"
              subtitle="Proeficiência em Inglês"
              period="2011 - 2019"
            />
          </BlurFade>
        </div>
      </section>
      <section id="skills">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <h2 className="text-xl font-bold">Habilidades</h2>
          </BlurFade>
          <div className="flex flex-wrap gap-1">
            {[
              "Python",
              "React",
              "Next.js",
              "Typescript",
              "JavaScript",
              "PHP",
              "WordPress",
              "Bootstrap",
              "TailwindCSS",
              "API REST",
              "Node.js",
              "PostgresSQL",
              "MySQL",
              "Linux",
              "Segurança da Informação",
              "Docker"
            ].map((skill, id) => (
              <BlurFade key={skill} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
                <Badge key={skill}>{skill}</Badge>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      <section id="projects">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  Meus Projetos
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Confira meu trabalho mais recente
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Trabalhei em uma variedade de projetos, desde sites simples
                  até aplicações web complexas. Aqui estão alguns dos meus
                  favoritos.
                </p>
              </div>
            </div>
          </BlurFade>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
            {[
              {
                title: "Sistema Abelha",
                href: "https://sistema-abelha.com.br/",
                dates: "Jun 2024 - Atual",
                description: "Sistema desenvolvido para atualização e otimização de tabelas de imóveis, permitindo o gerenciamento eficiente de dados imobiliários. Implementa funcionalidades de cadastro, edição e consulta de propriedades, além de recursos para análise e acompanhamento do mercado imobiliário.",
                technologies: ["Next.js", "Typescript", "PostgreSQL", "TailwindCSS", "Mercado Pago", "Shadcn UI"],
                image: "static/images/sistemaabelha.png",
                links: [{
                  type: "Website",
                  href: "https://sistema-abelha.com.br/",
                  icon: <Icons.globe className="size-3" />
                }]
              },
              {
                title: "Gestão Lojão do Brás",
                href: "https://lojaodoabras.com.br/",
                dates: "Out 2024 - Atual",
                description: "Sistema backend desenvolvido em PHP para gerenciamento de benefícios alimentação dos funcionários, permitindo que o RH faça o controle, distribuição e acompanhamento dos vales de forma eficiente e automatizada",
                technologies: ["PHP", "Bootstrap"],
                image: "static/images/lojaodobras.png",
                links: []
              },
              {
                title: "SDS Wiki",
                href: "https://sds-wiki.vercel.app/",
                dates: "Abr 2023 - Jun - 2023",
                description: "Plataforma de documentação técnica sobre Software Defined Storage (SDS) desenvolvida com Astro, oferecendo busca rápida e interface minimalista. O conteúdo é gerenciado através de arquivos markdown.",
                technologies: ["Astro", "Typescript", "TailwindCSS"],
                image: "static/images/sdswiki.png",
                links: [
                  {
                    type: "Website",
                    href: "https://sds-wiki.vercel.app/",
                    icon: <Icons.globe className="size-3" />
                  },
                  {
                    type: "Source",
                    href: "https://github.com/mohvn/sds-wiki",
                    icon: <Icons.github className="size-3" />
                  }
                ]
              },
              {
                title: "sttp - Página Inicial Dinâmica",
                href: "https://mohvn.github.io/sttp/",
                dates: "Abr 2023 - Atual",
                description: "Projeto pessoal de desenvolvimento de uma página inicial dinâmica utilizando React, Typescript e TailwindCSS, demonstrando habilidades em desenvolvimento frontend e design responsivo.",
                technologies: ["React", "Typescript", "TailwindCSS"],
                image: "static/images/sttp.png",
                links: [
                  {
                    type: "Website",
                    href: "https://mohvn.github.io/sttp/",
                    icon: <Icons.globe className="size-3" />
                  },
                  {
                    type: "Source",
                    href: "https://github.com/mohvn/sttp",
                    icon: <Icons.github className="size-3" />
                  }
                ]
              }
            ].map((project, id) => (
              <BlurFade
                key={project.title}
                delay={BLUR_FADE_DELAY * 12 + id * 0.05}
              >
                <ProjectCard
                  href={project.href}
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  dates={project.dates}
                  tags={project.technologies}
                  image={project.image}
                  links={project.links}
                />
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      <section id="hackathons">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 13}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  Hackathons
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Eu gosto de criar coisas
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Participante ativo de eventos tecnológicos como Code Dojo, Open Data Day e hackathons.
                  Nesses encontros, desenvolvedores se reúnem para criar soluções inovadoras,
                  compartilhar conhecimento e explorar novas tecnologias em um ambiente colaborativo.
                </p>
              </div>
            </div>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 14}>
            <ul className="mb-4 ml-4 divide-y divide-dashed border-l">
              {[
                {
                  title: "ETIS - Evento Tecnológico de Inverno de Santos",
                  dates: "Junho 2024",
                  location: "Santos, SP",
                  description: "Participei da squad de Dados no desenvolvimento de um sistema de monitoramento de Outliers dos indicadores ODS para a Prefeitura Municipal de Santos. O evento reuniu equipes multidisciplinares (Front-End, Back-End, Dados, UI/UX, DevOps e Metodologias Ágeis) com o desafio de entregar uma solução completa em apenas um dia. O projeto foi concluído com sucesso, demonstrando a importância do trabalho em equipe e da capacidade de resolver problemas sob pressão.",
                  image: "static/images/etis.png",
                  links: [{
                    title: "LinkedIn",
                    href: "https://www.linkedin.com/posts/mohanelias_no-%C3%BAltimo-s%C3%A1bado-tive-a-oportunidade-de-ugcPost-7223654688749981700-yYA_?utm_source=share&utm_medium=member_desktop",
                    icon: <Icons.linkedin className="size-3" />
                  }]
                },
                {
                  title: "CodeDojo 2024",
                  dates: "Out 2024",
                  location: "Santos, SP",
                  description: "Participei do Py013 Code Dojo, um evento dinâmico realizado no Parque Tecnológico de Santos pela comunidade Py013 - Baixada Santista. O formato inovador consistiu em desafios de programação resolvidos de forma colaborativa e rotativa, onde cada participante contribuía com código enquanto outros refinavam as soluções. Esta experiência proporcionou não apenas aprendizado técnico, mas também desenvolvimento de habilidades de trabalho em equipe e programação colaborativa.",
                  image: "static/images/codedojo.png",
                  links: [{
                    title: "LinkedIn",
                    href: "https://www.linkedin.com/posts/mohanelias_ol%C3%A1-rede-tive-a-oportunidade-de-participar-activity-7241942990963830785-1Wb-?utm_source=share&utm_medium=member_desktop",
                    icon: <Icons.linkedin className="size-3" />
                  }]
                },
                {
                  title: "Open Data Day 2024",
                  dates: "Mar 2024",
                  location: "Santos, SP",
                  description: "Participei da organização do Open Data Day 2024 com a comunidade Py013 - Baixada Santista, um evento global que promove o uso de dados abertos. Desenvolvi e apresentei um projeto analisando dados da ANTAQ e CETESB para explorar a relação entre movimentação portuária e qualidade do ar na Baixada Santista. O evento, realizado na Santos Summit, demonstrou o poder do Python na análise de dados e promoveu conscientização sobre dados abertos.",
                  image: "static/images/opendataday.png",
                  links: [{
                    title: "LinkedIn",
                    href: "https://www.linkedin.com/posts/mohanelias_opendataday-python-py013-activity-7172958644102270976-jBcN?utm_source=share&utm_medium=member_desktop",
                    icon: <Icons.linkedin className="size-3" />
                  }]
                }
              ].map((project, id) => (
                <BlurFade
                  key={project.title + project.dates}
                  delay={BLUR_FADE_DELAY * 15 + id * 0.05}
                >
                  <HackathonCard
                    title={project.title}
                    description={project.description}
                    location={project.location}
                    dates={project.dates}
                    image={project.image}
                    links={project.links}
                  />
                </BlurFade>
              ))}
            </ul>
          </BlurFade>
        </div>
      </section>
      <section id="contact">
        <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 16}>
            <div className="space-y-3">
              <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                Contato
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Entre em Contato
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Quer conversar? Basta me enviar uma mensagem direta no{" "}
                <Link
                  href="mailto:mohan.elias@hotmail.com"
                  className="text-blue-500 hover:underline"
                >
                  email
                </Link>{" "}
                e eu responderei assim que possível.
              </p>
            </div>
          </BlurFade>
        </div>
      </section>
    </main>
  );
}
