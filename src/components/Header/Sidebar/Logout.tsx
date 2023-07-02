"use client";

import { deleteCookie } from "cookies-next";

/**
 * ログアウトボタン
 * @returns
 */
export default function Logout() {
  // ログアウト
  const logout = () => {
    deleteCookie("host");
    deleteCookie("token");
    location.reload();
  };

  return (
    <button className="btn-outline w-full" onClick={logout}>
      Logout
    </button>
  );
}
