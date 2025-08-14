export { default as imageGod } from './image-god-of-war.jpg';

export { default as imageAvatar } from './image-avatar.png';

export { default as imageCoverTemplate } from './image-cover-template.png';

export const iconNames = [
  'imageGod',
  'imageAvataer',
  'imageCoverTemplate'
] as const;

export type IconName = typeof iconNames[number];
