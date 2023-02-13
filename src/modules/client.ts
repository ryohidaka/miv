import { GalleryPost } from "@/types/gallery";
import { Posts } from "@/types/post";

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
    return {
      id: post.id,
      images: post.files.map((file) => {
        return { id: file.id, url: file.url };
      }),
      user: {
        id: post.user.id,
        name: post.user.name,
        image_url: post.user.avatarUrl,
      },
      text: `${post.title} ${post.description}`,
      title: post.title,
      description: post.description,
    };
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
