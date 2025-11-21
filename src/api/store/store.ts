import {
  configureStore,
  combineSlices,
  type Action,
  type ThunkAction,
} from '@reduxjs/toolkit';

import { authSlice } from './slices/auth.slice';

const rootReducer = combineSlices({
  auth: authSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
