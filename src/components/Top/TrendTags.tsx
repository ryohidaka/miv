import Link from "next/link";
import { getTags } from "@/modules/ssr/tag";

/**
 * ハッシュタグ一覧
 * @returns
 */
export const TrendTags = async () => {
  const tags = await getTags();
  return (
    <ul className="flr hidden flex-wrap gap-3 overflow-x-scroll py-10 md:flex">
      {tags?.map((tag) => (
        <li key={tag}>
          <Link href={`/tags/${tag}`} passHref>
            <button
              type="button"
              className="rounded-lg bg-purple-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
            >
              #{tag}
            </button>
          </Link>
        </li>
      ))}
    </ul>
  );
};
