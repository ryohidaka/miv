import DefaultTags from "@/lib/defaultTags";
import { NEXT_SEO_DEFAULT } from "@/lib/next-seo.config";
import { APP_NAME } from "@/modules/const";
import { TagParams } from "@/types/tag";
import type { NextSeoProps } from "next-seo";

type Props = {
  params: TagParams;
};

export default function Head({ params }: Props) {
  // タグを取得
  const tag = decodeURI(params.tag);
  const title = `#${tag} | ${APP_NAME}`;

  const updateMeta: NextSeoProps = {
    ...NEXT_SEO_DEFAULT,
    title: title,
  };

  return <DefaultTags updateMeta={updateMeta} />;
}
