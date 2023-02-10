import { ViewMode } from "@/modules/const";

export type ViewMode = typeof ViewMode[keyof typeof ViewMode];
