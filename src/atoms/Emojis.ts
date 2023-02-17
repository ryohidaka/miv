import { Emoji } from "@/types/emoji";
import { atom } from "recoil";

export const emojisState = atom<Emoji[]>({
  key: "emojis",
  default: [],
});
