"use client";

import classNames from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
  url: string;
  label: string;
  onClick: () => void;
};

/**
 * メニューリンク
 * @returns
 */
export default function MenuLink({ url, label, onClick }: Props) {
  // ページのパスを取得
  const path = usePathname();
  const isActive = path === url;
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
