import Link from "next/link";
import { BiLinkExternal } from "react-icons/bi";

/**
 * 共通フッター
 * @returns
 */
export default function Footer() {
  return (
    <footer className="gap sticky grid place-content-center py-2">
      {/* Copyrights */}
      <div className="flex items-center gap-1">
        &copy;
        <Link href="https://ryohidaka.jp">ryohidaka</Link>
        <BiLinkExternal />
      </div>
    </footer>
  );
}
