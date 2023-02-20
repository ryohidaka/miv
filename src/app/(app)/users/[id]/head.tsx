import DefaultTags from "@/lib/defaultTags";
import { NEXT_SEO_DEFAULT } from "@/lib/next-seo.config";
import { getUser } from "@/modules/ssr/user";
import { PostParams } from "@/types/post";
import type { NextSeoProps } from "next-seo";

type Props = {
  params: PostParams;
};

export default async function Head({ params }: Props) {
  // ユーザ名を取得
  const { name } = await getUser(params.id);

  const updateMeta: NextSeoProps = {
    ...NEXT_SEO_DEFAULT,
    title: name,
  };

  return <DefaultTags updateMeta={updateMeta} />;
}
