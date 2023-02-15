import { User } from "@/types/user";
import { Image as ImageType } from "@/types/image";
import { CommonImage } from "./Image";
import classNames from "classnames";

type Props = {
  user: User;
  className?: string;
};

/**
 * アバター画像
 * @returns
 */
export const Avatar = ({ user, className }: Props) => {
  const avatarImage: ImageType = {
    id: user.id,
    url: user.image_url,
    blurhash: user.blurhash,
  };
  return (
    <CommonImage
      image={avatarImage}
      className={classNames("aspect-square rounded-full", className)}
    />
  );
};
