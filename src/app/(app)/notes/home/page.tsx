import { Heading } from "@/components/Common/Heading";
import { HomeTimeline } from "@/components/Timeline/HomeTimeline";

const title = "ホームタイムライン";

export const metadata = {
  title,
};

/**
 * ホームタイムライン画面
 * @returns
 */
export default function HomeTimelinePage() {
  return (
    <>
      <Heading text={title} />
      <HomeTimeline />
    </>
  );
}
