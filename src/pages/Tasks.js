import Task from "./Task";
import { useSelector } from "react-redux";

const Tasks = () => {
    const { tasks } = useSelector((state) => state.task);

    return (
        <>
            <h2>Tasks</h2>
            {tasks.map((task, index) => {
                return <Task key={index} task={task} />;
            })}
        </>
    );
};

export default Tasks;
