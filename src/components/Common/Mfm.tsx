"use client";

import { emojisState } from "@/atoms/Emojis";
import { Emoji } from "@/types/emoji";
import { Image as ImageType } from "@/types/image";
import * as mfm from "mfm-js";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import { useRecoilState } from "recoil";
import { CommonImage } from "./Image";

type Props = {
  text: string;
};

/**
 * MfMラッパー
 * @returns
 */
export const Mfm = ({ text }: Props) => {
  const [emojis] = useRecoilState(emojisState);

  if (!text) return <></>;
  const mfmTree = mfm.parse(text);

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
            if (!emoji) return <span key={index}>:{name}:</span>;
            
            const emojiImage: ImageType = {
              id: emoji?.name as string,
              url: emoji?.url as string,
            };
            return (
              <span key={index} className="relative h-4 w-4">
                <CommonImage image={emojiImage} />
              </span>
            );
          default:
            return <span key={index}></span>;
        }
      })}
    </Suspense>
  );
};
