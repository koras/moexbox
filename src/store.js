import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slices/counterSlice.js';
import newsReducer from './slices/newsSlice.js';

  const store = configureStore({
  reducer: {
    // counter – это свойство будет внутри объекта общего состояния: state.counter
    counter: counterReducer,
    newsItem: newsReducer,
  },
});

export default   store;