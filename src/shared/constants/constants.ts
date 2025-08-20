import { PriorityT } from "../types/types.ts";


/**
 * Сокращенные русские названия месяцев
 * Ключи в формате MM (01-12)
 */
export const SHORT_MONTHS_RU: Record<string, string> = {
  '01': 'Янв',
  '02': 'Фев',
  '03': 'Мар',
  '04': 'Апр',
  '05': 'Май',
  '06': 'Июн',
  '07': 'Июл',
  '08': 'Авг',
  '09': 'Сен',
  '10': 'Окт',
  '11': 'Ноя',
  '12': 'Дек',
} as const;

/**
 * Объект конфигурации сообщений по приоритету задачи
 */
export const PRIORITY_TITLES : Record<PriorityT,string> = {
  low: 'Низкий',
  medium: 'Средний',
  high: 'Высокий'
};

/**
 * Объект конфигурации цветов по приоритету задачи
*/
export const PRIORITY_COLORS: Record<PriorityT,string> = {
  low: 'rgb(10, 207, 131)',
  medium: 'rgb(245, 158, 11)',
  high: 'rgb(211, 65, 65)'
}

/**
 * Статический контент welcome-panel
*/


export const LEVEL_CONFIG = [
  { name: 'Beginner', threshold: 0, description: 'Начало пути' },
  { name: 'Junior', threshold: 340, description: 'Освоил основы' },
  { name: 'Pro', threshold: 680, description: 'Опытный пользователь' },
  { name: 'Senior', threshold: 1000, description: 'Мастер системы' }
];
