"use client";

import { DefaultMeta } from "@/components/Common/DefaultMeta";
import { usePostId } from "@/hooks/post";
import { useUser } from "@/hooks/user";
import { APP_NAME } from "@/modules/const";
import { PostParams } from "@/types/post";

type Props = {
  params: PostParams;
};

export default function Head({ params }: Props) {
  // ユーザIDを取得
  const userId = usePostId(params);
  const { data } = useUser(userId);

  // ユーザ名を取得
  const userName = data?.name;

  const title = `${userName} | ${APP_NAME}`;
  return (
    <>
      <title>{title}</title>
      <DefaultMeta />
    </>
  );
}
