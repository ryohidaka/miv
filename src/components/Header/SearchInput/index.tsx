import { useQuery } from "@/hooks/search";
import { APP_URL } from "@/modules/const";
import classNames from "classnames";
import { useEffect, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import HashTag from "./HashTag";

type Props = {
  className?: string;
};

/**
 * 検索フォーム
 * @returns
 */
export default function SearchInput({ className }: Props) {
  const url = `${APP_URL}/notes/search`;
  const query = useQuery();

  const [value, setValue] = useState<string>("");

  useEffect(() => {
    setValue(query || "");
  }, [query]);

  return (
    <>
      <form
        className={classNames("hidden w-2/5 md:block", className)}
        action={url}
      >
        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <AiOutlineSearch />
          </div>
          <input
            type="search"
            id="search"
            name="q"
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 pl-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500  dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
            placeholder="Search"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </div>

        {/* ハッシュタグ候補 */}
        <HashTag value={value} setValue={setValue} />
      </form>
    </>
  );
}
