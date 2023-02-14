"use client";

import { useTrendTags } from "@/hooks/tags";
import Link from "next/link";

/**
 * トレンドにあるハッシュタグ一覧
 * @returns
 */
export const TrendTags = () => {
  const { data } = useTrendTags();

  return (
    <ul className="hidden gap-3 overflow-x-scroll py-10 md:flex">
      {data?.map((tag) => (
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
