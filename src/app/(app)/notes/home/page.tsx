import { Heading } from "@/components/Common/Heading";
import { HomeTimeline } from "@/components/Timeline/HomeTimeline";

/**
 * ホームタイムライン画面
 * @returns
 */
export default function HomeTimelinePage() {
  return (
    <>
      <Heading text="ホームタイムライン" />
      <HomeTimeline />
    </>
  );
}
