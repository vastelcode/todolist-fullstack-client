// все пути приложения в одном месте
export const RoutePaths = {
  LOGUP: '/logup',
  LOGIN: '/login',
  DASHBOARD: '/db',
  VITAL: '/vt',
  TASK: '/mt',
  CATEGORIES: '/ctg',
  NOT_FOUND: '*'
};

// тип
export type AppRoutes = keyof typeof RoutePaths;