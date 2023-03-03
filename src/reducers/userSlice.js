import { createSlice, current } from "@reduxjs/toolkit";
import { initialUsers, initialCurrentUserIndex } from "../assets/data/initialData";

const initialState = {
    currentUserIndex: null,
    users: [],
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        fetchInitialUserData: (state, action) => {
            state.users = initialUsers;
            state.currentUserIndex = initialCurrentUserIndex;
        },
        updateCurrentUserIndex: (state, action) => {
            state.currentUserIndex = action.payload;
        },
    }
});

export const { fetchInitialUserData, updateCurrentUserIndex } = userSlice.actions;

export default userSlice.reducer;
