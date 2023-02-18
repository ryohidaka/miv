import Og from "@/components/Og";

/**
 * OG画像確認用
 * @returns
 */
export default function OgPreview() {
  return (
    <div className="h-screen w-screen bg-white">
      <div style={{ width: 1200, height: 627 }}>
        <Og />
      </div>
    </div>
  );
}
