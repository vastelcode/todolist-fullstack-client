import styles from './styles.module.scss';

import { Outlet } from "react-router-dom";

import { Sidebar } from '@/widgets/sidebar/ui/index.ts';
import { Header } from '@/widgets/header/index.ts';
import { Overlay } from '@/widgets/overlay/index.ts';

export const Layout = () => {


  return (
    <div className={styles.layout}>
      <Overlay/>
      <Header/>
      <main className={styles.main}>
        <Sidebar/>
        <Outlet/>
      </main>
    </div>
  );
}