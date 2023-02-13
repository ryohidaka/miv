import { useRecoilState } from "recoil";
import { viewModeState } from "@/atoms/ViewMode";
import { capitalize } from "@/modules/client";
import { ViewMode } from "@/modules/const";

/**
 * 表示設定
 * @returns
 */
export default function View() {
  // 表示モードを取得
  const [currentMode, setMode] = useRecoilState(viewModeState);

  const viewModes = Object.values(ViewMode);

  return (
    <fieldset className="grid grid-cols-1 items-start justify-center gap-1">
      <legend className="font-semibold text-gray-900 dark:text-white">
        ViewMode
      </legend>

      <>
        {viewModes.map((mode) => (
          <div key={mode} className="mb-4 flex items-center">
            <input
              id={mode}
              type="radio"
              value={mode}
              name="mode"
              className="h-4 w-4 border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
              onChange={() => setMode(mode)}
              checked={currentMode === mode}
            />
            <label
              htmlFor={mode}
              className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              {capitalize(mode)}
            </label>
          </div>
        ))}
      </>
    </fieldset>
  );
}
