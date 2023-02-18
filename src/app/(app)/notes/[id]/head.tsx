"use client";

import { usePost } from "@/hooks/post";
import DefaultTags from "@/lib/defaultTags";
import { NEXT_SEO_DEFAULT } from "@/lib/next-seo.config";
import { PostParams } from "@/types/post";
import type { NextSeoProps } from "next-seo";

type Props = {
  params: PostParams;
};

export default function Head({ params }: Props) {
  // 投稿を取得
  const url = `/api/notes/${params.id}`;
  const { data } = usePost(url);

  const title = data ? `Post by ${data.user.name}` : "Post";

  const updateMeta: NextSeoProps = {
    ...NEXT_SEO_DEFAULT,
    title,
  };

  return <DefaultTags updateMeta={updateMeta} />;
}
