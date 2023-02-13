"use client";

import { convertNotePost, getFlatNotePosts } from "@/modules/client/note";
import { noteFetcher, notesFetcher, swrInfiniteConfig } from "@/modules/swr";
import { NotePost } from "@/types/note";
import { Post } from "@/types/post";
import useSWRInfinite from "swr/infinite";
import useSWR from "swr";

/**
 * ノート一覧取得
 * @returns
 */
export const useNotes = (url: string) => {
  const getKey = (pageIndex: number, previousPageData: Post[]) => {
    if (pageIndex === 0) {
      return url;
    } else {
      // ページネーションを指定
      const untilId = previousPageData[previousPageData.length - 1].id;
      return `${url}?until_id=${untilId}`;
    }
  };

  const { data, error, isLoading, size, setSize } = useSWRInfinite<
    NotePost[],
    Error
  >(getKey, notesFetcher, swrInfiniteConfig);

  const posts = getFlatNotePosts(data as NotePost[][]);

  return { data: posts, error, isLoading, size, setSize };
};

/**
 * ノート取得
 * @returns
 */
export const useNote = (postId: string) => {
  const url = `/api/notes/${postId}`;

  const { data, error, isLoading } = useSWR<NotePost, Error>(url, noteFetcher);

  const post = convertNotePost(data);

  return { data: post, error, isLoading };
};
