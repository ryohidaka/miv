import { showLoginModalState } from "@/atoms/ShowLoginModal";
import { APP_NAME, DESCRIPTION } from "@/modules/const";
import { useEffect } from "react";
import { useRecoilState } from "recoil";

/**
 * ログインモーダル
 * @returns
 */
export const LoginModal = () => {
  const [showLoginModal, setShowLoginModal] =
    useRecoilState(showLoginModalState);

  useEffect(() => {
    document.body.style.overflow = showLoginModal ? "hidden" : "auto";
  }, [showLoginModal]);

  const close = () => {
    setShowLoginModal(false);
  };
  return (
    <>
      {showLoginModal && (
        <div className="fixed top-0 left-0 z-50 grid h-full w-full place-content-center">
          <div className="relative z-50 h-full w-full max-w-2xl md:h-auto">
            <div className="relative rounded-lg bg-white text-black shadow dark:bg-gray-800 dark:text-white">
              <div className="space-y-6 p-6">
                <div className="grid grid-cols-1 items-center gap-3">
                  {/* タイトル */}
                  <h1 className="text-2xl tracking-tighter">{APP_NAME}</h1>

                  {/* 説明文 */}
                  <p className="text-xl">{DESCRIPTION}</p>

                  <button className="light-btn" onClick={close}>
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* オーバーレイ */}
          <div className="fixed top-0 left-0 h-full w-full backdrop-blur-sm" />
        </div>
      )}
    </>
  );
};
