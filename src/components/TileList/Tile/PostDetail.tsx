import { Author } from "@/components/Common/Author";
import { User } from "@/types/user";

type Props = {
  text: string;
  user: User;
  hideUser?: boolean;
};

/**
 * 投稿詳細表示
 * @returns
 */
export const PostDetail = ({ text, user, hideUser }: Props) => {
  return (
    <div className="hidden py-1 md:block">
      {/* 本文 */}
      <p className="mb-1 h-5 max-w-full overflow-hidden text-ellipsis whitespace-nowrap text-sm">
        {text}
      </p>

      {/* 投稿者情報 */}
      {!hideUser && <Author user={user} imageSize={24} />}
    </div>
  );
};
