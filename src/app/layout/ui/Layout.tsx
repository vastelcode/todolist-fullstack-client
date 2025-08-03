import styles from './styles.module.scss';

import { Outlet } from "react-router-dom";

import { Sidebar } from '@/widgets/Sidebar/ui/index.ts';
import { Header } from '@/widgets/Header/index.ts';

export const Layout = () => {
  return (
    <div className="layout">
      <Header/>
      <main className={styles.main}>
        <Sidebar/>
        <Outlet/>
      </main>
    </div>
  );
}