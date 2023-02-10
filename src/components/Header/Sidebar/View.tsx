import { useRecoilState } from "recoil";
import { viewModeState } from "@/atoms/ViewMode";
import { capitalize } from "@/modules/client";
import { ViewMode } from "@/modules/const";
import { RadioGroup, Radio } from "@chakra-ui/react";
import { ViewModeType } from "@/types/config";

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

      <RadioGroup
        onChange={(nextValue: ViewModeType) => setMode(nextValue)}
        value={currentMode}
        className="grid grid-cols-1"
      >
        {viewModes.map((mode) => (
          <Radio key={mode} value={mode}>
            {capitalize(mode)}
          </Radio>
        ))}
      </RadioGroup>
    </fieldset>
  );
}
