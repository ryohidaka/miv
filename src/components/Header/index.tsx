import { Box, Flex, Grid, Heading } from "@chakra-ui/react";
import { usePathname } from "next/navigation";
import { capitalize } from "@/modules/client";
import { LogoImage } from "@/components/Common/LogoImage";

import Sidebar from "./Sidebar";

/**
 * 共通ヘッダー
 * @returns
 */
export default function Header() {
  // ページのパスを取得
  const path = usePathname();

  // トップページ以外でページ名を表示する
  const showPageName = path !== "/";

  // ページ名を取得
  const pagePath = path?.replace("/", "") as string;
  const pageName = capitalize(pagePath);

  return (
    <Box
      as="header"
      position="sticky"
      top={0}
      zIndex="sticky"
      bg="white"
      _dark={{ bg: "gray.800" }}
    >
      <Flex
        as="nav"
        align="center"
        justify="space-between"
        wrap="wrap"
        px={3}
        py={2}
      >
        <Grid gridAutoFlow="column" alignItems="center" gap={2}>
          {/* ロゴ画像 */}
          <LogoImage size={40} />

          {/* アプリ名 */}
          {showPageName && (
            <Heading size="lg" as="h1">
              {pageName}
            </Heading>
          )}
        </Grid>
        <Flex align="center">
          {/* サイドバー */}
          <Sidebar />
        </Flex>
      </Flex>
    </Box>
  );
}
