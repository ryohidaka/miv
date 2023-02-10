import { Post } from "@/types/post";
import { useDisclosure } from "@chakra-ui/react";
import { useCallback } from "react";
import { useLongPress } from "use-long-press";
import { DetailModal } from "./Modal";
import { ImageSlider } from "./Slider";

type Props = {
  post: Post;
};

/**
 * 投稿画像表示
 * @returns
 */
export const PostImages = ({ post }: Props) => {
  // 詳細表示
  const { isOpen, onOpen, onClose } = useDisclosure();

  // 長押し時にモーダルを表示する
  const callback = useCallback(() => {
    onOpen();
  }, [onOpen]);

  // 長押し設定
  const bind = useLongPress(callback, {
    // 一秒長押しで発火
    threshold: 1000,
    // カーソルが移動したらキャンセル
    cancelOnMovement: true,
  });

  return (
    <>
      {/* 詳細表示モーダル */}
      <DetailModal post={post} isOpen={isOpen} onClose={onClose} />

      {/* 画像表示 */}
      <div {...bind()}>
        <ImageSlider images={post.images} />
      </div>
    </>
  );
};
