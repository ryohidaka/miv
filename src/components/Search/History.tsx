import { useSearchHistory } from "@/hooks/history";
import { useRouter } from "next/navigation";
import { HistoryWrapper } from "../Common/HistoryWrapper";

/**
 * 検索履歴
 * @returns
 */
export const SearchHistory = () => {
  const { history } = useSearchHistory();

  const router = useRouter();

  // 検索
  const search = (keyword: string) => {
    router.push(`/search?keyword=${keyword}`);
  };

  return <HistoryWrapper histories={history} search={search} />;
};
