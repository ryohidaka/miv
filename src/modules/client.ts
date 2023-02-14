import { GalleryPost } from "@/types/gallery";
import { Image } from "@/types/image";
import { Post, Posts } from "@/types/post";
import { DriveFile } from "misskey-js/built/entities";
import { convertUser } from "./api/user";

/**
 * 投稿の配列を平坦化して返却する
 * @param data
 * @returns
 */
export const getFlatPosts = (data: Posts[]): Posts => {
  const flatPosts = data
    ? data.filter((data) => typeof data !== "undefined").flat()
    : [];

  return flatPosts;
};

/**
 * ギャラリーの投稿の配列を平坦化して返却する
 * @param data
 * @returns
 */
export const getFlatGalleryPosts = (data: GalleryPost[][]) => {
  const flatDatas = data
    ? data.filter((data) => typeof data !== "undefined").flat()
    : [];

  const posts = flatDatas
    .filter((data) => data.files.length > 0)
    .map((post) => {
      return convertGalleryPost(post);
    });

  return posts;
};

/**
 * ギャラリーの投稿データをPost形式に変換し返却する
 * @param post
 * @returns
 */
export const convertGalleryPost = (post?: GalleryPost) => {
  if (post) {
    const convertedPost: Post = {
      id: post.id,
      images: convertImages(post.files),
      user: convertUser(post.user),
      text: `${post.title} ${post.description}`,
      title: post.title,
      description: post.description,
      isLiked: post.isLiked,
      likedCount: post.likedCount,
    };
    return convertedPost;
  }

  return undefined;
};

/**
 * 先頭のみ大文字にして返却する
 * @param str
 * @returns
 */
export const capitalize = (str: string) => {
  return `${str.charAt(0).toUpperCase()}${str.slice(1).toLowerCase()}`;
};

/**
 * 画像一覧を整形して返却する
 * @param user
 * @returns
 */
export const convertImages = (files: DriveFile[]): Image[] => {
  const images = files.map((file) => {
    const image: Image = {
      id: file.id,
      url: file.url,
      thumbnailUrl: file.thumbnailUrl,
      blurhash: file.blurhash,
    };
    return image;
  });
  return images;
};
