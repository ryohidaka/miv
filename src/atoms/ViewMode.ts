import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";
import { ViewMode } from "@/modules/const";
import { ViewMode as ViewModeType } from "@/types/config";

const key = "mode";

const { persistAtom } = recoilPersist({
  key: key,
});

export const viewModeState = atom<ViewModeType>({
  key: key,
  default: ViewMode.TILE,
  effects_UNSTABLE: [persistAtom],
});
