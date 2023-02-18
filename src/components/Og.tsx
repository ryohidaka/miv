import { APP_NAME, APP_URL, DESCRIPTION } from "@/modules/const";
import "@/app/globals.css";

/**
 * 共通フッター
 * @returns
 */
export default function Og() {
  return (
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
            <h1 style={{ fontSize: 40, fontWeight: "bold", textAlign: "left" }}>
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
  );
}
