import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const key = "new-tab";

const { persistAtom } = recoilPersist({
  key: key,
});

export const newTabState = atom<boolean>({
  key: key,
  default: true,
  effects_UNSTABLE: [persistAtom],
});
