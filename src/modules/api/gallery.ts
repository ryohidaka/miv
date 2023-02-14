import { GalleryPost } from "@/types/gallery";
import { Post } from "@/types/post";
import { convertImages } from "./image";
import { convertUser } from "./user";

/**
 * ギャラリーの配列をPost配列に変換し返却する
 * @param post
 * @returns
 */
export const convertGalleryPosts = (datas: GalleryPost[]): Post[] => {
  return datas
    .filter((data: GalleryPost) => data.files.length > 0)
    .map((data: GalleryPost) => {
      return convertGalleryPost(data);
    });
};

/**
 * ギャラリーの投稿データをPost形式に変換し返却する
 * @param post
 * @returns
 */
export const convertGalleryPost = (post: GalleryPost): Post => {
  return {
    id: post.id,
    images: convertImages(post.files),
    user: convertUser(post.user),
    text: `${post.title} ${post.description}`,
    title: post.title,
    description: post.description,
    isLiked: post.isLiked,
    likedCount: post.likedCount,
  };
};
