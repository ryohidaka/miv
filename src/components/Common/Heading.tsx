import { StickyTop } from "./StickyTop";

type Props = {
  text: string;
};

/**
 * ページの見出し
 * @returns
 */
export const Heading = ({ text }: Props) => (
  <StickyTop>
    <h1 className="flex h-12 items-center bg-white pl-3 text-3xl font-bold leading-none tracking-tight text-gray-900 dark:bg-neutral-900 dark:text-white md:pl-0">
      {text}
    </h1>
  </StickyTop>
);
