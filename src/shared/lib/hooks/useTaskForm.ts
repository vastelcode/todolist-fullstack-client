import { useState } from "react";
import { TaskFormData, ValidationErrors, PriorityT } from "@/shared/types/task/index.ts";
import { validateTaskForm } from "../utils/validateTaskForm.ts";

export const useTaskForm = ({ initialData } : { initialData: TaskFormData }) => {
  const [ formData, setFormData ] = useState<TaskFormData>(initialData);

  const [ errors, setErrors ] = useState<ValidationErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [isLoading, setIsLoading] = useState<boolean>(false);

  
  // обработчки изменений в формах
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // вытакскиваем имя текстового поля и значения в нём
    const { name, value } = e.target;

    // изменяем состояния данных их форм
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // валидация после первого касания
    if(touched[name]) {
      // определяем ошибку
      const fieldError = validateTaskForm({ [name]: value })[name as keyof ValidationErrors];

      // изменяем состояние объекта ошибки
      setErrors(prev => ({...prev, [name]: fieldError}));
    };
  };

  // обработчик блура
  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name } = e.target;
    setTouched(prev => ({...prev, [name] : true}));

    // валидация при уходе с поля
    const fieldError = validateTaskForm({ [name] : formData[name as keyof TaskFormData] })[name as keyof ValidationErrors];

    setErrors(prev => ({...prev, [name] : fieldError}));
  };

  // обработчик смены приоритета
  const handlePriorityChange = (priority: PriorityT) => {
    setFormData(prev => ({ ...prev, priority }));
    setTouched(prev => ({ ...prev, priority: true }));
    
    const fieldError = validateTaskForm({ priority });
    setErrors(prev => ({ ...prev, priority: fieldError.priority }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Помечаем все поля как touched для показа всех ошибок
    const allTouched = Object.keys(formData).reduce((acc, key) => {
      acc[key] = true;
      return acc;
    }, {} as Record<string, boolean>);
    
    setTouched(allTouched);
    
    // Валидация всей формы
    const formErrors = validateTaskForm(formData);
    setErrors(formErrors);
    
    if (Object.keys(formErrors).length === 0) {
      setIsLoading(true);
      try {
        // Здесь будет API вызов
        await new Promise(resolve => setTimeout(resolve, 1000)); // Имитация запроса
        
        console.log('Форма отправлена:', formData);
        
        // Сброс формы после успешной отправки
        setFormData({
          title: '',
          note: '',
          tag: 'finance',
          date: '',
          priority: 'medium'
        });
        
        setTouched({});
        alert('Задача успешно создана!');
      } catch (error) {
        console.error('Ошибка при создании задачи:', error);
        alert('Произошла ошибка при создании задачи');
      } finally {
        setIsLoading(false);
      }
    }
  }
  return {
    formData,
    errors,
    touched,
    isLoading,
    handleChange,
    handleSubmit,
    handlePriorityChange,
    handleBlur
  }
}