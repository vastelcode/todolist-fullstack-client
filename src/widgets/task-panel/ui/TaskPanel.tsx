import { TaskForm } from '@/features/task-form/index.ts';

export const TaskPanel = (
  { className, isMobile } : { className?: string, isMobile: boolean }
) => {

  return (
    <TaskForm className={className} isMobile={isMobile}/>
  );
};