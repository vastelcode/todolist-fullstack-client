import { RoutePaths, AppRoutes } from "@/app/providers/router/paths.ts";

import {
  iconDashboard,
  iconDashboardActive,
  iconTask,
  iconTaskActive,
  iconVital,
  iconVitalActive,
  iconCategories,
  iconCategoriesActive,
  iconSettings,
  iconSettingsActive
} from '@/shared/assets/icons/index.ts';



// Типизация пунктов меню
interface MenuItem {
  path: AppRoutes;
  label: string;
  icon: string;
  iconActive: string;
}



// Конфигурация меню в одном месте
export const menuItems: MenuItem[] = [
  { 
    path: RoutePaths.DASHBOARD,
    label: 'Панель',
    icon: iconDashboard,
    iconActive: iconDashboardActive
  },
  { 
    path: RoutePaths.TASK,
    label: 'Задачи',
    icon: iconTask,
    iconActive: iconTaskActive
  },
  { 
    path: RoutePaths.VITAL,
    label: 'Важные',
    icon: iconVital,
    iconActive: iconVitalActive
  },
  { 
    path: RoutePaths.CATEGORIES,
    label: 'Категории',
    icon: iconCategories,
    iconActive: iconCategoriesActive
  },
  { 
    path: RoutePaths.SETTINGS,
    label: 'Настройки',
    icon: iconSettings,
    iconActive: iconSettingsActive
  }
];