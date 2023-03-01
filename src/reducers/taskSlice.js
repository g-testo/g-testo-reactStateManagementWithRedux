import { createSlice, current } from "@reduxjs/toolkit";
import { initialTasks } from "../assets/data/initialData";

const initialState = {
    tasks: []
};

export const taskSlice = createSlice({
    name: "task",
    initialState,
    reducers: {
        fetchTasks: (state, action) => {
            state.tasks = initialTasks;
        },
    },
    // extraReducers: (builder) => {
    //     builder
    //         .addCase(actionFromAnotherSlice, (state, action) => {})
    //         .addDefaultCase((state, action) => {});
    // },
});

export const { fetchTasks } = taskSlice.actions;

export default taskSlice.reducer;
