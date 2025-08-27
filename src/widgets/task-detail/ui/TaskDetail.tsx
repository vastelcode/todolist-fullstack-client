import styles from './TaskDetail.module.scss';

import { selectOverlay } from '@/shared/lib/selectors/overlay-selectors.ts';

import { useSelector } from 'react-redux';



export const TaskDetail = () => {

  const { taskID } = useSelector(selectOverlay);


  return (
    <>
    {taskID ?
    <div className={styles.container}>
      
    </div>
    :
    null
    }
    </>
  );
}