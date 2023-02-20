import { Post } from "@/types/post";
import { fetchData } from ".";

/**
 * ギャラリ投稿を取得
 * @returns
 */
export const getGalleryPost = async (id: string) => {
  const path = `gallery/${id}`;
  const res = await fetchData(path);
  const post: Post = await res.json();
  return post;
};

/**
 * ギャラリ一覧を取得
 * @param name
 */
export const getGalleryPosts = async (name: string, params?: string) => {
  const path = `gallery/${name}${params || ""}`;
  const res = await fetchData(path);
  const posts: Post[] = await res.json();
  return posts;
};

/**
 * ギャラリー全種を取得
 * @param path
 */
export const getGallery = async () => {
  const limitParams = `?limit=12`;

  const recentPosts = await getGalleryPosts("posts", limitParams);
  const featuredPosts = await getGalleryPosts("featured", limitParams);
  const popularPosts = await getGalleryPosts("popular", limitParams);

  return {
    recent: recentPosts,
    featured: featuredPosts,
    popular: popularPosts,
  };
};
