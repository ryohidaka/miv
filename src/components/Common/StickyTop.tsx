import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

/**
 * ヘッダー下に固定する要素
 * @returns
 */
export const StickyTop = ({ children }: Props) => {
  return <div className="sticky top-12 z-50 w-full">{children}</div>;
};
