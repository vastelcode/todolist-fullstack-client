import { PRIORITY_COLORS, PRIORITY_TITLES } from "@/shared/constants/constants.ts";
import { PriorityT } from "@/shared/types/types.ts";

export const getPriorityConfig = (priority: PriorityT) => {
  return {
    color: PRIORITY_COLORS[priority],
    title: PRIORITY_TITLES[priority]
  }
}