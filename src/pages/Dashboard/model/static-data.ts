import { ProgressDataI } from "./types.ts";

import { 
  iconProjectsPurple,
  iconTasksPurple,
  iconStar
} 
 from "@/shared/assets/icons/index.ts";


export const PROGRESS_DATA: ProgressDataI[] = [
  {
    icon: iconStar,
    header: 'Выполненные задачи',
    amount: 8963
  },
  {
    icon: iconProjectsPurple,
    header: 'Проектов сдано',
    amount: 256
  },
  {
    icon: iconTasksPurple,
    header: 'Новые задачи',
    amount: 46
  }
];