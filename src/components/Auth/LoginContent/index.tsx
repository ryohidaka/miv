"use client";

import { ExternalLink } from "@/components/Common/ExternalLink";
import classNames from "classnames";
import { useState } from "react";
import { InstanceForm } from "./InstanceForm";
import { InstanceSelector } from "./InstanceSelector";

/**
 * ログイン
 * @returns
 */
export const LoginContent = () => {
  const overlayBg =
    "bg-gradient-to-r from-blue-800 via-purple-800 to-indigo-800";

  const [host, setHost] = useState<string>("misskey.io");
  const loginUrl = `/api/auth/signin?host=${host}`;
  const handleChange = (host: string) => {
    setHost(host);
  };

  return (
    <div className="grid h-screen w-screen grid-cols-1 text-black shadow dark:text-white md:grid-cols-2">
      {/* ログインフォーム */}
      <div
        id="signin"
        className="flex h-full w-full items-center justify-center"
      >
        <div className="selection:bg-indigo-500 selection:text-white">
          <div className="flex items-center justify-center">
            <div className="flex-1 p-8">
              <div className="mx-auto overflow-hidden">
                <div className="grid grid-cols-1 gap-10">
                  <h1 className="text-3xl font-bold text-indigo-600 md:text-5xl">
                    Welcome back!
                  </h1>

                  {/* インスタンス一覧 */}
                  <InstanceSelector onChange={handleChange} />

                  {/* インスタンスURL入力欄 */}
                  <InstanceForm host={host} onChange={handleChange} />

                  {/* ログインボタン */}
                  <a href={loginUrl} className="light-btn text-center">
                    Login
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        id="overlay-right"
        className={classNames(
          " flex h-full w-full items-center justify-center",
          overlayBg
        )}
      >
        <div className="p-8 text-center">
          <h1 className="mb-4 text-4xl font-bold text-white md:text-6xl">
            Don&apos;t have an account ?
          </h1>

          <h5 className="text-xl text-white">
            Start your journey in one click
          </h5>
          <div className="mt-16">
            <ExternalLink
              href="https://misskey-hub.net/instances.html"
              className="rounded-full bg-transparent py-3 px-6 text-center font-bold uppercase text-white hover:underline"
              showIcon
            >
              List of instances
            </ExternalLink>
          </div>
        </div>
      </div>
    </div>
  );
};
