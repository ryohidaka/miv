import { Heading } from "@/components/Common/Heading";
import { TagTimeline } from "@/components/Timeline/TagTimeline";
import { TagParams } from "@/types/tag";

type Props = {
  params: TagParams;
};

/**
 * タグ画面
 * @returns
 */
export default function Tag({ params }: Props) {
  // タグを取得
  const tag = decodeURI(params.tag);

  return (
    <>
      <Heading text={`# ${tag}`} />
      <TagTimeline tag={tag} />
    </>
  );
}
