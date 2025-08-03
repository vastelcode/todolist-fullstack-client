import styles from './Tab.module.scss';

interface TabI {
  icon: string;
  iconActive: string;
  children: React.ReactNode;
  isActive: boolean;
}

export const NavigationTab = (
{
  icon,
  iconActive,
  children,
  isActive
} : TabI
) => {
  return (
    <div 
    className={`${styles['card']} ${isActive ? styles['card_active'] : ''}`}
    >
      <div className={styles['card__content']}>
        <img src={isActive ? iconActive : icon} alt="иконка раздела" className={styles['card__icon']}/>
        <p className={styles['card__text']}>
          {children}
        </p>
      </div>
    </div>
  );
}