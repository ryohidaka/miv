import { Heading } from "@/components/Common/Heading";
import { GlobalTimeline } from "@/components/Timeline/GlobalTimeline";

/**
 * グローバルタイムライン画面
 * @returns
 */
export default function GlobalTimelinePage() {
  return (
    <>
      <Heading text="グローバルタイムライン" />
      <GlobalTimeline />
    </>
  );
}
