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
      images: convertImages(post.files),
      user: convertUser(post.user),
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

/**
 * ユーザー情報を整形して返却する
 * @param user
 * @returns
 */
export const convertUser = (user: MisskeyUser): User => {
  return {
    id: user.id,
    name: user.name,
    image_url: user.avatarUrl,
  };
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
    };
    return image;
  });
  return images;
};
