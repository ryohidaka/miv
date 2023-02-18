"use client";

import { useUser } from "@/hooks/user";
import DefaultTags from "@/lib/defaultTags";
import { NEXT_SEO_DEFAULT } from "@/lib/next-seo.config";
import { PostParams } from "@/types/post";
import type { NextSeoProps } from "next-seo";

type Props = {
  params: PostParams;
};

export default function Head({ params }: Props) {
  // ユーザ情報を取得
  const { data } = useUser(params.id);

  // ユーザ名を取得
  const userName = data?.name;

  const updateMeta: NextSeoProps = {
    ...NEXT_SEO_DEFAULT,
    title: userName,
  };

  return <DefaultTags updateMeta={updateMeta} />;
}
