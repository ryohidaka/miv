import Image from "next/image";
import useTranslation from "next-translate/useTranslation";

/**
 * LPの機能説明
 * @returns
 */
export const LPFeatures = () => {
  const { t } = useTranslation();

  const lists = [
    {
      title: t("リスト表示"),
      image: "notes_full.png",
    },
    {
      title: t("ユーザ表示"),
      image: "users.png",
    },
    {
      title: t("画像表示"),
      image: "post.png",
    },
  ];

  return (
    <section id="features" className="py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div className="my-10 md:my-16">
          <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 dark:text-white md:mb-6 lg:text-3xl">
            {t("機能")}
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
          {lists.map((list) => (
            <div key={list.title}>
              <h3 className="mb-4 text-center text-xl font-bold text-gray-800 dark:text-white md:mb-6 lg:text-2xl">
                {list.title}
              </h3>
              <Image
                src={`/images/${list.image}`}
                alt={list.title}
                className="!relative block h-full w-full object-contain object-top"
                fill
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
