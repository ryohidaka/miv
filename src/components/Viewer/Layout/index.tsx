import { ReactNode } from "react";
import { Loading } from "./Loading";
import { ErrorAlert } from "./ErrorAlert";

type Props = {
  children: ReactNode;
  isLoading?: boolean;
  error?: Error;
};

/**
 * ビュワーページの共通レイアウト
 * @returns
 */
export const ViewerLayout = ({ children, isLoading, error }: Props) => {
  return (
    <main className="container mx-auto max-w-screen-xl md:px-6 lg:px-12 xl:px-24">
      {/* エラー */}
      {error && (
        <div className="container">
          <ErrorAlert />
        </div>
      )}

      {/* メインコンテンツ */}
      {!isLoading && !error && (
        <div className="grid grid-cols-1">{children}</div>
      )}

      {/* ローディング */}
      {isLoading && <Loading />}
    </main>
  );
};
