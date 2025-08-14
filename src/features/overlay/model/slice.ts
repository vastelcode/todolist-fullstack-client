import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// 1. определяем тип оверлея

type OverlayMode = boolean;

// 2. определяем тип состояния
interface OverlayState {
  isVisible: OverlayMode;
};

// 3. задаём начальное состояние

const initialState: OverlayState = {
  'isVisible': false
};

// 4. создаём срез

const overlaySlice = createSlice({
  name: 'overlay',
  initialState,
  reducers: {
    // 5. создаём actions
    toggleOverlay(state) {
      state.isVisible = !state.isVisible;
    },

    setOverlay(state, action: PayloadAction<OverlayMode>) {
      state.isVisible = action.payload;
    }
  }
});

// 6. экспорт экшенов

export const { toggleOverlay, setOverlay } = overlaySlice.actions;

// 7. экспорт обработчика

export default overlaySlice.reducer;