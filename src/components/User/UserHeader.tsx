import { CommonImage } from "../Common/Image";
import { User } from "@/types/user";
import { Image } from "@/types/image";
import SkeltonImage from "../Common/Image/Skelton";
import { Avatar } from "../Common/Avatar";

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
        <div className="absolute -bottom-16 left-40 mx-auto md:mx-0">
          <Avatar user={user} className="!h-24 !w-24" />
        </div>
      </div>

      <div className="py-6 pl-56">
        <h1 className="px-3 text-2xl font-bold leading-none tracking-tight text-gray-900 dark:text-white ">
          {user?.name}
        </h1>
      </div>
    </header>
  );
}
