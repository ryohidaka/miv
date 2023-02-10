import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const key = "search-history";

const { persistAtom } = recoilPersist({
  key: key,
});

export const searchHistoryState = atom<string[]>({
  key: key,
  default: [],
  effects_UNSTABLE: [persistAtom],
});
