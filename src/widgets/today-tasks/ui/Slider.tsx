import { RefObject } from 'react';
import styles from './styles.module.scss';

import { iconArrowLeft, iconArrowRight } from '@/shared/assets/icons/index.ts';

export const Slider = (
  {element} : { element : RefObject<Element | null>}
) => {

  const scrollX = (amount: number) => {
    if(element.current) {
      element.current.scrollBy({
        behavior: 'smooth',
        left: amount
      })
    }
  } 

  return (
    <div className="flex gap-4">
      <button 
      className={styles.btn}
      onClick={() => scrollX(-251)}
      >
        <img src={iconArrowLeft} alt="стрелка влево" />
      </button>
      <button 
      className={styles.btn}
      onClick={() => scrollX(251)}
      >
        <img src={iconArrowRight} alt="стрелка вправо" />
      </button>
    </div>
  );
}