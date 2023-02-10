import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { scrollState } from "@/atoms/Scroll";

/**
 * セッションで保持した位置までスクロールする
 * @returns
 */
export const useScroll = (loaded: boolean) => {
  const [scrollPosition] = useRecoilState(scrollState);

  useEffect(() => {
    window.scroll({
      top: scrollPosition,
    });
  }, [scrollPosition, loaded]);
};
