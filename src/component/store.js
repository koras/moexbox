import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers';

const store = configureStore({
  reducer: 
    {  
        users: usersReducer
    },
});

export default store;