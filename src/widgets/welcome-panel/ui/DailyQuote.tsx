import { useDailyQuote } from "@/shared/lib/hooks/useDailyQuote.ts";
import { WELCOME_TEXTS } from "@/shared/config/static-data.ts";
import styles from './WelcomePanel.module.scss';

export const DailyQuote = () => {
  const dailyQuote = useDailyQuote();

  if(!dailyQuote) return null;

  return (
    <div className="flex flex-col gap-5">
    <p className={styles['panel__header']}>
      {WELCOME_TEXTS.dailyQuoteHeader}
    </p>
    <p className={styles['panel__text']}>
      {dailyQuote.text}
    </p>
    <div className="flex justify-end">
      <p className={styles['panel__text']}>
        {dailyQuote.author}
      </p>
    </div>
    </div>
  );
}