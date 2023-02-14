"use client";

import { DefaultMeta } from "@/components/Common/DefaultMeta";
import { useTag } from "@/hooks/tags";
import { APP_NAME } from "@/modules/const";
import { TagParams } from "@/types/tag";

type Props = {
  params: TagParams;
};

export default function Head({ params }: Props) {
  // タグを取得
  const tag = useTag(params);

  const title = `#${tag} | ${APP_NAME}`;
  return (
    <>
      <title>{title}</title>
      <DefaultMeta />
    </>
  );
}
