import styles from './styles.module.scss';

import { iconArrowLeft } from '@/shared/assets/icons/index.ts';

import { RootState, AppDispatch } from '@/app/providers/store/index.ts';

import { useSelector, useDispatch } from 'react-redux';

import { useState } from 'react';

import { toggleOverlay } from '../model/slice.ts';


export const OpenWelcomePanel = () => {

  const overlay = useSelector((state: RootState) => state.overlay.isVisible);

  const dispatch = useDispatch<AppDispatch>();

  const [isVisible, setIsVisible] = useState(false);

  const handleClick = () => {
    dispatch(toggleOverlay());
    setIsVisible(!isVisible);
  }

  return (
    <div>
    <button 
    className={styles['btnArrow']}
    onClick={handleClick}
    >
      <img 
      src={iconArrowLeft} 
      alt="стрелка для открытия панели"
      className={styles['arrowToShow']} 
      style={isVisible ? { 'transform':'rotate(180deg)' } : undefined}
      />
    </button>
    </div>
  );
}