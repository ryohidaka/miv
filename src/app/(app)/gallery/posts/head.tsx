import DefaultTags from "@/lib/defaultTags";
import { NEXT_SEO_DEFAULT } from "@/lib/next-seo.config";
import type { NextSeoProps } from "next-seo";
import useTranslation from "next-translate/useTranslation";

export default function Head() {
  const { t } = useTranslation();

  const updateMeta: NextSeoProps = {
    ...NEXT_SEO_DEFAULT,
    title: t("最近の投稿"),
  };

  return <DefaultTags updateMeta={updateMeta} />;
}
