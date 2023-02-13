import { NotePost } from "@/types/note";

export const NOTE_LIMIT = 40;

/**
 * ギャラリーの投稿の配列を平坦化して返却する
 * @param data
 * @returns
 */
export const getFlatNotePosts = (data: NotePost[][]) => {
  const flatDatas = data
    ? data.filter((data) => typeof data !== "undefined").flat()
    : [];

  const posts = flatDatas
    .filter((data) => data.files.length > 0)
    .map((post) => {
      return convertNotePost(post);
    });

  return posts;
};

/**
 * ギャラリーの投稿データをPost形式に変換し返却する
 * @param post
 * @returns
 */
export const convertNotePost = (post?: NotePost) => {
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
      text: post.text || "",
      description: post.text || "",
    };
  }

  return undefined;
};
