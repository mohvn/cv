import { Badge } from "@/components/ui/badge";
import { MdiGithub } from "@/components/icons/github";
import { RiLinkedinFill } from "@/components/icons/linkedin";

export function Socials() {
  return (
    <div className="flex gap-2">
      <a
        href="https://github.com/mohvn"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block"
      >
        <Badge className="bg-[#F2F2F2] text-[#333333] p-1 cursor-pointer hover:bg-[#E5E5E5] transition-colors">
          <MdiGithub className="size-5" />
          <p className="text-sm">GitHub</p>
        </Badge>
      </a>

      <a
        href="https://linkedin.com/in/mohanelias"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block"
      >
        <Badge className="bg-[#F2F2F2] text-[#333333] p-1 cursor-pointer hover:bg-[#E5E5E5] transition-colors">
          <RiLinkedinFill className="size-5" />
          <p className="text-sm">LinkedIn</p>
        </Badge>
      </a>
    </div>
  );
}
