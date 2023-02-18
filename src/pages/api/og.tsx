import { APP_NAME, DESCRIPTION, APP_URL } from "@/modules/const";
import { ImageResponse } from "@vercel/og";
import React from "react";

export const config = {
  runtime: "edge",
};

/**
 * OG画像
 *
 * @see https://fullstackheroes.com/resources/vercel-og-templates/branded-logo/
 * @param req
 * @returns
 */
export default function handler() {
  const option = {
    width: 1200,
    height: 627,
  };

  try {
    return new ImageResponse(
      (
        <div
          tw="flex w-full h-full p-10"
          style={{
            backgroundColor: "#121212",
          }}
        >
          <div tw="flex items-start justify-start w-full h-full">
            <div tw="flex flex-col w-1/2 h-full justify-center relative text-white">
              <header tw="absolute top-0">
                {/* アプリ名 */}
                <h1 tw="text-[40px] font-bold text-left">{APP_NAME}</h1>
              </header>

              {/* 説明文 */}
              <p tw="text-[60px] font-bold">{DESCRIPTION}</p>
            </div>
            <div tw="flex flex-col w-1/2 h-full">
              {/* <img
                src={`${APP_URL}/images/notes_full.png`}
                tw="w-full h-full"
                width="600"
                height="600"
                style={{
                  objectFit: "cover",
                }}
              /> */}
            </div>
          </div>
        </div>
      ),
      option
    );
  } catch (e: any) {
    console.log(`${e.message}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}
