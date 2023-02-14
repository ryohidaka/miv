import { GalleryPost } from "@/types/gallery";
import { Post } from "@/types/post";
import { convertImages } from "../client";
import { convertUser } from "./user";

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
