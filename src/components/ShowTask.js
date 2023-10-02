// A component that displays the tasklist section.
// It includes a header showing the title and tasks count, followed by the list of tasks.
// Class names are used to apply css properties inheritted from the index component through the virtual DOM tree.

const ShowTask = ({tasklist, setTasklist, handleEdit, handleDelete}) => {
    return (
        <section className='showTask'>
            <p className="head">
                <span>
                    <span className="title">Todo</span>
                    {/* showing the number of current tasks using the length property of the taskList array. */}
                    <span className="count">{tasklist.length}</span>
                </span>
                {/* Clearing all tasks on click by setting the taskList state of the App component to an enpty array. */}
                <span className="clearAll" onClick={() => setTasklist([])}>Clear All</span>
            </p>
            <ul>
                {/* Creating the tasklist by mapping through the task state array of the App component and displaying its properties. */}
                {tasklist.map((task) => (
                    <li key={task.id}>
                        <p>
                            <span className="name">{task.name}</span>
                            <span className="time">{task.time}</span>
                        </p>
                        {/* Calling the handleEdit() and handleDelete() event handler functions on icons click event. */}
                        <i className="bi bi-pencil-square" onClick={() => handleEdit(task.id)}></i>
                        <i className="bi bi-trash" onClick={() => handleDelete(task.id)}></i>
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default ShowTask;