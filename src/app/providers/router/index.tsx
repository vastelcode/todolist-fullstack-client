import { createBrowserRouter, Navigate } from "react-router-dom";
// пути всего приложения
import { RoutePaths } from "./paths.ts";

// импорт страниц
import { LoginPage } from "@/pages/Login/index.ts";
import { LogupPage } from "@/pages/Logup/index.ts";
import { DashboardPage } from "@/pages/Dashboard/index.ts";
import { TaskPage } from "@/pages/Task/index.ts";
import { SettingsPage } from "@/pages/Settings/index.ts";
import { ProjectsPage } from "@/pages/Projects/ui/index.ts";

// импорт шаблонов
import { Layout } from "@/app/layout/index.ts";
import { LayoutEnter } from "@/app/layout/index.ts";

export const router = createBrowserRouter([
  {
    element:<Layout/>,
    children:[
      {
        path: RoutePaths.DASHBOARD,
        element: <DashboardPage/>
      },
      {
        path: RoutePaths.TASK,
        element: <TaskPage/>
      },
      {
        path: RoutePaths.SETTINGS,
        element: <SettingsPage/>
      },
      {
        path: RoutePaths.PROJECTS,
        element: <ProjectsPage/>
      },
      {
        path: RoutePaths.NOT_FOUND,
        element: <Navigate to="/not_found" />
      }
    ]
  },
  {
    element: <LayoutEnter/>,
    children: [
      {
        path: RoutePaths.LOGIN,
        element: <LoginPage/>
      },
      {
        path: RoutePaths.LOGUP,
        element: <LogupPage/>
      }
    ]
  }
])