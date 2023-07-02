import { DefaultAlert } from "@/components/Common/DefaultAlert";
import Link from "next/link";

/**
 * エラー表示
 * @returns
 */
export const ErrorAlert = () => {
  return (
    <div className="container">
      <DefaultAlert status="error" title=" This action is unauthorized.">
        <Link href="/login">Please login again.</Link>
      </DefaultAlert>
    </div>
  );
};
