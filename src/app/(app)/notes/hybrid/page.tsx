import { Heading } from "@/components/Common/Heading";
import { HybridTimeline } from "@/components/Timeline/HybridTimeline";

const title = "ソーシャルタイムライン";

export const metadata = {
  title,
};

/**
 * ソーシャルタイムライン画面
 * @returns
 */
export default function HybridTimelinePage() {
  return (
    <>
      <Heading text={title} />
      <HybridTimeline />
    </>
  );
}
