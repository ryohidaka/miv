import { Heading } from "@/components/Common/Heading";
import { SearchTimeline } from "@/components/Timeline/SearchTimeline";

type Props = {
  searchParams: {
    q: string;
  };
};

export async function generateMetadata({ searchParams }: Props) {
  return { title: `検索: ${searchParams.q}` };
}

/**
 * ノート検索画面
 * @returns
 */
export default function SearchNotes({ searchParams }: Props) {
  // 検索キーワードを取得
  const query = searchParams.q;

  const title = `検索: ${query}`;

  return (
    <>
      <Heading text={title} />
      <SearchTimeline query={query} />
    </>
  );
}
