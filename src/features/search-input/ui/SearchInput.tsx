import styles from './SearchInput.module.scss';

import { Button } from '@/shared/ui/button/ui/index.ts';


import { iconSearch } from '@/shared/assets/icons/index.ts';

interface SearchInputInterface {
  className?: string;
};

export const SearchInput = (
  {className = ''}: SearchInputInterface
) => {
  return (
    <div className={`${styles.wrapper} flex items-center pl-3.5 justify-between`}>
      <input 
      type="text" 
      className={`${styles.input} ${className}`}
      placeholder='Найдите вашу задачу здесь'
      />
      <Button
      variation='square'
      onClick={() => console.log('Нажатие!')}
      >
        <img src={iconSearch} alt="" />
      </Button>
    </div>
  );
};