import { PostLayout } from "@/components/Layout/PostLayout";
import { POST } from "@/modules/dummy/post";

/**
 * ノート画面(サンプル)
 * @returns
 */
export default function SampleNote() {
  return <PostLayout post={POST} />;
}
