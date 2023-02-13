import classNames from "classnames";
import Link from "next/link";

type Props = {
  url: string;
  label: string;
  isActive: boolean;
  onClick: () => void;
};

/**
 * メニューリンク
 * @returns
 */
export default function MenuLink({ url, label, isActive, onClick }: Props) {
  return (
    <Link
      href={url}
      className={classNames("w-full", isActive ? "btn-solid" : "btn-outline")}
      onClick={onClick}
    >
      {label}
    </Link>
  );
}
