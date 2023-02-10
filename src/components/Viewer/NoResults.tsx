import { DefaultAlert } from "../Common/DefaultAlert";

type Props = {
  keyword?: string;
};

/**
 * 検索結果なし表示
 * @returns
 */
export const NoResults = ({ keyword }: Props) => {
  const title = `No results for "${keyword}"`;
  return (
    <DefaultAlert status="warning" title={title}>
      Try searching for something else.
    </DefaultAlert>
  );
};
