import Og from "@/components/Og";
import { ImageResponse } from "@vercel/og";
import React from "react";

export const config = {
  runtime: "experimental-edge",
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
    return new ImageResponse(<Og />, option);
  } catch (e: any) {
    console.log(`${e.message}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}
