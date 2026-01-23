import { cn } from "@/components/lib/utils";
import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  metadataBase: new URL("https://mohvn.github.io"),
  title: {
    default: "Mohan Elias",
    template: `%s | Mohan Elias`,
  },
  description: "Desenvolvedor de Software com experiência em desenvolvimento web e automação de processos. Especializado em Python, JavaScript, TypeScript e PHP.",
  openGraph: {
    title: "Mohan Elias",
    description: "Desenvolvedor de Software com experiência em desenvolvimento web e automação de processos. Especializado em Python, JavaScript, TypeScript e PHP.",
    url: "https://mohanelias.com.br",
    siteName: "Mohan Elias",
    locale: "pt_BR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "Mohan Elias",
    card: "summary_large_image",
  },
  verification: {
    google: "",
    yandex: "",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased max-w-[700px] mx-auto flex flex-col gap-4"
        )}
      >
        {children}
      </body>
    </html>
  );
}
