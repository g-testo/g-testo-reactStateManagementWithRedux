const initialCurrentUserIndex = 0;

const initialUsers = ["Jane", "John"];

const initialTasks = [
    {
        authorIndex: 0,
        title: "Learn React",
        isCompleted: true,
    },
    {
        authorIndex: 1,
        title: "Learn React Router",
        isCompleted: true,
    },
    {
        authorIndex: 0,
        title: "Learn Redux",
        isCompleted: false,
    },
];

export { initialTasks, initialUsers, initialCurrentUserIndex };
