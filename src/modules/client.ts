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
