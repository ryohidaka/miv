import DefaultTags from "@/lib/defaultTags";
import { NEXT_SEO_DEFAULT } from "@/lib/next-seo.config";
import { getGalleryPost } from "@/modules/ssr/gallery";
import { PostParams } from "@/types/post";
import type { NextSeoProps } from "next-seo";

type Props = {
  params: PostParams;
};

export default async function Head({ params }: Props) {
  // タイトルを取得
  const { title: postTitle, user } = await getGalleryPost(params.id);
  const userName = user.name;

  const title = `${postTitle} by ${userName}`;

  const updateMeta: NextSeoProps = {
    ...NEXT_SEO_DEFAULT,
    title,
  };

  return <DefaultTags updateMeta={updateMeta} />;
}
