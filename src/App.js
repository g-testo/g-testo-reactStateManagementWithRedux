import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";

import { useSelector, useDispatch } from "react-redux";

import About from "./pages/About";
import Tasks from "./pages/Tasks";
import Settings from "./pages/Settings";

import { fetchCurrentUserIndex, fetchUsers } from "./reducers/userSlice";
import { fetchTasks } from "./reducers/taskSlice";

const App = () => {
    const dispatch = useDispatch();
    const { user, task, ui } = useSelector((state) => state);
    const { users, currentUserIndex } = user;
    const { privacyMode, theme } = ui;
    const { tasks } = task;

    useEffect(() => {
        dispatch(fetchCurrentUserIndex());
        dispatch(fetchUsers());
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
                <Route path="/" element={<Layout currentUser={users[currentUserIndex]} privacyMode={privacyMode} />}>
                    <Route
                        index
                        element={
                            <Tasks
                                tasks={tasks}
                                currentUserIndex={currentUserIndex}
                                privacyMode={privacyMode}
                                users={users}
                            />
                        }
                    />
                    <Route path="about" element={<About />} />
                    <Route
                        path="settings"
                        element={
                            <Settings
                                users={users}
                                theme={theme}
                                currentUserIndex={currentUserIndex}
                                setCurrentUserIndex={setCurrentUserIndex}
                                privacyMode={privacyMode}
                                setPrivacyMode={setPrivacyMode}
                                setTheme={setTheme}
                            />
                        }
                    />
                </Route>
            </Routes>
        </div>
    );
};
export default App;
