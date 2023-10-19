import { configureStore } from '@reduxjs/toolkit'
import homeReducer from './reducers/home';
import todoReducer from './reducers/todo';

export const store = configureStore({
  reducer: {
    home: homeReducer,
    todo: todoReducer,
  },
});