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
          style={{
            display: "flex",
            backgroundColor: "#121212",
            width: "100%",
            height: "100%",
            padding: 40,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              width: "100%",
              height: "100%",
              padding: "40px",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: "50%",
                height: "100%",
                justifyContent: "center",
                position: "relative",
                color: "white",
              }}
            >
              <header style={{ position: "absolute", top: 0 }}>
                {/* アプリ名 */}
                <h1
                  style={{
                    fontSize: 40,
                    fontWeight: "bold",
                    textAlign: "left",
                  }}
                >
                  {APP_NAME}
                </h1>
              </header>

              {/* 説明文 */}
              <p style={{ fontSize: 60, fontWeight: "bold" }}>{DESCRIPTION}</p>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: "50%",
                height: "100%",
              }}
            >
              <img
                src={`${APP_URL}/images/notes_full.png`}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
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
