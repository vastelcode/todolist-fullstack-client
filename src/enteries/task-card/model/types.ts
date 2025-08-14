export interface TaskCardI {
  project: string;
  cover: string;
  header:string;
  text: string;
  date:string;
  subtasks: number;
  priority: 'Низкий' | 'Средний' | 'Высокий';
}