import { RoutePaths } from "@/app/providers/router/paths.ts";
import { Link } from "react-router-dom";


export const Sidebar = () => {
  return (
    <>
    сайдбар
    <Link to={RoutePaths.LOGIN}>Логин</Link>
    <Link to={RoutePaths.LOGUP}>Логап</Link>
    <Link to={RoutePaths.DASHBOARD}>Дашбоард</Link>
    <Link to={RoutePaths.TASK}>Задачи</Link>
    <Link to={RoutePaths.VITAL}>Важные</Link>
    <Link to={RoutePaths.CATEGORIES}>Категории</Link>
    </>
  );
}