import { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectOverlayVisible } from "@/shared/lib/selectors/overlay-selectors.ts";

export const ScrollLock = () => {
  const isOverlayVisible = useSelector(selectOverlayVisible);

  useEffect(() => {
    if(isOverlayVisible) {
      // запоминаем текущую позицию скролла
      const scrollY = window.scrollY;

      // блокируем скролл
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;

      // Сохраняем позицию скролла в data-атрибут
      document.body.setAttribute('data-scroll-y', scrollY.toString());

    }
    else {
      // получаем скролл
      const scrollY = document.body.getAttribute('data-scroll-y') || '0';

      // востанавливаем скролл
      document.body.style.position = '';
      document.body.style.top = ``;

      // восстанавливаем позицию скролла
      window.scrollTo(0, parseInt(scrollY));

      // чистим атрибут
      document.body.removeAttribute('data-scroll-y');
    }

    // очистка при размонтировании
    return () => {
      document.body.style.position = '';
      document.body.style.top = '';

      const scrollY = document.body.getAttribute('data-scroll-y') || '0';

      window.scrollTo(0, parseInt(scrollY));

      document.body.removeAttribute('data-scroll-y');
    }
  },[isOverlayVisible]);

  // не возвращает никаких пользовательских элементов
  return null;
}