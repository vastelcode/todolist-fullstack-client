import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { toggleTheme, setTheme } from "../slices/theme-slice.ts";
import { AppDispatch } from "@/app/providers/store/index.ts";

export const useThemeActions = () => {
  const dispatch = useDispatch<AppDispatch>();

  const toggleThemeAction = useCallback(() => {
    dispatch(toggleTheme());
  }, [dispatch]);

  const setThemeAction = useCallback((theme: 'light' | 'dark') => {
    dispatch(setTheme(theme));
  }, [dispatch]);

  return { toggleThemeAction, setThemeAction };
} 