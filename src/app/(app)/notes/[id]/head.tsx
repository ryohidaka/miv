import DefaultTags from "@/lib/defaultTags";
import { NEXT_SEO_DEFAULT } from "@/lib/next-seo.config";
import { getNotePost } from "@/modules/ssr/notes";
import { PostParams } from "@/types/post";
import type { NextSeoProps } from "next-seo";
import useTranslation from "next-translate/useTranslation";

type Props = {
  params: PostParams;
};

export default async function Head({ params }: Props) {
  const { lang } = useTranslation();

  const { user } = await getNotePost(params.id);

  const title = lang === "ja" ? `${user.name} の投稿` : `Post by ${user.name}`;

  const updateMeta: NextSeoProps = {
    ...NEXT_SEO_DEFAULT,
    title,
  };

  return <DefaultTags updateMeta={updateMeta} />;
}
