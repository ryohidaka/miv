import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const key = "show-sensitive";

const { persistAtom } = recoilPersist({
  key: key,
});

export const showSensitiveState = atom<boolean>({
  key: key,
  default: false,
  effects_UNSTABLE: [persistAtom],
});
