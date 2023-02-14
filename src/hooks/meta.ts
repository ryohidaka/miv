import { metaFetcher } from "@/modules/swr";
import { Meta } from "@/types/meta";
import useSWR from "swr";

/**
 * インスタンスのメタデータを取得
 */
export const useMeta = () => {
  const url = "/api/meta";

  const { data } = useSWR<Meta, Error>(url, metaFetcher);

  return data;
};
