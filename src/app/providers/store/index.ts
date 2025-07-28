import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";

import storage from 'redux-persist/lib/storage';
import rootReducer from "./root-reducer.ts";

const persistConfig = {
  key: 'root',
  storage,
  whitelist: []
};

const persistedReducer = persistReducer(persistConfig,rootReducer);

export const store = configureStore({
  reducer: persistedReducer, // Передаем наш обернутый редюсер
  
  // Настройка middleware
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: {
        // Игнорируем действия redux-persist, т.к. они не сериализуемы
        ignoredActions: ['persist/PERSIST'],
      }
    })
  },
});

export const persistor = persistStore(store);

// типы для TS

// RootState - тип состояния хранилища
export type RootState = ReturnType<typeof store.getState>;

// AppDispatch -  тип функции dispatch нашего хранилища
export type AppDispatch = typeof store.dispatch;
