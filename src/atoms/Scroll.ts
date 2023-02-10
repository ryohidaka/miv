import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const key = "previous-scroll-position";

const { persistAtom } = recoilPersist({
  key: key,
  storage: typeof window === "undefined" ? undefined : window.sessionStorage,
});

export const scrollState = atom<number>({
  key: key,
  default: 0,
  effects_UNSTABLE: [persistAtom],
});
