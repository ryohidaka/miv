import { userFetcher } from "@/modules/swr";
import { User } from "@/types/user";
import useSWR from "swr";

/**
 * ユーザ情報を取得
 * @returns
 */
export const useUser = (userId: string) => {
  const url = `/api/users/${userId}/show`;

  const { data, error, isLoading } = useSWR<User, Error>(url, userFetcher);

  return { data, error, isLoading };
};
