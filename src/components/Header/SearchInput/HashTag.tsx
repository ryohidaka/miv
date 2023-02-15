import { useTags } from "@/hooks/tags";
import Link from "next/link";
import { useEffect, useState } from "react";

type Props = {
  value: string;
  setValue: (value: string) => void;
};

/**
 * ハッシュタグ候補一覧
 * @returns
 */
export default function HashTag({ value, setValue }: Props) {
  const url = `/api/tags/search?q=${value}`;
  const tags = useTags(url)?.filter((tag) => tag !== value);


  const [isOpen, setOpen] = useState<boolean>(false);

  useEffect(() => {
    if (value) {
      setOpen(true);
    }
  }, [value]);

  const handleClick = (tag: string) => {
    setValue(tag);
    setOpen(false);
  };

  return (
    <>
      {isOpen && (
        <ul className="absolute rounded-lg border border-gray-200 bg-white text-sm font-medium text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white">
          {tags?.map((tag) => (
            <li
              key={tag}
              className="w-full cursor-pointer rounded-t-lg border-b border-gray-200 px-4 py-2 hover:bg-gray-100 hover:text-blue-700 focus:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 dark:border-gray-600  dark:hover:bg-gray-600 dark:hover:text-white dark:focus:text-white dark:focus:ring-gray-500"
              onClick={() => handleClick(tag)}
            >
              <Link href={`/tags/${tag}`}>#{tag}</Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
