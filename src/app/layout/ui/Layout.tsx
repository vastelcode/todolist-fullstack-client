import styles from './styles.module.scss';

import { Outlet } from "react-router-dom";

import { Sidebar } from '@/widgets/Sidebar/index.ts';
import { Header } from '@/widgets/Header/index.ts';

export const Layout = () => {
  return (
    <div className="layout">
      <Header/>
      <Sidebar/>
      <main className={styles.main}>
        <Outlet/>
      </main>
    </div>
  );
}