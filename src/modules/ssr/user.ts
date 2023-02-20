import { User } from "@/types/user";
import { fetchData } from ".";

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
