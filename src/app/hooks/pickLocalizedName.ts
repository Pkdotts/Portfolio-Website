import { useLocale } from "next-intl";

export function pickLocalizedName(en: string, fr: string | null){
  const currentLocale = useLocale();
  return (currentLocale === "en" || !fr || fr === "") ? en : fr
}