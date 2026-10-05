import Task from './Task';

const TaskList = ({
  tasks,
  onEdit,
  onDelete,
  onComplete,
}) => {
  return (
    <div className="task-container">
      {tasks.map((task) => (
        <Task
          key={task.id}
          {...task}
          onEdit={onEdit}
          onDelete={onDelete}
          onComplete={onComplete}
        />
      ))}
    </div>
  );
};

export default TaskList;
