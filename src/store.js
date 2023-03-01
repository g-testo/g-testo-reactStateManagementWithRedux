import { configureStore } from "@reduxjs/toolkit";

import uiReducer from "./reducers/uiSlice";
import userReducer from "./reducers/userSlice";
import taskReducer from "./reducers/taskSlice";

export const store = configureStore({
    middleware: [],
    reducer: {
        ui: uiReducer,
        user: userReducer,
        task: taskReducer,
    },
});
