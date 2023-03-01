import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";

import About from "./pages/About";
import Tasks from "./pages/Tasks";
import Settings from "./pages/Settings";

import { initialTasks, initialUsers, initialCurrentUserIndex } from "./assets/data/initialData";

const App = () => {
    const [currentUserIndex, setCurrentUserIndex] = useState(0);
    const [users, setUsers] = useState([]);

    const [tasks, setTasks] = useState(initialTasks);
    
    const [privacyMode, setPrivacyMode] = useState(false);
    const [theme, setTheme] = useState("light");

    // Fake fetch methods to simulate fetching data from an API
    const fetchCurrentUserIndex = () => {
        return initialCurrentUserIndex;
    };

    const fetchTasks = () => {
        return initialTasks;
    };

    const fetchUsers = () => {
        return initialUsers;
    };
    // End fake fetch methods

    useEffect(() => {
        const fetchedCurrentUser = fetchCurrentUserIndex();
        const fetchedTasks = fetchTasks();
        const fetchedUsers = fetchUsers();

        setCurrentUserIndex(fetchedCurrentUser);
        setTasks(fetchedTasks);
        setUsers(fetchedUsers);
    }, []);

    return (
        <div style={{
            backgroundColor: theme === "light" ? "white" : "darkgrey",
            color: theme === "light" ? "black" : "white",
        }}>
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
