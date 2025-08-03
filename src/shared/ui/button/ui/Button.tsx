import styles from './Button.module.scss';

interface ButtonInterface {
  children: React.ReactNode;
  variation?: 'default' | 'square'
  className?: string;
}

export const Button = (
  {
    children,
    variation = 'default',
    className = ''
  } : ButtonInterface
) => {
  return (
    <button
    className={`${variation === 'default' ? styles['btn_default'] : styles['btn_square']} ${className}`}
    >
      {children}
    </button>
  );
}