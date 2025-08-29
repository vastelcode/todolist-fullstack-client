import { MouseEventHandler } from "react";

export type PriorityT = 'low' | 'medium' | 'high';
export type TagT = 
  | 'health'       // здоровье
  | 'career'       // карьера
  | 'study'        // учеба
  | 'family'       // семья
  | 'self'         // личное развитие
  | 'sport'        // спорт
  | 'finance'      // финансы
  | 'relationships'// отношения
  | 'hobby'        // хобби
  | 'spirituality' // духовность
  | 'travel'       // путешествия
  | 'rest'         // отдых
  | 'creativity'   // творчество
  | 'social';       // социальная жизнь

export interface TaskFormData {
  title: string;
  note: string;
  tag: TagT;
  date: string;
  priority: PriorityT;
};

export interface ValidationErrors {
  title?: string;
  note?: string;
  tag?: string;
  date?: string;
  priority?: string;
};


export interface Task {
  project: string;
  cover: string;
  header:string;
  text: string;
  date:string;
  points: number;
  priority: PriorityT;
  id: string;
};

export interface TaskProps {
  id: string;
}


export interface TaskTabProps {
  priority: PriorityT;
  isActive: boolean;
  onClick?: MouseEventHandler<HTMLDivElement>;
};

export interface TaskColumnI {
  tasks : Task[];
  priority: PriorityT;
};

export type FilterTaskI = Partial<Record<keyof Task, string | number>>;