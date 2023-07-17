import { ExternalLink } from "@/components/Common/ExternalLink";

type Props = {
  url: string;
};

/**
 * インスタンスで開くボタン
 * @returns
 */
export const OpenInInstances = async ({ url }: Props) => {
  return (
    <ExternalLink href={url} showIcon className="justify-center py-3 text-sm">
      インスタンスで開く
    </ExternalLink>
  );
};
