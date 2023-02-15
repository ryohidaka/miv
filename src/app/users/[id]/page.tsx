"use client";

import { StickyTop } from "@/components/Common/StickyTop";
import { TopPosts } from "@/components/Top/TopPosts";
import { ViewerLayout } from "@/components/Viewer/Layout";
import { usePostId } from "@/hooks/post";
import { useUser } from "@/hooks/user";
import { PostParams } from "@/types/post";

type Props = {
  params: PostParams;
};

/**
 * ユーザ情報表示
 * @returns
 */
export default function User({ params }: Props) {
  // ユーザIDを取得
  const userId = usePostId(params);

  const { data } = useUser(userId);

  // ユーザ名を取得
  const userName = data?.name;

  const userItems = [
    {
      id: "user-notes",
      section: "Notes",
      url: `/api/users/${userId}/notes?limit=12`,
      isGallery: false,
    },
    {
      id: "user-gallery",
      section: "Gallery",
      url: `/api/users/${userId}/gallery?limit=12`,
      isGallery: true,
    },
  ];

  return (
    <ViewerLayout>
      <>
        <StickyTop>
          <h1 className="mb-4 px-3 text-3xl font-bold leading-none tracking-tight text-gray-900 dark:text-white ">
            {userName}
          </h1>
        </StickyTop>

        {userItems.map((item) => (
          <section
            key={item.id}
            id={item.id}
            className="grid grid-cols-1 gap-6"
          >
            <h2 className="px-3 text-3xl tracking-tighter md:p-0">
              {item.section}
            </h2>
            <TopPosts url={item.url} isGallery={item.isGallery} hideUser />
          </section>
        ))}
      </>
    </ViewerLayout>
  );
}
