import {configureStore} from '@reduxjs/toolkit';
import tasksReducer from './tasksSlice.jsx';

export const store = configureStore({
    reducer:{
        tasks:tasksReducer,
    },
});