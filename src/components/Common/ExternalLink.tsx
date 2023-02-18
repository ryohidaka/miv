import classNames from "classnames";
import Link from "next/link";
import { ReactNode } from "react";
import { BiLinkExternal } from "react-icons/bi";

type Props = {
  children: ReactNode;
  href: string;
  showIcon?: boolean;
  className?: string;
};

/**
 * 外部リンク
 * @returns
 */
export const ExternalLink = ({
  children,
  href,
  showIcon,
  className,
}: Props) => {
  return (
    <Link
      href={href}
      className={classNames("inline-flex items-center", className)}
      rel="noopener noreferrer"
      target="_blank"
    >
      {children}

      {/* 外部アイコン */}
      {showIcon && (
        <span className="pl-1 text-sm">
          <BiLinkExternal />
        </span>
      )}
    </Link>
  );
};
