import { User } from "@/types/user";
import Image from "next/image";

type Props = {
  user: User;
};

/**
 * 投稿者情報表示
 * @returns
 */
export const Author = ({ user }: Props) => {
  return (
    <div className="sticky top-12 z-50 p-5">
      <div className="flex items-center gap-3">
        <Image
          width={40}
          height={40}
          alt={user?.name}
          src={user?.image_url}
          placeholder="blur"
          blurDataURL={user.blurhash}
          unoptimized
          className="aspect-square rounded-full"
        />
        <p className="max-w-full overflow-hidden text-ellipsis whitespace-nowrap text-sm">
          {user?.name}
        </p>
      </div>
    </div>
  );
};
