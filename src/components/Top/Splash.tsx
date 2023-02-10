import { Heading, Input, Stack, Text } from "@chakra-ui/react";
import { APP_NAME, DESCRIPTION } from "@/modules/const";
import { LogoImage } from "@/components/Common/LogoImage";
import { useState } from "react";

/**
 * 初期表示画面
 * @returns
 */
export const Splash = () => {
  const [host, setHost] = useState<string>("https://misskey.io");
  const loginUrl = `/api/auth/signin?host=${host}`;

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

      {/* インスタンスのホスト名 */}
      <Input value={host} onChange={(e) => setHost(e.target.value)} />

      {/* ログイン */}
      <a href={loginUrl}>Login</a>
    </Stack>
  );
};
