import Link from "next/link";

type Props = {
  title?: string;
  description?: string;
  tags?: string[];
};

/**
 * コンテンツ詳細表示
 * @returns
 */
export const ContentDetail = ({ title, description, tags }: Props) => {
  return (
    <div className="grid grid-cols-1 gap-5 p-5">
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
