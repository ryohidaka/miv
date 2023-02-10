"use client";

import { SimpleGrid, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";

import { useSearchParams } from "next/navigation";
import { CommonImage } from "@/components/Common/Image";
import { ViewerLayout } from "@/components/Viewer/Layout";
import { usePost } from "@/hooks/post";
import { Image } from "@/types/image";

/**
 * ツイート画像表示画面
 * @returns
 */
export default function ShowPostImages() {
  const params = useSearchParams();

  const [postId, setPostId] = useState<string>("");

  useEffect(() => {
    const postId = params.get("ids") as string;
    setPostId(postId);
  }, [params]);

  // ツイートを取得
  const { data, error, isLoading } = usePost(postId);

  const images: Image[] = data ? data.images : [];

  return (
    <ViewerLayout isLoading={isLoading} error={error}>
      <SimpleGrid columns={[1, 1, 1, 2]}>
        <VStack>
          {images &&
            images.map((image) => {
              return <CommonImage key={image.id} image={image} />;
            })}
        </VStack>
        <VStack alignItems="stretch" p={2}></VStack>
      </SimpleGrid>
    </ViewerLayout>
  );
}
