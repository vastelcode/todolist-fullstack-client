import { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "./store/index.js";


// типы для CSS-переменных
type ThemeVariables = {
  '--color-bg':string;
  '--color-header':string;
  '--color-content':string;
  '--color-text': string;
};

// конфигурация цветовых схем
const THEME_CONFIG: Record<'light' | 'dark', ThemeVariables> = {
  light : {
    '--color-bg':'#FFFFFF',
    '--color-header':'#232360',
    '--color-content':'#F3F4F8',
    '--color-text': '#8C97A8'
  },
  dark: {
    '--color-bg': '#1E1F25',
    '--color-header': '#FAFAFA',
    '--color-content':'#131517',
    '--color-text': '#E1E3E7'
  }
};
// провайдер для темы
export const ThemeProvider = ({ children } : { children: React.ReactNode }) => {
  // получаем тему из хранилища
  const theme = useSelector((state: RootState) => state.theme.mode);

  useEffect(() => {
    // применяем CSS-переменные к корневому элементу
    const root = document.documentElement;
    // получаем соотвествующие переменные
    const themeVariables = THEME_CONFIG[theme];

    Object.entries(themeVariables).forEach(([key,value]) => {
      root.style.setProperty(key, value);
    });

    // сохраняем тему в localStorage
    localStorage.setItem('theme',theme);

  },[theme]);

  return children;
}