import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slices/counterSlice.js';

  const store = configureStore({
  reducer: {
    // counter – это свойство будет внутри объекта общего состояния: state.counter
    counter: counterReducer,
  },
});

export default   store;