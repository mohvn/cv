"use client";

import { useEffect } from "react";
import type { Locale } from "@/i18n";

export function LangSync({ locale }: { locale: Locale }) {
  useEffect(() => {
    document.documentElement.lang = locale === "pt-BR" ? "pt-BR" : "en";
  }, [locale]);
  return null;
}
