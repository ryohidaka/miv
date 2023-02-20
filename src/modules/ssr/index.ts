import { cookies } from "next/headers";
import { APP_URL } from "../const";

/**
 * SSR用のデータ取得処理
 * @param url
 * @returns
 */
export const fetchData = async (path: string) => {
  const url = `${APP_URL}/api/${path}`;
  const host = cookies().get("host")?.value;
  const token = cookies().get("token")?.value;

  if (!host || !token) {
    throw new Error("Failed to get credentials");
  }

  const res = await fetch(url, {
    credentials: "same-origin",
    headers: {
      Cookie: `host=${host};token=${token}`,
    },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch");
  }

  return res;
};
