import { Post } from "@/types/post";
import { User } from "@/types/user";
import { fetchData } from ".";

const USER_POSTS_LIMIT = 12;

/**
 * ユーザ情報取得
 * @returns
 */
export const getUser = async (userId: string) => {
  const path = `users/${userId}/show`;
  const res = await fetchData(path);
  const user: User = await res.json();
  return user;
};

/**
 * ユーザーのノート一覧を取得
 * @param userId
 * @returns
 */
const getUserNotes = async (userId: string) => {
  const path = `users/${userId}/notes?limit=${USER_POSTS_LIMIT}`;
  const res = await fetchData(path);
  const notes: Post[] = await res.json();
  return notes;
};

/**
 * ユーザーのギャラリー一覧を取得
 * @param userId
 * @returns
 */
const getUserGallery = async (userId: string) => {
  const path = `users/${userId}/gallery?limit=${USER_POSTS_LIMIT}`;
  const res = await fetchData(path);
  const gallery: Post[] = await res.json();
  return gallery;
};

/**
 * ユーザ情報と投稿情報を取得
 * @param userId
 */
export const getUserWithPosts = async (userId: string) => {
  const user = await getUser(userId);
  const userNotes = await getUserNotes(userId);
  const userGallery = await getUserGallery(userId);
  return {
    user,
    notes: userNotes,
    gallery: userGallery,
  };
};
