const Task = ({ task, isCurrentUser, taskAuthor, privacyMode }) => {
    return (
        <ul>
            <li>Author: {privacyMode ? "Private" : "Author:" + (isCurrentUser ? "You" : taskAuthor)}</li>
            <li>Title: {task.title}</li>
            <li>Completed? {task.isCompleted ? "yes" : "no"}</li>
        </ul>
    );
};

export default Task;
