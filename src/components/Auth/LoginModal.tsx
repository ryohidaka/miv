"use client";

import { useShowLoginModal } from "@/hooks/auth";
import { APP_NAME, DESCRIPTION } from "@/modules/const";
import Link from "next/link";
import { useState } from "react";

/**
 * ログインモーダル
 * @returns
 */
export const LoginModal = () => {
  const { showLoginModal } = useShowLoginModal();

  const [host, setHost] = useState<string>("misskey.io");
  const loginUrl = `/api/auth/signin?host=${host}`;

  const handleChange = (value: string) => {
    const host = value.replace(/http|https/g, "");
    setHost(host);
  };

  return (
    <>
      {showLoginModal && (
        <div className="fixed top-0 left-0 z-50 grid h-full w-full place-content-center">
          <div className="relative z-50 h-full w-full max-w-2xl md:h-auto">
            <div className="relative rounded-lg bg-white text-black shadow dark:bg-gray-800 dark:text-white">
              <div className="space-y-6 p-6">
                <div className="grid grid-cols-1 items-center gap-10">
                  {/* タイトル */}
                  <h1 className="text-2xl tracking-tighter">{APP_NAME}</h1>

                  {/* 説明文 */}
                  <p className="text-xl">{DESCRIPTION}</p>

                  <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
                    <div className="grid grid-cols-1 gap-3">
                      <h2 className="text-center text-xl">新規登録</h2>
                      <p className="text-sm">
                        インスタンスのリストから、お好きなインスタンスを選んでください。
                      </p>
                      <Link
                        href="https://misskey-hub.net/instances.html"
                        className="light-btn text-center"
                      >
                        インスタンスのリスト
                      </Link>
                    </div>

                    <div className="grid grid-cols-1 gap-3">
                      <h2 className="text-center text-xl">ログイン</h2>

                      <form className="grid grid-cols-1 gap-3">
                        <div>
                          <label
                            htmlFor="host"
                            className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                          >
                            インスタンスのURL
                          </label>
                          <div className="flex">
                            <span className="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-200 px-3 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-600 dark:text-gray-400">
                              https://
                            </span>
                            <input
                              type="url"
                              id="host"
                              className="block w-full min-w-0 flex-1 rounded-none rounded-r-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500  dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                              placeholder="misskey.io"
                              value={host}
                              onChange={(e) => handleChange(e.target.value)}
                              required
                            />
                          </div>
                        </div>

                        <a href={loginUrl} className="light-btn text-center">
                          ログインページへ
                        </a>
                      </form>
                    </div>
                  </div>
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
