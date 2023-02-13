import { showLoginModalState } from "@/atoms/ShowLoginModal";
import { hasCookie } from "cookies-next";
import { useEffect } from "react";
import { useRecoilState } from "recoil";

export const useShowLoginModal = () => {
  const [showLoginModal, setShowLoginModal] =
    useRecoilState(showLoginModalState);

  const hasToken = hasCookie("token");

  useEffect(() => {
    document.body.style.overflow = showLoginModal ? "hidden" : "auto";

    if (hasToken) {
      setShowLoginModal(false);
    }
  }, [showLoginModal, setShowLoginModal, hasToken]);

  return { showLoginModal };
};
