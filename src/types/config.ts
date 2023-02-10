import { ViewMode } from "@/modules/const";

export type ViewModeType = (typeof ViewMode)[keyof typeof ViewMode];
