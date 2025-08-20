import styles from './Input.module.scss';

import { InputProps } from '@/shared/types/types.ts';

export const Input = (
  { label, ...rest} : InputProps
) => {
  return (
    <div className={styles.wrapper}>
      <label className={styles.label}>
        {label}
      </label>
      <input
      className={styles.input}
      {...rest}
      />
    </div>
  );
}