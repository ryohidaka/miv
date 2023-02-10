import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const key = "user-search-history";

const { persistAtom } = recoilPersist({
  key: key,
});

export const userSearchHistoryState = atom<string[]>({
  key: key,
  default: [],
  effects_UNSTABLE: [persistAtom],
});
