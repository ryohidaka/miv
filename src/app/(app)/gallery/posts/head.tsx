import DefaultTags from "@/lib/defaultTags";
import { NEXT_SEO_DEFAULT } from "@/lib/next-seo.config";
import type { NextSeoProps } from "next-seo";

export default function Head() {
  const updateMeta: NextSeoProps = {
    ...NEXT_SEO_DEFAULT,
    title: "最近の投稿",
  };

  return <DefaultTags updateMeta={updateMeta} />;
}
