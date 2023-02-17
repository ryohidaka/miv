import { LikeButton } from "@/components/Common/SquareThumbnail/LikeButton";
import Link from "next/link";
import { Mfm } from "@/components/Common/Mfm";

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
      <div id="menu" className="flex justify-end gap-5">
        <div id="like" className="flex items-center gap-1">
          <span>いいね！</span>
          <LikeButton postId={postId} isLiked={isLiked} isOutline />
        </div>
      </div>

      {/* タイトル */}
      <h5
        id="title"
        className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
      >
        {title}
      </h5>

      {/* 説明文 */}
      <p
        id="desription"
        className="font-normal text-gray-700 dark:text-gray-400"
      >
        <Mfm text={description as string} />
      </p>

      {/* ハッシュタグ */}
      <ul id="hashtags" className="flex flex-wrap gap-3">
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
