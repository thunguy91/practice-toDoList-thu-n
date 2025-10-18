function ToDoList() {
    let tasks = ["Learn React", "Build a project", "Read documentation"]
    return (
        <ol className="task-list">
            {tasks.map(task => <li className="task-item">{task}</li>)}
        </ol>
    );
}

export default ToDoList;