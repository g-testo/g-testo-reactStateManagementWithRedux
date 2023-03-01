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
        fetchUsers: (state, action) => {
            state.users = initialUsers;
        },
        fetchCurrentUserIndex: (state, action) => {
            state.currentUserIndex = initialCurrentUserIndex;
        },
    },
    // extraReducers: (builder) => {
    //     builder
    //         .addCase(actionFromAnotherSlice, (state, action) => {})
    //         .addDefaultCase((state, action) => {});
    // },
});

export const { fetchUsers } = userSlice.actions;

export default userSlice.reducer;
