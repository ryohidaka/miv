import { Heading } from "@/components/Common/Heading";
import { GlobalTimeline } from "@/components/Timeline/GlobalTimeline";

const title = "グローバルタイムライン";

export const metadata = {
  title,
};

/**
 * グローバルタイムライン画面
 * @returns
 */
export default function GlobalTimelinePage() {
  return (
    <>
      <Heading text={title} />
      <GlobalTimeline />
    </>
  );
}
