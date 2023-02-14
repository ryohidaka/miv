import { useMeta } from "@/hooks/meta";
import Image from "next/image";

/**
 * インスタンス名
 * @returns
 */
export default function Instance() {
  // インスタンスのメタ情報を取得
  const meta = useMeta();

  return (
    <>
      {meta && (
        <span className="flex gap-1 text-base">
          <span>for</span>
          <Image
            className=""
            src={meta?.iconUrl as string}
            alt={meta?.name as string}
            width={20}
            height={20}
            unoptimized
          />
          <span>{meta?.name}</span>
        </span>
      )}
    </>
  );
}
