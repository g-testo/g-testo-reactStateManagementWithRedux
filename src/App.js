import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";

import { useSelector, useDispatch } from "react-redux";

import About from "./pages/About";
import Tasks from "./pages/Tasks";
import Settings from "./pages/Settings";

import { fetchInitialUserData } from "./reducers/userSlice";
import { fetchTasks } from "./reducers/taskSlice";

const App = () => {
    const dispatch = useDispatch();
    const { theme } = useSelector((state) => state.ui);

    useEffect(() => {
        dispatch(fetchInitialUserData());
        dispatch(fetchTasks());
    }, []);

    return (
        <div
            style={{
                backgroundColor: theme === "light" ? "white" : "darkgrey",
                color: theme === "light" ? "black" : "white",
            }}
        >
            <h1>State Management</h1>

            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Tasks />} />
                    <Route path="about" element={<About />} />
                    <Route path="settings" element={<Settings />} />
                </Route>
            </Routes>
        </div>
    );
};
export default App;
