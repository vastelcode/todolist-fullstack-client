// импорт стилей
import styles from './DropdownMenu.module.scss';

// импортируем хуки
import { useState, useRef, useEffect } from 'react';

// импортируем типы
import { MenuI } from '../model/types.ts';

export const DropdownMenu = ({ trigger, children } : MenuI) => {

  // задаём состояния
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [height, setHeight] = useState<number>(0);

  // инициализируем "крючки"
  const menuRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  // расчёт высоты контента при открытии/закрытии
  useEffect(() => {
    if(isOpen && contentRef.current?.scrollHeight) {
      setHeight(contentRef.current.scrollHeight);
    }
    else {
      setHeight(0);
    }
  },[isOpen]);

  // закрытие меню при клике вне области
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if(menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside as any);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside as any);
    }

  },[]);

  return (
    <div className={styles['dropdown-container']} ref={menuRef}>
      <div 
        className={`${styles['dropdown-trigger']} ${isOpen ? styles['dropdown-trigger_active'] : ''}`} 
        onClick={() => setIsOpen(!isOpen)}
      >
        {trigger}
      </div>

      <div
        className={`${styles['dropdown-content']} ${isOpen ? styles.open : ''}`}
        ref={contentRef}
        style={{ height: `${height}px` }}
      >
        <div className={styles['dropdown-inner']}>
          {children}
          <button 
            className={styles['close-button']} 
            onClick={() => setIsOpen(false)}
          >
            ✕
          </button>
        </div>
      </div>
    </div>
  );
}