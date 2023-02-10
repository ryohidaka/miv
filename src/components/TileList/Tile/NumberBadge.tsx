import { IoCopy } from "react-icons/io5";

type Props = {
  count: number;
};

/**
 * 画像数表示バッジ
 * @returns
 */
export const NumberBadge = ({ count }: Props) => (
  <div className="absolute right-0 z-40 m-1 grid grid-flow-col items-center gap-0.5 rounded-xl bg-black bg-opacity-50 p-1 text-xs text-white">
    <IoCopy />
    <span>{count}</span>
  </div>
);
