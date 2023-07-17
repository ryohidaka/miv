import { Heading } from "@/components/Common/Heading";
import { LocalTimeline } from "@/components/Timeline/LocalTimeline";

const title = "ローカルタイムライン";

export const metadata = {
  title,
};

/**
 * ローカルタイムライン画面
 * @returns
 */
export default function LocalTimelinePage() {
  return (
    <>
      <Heading text={title} />
      <LocalTimeline />
    </>
  );
}
