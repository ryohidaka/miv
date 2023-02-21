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
      <div className="max-h-96">
        <CommonImage
          image={bannerImage}
          className="aspect-video max-h-96 object-cover"
        />
      </div>

      <div className="relative -top-12 -mb-12 grid grid-cols-1 gap-8 p-3 pt-0">
        <Avatar
          user={user}
          className="relative mx-auto !h-24 !w-24 object-cover md:mx-0"
        />
        <h1 className="flex items-center text-center text-2xl font-bold leading-none tracking-tight text-gray-900 dark:text-white md:text-left">
          <Mfm text={user?.name} />
        </h1>
        <p className="flex flex-wrap items-center">
          <Mfm text={user?.description as string} />
        </p>
        <FollowButton userId={user.id} />
      </div>
    </header>
  );
}
