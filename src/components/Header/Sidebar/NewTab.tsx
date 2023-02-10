import { Checkbox, VStack } from "@chakra-ui/react";
import { useRecoilState } from "recoil";
import { newTabState } from "@/atoms/NewTab";

/**
 * 別タブ遷移設定
 * @returns
 */
export default function NewTab() {
  // 別タブ遷移設定を取得
  const [newTab, setNewTab] = useRecoilState(newTabState);

  return (
    <VStack spacing={3} justify="center" alignItems="start" mb={5}>
      <Checkbox
        isChecked={newTab}
        onChange={(e) => setNewTab(e.target.checked)}
      >
        Open in new tab
      </Checkbox>
    </VStack>
  );
}
