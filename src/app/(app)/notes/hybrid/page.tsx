import { Heading } from "@/components/Common/Heading";
import { HybridTimeline } from "@/components/Timeline/HybridTimeline";

/**
 * ソーシャルタイムライン画面
 * @returns
 */
export default function HybridTimelinePage() {
  return (
    <>
      <Heading text="ソーシャルタイムライン" />
      <HybridTimeline />
    </>
  );
}
