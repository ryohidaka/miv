import * as mfm from "mfm-js";
import Link from "next/link";

type Props = {
  text: string;
};

/**
 * MfMラッパー
 * @returns
 */
export const Mfm = ({ text }: Props) => {
  const mfmTree = mfm.parse(text);

  return (
    <>
      {mfmTree.map((node, index) => {
        switch (node.type) {
          case "text":
            return <span key={index}>{node.props.text}</span>;
          case "hashtag":
            const tag = node.props.hashtag;
            const tagUrl = `/tags/${tag}`;
            return (
              <Link key={index} href={tagUrl} className="hyperlink">
                #{tag}
              </Link>
            );
          case "url":
            const url = node.props.url;
            return (
              <Link key={index} href={url} className="hyperlink">
                {url}
              </Link>
            );
          case "unicodeEmoji":
            return <span key={index}>{node.props.emoji}</span>;
          case "emojiCode":
            return <strong key={index}>{node.props.name}</strong>;
          default:
            return <span key={index}></span>;
        }
      })}
    </>
  );
};
