import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { WordRotate } from "@/components/ui/word-rotate";
import { Socials } from "@/components/socials";
import { GitHubActivityCalendar } from "@/components/github-activity-calendar";
import { DotPattern } from "@/components/ui/dot-pattern";
import { QuoteIcon } from "@/components/icons/quote";
import { Badge } from "@/components/ui/badge";
import { ExperienceCard } from "@/components/experience-card";
import { ProjectCard } from "@/components/project-card";

export default function Page() {

  return (
    <main className="flex flex-col min-h-[100dvh] text-[#333333] dashed-border-no-top overflow-x-hidden">
      <div className="relative flex flex-col gap-4 h-40 overflow-hidden  dashed-border-dots">
        <div className="absolute inset-0 -z-10">
          <DotPattern width={8} height={8} className="absolute top-0 left-0 w-full h-full opacity-50 pointer-events-none text-neutral-400/80" />
        </div>
        <div className="dashed-border-vertical-lines-overlay" aria-hidden />
      </div>
      <div className="flex gap-2 dashed-border p-4">
        <Avatar className="size-24 rounded-lg ring-1 ring-gray-300 border-[3px] border-white">
          <AvatarImage src="https://github.com/mohvn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="flex flex-col justify-end py-2">
          <h1 className="text-2xl font-bold">Mohan Elias</h1>
          <WordRotate
            words={["Freelancer", "Frontend Developer", "RPA Developer"]}
            className="text-sm text-gray-500"
          />
        </div>
      </div>

      <div className="flex flex-col gap-2 dashed-border dashed-border-no-top p-4">
        <p>Hello! I'm Mohan, a software developer passionate about turning ideas into simple, beautiful, and functional digital solutions. I focus on delivering projects where usability and user experience come first, always striving for clean and efficient code.</p>
        <p>I have experience with a variety of modern technologies and frameworks—I believe every project deserves the right tools. I'm always looking for new challenges and opportunities to learn and grow alongside the industry.</p>

        <p>Here are my <span className="font-bold">socials</span></p>

        <Socials />
      </div>

      <div className="flex flex-col gap-2 dashed-border dashed-border-no-top p-4 items-center">
        <GitHubActivityCalendar username="mohvn" />
      </div>

      <div className="flex flex-col gap-2 dashed-border dashed-border-no-top p-4">
        <p className="text-lg font-bold">Experiences</p>
      </div>

      <ExperienceCard
        logo="/static/images/empreender_logo.jpg"
        company="Empreender | Soluções para ecommerce"
        role="Frontend Developer"
        period="Dec, 2024 - Present"
        location="São Paulo, Brazil - Remote"
        descriptions={[
          "- Developed and maintained the company's apps using React, Next.js, and Tailwind CSS.",
          "- Implemented responsive design and cross-browser compatibility.",
          "- Collaborated with the design team to implement new features and improve the user experience.",
          "- Optimized the apps for SEO and performance.",
        ]}
        technologies={["React", "Next.js", "Tailwind CSS", "SEO", "Performance"]}
        defaultOpen={true}
      />

      <ExperienceCard
        logo="/static/images/botslab_logo.jpg"
        company="Botslab"
        role="Python RPA Developer"
        period="Dec, 2024 - Present"
        location="São Paulo, Brazil - Remote"
        descriptions={[
          "- Automated third-party systems (McCain, SMSGroup) in Nimbi and Mercado Eletrônico platforms using RPA.",
          "- Developed and maintained automation solutions for purchasing systems to streamline operations.",
          "- Created RPA bots using Python, Selenium, and other automation tools to reduce manual work and improve efficiency.",
        ]}
        technologies={["Python", "Selenium", "Robot Framework"]}
      />

      <ExperienceCard
        logo="/static/images/logo-freelancer.png"
        company="Freelancer"
        role="Full Stack Developer"
        period="Jan, 2022 - Present"
        location="Brazil - Remote"
        descriptions={[
          "- Developed and maintained freelance projects using Next.js, Astro, and modern web technologies.",
          "- Built custom websites and web applications with focus on Next.js, though also worked with WordPress when needed.",
          "- Implemented responsive designs and optimized projects for performance and SEO.",
          "- Delivered end-to-end solutions from design to deployment for various clients.",
        ]}
        technologies={["Next.js", "Astro", "React", "WordPress", "Tailwind CSS"]}
      />

      <div id="projects" className="flex flex-col gap-2 dashed-border dashed-border-no-top p-4">
        <p className="text-lg font-bold">Projects</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-0 dashed-border dashed-border-no-top">
        <ProjectCard
          title="OVNI"
          description="App for retailers and influencers to register and form partnerships for selling products through social media."
          href="/projects/ovni"
          status="live"
          screenshot="/static/images/ovni.png"
          comingSoon={false}
        />
        <ProjectCard
          title="sttp"
          description="Personal project development of a dynamic initial page for fast research."
          href="/projects/project-name"
          status="live"
          screenshot="/static/images/sttp.png"
          comingSoon={false}
        />
        <ProjectCard
          title="Caddie Consultoria e Estratégia"
          description="Landing page for Caddie consulting and strategy services."
          href="/projects/caddie"
          status="live"
          screenshot="/static/images/caddie.png"
          comingSoon={false}
        />
        <ProjectCard
          title="Abelha System"
          description="System developed for updating and optimizing real estate tables, enabling efficient management of real estate data. "
          href="/projects/another-project"
          status="live"
          screenshot="/static/images/sistemaabelha.png"
          comingSoon={false}
        />
        <ProjectCard
          title="Lojão do Brás System"
          description="Backend system developed in PHP for managing employee meal benefits, enabling HR to efficiently control, distribute, and track meal vouchers in an automated manner."
          href="/projects/gestao-lojao-do-bras"
          status="private"
          screenshot="/static/images/lojaodobras.png"
          comingSoon={false}
        />
        <ProjectCard
          title="SDS Wiki"
          description="Technical documentation platform about Software Defined Storage (SDS), built with Astro. Fast search and minimalist interface; content managed via Markdown."
          href="/projects/sds-wiki"
          status="live"
          screenshot="/static/images/sds.png"
          comingSoon={false}
        />
      </div>

      <div id="projects" className="flex flex-col gap-2 dashed-border dashed-border-no-top p-4">
        <p className="text-lg font-bold">Skills and Technologies</p>
      </div>

      <div className="flex flex-col gap-2 p-4 dashed-border dashed-border-no-top">
        <div className="flex flex-col gap-2">
        </div>
      </div>


      <div className="flex flex-col gap-2 p-4 dashed-border dashed-border-no-top">
        <div
          className="max-w-[690px] mx-auto relative p-3 py-4 sm:py-6 flex flex-col items-center text-center"
        >
          <QuoteIcon
            className="sm:text-4xl text-3xl text-gray-300 mb-4 sm:mb-6 shrink-0 size-6 sm:size-10"
            aria-hidden
          />
          <blockquote className="relative z-10 max-w-2xl px-1 sm:px-4">
            <p className="text-xl sm:text-3xl font-bold italic text-[#333333] leading-relaxed tracking-tight">
              &ldquo;Do so much work that it would be unreasonable for you to not be successful.&rdquo;
            </p>
          </blockquote>
          <div className="sm:mt-8 mt-6 flex items-center gap-3 z-10">
            <div className="h-px w-8 bg-gray-300" />
            <span className="text-xs sm:text-sm font-semibold text-gray-500 uppercase tracking-widest">
              Alex Hormozi
            </span>
            <div className="h-px w-8 bg-gray-300" />
          </div>
        </div>
      </div>

      <div className="relative flex flex-col gap-4 h-40 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <DotPattern width={8} height={8} className="absolute top-0 left-0 w-full h-full opacity-50 pointer-events-none text-neutral-400/80" />
        </div>
      </div>
    </main >
  );
}
