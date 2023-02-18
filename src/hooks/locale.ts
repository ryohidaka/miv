import { usePathname } from "next/navigation";
import en from "../locales/en";
import ja from "../locales/ja";

export const useLocale = () => {
  const path = usePathname();
  const locale = path?.split("/")[1];
  const t = locale === "en" ? en : ja;

  return { locale, t };
};
