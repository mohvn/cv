import { cn } from "@/components/lib/utils";
import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  metadataBase: new URL("https://mohvn.github.io"),
  title: {
    default: "Mohan Elias",
    template: `%s | Mohan Elias`,
  },
  description: "Hey! I'm Mohan Elias, and this is my portfolio website.",
  openGraph: {
    title: "Mohan Elias",
    description: "Hey! I'm Mohan Elias, and this is my portfolio website.",
    siteName: "Mohan Elias",
    locale: "en_US",
    type: "website",
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
          "min-h-screen bg-background font-sans antialiased flex flex-col gap-4 overflow-x-hidden"
        )}
      >
        <div className="w-full max-w-[700px] mx-auto flex flex-col gap-4 flex-1 dashed-border-vertical-content">
          {children}
        </div>
      </body>
    </html>
  );
}
