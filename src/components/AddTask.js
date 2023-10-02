// A component that takes in user input, and submits it to the App component using the handleSubmit() event handler of it.
// On user input event, the task state of the App component is updated by calling its setter function.
// The component also contains an add/submit button.
// The child value of the button is defined using a ternary opertor.
// If the editId is true (more than zero), it means a task is selected, and the button shows "Update".
// else if the value is 0 (false), the button shows "Add".

const AddTask = ({ handleSubmit, editid, task, setTask }) => {
  return (
    <section className="addTask">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="task"
          value={task}
          autoComplete="off"
          placeholder="add task"
          maxLength="25"
          onChange={(e) => setTask(e.target.value)}
        />
        <button type="submit">{editid ? "Update" : "Add"}</button>
      </form>
    </section>
  );
};

export default AddTask;
