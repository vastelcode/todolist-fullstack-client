import styles from './Logout.module.scss';

import { iconLogout } from "@/shared/assets/icons/index.ts";

export const Logout = () => {
  return (
    <div className={`flex gap-2.5 items-center ${styles.logout}`}>
    <img src={iconLogout} alt="иконка выхода" />
  </div>
  );
}