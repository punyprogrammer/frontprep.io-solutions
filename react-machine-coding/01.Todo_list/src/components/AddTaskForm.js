import { useState } from 'react';

const AddTaskForm = ({ onAddTask }) => {
  const [taskName, setTaskName] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const trimmedName = taskName.trim();

    if (!trimmedName) return;

    onAddTask(trimmedName);
    setTaskName('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="new-task">Add task</label>

      <input
        id="new-task"
        value={taskName}
        onChange={(event) => setTaskName(event.target.value)}
        placeholder="Enter a task"
      />

      <button type="submit">
        Add
      </button>
    </form>
  );
};

export default AddTaskForm;
