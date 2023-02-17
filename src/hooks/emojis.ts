import { emojiFetcher } from "@/modules/swr";
import { Emoji } from "@/types/emoji";
import useSWR from "swr";

/**
 * カスタム絵文字一覧を取得
 * @returns
 */
export const useEmojis = () => {
  const url = "/api/emojis";
  const { data } = useSWR<Emoji[], Error>(url, emojiFetcher);

  return data;
};
