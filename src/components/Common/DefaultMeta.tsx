import { APP_URL, DESCRIPTION, LOGO } from "@/modules/const";

/**
 * 共通metaタグ
 * @returns
 */
export const DefaultMeta = () => {
  const ogUrl = `${APP_URL}/api/og`;
  return (
    <>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta name="description" content={DESCRIPTION} />
      <link rel="icon" href={LOGO} />
      <meta
        name="google-site-verification"
        content="ATEFILtNKSZV2E7hTujMC2rTNFyQpLKhJ0_PeBvjU-Q"
      />
      <meta property="og:image" content={ogUrl} />
    </>
  );
};
