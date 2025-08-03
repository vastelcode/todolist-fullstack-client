export type StatusType = 'completed' | 'in-progress' | 'not-started';
type PriorityType = 'extreme' | 'moderate' | 'low';



export interface CardI {
  status: StatusType;
  priority: PriorityType;
  header: string;
  descript: string;
  createdOn: string;
  src: string;
};

export const statusLabels: Record<StatusType,string> ={
  'completed' : 'Выполнено',
  'in-progress': 'В процессе',
  'not-started': 'Не начато'
};

export const priorityLables: Record<PriorityType,string> = {
  'extreme': 'Высший',
  'moderate' : 'Средний',
  'low': 'Низший'
};
