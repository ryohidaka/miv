import { Heading } from "@/components/Common/Heading";
import { GalleryTimeline } from "@/components/Timeline/GalleryTimeline";

/**
 * ギャラリー画面
 * @returns
 */
export default function GalleryPosts() {
  return (
    <>
      <Heading text="最近の投稿" />
      <GalleryTimeline />
    </>
  );
}
