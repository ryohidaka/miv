import { DESCRIPTION } from "@/modules/const";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "../Common/ExternalLink";

/**
 * LPのコンテンツ
 * @returns
 */
export const LPContent = () => {
  return (
    <section className="flex flex-col justify-between gap-6 sm:gap-10 md:gap-16 lg:flex-row">
      <div className="flex flex-col justify-center sm:text-center lg:py-12 lg:text-left xl:w-5/12 xl:py-24">
        <p className="mb-4 font-semibold text-indigo-500 md:mb-6 md:text-lg xl:text-xl">
          イラスト閲覧に特化
        </p>

        <h2 className="text-black-800 mb-8 text-4xl font-bold sm:text-5xl md:mb-12 md:text-6xl">
          {DESCRIPTION}
        </h2>

        <p className="mb-8 leading-relaxed text-gray-500 md:mb-12 lg:w-4/5 xl:text-lg"></p>

        <div className="flex flex-col gap-2.5 sm:flex-row sm:justify-center lg:justify-start">
          <Link
            href="/login"
            className="inline-block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base"
          >
            今すぐ始めましょう
          </Link>

          <ExternalLink
            href="https://misskey-hub.net/"
            className="justify-center rounded-lg bg-gray-200 px-8 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base"
            showIcon
          >
            Misskey とは
          </ExternalLink>
        </div>
      </div>

      <div className="overflow-hidden rounded-lg shadow-lg lg:h-auto xl:w-5/12">
        <Image
          src="/images/notes.png"
          alt="notes"
          fill
          className="!relative block h-full w-full object-contain object-center"
        />
      </div>
    </section>
  );
};
