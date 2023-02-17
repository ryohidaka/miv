import { tagFetcher } from "@/modules/swr";
import useSWR from "swr";

/**
 * ハッシュタグ一覧を取得
 * @returns
 */
export const useTags = (url: string) => {
  const { data } = useSWR<string[], Error>(url, tagFetcher);

  return data;
};
