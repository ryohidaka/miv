"use client";

import useSWR from "swr";

import { postFetcher } from "@/modules/swr";
import { GalleryPost } from "@/types/gallery";
import { convertGalleryPost } from "@/modules/client";
import { PostParams } from "@/types/post";
import { useEffect, useState } from "react";

/**
 * 投稿取得
 * @returns
 */
export const usePost = (postId: string) => {
  const url = `/api/posts/${postId}`;

  const { data, error, isLoading } = useSWR<GalleryPost, Error>(
    url,
    postFetcher
  );

  const post = convertGalleryPost(data);

  return { data: post, error, isLoading };
};

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
