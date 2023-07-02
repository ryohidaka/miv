"use client";

import { useState } from "react";
import { InstanceForm } from "./InstanceForm";
import { InstanceSelector } from "./InstanceSelector";
import useTranslation from "next-translate/useTranslation";

/**
 * ログインフォーム
 * @returns
 */
export const LoginForm = () => {
  const [host, setHost] = useState<string>("misskey.io");
  const loginUrl = `/api/auth/signin?host=${host}`;
  const handleChange = (host: string) => {
    setHost(host);
  };

  const { t } = useTranslation();

  return (
    <div id="signin" className="flex h-full w-full items-center justify-center">
      <div className="selection:bg-indigo-500 selection:text-white">
        <div className="flex items-center justify-center">
          <div className="flex-1 p-8">
            <div className="mx-auto overflow-hidden">
              <div className="grid grid-cols-1 gap-10">
                <h1 className="text-3xl font-bold text-indigo-600 md:text-5xl">
                  {t("ようこそ")}
                </h1>

                {/* インスタンス一覧 */}
                <InstanceSelector onChange={handleChange} />

                {/* インスタンスURL入力欄 */}
                <InstanceForm host={host} onChange={handleChange} />

                {/* ログインボタン */}
                <a href={loginUrl} className="light-btn text-center">
                  {t("ログイン")}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
