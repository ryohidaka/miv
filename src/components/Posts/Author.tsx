import { User } from "@/types/user";
import Image from "next/image";
import { StickyTop } from "../Common/StickyTop";

type Props = {
  user: User;
};

/**
 * 投稿者情報表示
 * @returns
 */
export const Author = ({ user }: Props) => {
  return (
    <StickyTop>
      <div className="flex items-center gap-3 p-5">
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
    </StickyTop>
  );
};
