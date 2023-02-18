import type { NextSeoProps } from "next-seo";
import { NextSeo } from "next-seo";
import type { FC } from "react";
import { NEXT_SEO_DEFAULT } from "@/lib/next-seo.config";

interface DefaultTagsProps {
  updateMeta?: NextSeoProps;
}

const DefaultTags: FC<DefaultTagsProps> = ({ updateMeta }) => {
  return (
    <>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta
        name="google-site-verification"
        content="ATEFILtNKSZV2E7hTujMC2rTNFyQpLKhJ0_PeBvjU-Q"
      />
      <NextSeo useAppDir={true} {...NEXT_SEO_DEFAULT} {...updateMeta} />
    </>
  );
};

export default DefaultTags;
