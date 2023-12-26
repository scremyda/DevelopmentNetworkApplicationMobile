// autopartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    autoparts_list: [],
    autopart: { name: "" },
};

export const autopartSlice = createSlice({
    name: 'autoparts',
    initialState,
    reducers: {
        setAutoparts: (state, { payload }) => {
            console.log(payload);
            state.autoparts_list = payload.autoparts_list;
        },
        setAutopart: (state, { payload }) => {
            console.log(payload);
            state.autopart = payload.autopart;
        },
        resetAutopart: (state) => {
            state.autopart = {};
        },
    },
});

export const autopartReducer = autopartSlice.reducer;

export const { setAutoparts, setAutopart, resetAutopart } = autopartSlice.actions;
