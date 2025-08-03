// Экспорт всех иконок по именам
export { default as iconDashboard } from './icon-dashboard.svg';
export { default as iconDashboardActive } from './icon-dashboard-active.svg';

export { default as iconTask } from './icon-task.svg';
export { default as iconTaskActive } from './icon-task-active.svg';

export { default as iconVital } from './icon-vital.svg';
export { default as iconVitalActive } from './icon-vital-active.svg';

export { default as iconCategories } from './icon-categories.svg';
export { default as iconCategoriesActive } from './icon-categories-active.svg';

export { default as iconSettings } from './icon-settings.svg';
export { default as iconSettingsActive } from './icon-settings-active.svg';

export { default as iconLogo } from './icon-logo.svg';

export { default as iconSearch } from './icon-search.svg';

export { default as iconLogout } from './icon-logout.svg';

// Дополнительно: экспорт типа для автоподстановки
export const iconNames = [
  'iconDashboard',
  'iconDashboardActive',
  'iconTask',
  'iconTasksActive',
  'iconVital',
  'iconVitalActive',
  'iconCategories',
  'iconCategoriesActive',
  'iconSettings',
  'iconSettingsActive',
  'iconLogo',
  'iconSearch',
  'iconLogout'
] as const;

export type IconName = typeof iconNames[number];