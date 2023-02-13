import { atom } from "recoil";

export const showLoginModalState = atom<boolean>({
  key: "show-login-modal",
  default: false,
});
