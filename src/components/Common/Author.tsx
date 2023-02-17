import { User } from "@/types/user";
import Link from "next/link";
import { Avatar } from "./Avatar";
import { Mfm } from "./Mfm";

type Props = {
  user: User;
  className?: string;
};

/**
 * 投稿者情報表示
 * @returns
 */
export const Author = ({ user, className }: Props) => {
  const userPageUrl = `/users/${user.id}`;
  return (
    <Link href={userPageUrl} className="flex items-center gap-1">
      {/* アバター画像 */}
      <Avatar user={user} className={className} />

      {/* ユーザ名 */}
      <p className="flex max-w-full items-center overflow-hidden text-ellipsis whitespace-nowrap text-sm">
        <Mfm text={user?.name as string} />
      </p>
    </Link>
  );
};
