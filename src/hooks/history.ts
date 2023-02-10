import { useRecoilState } from "recoil";
import { userSearchHistoryState } from "@/atoms/UserSearchHistory";
import { searchHistoryState } from "@/atoms/SearchHistory";

/**
 * ユーザ検索の履歴
 * @returns
 */
export const useUserSearchHistory = () => {
  const [history, setHistory] = useRecoilState(userSearchHistoryState);

  const updateHistory = (text: string) => {
    const histories = [...[text], ...history];
    const uniqueHistories = [...new Set(histories)];

    setHistory(uniqueHistories);
  };

  return { history, updateHistory };
};

/**
 * 検索の履歴
 * @returns
 */
export const useSearchHistory = () => {
  const [history, setHistory] = useRecoilState(searchHistoryState);

  const hasHistory = history.length > 0;

  const updateHistory = (text: string) => {
    const histories = [...[text], ...history];
    const uniqueHistories = [...new Set(histories)];

    setHistory(uniqueHistories);
  };

  return { history, hasHistory, updateHistory };
};
