import { useState, useEffect } from "react";
import { MOTIVATIONAL_QUOTES } from "@/shared/config/static-data.ts";
import { getRandomInt } from "@/shared/lib/utils/getRandomNumber.ts";
import { getDate } from "@/shared/lib/utils/getDate.ts";

export const useDailyQuote = () => {
  const [quote, setQuote] = useState<{text: string; author: string} | null>(null);

  useEffect(() => {
    const today = getDate();
    const savedQuote = localStorage.getItem('dailyQuote');
    const savedDate = localStorage.getItem('dailyQuoteDate');

    if(savedDate && savedDate === today.localDate) {
      setQuote(JSON.parse(savedQuote!));
    }

    else {
      const randomIndex = getRandomInt(0,MOTIVATIONAL_QUOTES.length - 1);
      const newQuote = MOTIVATIONAL_QUOTES[randomIndex];

      localStorage.setItem('dailyQuote', JSON.stringify(newQuote));
      localStorage.setItem('dailyQuoteDate',today.localDate);

      setQuote(newQuote);
    }

  },[]);

  return quote;
}