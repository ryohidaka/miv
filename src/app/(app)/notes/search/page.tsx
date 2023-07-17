import { SearchTimeline } from "@/components/Timeline/SearchTimeline";

export const metadata = {
  title: "検索",
};

/**
 * ノート検索画面
 * @returns
 */
export default function SearchNotes() {
  return <SearchTimeline />;
}
