export { default as imageTemplateTask1 } from './image-template-task.png';

export { default as imageTemplateTask2 } from './image-template-task(1).png';

export { default as imageTemplateTask3 } from './image-template-task(2).png';

export { default as imageTemplateTask4 } from './image-template-task(3).png';



export const iconNames = [
  'imageTemplateTask1',
  'imageTemplateTask2',
  'imageTemplateTask3',
  'imageTemplateTask4'
] as const;

export type IconName = typeof iconNames[number];
