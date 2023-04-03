import { ExternalLink } from "@/components/Common/ExternalLink";
import classNames from "classnames";

/**
 * 新規ユーザ用案内
 * @returns
 */
export const Tour = () => {
  const overlayBg =
    "bg-gradient-to-r from-blue-800 via-purple-800 to-indigo-800";

  return (
    <div
      id="overlay-right"
      className={classNames(
        "flex h-full w-full items-center justify-center",
        overlayBg
      )}
    >
      <div className="p-8 text-center">
        <h1 className="mb-4 text-4xl font-bold text-white md:text-6xl">
          Don&apos;t have an account ?
        </h1>

        <h5 className="text-xl text-white">Start your journey in one click</h5>
        <div className="mt-16">
          <ExternalLink
            href="https://misskey-hub.net/instances.html"
            className="rounded-full bg-transparent py-3 px-6 text-center font-bold uppercase text-white hover:underline"
            showIcon
          >
            List of instances
          </ExternalLink>
        </div>
      </div>
    </div>
  );
};