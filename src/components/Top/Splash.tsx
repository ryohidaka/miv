import { Heading, Stack, Text } from "@chakra-ui/react";
import { APP_NAME, DESCRIPTION } from "@/modules/const";
import { LogoImage } from "@/components/Common/LogoImage";

/**
 * 初期表示画面
 * @returns
 */
export const Splash = () => {
  return (
    <Stack spacing={3} alignItems="center">
      {/* タイトル */}
      <Heading as="h1" size="2xl" letterSpacing={"tighter"}>
        {APP_NAME}
      </Heading>

      {/* ロゴ画像 */}
      <LogoImage size={250} />

      {/* 説明文 */}
      <Text fontSize="xl">{DESCRIPTION}</Text>
    </Stack>
  );
};
