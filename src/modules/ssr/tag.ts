import { fetchData } from ".";

/**
 * トレンドにあるハッシュタグ一覧
 * @returns
 */
export const getTrendTags = async () => {
  const path = `tags/trend`;
  const res = await fetchData(path);
  const tags: string[] = await res.json();
  return tags;
};
