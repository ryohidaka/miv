import { Heading, Radio, RadioGroup, Stack, VStack } from "@chakra-ui/react";
import { useRecoilState } from "recoil";
import { viewModeState } from "@/atoms/ViewMode";
import { capitalize } from "@/modules/client";
import { ViewMode } from "@/modules/const";
import { ViewMode as ViewModeType } from "@/types/config";

/**
 * 表示設定
 * @returns
 */
export default function View() {
  // 表示モードを取得
  const [currentMode, setMode] = useRecoilState(viewModeState);

  const viewModes = Object.values(ViewMode);

  return (
    <VStack spacing={3} justify="center" alignItems="start" mb={5}>
      <Heading size="md">ViewMode</Heading>

      <RadioGroup
        onChange={(nextValue: ViewModeType) => setMode(nextValue)}
        value={currentMode}
      >
        <Stack>
          {viewModes.map((mode) => (
            <Radio key={mode} value={mode}>
              {capitalize(mode)}
            </Radio>
          ))}
        </Stack>
      </RadioGroup>
    </VStack>
  );
}
