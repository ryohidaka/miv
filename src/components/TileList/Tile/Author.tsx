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
    <div id={user.id} className="flex w-full items-center gap-2">
      <Image
        width={25}
        height={25}
        alt={user.name}
        src={user.image_url}
        unoptimized
        className="aspect-square rounded-full"
      />
      <p className="max-w-full overflow-hidden text-ellipsis whitespace-nowrap text-sm">
        {user.name}
      </p>
    </div>
  );
};
