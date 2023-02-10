import { DefaultAlert } from "@/components/Common/DefaultAlert";

/**
 * エラー表示
 * @returns
 */
export const ErrorAlert = () => {
  return (
    <div className="container">
      <DefaultAlert status="error" title=" This action is unauthorized.">
        Please login again.
      </DefaultAlert>
    </div>
  );
};
