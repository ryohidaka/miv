import { User } from "@/types/user";
import Image from "next/image";
import Link from "next/link";

type Props = {
  user: User;
  imageSize: number;
};

/**
 * 投稿者情報表示
 * @returns
 */
export const Author = ({ user, imageSize }: Props) => {
  const userPageUrl = `/users/${user.id}`;
  return (
    <Link href={userPageUrl} className="flex items-center gap-1">
      <Image
        width={imageSize}
        height={imageSize}
        alt={user?.name}
        src={user?.image_url}
        placeholder={user.blurhash ? "blur" : "empty"}
        blurDataURL={user.blurhash}
        unoptimized
        className="aspect-square rounded-full"
      />
      <p className="block max-w-full overflow-hidden text-ellipsis whitespace-nowrap text-sm">
        {user?.name}
      </p>
    </Link>
  );
};
