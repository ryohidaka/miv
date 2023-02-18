import DefaultTags from "@/lib/defaultTags";
import { NEXT_SEO_DEFAULT } from "@/lib/next-seo.config";
import { APP_NAME, DESCRIPTION_SHORT } from "@/modules/const";
import type { NextSeoProps } from "next-seo";

export default function Head() {
  const title = `${APP_NAME}: ${DESCRIPTION_SHORT}`;

  const updateMeta: NextSeoProps = {
    ...NEXT_SEO_DEFAULT,
    title,
    titleTemplate: "%s",
  };

  return <DefaultTags updateMeta={updateMeta} />;
}
