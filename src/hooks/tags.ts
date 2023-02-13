import { tagFetcher } from "@/modules/swr";
import { Hashtag, TagParams } from "@/types/tag";
import { useEffect, useState } from "react";
import useSWR from "swr";

/**
 * ハッシュタグを取得
 */
export const useTag = (params: TagParams) => {
  const [tag, setTag] = useState<string>("");

  useEffect(() => {
    const tag = params.tag;
    setTag(tag);
  }, [params]);

  return tag;
};

/**
 * トレンドにあるハッシュタグを取得
 * @returns
 */
export const useTrendTags = () => {
  const url = "/api/tags/trend";

  const { data, error, isLoading } = useSWR<Hashtag[], Error>(url, tagFetcher);

  const tags = data?.map((trend: Hashtag) => trend.tag);

  return { data: tags, error, isLoading };
};
