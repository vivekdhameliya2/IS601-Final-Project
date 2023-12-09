import { createSlice } from "@reduxjs/toolkit";


const initialState = {
}

const homeSlice = createSlice({
    name: 'home',
    initialState,
    reducers: {
        fetchHome: (state) => {},
    }
})

export const { fetchHome } = homeSlice.actions;

export default homeSlice.reducer;