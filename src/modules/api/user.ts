import { User } from "@/types/user";
import { UserDetailed, UserLite } from "misskey-js/built/entities";

/**
 * ユーザー情報を整形して返却する
 * @param user
 * @returns
 */
export const convertUser = (user: UserLite): User => {
  return {
    id: user.id,
    name: user.name || user.username,
    image_url: user.avatarUrl,
    blurhash: user.avatarBlurhash,
  };
};

/**
 * ユーザー情報を整形して返却する
 * @param user
 * @returns
 */
export const convertUserDetailed = (user: UserLite & UserDetailed): User => {
  return {
    id: user.id,
    name: user.name || user.username,
    image_url: user.avatarUrl,
    blurhash: user.avatarBlurhash,
    bannerUrl: user.bannerUrl as string,
    bannerBlurhash: user.bannerBlurhash as string,
    description: user.description as string,
  };
};
