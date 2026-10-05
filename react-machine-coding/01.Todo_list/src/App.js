import { useState } from 'react';
import AddTaskForm from './components/AddTasksForm';
import TaskList from './components/TaskList';
import './styles.css';

const INITIAL_TASKS = [
  {
    id: crypto.randomUUID(),
    name: 'Hit the gym',
    completed: true,
  },
  {
    id: crypto.randomUUID(),
    name: 'Walk the dog',
    completed: false,
  },
  {
    id: crypto.randomUUID(),
    name: 'Go to sleep',
    completed: false,
  },
];

export default function App() {
  const [tasks, setTasks] = useState(INITIAL_TASKS);

  const handleAddTask = (name) => {
    const trimmedName = name.trim();

    if (!trimmedName) return;

    setTasks((prevTasks) => [
      ...prevTasks,
      {
        id: crypto.randomUUID(),
        name: trimmedName,
        completed: false,
      },
    ]);
  };

  const handleEdit = (id, updatedName) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id
          ? { ...task, name: updatedName }
          : task
      )
    );
  };

  const handleComplete = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  };

  const handleDelete = (id) => {
    setTasks((prevTasks) =>
      prevTasks.filter((task) => task.id !== id)
    );
  };

  return (
    <>
      <AddTaskForm onAddTask={handleAddTask} />

      <TaskList
        tasks={tasks}
        onEdit={handleEdit}
        onDelete={handleDelete}
        onComplete={handleComplete}
      />
    </>
  );
}
