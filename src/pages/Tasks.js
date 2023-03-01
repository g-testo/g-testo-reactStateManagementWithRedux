import Task from "./Task";

const Tasks = ({ tasks, currentUserIndex, privacyMode, users }) => {
    return (
        <>
            <h2>Tasks</h2>
            {tasks.map((task, index) => {
                const isCurrentUser = task.authorIndex === currentUserIndex;
                return (
                    <Task
                        key={index}
                        task={task}
                        isCurrentUser={isCurrentUser}
                        taskAuthor={users[task.authorIndex]}
                        privacyMode={privacyMode}
                    />
                );
            })}
        </>
    );
};

export default Tasks;
