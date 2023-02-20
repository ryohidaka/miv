import { Post } from "@/types/post";
import { fetchData } from ".";

/**
 * ノート投稿を取得
 * @returns
 */
export const getNotePost = async (id: string) => {
  const path = `notes/${id}`;
  const res = await fetchData(path);
  const post: Post = await res.json();
  return post;
};

/**
 * ノート一覧を取得
 * @param name
 */
export const getNotes = async (name: string, params?: string) => {
  const path = `notes/${name}${params || ""}`;
  const res = await fetchData(path);
  const posts: Post[] = await res.json();
  return posts;
};

/**
 * タイムライン一覧を取得
 * @param path
 */
export const getTimelines = async () => {
  const limitParams = `?limit=12`;

  const localTimeline = await getNotes("local-timeline", limitParams);
  const hybridTimeline = await getNotes("hybrid-timeline", limitParams);
  const globalTimeline = await getNotes("global-timeline", limitParams);

  return {
    local: localTimeline,
    hybrid: hybridTimeline,
    global: globalTimeline,
  };
};
