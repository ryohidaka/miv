"use client";

import { showSensitiveState } from "@/atoms/ShowSensitive";
import { useRecoilState } from "recoil";

/**
 * 画像非表示設定
 * @returns
 */
export default function ShowSensitive() {
  // 別タブ遷移設定を取得
  const [visible, setVisible] = useRecoilState(showSensitiveState);

  return (
    <div className="mb-4 flex items-center">
      <input
        id="default-checkbox"
        type="checkbox"
        value=""
        checked={visible}
        onChange={(e) => setVisible(e.target.checked)}
        className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
      />
      <label
        htmlFor="default-checkbox"
        className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
      >
        Show sensitive images
      </label>
    </div>
  );
}
