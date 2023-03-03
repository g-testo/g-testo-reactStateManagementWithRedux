import React from "react";
import { useSelector } from "react-redux";

const Task = ({ task }) => {
    const { users, currentUserIndex } = useSelector((state) => state.user);
    const { privacyMode } = useSelector((state) => state.ui);

    const author = task.authorIndex === currentUserIndex ? "You" : users[task.authorIndex];
    
    return (
        <ul>
            <li>Author: {privacyMode ? "Private" : "Author:" + author}</li>
            <li>Title: {task.title}</li>
            <li>Completed? {task.isCompleted ? "yes" : "no"}</li>
        </ul>
    );
};

export default Task;
