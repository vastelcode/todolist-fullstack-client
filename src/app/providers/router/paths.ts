// все пути приложения в одном месте
export const RoutePaths = {
  LOGUP: '/logup',
  LOGIN: '/login',
  DASHBOARD: '/',
  VITAL: '/vt',
  TASK: '/mt',
  CATEGORIES: '/ctg',
  SETTINGS: '/st',
  NOT_FOUND: '*'
} as const;

// тип
export type AppRoutes = typeof RoutePaths[keyof typeof RoutePaths];