import { TagParams } from "@/types/tag";
import { useEffect, useState } from "react";

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
