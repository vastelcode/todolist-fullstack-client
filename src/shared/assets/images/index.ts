export { default as imageGod } from './image-god-of-war.jpg';

export { default as imageAvatar } from './image-avatar.png';

export const iconNames = [
  'imageGod',
  'imageAvataer'
] as const;

export type IconName = typeof iconNames[number];
