"use client";

import { Viewer } from "@/components/Viewer";
import { POSTS } from "@/modules/dummy/post";

/**
 * タイムライン画面(サンプル)
 * @returns
 */
export default function LocalTimeline() {
  const next = () => {
    console.log("sample");
  };
  return <Viewer posts={POSTS} hasMore={true} next={next} />;
}
