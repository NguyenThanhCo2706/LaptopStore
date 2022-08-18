import { configureStore, ThunkAction, combineReducers, Action } from '@reduxjs/toolkit';
import userReducer from '../redux/userSlice'
import productReducer from '../redux/productSlice';
import { connectRouter, routerMiddleware } from 'connected-react-router';

import { createBrowserHistory } from "history";


const rootReducer = combineReducers({
  user: userReducer,
  product: productReducer
})

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
});


export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
