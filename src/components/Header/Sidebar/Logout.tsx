"use client";

import { deleteCookie } from "cookies-next";
import useTranslation from "next-translate/useTranslation";

/**
 * ログアウトボタン
 * @returns
 */
export default function Logout() {
  const { t } = useTranslation();

  // ログアウト
  const logout = () => {
    deleteCookie("host");
    deleteCookie("token");
    location.reload();
  };

  return (
    <button className="btn-outline w-full" onClick={logout}>
      {t("ログアウト")}
    </button>
  );
}
