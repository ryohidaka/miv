import { emojisState } from "@/atoms/Emojis";
import { useEmojis } from "@/hooks/emojis";
import { Emoji } from "@/types/emoji";
import { ReactNode, useEffect } from "react";
import { useRecoilState } from "recoil";

type Props = {
  children: ReactNode | ReactNode[];
};

/**
 * カスタム絵文字用プロバイダ
 * @returns
 */
export const EmojiProvider = ({ children }: Props) => {
  const [_, setEmojis] = useRecoilState(emojisState);

  const emojis = useEmojis();

  useEffect(() => {
    if (emojis) {
      setEmojis(emojis);
    }
  }, [emojis, setEmojis]);
  return <>{children}</>;
};
