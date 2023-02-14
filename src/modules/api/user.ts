import { User } from "@/types/user";
import { User as MisskeyUser } from "misskey-js/built/entities";

/**
 * ユーザー情報を整形して返却する
 * @param user
 * @returns
 */
export const convertUser = (user: MisskeyUser): User => {
  return {
    id: user.id,
    name: user.name || user.username,
    image_url: user.avatarUrl,
    blurhash: user.avatarBlurhash,
  };
};
