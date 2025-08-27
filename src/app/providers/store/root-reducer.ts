import { combineReducers } from '@reduxjs/toolkit';

// редюсер для смены темы
import themeReducer from '@/shared/lib/slices/theme-slice.ts';
import overlayReducer from '@/shared/lib/slices/overlay-slice.ts';

const rootReducer = combineReducers({
  theme: themeReducer,
  overlay: overlayReducer
});

export default rootReducer;