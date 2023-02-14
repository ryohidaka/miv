import { Image } from "@/types/image";
import { Posts } from "@/types/post";
import { DriveFile } from "misskey-js/built/entities";

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
