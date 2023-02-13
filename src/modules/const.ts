// アプリ名
export const APP_NAME = "Pickey";

// 説明文
export const DESCRIPTION_SHORT = "Image Viewer for Misskey";
export const DESCRIPTION = "Image Viewer for Misskey";

// アプリURL
export const APP_URL = process.env.APP_URL || "http://localhost:3000";

// 表示モード
export const ViewMode = {
  TILE: "tile",
  TIMELINE: "timeline",
} as const;
