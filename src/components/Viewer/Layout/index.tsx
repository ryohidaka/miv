import { Container } from "@chakra-ui/react";
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
    <Container maxW="container.xl" px={[0, 0, 12, 24]}>
      {/* エラー */}
      {error && (
        <Container>
          <ErrorAlert />
        </Container>
      )}

      {/* メインコンテンツ */}
      {!isLoading && !error && <>{children}</>}

      {/* ローディング */}
      {isLoading && <Loading />}
    </Container>
  );
};
