import { useRouter } from "next/navigation";
import { useUserSearchHistory } from "@/hooks/history";
import { HistoryWrapper } from "../Common/HistoryWrapper";

/**
 * ユーザ検索履歴
 * @returns
 */
export const UserSearchHistory = () => {
  const { history } = useUserSearchHistory();

  const router = useRouter();

  // 検索
  const search = (userName: string) => {
    router.push(`/user?name=${userName}`);
  };

  return <HistoryWrapper histories={history} search={search} />;
};
