import { Heading } from "@/components/Common/Heading";
import { LocalTimeline } from "@/components/Timeline/LocalTimeline";

/**
 * ローカルタイムライン画面
 * @returns
 */
export default function LocalTimelinePage() {
  return (
    <>
      <Heading text="ローカルタイムライン" />
      <LocalTimeline />
    </>
  );
}
