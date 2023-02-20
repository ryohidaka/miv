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

/**
 * 使用率の高いハッシュタグ一覧
 * @returns
 */
export const getFeaturedTags = async () => {
  const path = `tags/list`;
  const res = await fetchData(path);
  const tags: string[] = await res.json();
  return tags;
};
