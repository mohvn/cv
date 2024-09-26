import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import BlurFade from "@/components/ui/blur-fade";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] text-zinc-900">
      <header className="flex items-center gap-4 mt-28">
        <BlurFade delay={0.25} inView>
          <img src="https://avatars.githubusercontent.com/u/57570197?v=4" className="aspect-square rounded-lg w-28 h-full" />
        </BlurFade>
        <div>
          <BlurFade delay={0.25 * 2} inView>
            <h1 className="text-6xl font-bold">Hi, I'm xxxxx</h1>
          </BlurFade>
          <BlurFade delay={0.25 * 3} inView>
            <h2 className="text-lg max-w-md">Software Developer. Making easy things easy and hard things possible.</h2>
          </BlurFade>
        </div>
      </header>
      <section className="flex flex-col gap-8">
        <div>
          <h3 className="text-xl font-bold">About</h3>
          <p className="text-base text-zinc-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
        </div>

        <div>
          <h3 className="text-xl font-bold">Work Experience</h3>
          <div className="flex items-center gap-4 my-4">
            <Avatar>
              <AvatarImage src="https://media.licdn.com/dms/image/v2/D4D0BAQHLynuk8NUsJg/company-logo_200_200/company-logo_200_200/0/1708778668342/bnxadm_logo?e=2147483647&v=beta&t=Nbi-oIK9aZjtzYFnnOYr5Z-uBTfNLPtG-Ba9zXce0yE" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div>
              <h4 className="text-base font-bold">BNX</h4>
              <p className="text-xs text-zinc-800">Help Desk</p>
            </div>
          </div>

          <div className="flex items-center gap-4 my-4">
            <Avatar>
              <AvatarImage src="https://media.licdn.com/dms/image/v2/D4D0BAQHLynuk8NUsJg/company-logo_200_200/company-logo_200_200/0/1708778668342/bnxadm_logo?e=2147483647&v=beta&t=Nbi-oIK9aZjtzYFnnOYr5Z-uBTfNLPtG-Ba9zXce0yE" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div>
              <h4 className="text-base font-bold">BNX</h4>
              <p className="text-xs text-zinc-800">Administrative Assistant</p>
            </div>
          </div>

          <div className="flex items-center gap-4 my-4">
            <Avatar>
              <AvatarImage src="https://media.licdn.com/dms/image/v2/D4D0BAQHhC5ySCq7YxQ/company-logo_200_200/company-logo_200_200/0/1698079858123/brasil_sorriso_logo?e=2147483647&v=beta&t=J4bpHOSVxlPLIxm8y2VM9ejVtlO5ZLMoUk6AkYel4uw" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="w-full">
              <h4 className="text-base font-bold">Brasil Sorriso</h4>
              <div className="flex items-center justify-between w-full">
                <p className="text-xs text-zinc-800">Customer Service</p>
                <p className="text-base text-zinc-800">2024</p>
              </div>
            </div>
          </div>
        </div>


      </section>
    </div>
  );
}
