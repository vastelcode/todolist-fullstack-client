import styles from './styles.module.scss';

import { Outlet } from "react-router-dom";

import { Sidebar } from '@/widgets/sidebar/ui/index.ts';
import { Header } from '@/widgets/header/index.ts';

import { RootState } from '@/app/providers/store/index.ts';

import { useSelector } from 'react-redux';

export const Layout = () => {

  const overlay = useSelector((state: RootState) => state.overlay.isVisible);

  return (
    <div className={styles.layout}>
      <div 
      className={`${styles.overlay} ${overlay ? styles['overlay_active'] : ''}`}
      >

      </div>
      <Header/>
      <main className={styles.main}>
        <Sidebar/>
        <Outlet/>
      </main>
    </div>
  );
}