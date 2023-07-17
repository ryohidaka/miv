import { Heading } from "@/components/Common/Heading";
import { GalleryTimeline } from "@/components/Timeline/GalleryTimeline";

const title = "最近の投稿";

export const metadata = {
  title,
};

/**
 * ギャラリー画面
 * @returns
 */
export default function GalleryPosts() {
  return (
    <>
      <Heading text={title} />
      <GalleryTimeline />
    </>
  );
}
