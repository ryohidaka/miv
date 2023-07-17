import DefaultTags from "@/lib/defaultTags";
import { NEXT_SEO_DEFAULT } from "@/lib/next-seo.config";
import { getNotePost } from "@/modules/ssr/notes";
import { PostParams } from "@/types/post";
import type { NextSeoProps } from "next-seo";

type Props = {
  params: PostParams;
};

export default async function Head({ params }: Props) {
  const { user } = await getNotePost(params.id);

  const title = `${user.name} の投稿`;

  const updateMeta: NextSeoProps = {
    ...NEXT_SEO_DEFAULT,
    title,
  };

  return <DefaultTags updateMeta={updateMeta} />;
}
