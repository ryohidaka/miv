import { showLoginModalState } from "@/atoms/ShowLoginModal";
import { instancesFetcher } from "@/modules/swr";
import { Instance } from "@/types/instance";
import { hasCookie } from "cookies-next";
import JSON5 from "json5";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import useSWR from "swr";

export const useShowLoginModal = () => {
  const [showLoginModal, setShowLoginModal] =
    useRecoilState(showLoginModalState);

  const hasToken = hasCookie("token");

  useEffect(() => {
    document.body.style.overflow = showLoginModal ? "hidden" : "auto";

    if (hasToken) {
      setShowLoginModal(false);
    } else {
      setShowLoginModal(true);
    }
  }, [showLoginModal, setShowLoginModal, hasToken]);

  return { showLoginModal };
};

/**
 * インスタンス一覧を取得
 */
export const useInstanceList = () => {
  const url =
    "https://raw.githubusercontent.com/misskey-dev/misskey-hub/main/src/instances.json5";
  const { data } = useSWR<string, Error>(url, instancesFetcher);
  const instances: Instance[] = data ? JSON5.parse(data) : [];
  return instances;
};
