import { atom } from "recoil";

export const searchDrawerState = atom<boolean>({
  key: "search-drawer",
  default: false,
});
