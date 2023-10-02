import React from "react";
import Header from "./components/Header";
import AddTask from "./components/AddTask";
import ShowTask from "./components/ShowTask";

function App() {
  //Setting intial state values for distribution to components.
  const [task, setTask] = React.useState("");
  const [tasklist, setTasklist] = React.useState(
    // Parsing the locally saved JSON file to retrieve the tasks list,
    // or creating a new empty array if no data is found locally.
    JSON.parse(localStorage.getItem("tasklist")) || []
  );
  const [editid, setEditid] = React.useState(0);
  const [theme, setTheme] = React.useState(
    // Parsing the locally saved JSON file to retrieve the display theme data,
    // or setting the theme state to "medium" if no data is found.
    JSON.parse(localStorage.getItem("theme")) || "medium"
  );

  // Declaring the onSubmit() event handler function.
  const handleSubmit = (event) => {
    // Stopping the default ReactJS behavios to avoid loss of inserted data.
    event.preventDefault();

    // Checking if editId is true (more than 0). If true, then the task is in edit existing task mode and the if statement is executed.
    // A new date is created and assigned to the "date" variable.
    // The task is selected from the tasklist using find() and assigned as the value to the "selectedTask" variable.
    // The tasklist is searched using map() to find the matching id of the targeted task.
    // The task with the matching id is updated to the new data.
    // The other tasks are refilled with their current data and the updated tasklist is contained in the "updateTask" variable.
    // The taskList state is updated using its setter function.
    // The editID and the task states are set back to their default values using their setter functions.
    if (editid) {
      const date = new Date();
      const selectedTask = tasklist.find((task) => task.id === editid);
      const updateTask = tasklist.map((e) =>
        e.id === selectedTask.id
          ? (e = {
              id: e.id,
              name: task,
              time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`,
            })
          : { id: e.id, name: e.name, time: e.time }
      );
      setTasklist(updateTask);
      setEditid(0);
      setTask("");
      return;
    }

    // Checking if task is true (has input). If true, then the app is in the add new task mode, and the if statement is executed.
    // A new date is created and assigned to the "date" variable.
    // A new task object is created including the time property of the date variable as its id,
    // the value of the tasks' input field (by the user) as its name,
    // and the date value, converted to a string value, as its time key value.
    // The task state is set back to its deffault value.
    if (task) {
      const date = new Date();
      setTasklist([
        ...tasklist,
        {
          id: date.getTime(),
          name: task,
          time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`,
        },
      ]);
      setTask("");
    }
  };

  // A click event handler that sets the relevant state values to the targetted tasks values for editing the task.
  const handleEdit = (id) => {
    const selectedTask = tasklist.find((task) => task.id === id);
    setTask(selectedTask.name);
    setEditid(id);
  };

  // A click event handler that selects a task based on its id and filters it our of the current tasklist.
  // The taskList state is update.
  const handleDelete = (id) => {
    const updatedTasklist = tasklist.filter((task) => task.id !== id);
    setTasklist(updatedTasklist);
  };

  // Strignifying the current taskList state JSON object and saving it as a new locally stored item.
  React.useEffect(() => {
    localStorage.setItem("tasklist", JSON.stringify(tasklist));
    // setting the taskList as a dependency for the useEffect() hook so that it is saved when updated.
  }, [tasklist]);

  // Strignifying the current theme state JSON object and saving it as a new locally stored item.
  React.useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(theme));
    // setting the theme as a dependency for the useEffect() hook so that it is saved when updated.
  }, [theme]);

  // The return statement
  // Styling is added through class names, and is inheritted from the index component.
  return (
    <div className={"App " + theme}>
      <div className="container">
        {/* Using the properties of the Header component to call event handler and state setter functions. */}
        <Header setTheme={setTheme} theme={theme}>
          Taskmate
        </Header>
        <AddTask
          // Using the properties of the AddTask component to call event handler and state setter functions.
          handleSubmit={handleSubmit}
          editid={editid}
          task={task}
          setTask={setTask}
        />
        <ShowTask
          // Using the properties of the ShowTask component to call event handler and state setter functions.
          tasklist={tasklist}
          setTasklist={setTasklist}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
      </div>
    </div>
  );
}

export default App;
