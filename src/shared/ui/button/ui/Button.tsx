import styles from './Button.module.scss';

import { MouseEventHandler } from 'react';

interface ButtonInterface {
  children: React.ReactNode;
  variation?: 'default' | 'square'
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export const Button = (
  {
    children,
    variation = 'default',
    className = '',
    onClick = () => {}
  } : ButtonInterface
) => {
  return (
    <button
    className={`${variation === 'default' ? styles['btn_default'] : styles['btn_square']} ${className}`}
    onClick={onClick}
    >
      {children}
    </button>
  );
}