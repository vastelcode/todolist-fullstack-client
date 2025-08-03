import { formatInTimeZone } from 'date-fns-tz';
import { ru } from 'date-fns/locale/ru'; // Для русской локализации

type DateResult = {
  localDate: string;   // Дата в формате 'DD/MM/YYYY'
  dayOfWeek: string;   // День недели на русском
};

export function getDate(timeZone?: string): DateResult {
  // Определяем часовой пояс (если не передан, используем системный)
  const targetTimeZone = timeZone || Intl.DateTimeFormat().resolvedOptions().timeZone;
  const now = new Date();

  // Форматируем дату и день недели
  return {
    localDate: formatInTimeZone(now, targetTimeZone, 'dd/MM/yyyy'),
    dayOfWeek: formatInTimeZone(now, targetTimeZone, 'EEEE', { locale: ru })
  };
}