import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import BlurFade from "@/components/ui/blur-fade";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <header className="flex items-center gap-4 mt-28">
        <BlurFade delay={0.25} inView>
          <img src="https://avatars.githubusercontent.com/u/57570197?v=4" className="aspect-square rounded-lg w-28 h-full" />
        </BlurFade>
        <div>
          <BlurFade delay={0.25 * 2} inView>
            <h1 className="text-6xl font-bold">Hi, I'm Mohan</h1>
          </BlurFade>
          <BlurFade delay={0.25 * 3} inView>
            <h2 className="text-xl max-w-md">Software Developer. Making easy things easy and hard things possible.</h2>
          </BlurFade>
        </div>
      </header>
    </div>
  );
}
