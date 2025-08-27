import { configureStore } from '@reduxjs/toolkit';
import newsReducer from './slices/newsSlice';

export const store = configureStore({
  reducer: {
    news: newsReducer,
  },
   middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;