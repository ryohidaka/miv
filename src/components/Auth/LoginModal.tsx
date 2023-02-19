"use client";

import { useShowLoginModal } from "@/hooks/auth";
import { LoginContent } from "./LoginContent";

/**
 * ログインモーダル
 * @returns
 */
export const LoginModal = () => {
  const { showLoginModal } = useShowLoginModal();
  return (
    <>
      {showLoginModal && (
        <div className="fixed top-0 left-0 z-50 grid h-full w-full place-content-center">
          <div className="relative z-50 h-full w-full max-w-2xl md:h-auto bg-white dark:bg-gray-800">
            <LoginContent />
          </div>

          {/* オーバーレイ */}
          <div className="fixed top-0 left-0 h-full w-full backdrop-blur-sm" />
        </div>
      )}
    </>
  );
};
