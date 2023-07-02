"use client";

import { newTabState } from "@/atoms/NewTab";
import { useRecoilState } from "recoil";
import useTranslation from "next-translate/useTranslation";

/**
 * 別タブ表示設定
 * @returns
 */
export default function OpenInNewTab() {
  const { t } = useTranslation();

  // 別タブ遷移設定を取得
  const [newTab, setNewTab] = useRecoilState(newTabState);

  return (
    <div className="mb-4 flex items-center">
      <input
        id="default-checkbox"
        type="checkbox"
        value=""
        checked={newTab}
        onChange={(e) => setNewTab(e.target.checked)}
        className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
      />
      <label
        htmlFor="default-checkbox"
        className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
      >
        {t("別タブで開く")}
      </label>
    </div>
  );
}
