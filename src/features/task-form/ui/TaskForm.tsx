import styles from './TaskForm.module.scss';

import { FormLoader } from '@/shared/ui/form-loader/FormLoader.tsx';
import { Input } from '@/shared/ui/input/index.ts';
import { TabForm } from '@/shared/ui/tab-form/index.ts';

import { TaskFormData } from '@/shared/types/task/index.ts';

import { useTaskForm } from '@/shared/lib/hooks/useTaskForm.ts';

interface TaskFormProps {
  initialData?: Partial<TaskFormData>;
  onSubmit: (data: TaskFormData) => void;
  onCancel: () => void;
  onDelete?: () => void;
  onComplete?: () => void;
  isLoading?: boolean;
  mode: 'create' | 'edit';
}


export const TaskForm = () => {

  const {
    formData,
    errors,
    touched,
    isLoading,
    handleChange,
    handlePriorityChange,
    handleSubmit,
    handleBlur
  } = useTaskForm({
    initialData: {
      title: '',
      note: '',
      tag: 'finance', 
      date: '',
      priority: 'low'
    }
  }
  );


  return (
    <div className={styles.panel}>
      <p className={styles.panel__header}>
        Создайте новую задачу
      </p>
      
      <form onSubmit={handleSubmit} className={styles.form}>
        <Input
          label="Заголовок"
          placeholder="обновить резюме"
          name="title"
          value={formData.title}
          error={errors.title}
          touched={touched.title}
          onChange={handleChange}
          onBlur={handleBlur}
          disabled={isLoading}
        />
        
        <Input
          label="Примечание"
          placeholder="добавить новые проекты"
          name="note"
          value={formData.note}
          error={errors.note}
          touched={touched.note}
          onChange={handleChange}
          onBlur={handleBlur}
          disabled={isLoading}
        />
        
        <Input
          label="Тег"
          placeholder="карьера"
          name="tag"
          value={formData.tag}
          error={errors.tag}
          touched={touched.tag}
          onChange={handleChange}
          onBlur={handleBlur}
          disabled={isLoading}
        />
        
        <Input
          label="Дата"
          type="date"
          name="date"
          value={formData.date}
          error={errors.date}
          touched={touched.date}
          onChange={handleChange}
          onBlur={handleBlur}
          disabled={isLoading}
        />

        
        <div className={styles.prioritySection}>
          <label className={styles.panel__text}>
            Приоритет задачи*
          </label>
          <div className={styles.priorityTabs}>
            <TabForm
              onClick={() => handlePriorityChange('low')}
              active={formData.priority}
              priority="low"
              disabled={isLoading}
            />
            <TabForm
              onClick={() => handlePriorityChange('medium')}
              active={formData.priority}
              priority="medium"
              disabled={isLoading}
            />
            <TabForm
              onClick={() => handlePriorityChange('high')}
              active={formData.priority}
              priority="high"
              disabled={isLoading}
            />
          </div>
          {errors.priority && touched.priority && (
            <span className={styles.errorText}>{errors.priority}</span>
          )}
        </div>
        
        <button
          type="submit"
          className={styles.btn}
          disabled={isLoading}
        >
          {isLoading ? <FormLoader /> : 'Создать'}
        </button>
      </form>
    </div>
  );
}