import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
    privacyMode: false,
    theme: "light",
};

export const uiSlice = createSlice({
    name: "ui",
    initialState,
    reducers: {
        togglePrivacyMode: (state) => {
            state.privacyMode = !state.privacyMode;
        },
        toggleTheme: (state) => {
            state.theme = state.theme === "light" ? "dark" : "light";
        }
    }
});

export const { togglePrivacyMode, toggleTheme } = uiSlice.actions;

export default uiSlice.reducer;
