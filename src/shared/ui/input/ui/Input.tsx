import styles from './Input.module.scss';

import { InputProps } from '@/shared/types/types.ts';

export const Input = (
  { label,error,touched, ...rest} : InputProps
) => {

  const showError = error && touched;

  return (
    <div className={styles.wrapper}>
      <label className={styles.label}>
        {label}
      </label>
      <input
      className={`${styles.input} ${showError ? styles['input_error'] : ''}`}
      {...rest}
      />
      {showError && (
        <span className={styles.errorText}>
          {error}
        </span>
      )}
    </div>
  );
}