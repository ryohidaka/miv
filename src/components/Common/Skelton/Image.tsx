import classNames from "classnames";
import { BsImageAlt } from "react-icons/bs";

type Props = {
  className?: string;
};

/**
 * 画像のスケルトン表示
 * @returns
 */
export default function SkeltonImage({ className }: Props) {
  return (
    <div
      className={classNames(
        "grid h-full w-full place-content-center bg-gray-300 dark:bg-gray-700",
        className
      )}
    >
      <BsImageAlt className="h-12 w-12" />
    </div>
  );
}
