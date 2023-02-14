"use client";

import { PostParams } from "@/types/post";
import { useEffect, useState } from "react";

/**
 * 投稿IDを取得
 */
export const usePostId = (params: PostParams) => {
  const [postId, setPostId] = useState<string>("");

  useEffect(() => {
    const postId = params.id;
    setPostId(postId);
  }, [params]);

  return postId;
};
