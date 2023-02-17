import { Image } from "@/types/image";
import { User } from "@/types/user";
import { Avatar } from "../Common/Avatar";
import { FollowButton } from "../Common/FollowButton";
import { CommonImage } from "../Common/Image";
import { Mfm } from "../Common/Mfm";

type Props = {
  user: User;
};

/**
 * ユーザページのヘッダー
 * @returns
 */
export default function UserHeader({ user }: Props) {
  const bannerImage: Image = {
    id: user?.id,
    url: user?.bannerUrl as string,
    blurhash: user?.blurhash,
  };

  return (
    <header>
      <div className="relative w-screen md:!-left-12">
        <CommonImage
          image={bannerImage}
          className="aspect-video object-cover"
        />
      </div>

      {/* モバイル用 */}
      <div className="relative -top-12 -mb-12 grid grid-cols-1 gap-3 p-3 pt-0 md:hidden">
        <Avatar
          user={user}
          className="relative mx-auto !h-24 !w-24 object-cover"
        />
        <h1 className="flex text-center text-2xl font-bold leading-none tracking-tight text-gray-900 dark:text-white">
          <Mfm text={user?.name} />
        </h1>
        <p>
          <Mfm text={user?.description as string} />
        </p>
        <FollowButton userId={user.id} defaultState={user.isFollowing} />
      </div>

      {/* PC用 */}
      <div className="relative -top-12 hidden p-3 md:block">
        <Avatar user={user} className="relative !h-24 !w-24 object-cover" />
        <div className="grid grid-cols-1 gap-3 pl-36">
          <h1 className="flex text-2xl font-bold leading-none tracking-tight text-gray-900 dark:text-white">
            <Mfm text={user?.name} />
          </h1>
          <p>
            <Mfm text={user?.description as string} />
          </p>
          <FollowButton userId={user.id} defaultState={user.isFollowing} />
        </div>
      </div>
    </header>
  );
}
