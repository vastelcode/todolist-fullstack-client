import { Task } from "@/shared/types/task/index.ts";

import { LIST_TASK } from "@/shared/config/static-data.ts";

export const getTask = (id: string) : Task => {
  return LIST_TASK.find(task => task.id === id)!;
}