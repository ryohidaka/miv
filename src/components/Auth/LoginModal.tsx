"use client";

import { useShowLoginModal } from "@/hooks/auth";
import { APP_NAME, DESCRIPTION } from "@/modules/const";
import { useState } from "react";

/**
 * ログインモーダル
 * @returns
 */
export const LoginModal = () => {
  const { showLoginModal } = useShowLoginModal();

  const [host, setHost] = useState<string>("https://misskey.io");
  const loginUrl = `/api/auth/signin?host=${host}`;

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

                  {/* インスタンスのホスト名 */}
                  <input
                    value={host}
                    onChange={(e) => setHost(e.target.value)}
                  />

                  {/* ログイン */}
                  <a href={loginUrl}>Login</a>
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
