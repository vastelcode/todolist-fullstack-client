import { isValidDate } from "./isValidDate.ts";

import { SHORT_MONTHS_RU } from "@/shared/constants/constants.ts";

export const formatDateToWord = (date: string) : string | never => {
  if(!isValidDate(date)) {
    throw new Error('Невалидная дата.');
  }
  else {
   const [day, month, year] = date.split(/[./]/);

   return `${day} ${SHORT_MONTHS_RU[month]}, ${year}`
  }
}