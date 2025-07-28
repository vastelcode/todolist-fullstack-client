import styles from './styles.module.scss';

import { Outlet } from 'react-router-dom';


export const LayoutEnter = () => {
  return (
    <>
    <Outlet/>
    </>
  );
}