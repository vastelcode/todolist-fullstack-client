import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setTheme } from "../../model/slice.ts";

export const ThemeInitializer = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');

    const initialTheme = savedTheme === 'light' || savedTheme === 'dark' ? savedTheme : 'dark';

    dispatch(setTheme(initialTheme))
  },[dispatch]);
  
  return null;
}