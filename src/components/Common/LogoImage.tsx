import { useColorMode } from "@chakra-ui/react";
import Image from "next/image";
import { LOGO, LOGO_DARK } from "@/modules/const";

type Props = {
  size: number;
};

/**
 * ロゴ画像
 * @returns
 */
export const LogoImage = ({ size }: Props) => {
  // カラーモードを取得
  const { colorMode } = useColorMode();
  return (
    <>
      {/* ロゴ画像 */}
      <Image
        src={colorMode === "light" ? LOGO : LOGO_DARK}
        alt="logo"
        width={size}
        height={size}
      />
    </>
  );
};
