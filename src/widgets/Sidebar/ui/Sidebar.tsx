import { AppRoutes } from "@/app/providers/router/paths.ts";
import { Link, useLocation } from "react-router-dom";
import styles from './Sidebar.module.scss';
import { NavigationTab } from "@/shared/ui/navigation-tab/ui/index.ts";
import { menuItems } from "../model/menu-config.ts";
import { AccountDisplay } from "@/features/account-display/ui/index.ts";
import { Logout } from "@/features/logout/ui/index.ts";



export const Sidebar = () => {
  const location = useLocation();
  const currentPath = location.pathname as AppRoutes;

  return (
    <aside className={styles.sidebar}>
      <AccountDisplay/>
      <nav className={`${styles.nav} flex flex-col gap-2.5`}>
        {menuItems.map((item,index) => {
          return (
            <NavigationTab
            icon={item.icon}
            iconActive={item.iconActive}
            isActive={currentPath === item.path}
            key={index}
            >
              <Link to={item.path}>
              {item.label}
              </Link>
            </NavigationTab>
          );
        })}
      </nav>
      <Logout/>
    </aside>
  );
}