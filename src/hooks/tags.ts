import { tagFetcher } from "@/modules/swr";
import { TagParams } from "@/types/tag";
import { useEffect, useState } from "react";
import useSWR from "swr";

/**
 * ハッシュタグを取得
 */
export const useTag = (params: TagParams) => {
  const [tag, setTag] = useState<string>("");

  useEffect(() => {
    const rawTag = params.tag;
    const tag = decodeURI(rawTag);
    setTag(tag);
  }, [params]);

  return tag;
};

/**
 * ハッシュタグ一覧を取得
 * @returns
 */
export const useTags = (url: string) => {
  const { data } = useSWR<string[], Error>(url, tagFetcher);

  return data;
};
