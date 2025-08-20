
import { Task, FilterTaskI } from "@/shared/types/types.ts";



export const filterTasks = (filter : FilterTaskI, tasks: Task[]) : Task[] => {
  // если фильтр пустой, то возвращаем исходный массив
  if(Object.keys(filter).length === 0) return tasks;


  Object.entries(filter).forEach((item) => {
    const [key, value] = item;

    tasks = tasks.filter((task) => task[key as keyof Task] === value);
  });

  return tasks;
}