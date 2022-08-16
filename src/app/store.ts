import { configureStore, ThunkAction, combineReducers, Action } from '@reduxjs/toolkit';
import userReducer from '../components/user/userSlice'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './rootSaga'
import { connectRouter, routerMiddleware } from 'connected-react-router';

import { createBrowserHistory } from "history";

export const history = createBrowserHistory();

const rootReducer = combineReducers({
  router: connectRouter(history),
  user: userReducer
})

const sagaMiddleware = createSagaMiddleware()
export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware, routerMiddleware(history))
});

//bữa nào cmt thử thằng ni lại rồi ngồi phân tích
sagaMiddleware.run(rootSaga)

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
