import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
    privacyMode: false,
    theme: "light",
};

export const uiSlice = createSlice({
    name: "ui",
    initialState,
    reducers: {
        updatePrivacyMode: (state, action) => {
            state.privacyMode = action.payload;
        },
        updateTheme: (state, action) => {
            state.theme = action.payload;
        }
    },
    // extraReducers: (builder) => {
    //     builder
    //         .addCase(actionFromAnotherSlice, (state, action) => {})
    //         .addDefaultCase((state, action) => {});
    // },
});

export const { fetchTasks } = uiSlice.actions;

export default uiSlice.reducer;
