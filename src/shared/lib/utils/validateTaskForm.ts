
//  импорт типов
import { TaskFormData, ValidationErrors } from "@/shared/types/task/index.ts";

// функция для валидации данных из форм
export const validateTaskForm = (formData: Partial<TaskFormData>): ValidationErrors => {
  // объект с ошибками
  const errors: ValidationErrors = {};

  // проверка заголовка
  if(formData.title !== undefined) {
    // на существование заголовка
    if(!formData.title.trim()) {
      errors.title = 'Заголовок обязателен';
    }
    // на минимальную длину
    else if(formData.title.length < 3) {
      errors.title = 'Минимум 3 символа'
    }
    // на максимальную длину
    else if(formData.title.length > 100) {
      errors.title = 'Максимум 100 символов';
    }
  }

  // проверка примечания
  if (formData.note !== undefined) {
    if(formData.note.length > 120) {
      errors.note = 'Максимум 120 символов';
    }
    else if(formData.note.length < 3) {
      errors.note = 'Минимум 3 символа';
    }
  }

  // проверка даты
  if(formData.date !== undefined && formData.date) {
    const selectedDate = new Date(formData.date);
    const today = new Date();
    today.setHours(0,0,0,0);

    if(selectedDate < today) {
      errors.date = 'Дата не может быть в прошлом';
    };

  };

  if (formData.priority !== undefined && !formData.priority) {
    errors.priority = 'Выберите приоритет';
  }

  return errors;
}