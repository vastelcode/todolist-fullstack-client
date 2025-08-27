import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { OverlayPayloadType, OverlayState } from "@/shared/types/overlay/index.ts";






// 3. задаём начальное состояние

const initialState: OverlayState = {
  'isVisible': false,
  type: null,
  taskID: null
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

    setOverlay(state, action: PayloadAction<boolean>) {
      state.isVisible = action.payload;
    },

    showOverlay: (state, action: OverlayPayloadType) => {
      state.isVisible = true;
      state.type = action.payload.type;
      state.taskID = action.payload.taskID || null;
    },
    hideOverlay: (state) => {
      state.isVisible = false;
      state.type = null;
    }
  }
});

// 6. экспорт экшенов

export const { toggleOverlay, setOverlay, showOverlay, hideOverlay } = overlaySlice.actions;

// 7. экспорт обработчика

export default overlaySlice.reducer;