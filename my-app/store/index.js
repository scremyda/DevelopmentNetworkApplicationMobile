import { configureStore } from '@reduxjs/toolkit';
import {autopartReducer} from './autopartSlice';
import { filterReducer } from './filterSlice';

export const store = configureStore({
    reducer: {
        autopart: autopartReducer,
        filter: filterReducer,
    },
});
