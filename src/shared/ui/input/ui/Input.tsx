import styles from './Input.module.scss';

import { HTMLInputTypeAttribute } from 'react';

interface InputInterface {
  variation: 'with-label' | 'with-icon';
  type?: HTMLInputTypeAttribute;
  placeholder?: string;
  icon?: string;
  label?: string;
  className?: string;
}

export const Input = (
  { variation, type = 'text',placeholder = '', icon = undefined, label = '', className = ''} : InputInterface
) => {
  if(variation === 'with-icon') {
    return (
       <div className={`${styles.overlay} flex items-center pl-4`}>
        <img src={icon} alt="иконка" className={`${styles.icon}`} />
        <input 
          type={type}
          className={`${styles["input-with-icon"]} ${className}`}
          placeholder={placeholder}
        />
       </div>
    );
  }
  else if(variation === 'with-label') {
    return (
      <div className={`${styles.wrapper}`}>
            <label 
            className={`${styles.label}`}>
            {label}
            </label>
            <input 
            type={type}
            className={`${styles["input-with-label"]} pl-4 ${className}`}
            placeholder={placeholder}
            />
      </div>
    );
  }
}