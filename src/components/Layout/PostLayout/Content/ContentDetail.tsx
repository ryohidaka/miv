import { LikeButton } from "@/components/Common/SquareThumbnail/LikeButton";
import Link from "next/link";

type Props = {
  postId: string;
  isLiked: boolean;
  title?: string;
  description?: string;
  tags?: string[];
};

/**
 * コンテンツ詳細表示
 * @returns
 */
export const ContentDetail = ({
  postId,
  isLiked,
  title,
  description,
  tags,
}: Props) => {
  return (
    <div className="grid grid-cols-1 gap-5 p-5">
      {/* メニュー */}
      <div className="flex justify-end gap-5">
        <div className="flex items-center gap-1">
          <span>いいね！</span>
          <LikeButton postId={postId} isLiked={isLiked} />
        </div>
      </div>

      {/* タイトル */}
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {title}
      </h5>

      {/* 説明文 */}
      <p className="font-normal text-gray-700 dark:text-gray-400">
        {description}
      </p>

      {/* ハッシュタグ */}
      <ul className="flex flex-wrap gap-3">
        {tags?.map((tag) => (
          <li key={tag}>
            <Link href={`/tags/${tag}`} className="hyperlink">
              {tag}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
