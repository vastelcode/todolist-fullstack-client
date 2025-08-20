import { Task, ProgressDataI } from "../types/types.ts";

import {
  imageTemplateTask1,
  imageTemplateTask2,
  imageTemplateTask3,
  imageTemplateTask4
} from '@/shared/assets/images/index.ts';

import { 
  iconProjectsPurple,
  iconTasksPurple,
  iconStar
} 
 from "@/shared/assets/icons/index.ts";


export const LIST_TASK: Task[] = [
  {
    project: 'Карьера',
    cover: imageTemplateTask3,
    header: 'Обновить резюме',
    text: 'Добавить новые проекты и навыки',
    date: '05.09.2025',
    points: 4,
    priority: 'high'
  },
  {
    project: 'Здоровье',
    cover: imageTemplateTask1,
    header: 'Записаться на йогу',
    text: 'Найти студию рядом с домом',
    date: '25.08.2025',
    points: 2,
    priority: 'medium'
  },
  {
    project: 'Финансы',
    cover: imageTemplateTask4,
    header: 'Планирование бюджета',
    text: 'Распределить расходы на месяц',
    date: '30.08.2025',
    points: 5,
    priority: 'high'
  },
  {
    project: 'Образование',
    cover: imageTemplateTask2,
    header: 'Изучить React Native',
    text: 'Пройти 2 урока из курса',
    date: '15.09.2025',
    points: 3,
    priority: 'medium'
  },
  {
    project: 'Личное',
    cover: imageTemplateTask1,
    header: 'Забронировать отпуск',
    text: 'Сравнить варианты отелей',
    date: '01.10.2025',
    points: 6,
    priority: 'low'
  },
  {
    project: 'Хобби',
    cover: imageTemplateTask3,
    header: 'Купить материалы для рисования',
    text: 'Акварель и кисти',
    date: '22.08.2025',
    points: 1,
    priority: 'low'
  },
  {
    project: 'Карьера',
    cover: imageTemplateTask4,
    header: 'Подготовиться к собеседованию',
    text: 'Повторить алгоритмы',
    date: '08.09.2025',
    points: 7,
    priority: 'high'
  },
  {
    project: 'Здоровье',
    cover: imageTemplateTask2,
    header: 'Сдать анализы',
    text: 'Запись в лабораторию',
    date: '28.08.2025',
    points: 3,
    priority: 'medium'
  },
  {
    project: 'Финансы',
    cover: imageTemplateTask1,
    header: 'Рефинансирование кредита',
    text: 'Сравнить предложения банков',
    date: '20.09.2025',
    points: 4,
    priority: 'high'
  },
  {
    project: 'Образование',
    cover: imageTemplateTask4,
    header: 'Прочитать книгу по архитектуре',
    text: 'Главы 5-7',
    date: '31.08.2025',
    points: 2,
    priority: 'low'
  },
  {
    project: 'Личное',
    cover: imageTemplateTask3,
    header: 'Организовать ужин',
    text: 'Купить продукты и приготовить',
    date: '24.08.2025',
    points: 5,
    priority: 'medium'
  },
  {
    project: 'Хобби',
    cover: imageTemplateTask2,
    header: 'Создать плейлист для бега',
    text: 'Подборка мотивирующей музыки',
    date: '03.09.2025',
    points: 1,
    priority: 'low'
  },
  {
    project: 'Карьера',
    cover: imageTemplateTask1,
    header: 'Посетить конференцию',
    text: 'Купить билет и составить план',
    date: '10.10.2025',
    points: 8,
    priority: 'high'
  },
  {
    project: 'Здоровье',
    cover: imageTemplateTask4,
    header: 'Купить витамины',
    text: 'Комплекс для иммунитета',
    date: '29.08.2025',
    points: 2,
    priority: 'medium'
  },
  {
    project: 'Финансы',
    cover: imageTemplateTask3,
    header: 'Настройка автоплатежей',
    text: 'Коммунальные услуги и интернет',
    date: '07.09.2025',
    points: 3,
    priority: 'medium'
  },
  {
    project: 'Образование',
    cover: imageTemplateTask2,
    header: 'Практика английского',
    text: 'Разговорный клуб в среду',
    date: '27.08.2025',
    points: 4,
    priority: 'high'
  },
  {
    project: 'Личное',
    cover: imageTemplateTask1,
    header: 'Фотосессия на годовщину',
    text: 'Найти фотографа',
    date: '18.09.2025',
    points: 6,
    priority: 'low'
  },
  {
    project: 'Хобби',
    cover: imageTemplateTask4,
    header: 'Записаться на мастер-класс',
    text: 'Гончарное искусство',
    date: '05.10.2025',
    points: 3,
    priority: 'medium'
  },
  {
    project: 'Карьера',
    cover: imageTemplateTask3,
    header: 'Сеть контактов',
    text: 'Написать 5 бывшим коллегам',
    date: '12.09.2025',
    points: 5,
    priority: 'high'
  },
  {
    project: 'Здоровье',
    cover: imageTemplateTask2,
    header: 'Чек-ап организма',
    text: 'Полное медицинское обследование',
    date: '25.09.2025',
    points: 7,
    priority: 'high'
  },
  {
    project: 'Финансы',
    cover: imageTemplateTask1,
    header: 'Инвестиционный портфель',
    text: 'Ребалансировка активов',
    date: '26.08.2025',
    points: 4,
    priority: 'medium'
  },
  {
    project: 'Образование',
    cover: imageTemplateTask4,
    header: 'Онлайн-курс по дизайну',
    text: 'Начальный модуль',
    date: '09.09.2025',
    points: 3,
    priority: 'low'
  },
  {
    project: 'Личное',
    cover: imageTemplateTask3,
    header: 'Ремонт в ванной',
    text: 'Выбор плитки и сантехники',
    date: '15.10.2025',
    points: 9,
    priority: 'high'
  },
  {
    project: 'Хобби',
    cover: imageTemplateTask1,
    header: 'Игра на гитаре',
    text: 'Разучить новый аккорд',
    date: '23.08.2025',
    points: 1,
    priority: 'low'
  },
  {
    project: 'Карьера',
    cover: imageTemplateTask2,
    header: 'Сертификация AWS',
    text: 'Записаться на экзамен',
    date: '28.09.2025',
    points: 6,
    priority: 'high'
  },
  {
    project: 'Здоровье',
    cover: imageTemplateTask4,
    header: 'Утренняя зарядка',
    text: 'Составить программу на неделю',
    date: '21.08.2025',
    points: 3,
    priority: 'medium'
  },
  {
    project: 'Финансы',
    cover: imageTemplateTask3,
    header: 'Открыть депозит',
    text: 'Сравнить процентные ставки',
    date: '05.09.2025',
    points: 4,
    priority: 'medium'
  },
  {
    project: 'Образование',
    cover: imageTemplateTask1,
    header: 'Тестирование ПО',
    text: 'Практика написания тестов',
    date: '30.08.2025',
    points: 5,
    priority: 'high'
  },
  {
    project: 'Личное',
    cover: imageTemplateTask4,
    header: 'Подарок на день рождения',
    text: 'Выбрать и заказать',
    date: '14.09.2025',
    points: 4,
    priority: 'low'
  },
  {
    project: 'Хобби',
    cover: imageTemplateTask2,
    header: 'Скалолазание',
    text: 'Посетить новый зал',
    date: '25.08.2025',
    points: 2,
    priority: 'medium'
  },
  {
    project: 'Карьера',
    cover: imageTemplateTask3,
    header: 'Портфолио на Behance',
    text: 'Выложить последний проект',
    date: '17.09.2025',
    points: 3,
    priority: 'high'
  },
  {
    project: 'Здоровье',
    cover: imageTemplateTask1,
    header: 'Правильное питание',
    text: 'Составить меню на неделю',
    date: '29.08.2025',
    points: 5,
    priority: 'medium'
  },
  {
    project: 'Финансы',
    cover: imageTemplateTask4,
    header: 'Накопительный счет',
    text: 'Перевести 10% зарплаты',
    date: '02.09.2025',
    points: 2,
    priority: 'low'
  },
  {
    project: 'Образование',
    cover: imageTemplateTask2,
    header: 'Ведение блога',
    text: 'Написать статью про TypeScript',
    date: '08.10.2025',
    points: 7,
    priority: 'medium'
  },
  {
    project: 'Личное',
    cover: imageTemplateTask1,
    header: 'Встреча выпускников',
    text: 'Подтвердить участие',
    date: '22.09.2025',
    points: 3,
    priority: 'low'
  },
];

export const WELCOME_TEXTS = {
  greeting: (username: string) => `Здравствуй, ${username}!`,
  intro: `Chrono Flow помогает вам стать продуктивнее и видеть свой рост. Создавайте проекты, наполняйте их задачами и наблюдайте за движением к целям. Ваш прогресс отображается наглядно, вдохновляя на новые свершения.`,
  systemDescription: `Все ваши важные дела — в одной понятной системе. Достигайте большего с ясным планом!`,
  
  levelTitle: "Ваш уровень аккаунта",
  levelDescription: `Превращайте продуктивность в игру! Выполняйте задачи и зарабатывайте баллы. Накопите достаточно — и повышайте уровень. Каждый новый уровень открывает эксклюзивные возможности кастомизации.`,

  dailyQuoteHeader: `Цитата дня`,
};

export const MOTIVATIONAL_QUOTES = [
  {
    text: "Успех — это способность идти от неудачи к неудаче, не теряя энтузиазма.",
    author: "Уинстон Черчилль"
  },
  {
    text: "Лучший способ взяться за что-то — перестать говорить и начать делать.",
    author: "Уолт Дисней"
  },
  {
    text: "Не ждите. Время никогда не будет подходящим.",
    author: "Наполеон Хилл"
  },
  {
    text: "Двадцать лет спустя вы будете больше разочарованы теми вещами, которые вы не делали, чем теми, которые вы сделали.",
    author: "Марк Твен"
  },
  {
    text: "Успех обычно приходит к тем, кто слишком занят, чтобы его просто ждать.",
    author: "Генри Дэвид Торо"
  },
  {
    text: "Я не провалил тест. Я просто нашел сто способов сделать его неправильно.",
    author: "Бенджамин Франклин"
  },
  {
    text: "Секрет успешного продвижения вперед в том, чтобы начать.",
    author: "Марк Твен"
  },
  {
    text: "Единственный способ сделать великую работу — любить то, что ты делаешь.",
    author: "Стив Джобс"
  },
  {
    text: "Не говорите, что у вас нет времени. У вас ровно столько же времени, сколько было у Микеланджело, Леонардо да Винчи, Томаса Джефферсона, Пастера, Хелен Келлер, Альберта Эйнштейна.",
    author: "Джексон Браун"
  },
  {
    text: "Ваше время ограничено, не тратьте его, живя чужой жизнью.",
    author: "Стив Джобс"
  },
  {
    text: "Дисциплина — это мост между целями и достижениями.",
    author: "Джим Рон"
  },
  {
    text: "Будущее принадлежит тем, кто верит в красоту своей мечты.",
    author: "Элеонора Рузвельт"
  },
  {
    text: "Успех не окончателен, неудача не фатальна: значение имеет лишь мужество продолжать.",
    author: "Уинстон Черчилль"
  },
  {
    text: "Единственное место, где успех приходит до работы, — это словарь.",
    author: "Видал Сассун"
  },
  {
    text: "Чтобы преуспеть, ваше стремление к успеху должно быть больше, чем ваш страх перед неудачей.",
    author: "Билл Косби"
  },
  {
    text: "Я не могу изменить направление ветра, но могу настроить паруса, чтобы всегда достигать своего назначения.",
    author: "Джимми Дин"
  },
  {
    text: "Не бойтесь отказываться от хорошего в пользу отличного.",
    author: "Джон Д. Рокфеллер"
  },
  {
    text: "Вы никогда не пересечете океан, если не наберетесь мужества потерять берег из виду.",
    author: "Христофор Колумб"
  },
  {
    text: "Я узнал, что люди забудут то, что ты сказал, люди забудут то, что ты сделал, но люди никогда не забудут, что ты заставил их почувствовать.",
    author: "Майя Энджелоу"
  },
  {
    text: "Единственный человек, которым вы должны стремиться стать, — это тот, кем вы хотите быть.",
    author: "Ральф Уолдо Эмерсон"
  }
];

export const PROGRESS_DATA: ProgressDataI[] = [
  {
    icon: iconStar,
    header: 'Выполненные задачи',
    amount: 8963
  },
  {
    icon: iconProjectsPurple,
    header: 'Проектов сдано',
    amount: 256
  },
  {
    icon: iconTasksPurple,
    header: 'Новые задачи',
    amount: 46
  }
];

import { ChartData } from "chart.js";

import { getOptions, getData } from "@/shared/lib/utils/tasks-charts-helpers.ts";

export const DATA_DAY: ChartData<'line'> = getData(
  ['04.08','05.08','06.08',
    '07.08','08.08','09.08','10.08',
    '11.08','12.08','13.08','14.08','15.08'
  ],
  [65, 59, 80, 81, 56, 158, 23,10, 74, 56, 89, 45 ]
);

export const DATA_WEEK: ChartData<'line'> = getData(
  ['28.07','04.08','11.08',
    '18.08','25.08','01.09'
  ],
  [324, 478, 252, 336,105,563]
);

export const DATA_MONTH: ChartData<'line'> = getData(
  ['01.06','01.07','01.08'],
  [1207, 1345, 1025]
);

export const OPTIONS_CHART = () => getOptions;