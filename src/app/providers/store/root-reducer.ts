import { combineReducers } from '@reduxjs/toolkit';

// редюсер для смены темы
import themeReducer from '@/features/theme/model/slice.js';
import overlayReducer from '@/features/overlay/model/slice.ts';

const rootReducer = combineReducers({
  theme: themeReducer,
  overlay: overlayReducer
});

export default rootReducer;