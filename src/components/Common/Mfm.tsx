"use client";

import { emojisState } from "@/atoms/Emojis";
import { Emoji } from "@/types/emoji";
import * as mfm from "mfm-js";
import Link from "next/link";
import { Suspense } from "react";
import { useRecoilState } from "recoil";

type Props = {
  text: string;
};

/**
 * MfMラッパー
 * @returns
 */
export const Mfm = ({ text }: Props) => {
  const mfmTree = mfm.parse(text);
  const [emojis] = useRecoilState(emojisState);

  return (
    <Suspense fallback={<></>}>
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
            const name = node.props.name;
            const emoji = emojis?.find((emoji: Emoji) => emoji.name === name);
            return (
              <span key={index}>
                <img src={emoji?.url} alt={emoji?.name} className="h-4 w-4" />
              </span>
            );
          default:
            return <span key={index}></span>;
        }
      })}
    </Suspense>
  );
};
