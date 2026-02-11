import React from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ChevronLeft, ExternalLink, Github } from "lucide-react";
import { getProjectBySlug, projects, type ProjectStatus } from "@/lib/projects";
import { DotPattern } from "@/components/ui/dot-pattern";
import { RiNextjsFill } from "@/components/icons/nextjs";
import { MdiReact } from "@/components/icons/react";
import { MdiTailwind } from "@/components/icons/tailwind";
import { AkarIconsPythonFill } from "@/components/icons/python";
import { DeviconPlainPhp } from "@/components/icons/php";
import { LineiconsAstro } from "@/components/icons/astro";

const stackIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  "Next.js": RiNextjsFill,
  React: MdiReact,
  Tailwind: MdiTailwind,
  Python: AkarIconsPythonFill,
  PHP: DeviconPlainPhp,
  Astro: LineiconsAstro,
};

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

const dashedVerticalStyle = {
  backgroundImage: `repeating-linear-gradient(to bottom, #CBCCCC 0px, #CBCCCC 6px, transparent 6px, transparent 14px),
    repeating-linear-gradient(to bottom, #CBCCCC 0px, #CBCCCC 6px, transparent 6px, transparent 14px)`,
  backgroundSize: "1px 100%, 1px 100%",
  backgroundPosition: "left top, right top",
  backgroundRepeat: "no-repeat",
};

const dashedHorizontalStyle = {
  backgroundImage: `repeating-linear-gradient(to right, #CBCCCC 0px, #CBCCCC 6px, transparent 6px, transparent 14px)`,
  backgroundSize: "100% 1px",
  backgroundRepeat: "no-repeat",
};

const dashedVerticalDividerStyle = {
  backgroundImage: `repeating-linear-gradient(to bottom, #CBCCCC 0px, #CBCCCC 6px, transparent 6px, transparent 14px)`,
  backgroundSize: "1px 100%",
  backgroundRepeat: "no-repeat",
};

const statusConfig: Record<
  ProjectStatus,
  { label: string; color: string; bgColor: string }
> = {
  building: {
    label: "Building",
    color: "text-red-500",
    bgColor: "bg-red-500",
  },
  live: {
    label: "Live",
    color: "text-green-500",
    bgColor: "bg-green-500",
  },
  comingSoon: {
    label: "Coming Soon",
    color: "text-yellow-500",
    bgColor: "bg-yellow-500",
  },
  private: {
    label: "Private",
    color: "text-gray-500",
    bgColor: "bg-gray-500",
  },
};

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const config = statusConfig[project.status];

  return (
    <div className="min-h-screen flex flex-col">
      <div className="relative flex flex-col gap-4 h-40 overflow-hidden dashed-border dashed-border-no-top dashed-border-dots">
        <div className="absolute inset-0 -z-10">
          <DotPattern width={8} height={8} className="absolute top-0 left-0 w-full h-full opacity-50 pointer-events-none text-neutral-400/80" />
        </div>
      </div>
      {/* Header */}
      <div
        className="w-full relative p-4"
        style={dashedVerticalStyle}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Link
              href="/#projects"
              className="relative z-10 cursor-pointer p-1 border border-transparent hover:border-gray-300 rounded-[6px] hover:bg-gray-100 transition-colors duration-300"
              aria-label="Go back"
            >
              <ChevronLeft className="w-[18px] h-[18px] text-gray-700" />
            </Link>
            <h1 className="text-[1.15rem] font-bold leading-tight text-gray-900">
              Projects
            </h1>
          </div>
        </div>
        <div className="w-full h-px mt-2" style={dashedHorizontalStyle} />
      </div>

      {/* Content */}
      <div
        className="w-full relative flex-1 p-4"
        style={dashedVerticalStyle}
      >
        <div className="flex flex-col items-start">
          <div className="px-4 w-full p-4">
            <div className="w-full h-full md:min-h-[340px] min-h-[200px] rounded-[12px] relative border border-gray-300 p-[4px] overflow-hidden">
              {project.buildingGif ? (
                <img
                  alt={project.title}
                  loading="lazy"
                  width={1000}
                  height={1000}
                  className="w-full object-cover md:h-[340px] h-[200px] rounded-[8px] border border-gray-300"
                  src={project.buildingGif}
                />
              ) : (
                <Image
                  alt={project.title}
                  src={project.screenshot}
                  width={1000}
                  height={1000}
                  className="w-full object-cover md:h-[340px] h-[200px] rounded-[8px] border border-gray-300"
                  loading="lazy"
                />
              )}
            </div>
          </div>

          <div className="w-full">
            <div className="w-full h-px" style={dashedHorizontalStyle} />
            {/* Links row */}
            <div className="flex items-stretch justify-between w-full">
              {project.github ? (
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group py-[11px] flex text-[1.05rem] text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition-all duration-300 w-full items-center justify-center cursor-pointer"
                  href={project.github}
                >
                  <Github className="w-[15px] h-[15px] shrink-0" />
                  <span className="relative ml-1.5">
                    Github
                    <span className="absolute left-0 bottom-0 w-full h-px bg-gray-900 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out" />
                  </span>
                  <ExternalLink className="opacity-0 hidden lg:block group-hover:opacity-100 transition-opacity duration-300 w-[18px] h-[18px] ml-1 shrink-0" />
                </a>
              ) : (
                <div className="py-[11px] flex text-[1.05rem] text-gray-400 w-full items-center justify-center cursor-not-allowed select-none">
                  <Github className="w-[15px] h-[15px] shrink-0" />
                  <span className="ml-1.5">Github</span>
                </div>
              )}

              <div className="self-stretch" style={dashedVerticalDividerStyle} />

              {project.website ? (
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group py-[11px] flex text-[1.05rem] text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition-all duration-300 w-full items-center justify-center cursor-pointer"
                  href={project.website}
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 496 512"
                    className="w-[15px] h-[15px] shrink-0"
                  >
                    <path d="M336.5 160C322 70.7 287.8 8 248 8s-74 62.7-88.5 152h177zM152 256c0 22.2 1.2 43.5 3.3 64h185.3c2.1-20.5 3.3-41.8 3.3-64s-1.2-43.5-3.3-64H155.3c-2.1 20.5-3.3 41.8-3.3 64zm324.7-96c-28.6-67.9-86.5-120.4-158-141.6 24.4 33.8 41.2 84.7 50 141.6h108zM177.2 18.4C105.8 39.6 47.8 92.1 19.3 160h108c8.7-56.9 25.5-107.8 49.9-141.6zM487.4 192H372.7c2.1 21 3.3 42.5 3.3 64s-1.2 43-3.3 64h114.6c5.5-20.5 8.6-41.8 8.6-64s-3.1-43.5-8.5-64zM120 256c0-21.5 1.2-43 3.3-64H8.6C3.2 212.5 0 233.8 0 256s3.2 43.5 8.6 64h114.6c-2-21-3.2-42.5-3.2-64zm39.5 96c14.5 89.3 48.7 152 88.5 152s74-62.7 88.5-152h-177zm159.3 141.6c71.4-21.2 129.4-73.7 158-141.6h-108c-8.8 56.9-25.6 107.8-50 141.6zM19.3 352c28.6 67.9 86.5 120.4 158 141.6-24.4-33.8-41.2-84.7-50-141.6h-108z" />
                  </svg>
                  <span className="relative ml-1.5">
                    Website
                    <span className="absolute left-0 bottom-0 w-full h-px bg-gray-900 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out" />
                  </span>
                  <ExternalLink className="opacity-0 hidden lg:block group-hover:opacity-100 transition-opacity duration-300 w-[18px] h-[18px] ml-1 shrink-0" />
                </a>
              ) : (
                <div className="py-[11px] flex text-[1.05rem] text-gray-400 w-full items-center justify-center cursor-not-allowed select-none">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 496 512"
                    className="w-[15px] h-[15px] shrink-0"
                  >
                    <path d="M336.5 160C322 70.7 287.8 8 248 8s-74 62.7-88.5 152h177zM152 256c0 22.2 1.2 43.5 3.3 64h185.3c2.1-20.5 3.3-41.8 3.3-64s-1.2-43.5-3.3-64H155.3c-2.1 20.5-3.3 41.8-3.3 64zm324.7-96c-28.6-67.9-86.5-120.4-158-141.6 24.4 33.8 41.2 84.7 50 141.6h108zM177.2 18.4C105.8 39.6 47.8 92.1 19.3 160h108c8.7-56.9 25.5-107.8 49.9-141.6z" />
                  </svg>
                  <span className="ml-1.5">Website</span>
                </div>
              )}

              <div className="self-stretch" style={dashedVerticalDividerStyle} />

              <div className="py-[11px] flex text-[1.05rem] text-gray-400 opacity-40 w-full items-center justify-center cursor-not-allowed select-none">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 17 17"
                  className="w-[15px] h-[15px] shrink-0"
                >
                  <path d="M15 12h-13v-1h13v1zM12 12.993h-10v1h10v-1zM17 1v15h-17v-15h17zM16 2h-15v13h15v-13z" />
                </svg>
                <span className="ml-1.5">Post</span>
              </div>
            </div>
            <div className="w-full h-px" style={dashedHorizontalStyle} />
          </div>

          <div className="flex flex-col w-full gap-1.5 p-4">
            <div className="flex items-center justify-between">
              <h1 className="text-[1.40rem] font-bold leading-tight text-gray-900">
                {project.title}
              </h1>
              <div className="flex items-center gap-1 pr-1 select-none">
                {(project.status === "building" || project.status === "live") && (
                  <div className="relative flex items-center justify-center w-3.5 h-3.5">
                    <div
                      className={`absolute inset-0 m-auto animate-ping ${config.bgColor}`}
                      style={{
                        width: "10px",
                        height: "10px",
                        borderRadius: "50%",
                        opacity: 0.4,
                      }}
                    />
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 24 24"
                      className={`relative z-10 ${config.color} w-3.5 h-3.5`}
                    >
                      <path d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z" />
                    </svg>
                  </div>
                )}
                <p className="text-sm text-gray-500 font-medium">
                  {config.label}
                </p>
              </div>
            </div>
            <div className="text-base text-gray-700 [&>p]:mb-3 [&>p:last-child]:mb-0">
              {project.longDescription.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div className="w-full h-px" style={dashedHorizontalStyle} />

          <div className="flex font-semibold text-gray-900 flex-col gap-2.5 px-4 pt-4 pb-5 w-full">
            <h2 className="text-base font-bold">Stack used</h2>
            <div className="flex flex-wrap items-center gap-1.5">
              {project.stack.map((tech) => {
                const Icon = stackIcons[tech.name];
                const content = (
                  <>
                    {Icon ? (
                      <Icon className="size-4 shrink-0" aria-hidden />
                    ) : null}
                    <span className="text-sm font-medium whitespace-nowrap">
                      {tech.name}
                    </span>
                  </>
                );
                return tech.href ? (
                  <a
                    key={tech.name}
                    href={tech.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative min-w-fit flex cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-[8px] border border-gray-300 bg-transparent text-gray-500 px-2 py-1 transition-all duration-300 hover:text-gray-700 hover:border-gray-500 hover:bg-gray-50 select-none"
                  >
                    {content}
                  </a>
                ) : (
                  <span
                    key={tech.name}
                    className="rounded-[8px] border border-gray-300 bg-transparent text-gray-500 px-2 py-1 flex items-center gap-2 text-sm font-medium whitespace-nowrap"
                  >
                    {content}
                  </span>
                );
              })}
            </div>
          </div>
        </div>
        <div className="w-full h-px" style={dashedHorizontalStyle} />
      </div>
      <div className="relative flex flex-col gap-4 h-40 overflow-hidden dashed-border dashed-border-no-bottom dashed-border-dots">
        <div className="absolute inset-0 -z-10">
          <DotPattern width={8} height={8} className="absolute top-0 left-0 w-full h-full opacity-50 pointer-events-none text-neutral-400/80" />
        </div>
      </div>
    </div>
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Project not found" };
  return { title: `${project.title} | Projects` };
}
