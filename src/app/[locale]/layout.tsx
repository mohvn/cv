import { notFound } from "next/navigation";
import { isValidLocale, type Locale } from "@/i18n";
import { LangSync } from "@/components/lang-sync";

export default function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const { locale } = params;
  if (!isValidLocale(locale)) {
    notFound();
  }
  return (
    <>
      <LangSync locale={locale as Locale} />
      {children}
    </>
  );
}
