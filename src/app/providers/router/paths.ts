// все пути приложения в одном месте
export const RoutePaths = {
  LOGUP: '/logup',
  LOGIN: '/login',
  DASHBOARD: '/',
  TASK: '/tasks',
  SETTINGS: '/settings',
  PROJECTS: '/projects',
  NOT_FOUND: '*'
} as const;

// тип
export type AppRoutes = typeof RoutePaths[keyof typeof RoutePaths];