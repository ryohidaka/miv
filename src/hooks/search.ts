import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

/**
 * クエリパラメータからキーワードを取得する
 * @returns
 */
export const useQuery = () => {
  const [query, setQuery] = useState<string>("");

  // パラメータを取得
  const params = useSearchParams();

  useEffect(() => {
    if (!params) return;

    const query = params.get("q") as string;
    setQuery(query);
  }, [params]);

  return query;
};
