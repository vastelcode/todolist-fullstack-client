import { RoutePaths, AppRoutes } from "@/app/providers/router/paths.ts";

import {
  iconDashboard,
  iconDashboardActive,
  iconTask,
  iconTaskActive,
  iconProjects,
  iconProjectsActive,
  iconSettings,
  iconSettingsActive
} from '@/shared/assets/icons/index.ts';



// Типизация пунктов меню
interface MenuItem {
  path: AppRoutes;
  icon: string;
  iconActive: string;
}



// Конфигурация меню в одном месте
export const menuItems: MenuItem[] = [
  { 
    path: RoutePaths.DASHBOARD,
    icon: iconDashboard,
    iconActive: iconDashboardActive
  },
  { 
    path: RoutePaths.TASK,
    icon: iconTask,
    iconActive: iconTaskActive
  },
  { 
    path: RoutePaths.PROJECTS,
    icon: iconProjects,
    iconActive: iconProjectsActive
  },
  { 
    path: RoutePaths.SETTINGS,
    icon: iconSettings,
    iconActive: iconSettingsActive
  }
];