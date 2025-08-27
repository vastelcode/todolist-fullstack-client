import { createSlice, PayloadAction } from "@reduxjs/toolkit";


// 1. Определяем тип темы
type ThemeMode = 'light' | 'dark';

// 2. Определяем тип состояния
interface ThemeState {
  mode: ThemeMode;
};

// 3. Задаём начальное состояние

const initialState: ThemeState = {
  mode: 'dark'
};

// 4. Создаём срез

const themeSlice = createSlice({
  name:'theme',
  initialState,
  reducers: {
    // 5. Создание actions
    toggleTheme(state) {
      state.mode = state.mode === 'light' ? 'dark' : 'light';
    },

    setTheme(state, action: PayloadAction<ThemeMode>) {
      state.mode = action.payload;
    }
  }
});

// 6. экспорт экшенов
export const { toggleTheme, setTheme } = themeSlice.actions;

// 7. экспорт обработчика
export default themeSlice.reducer;