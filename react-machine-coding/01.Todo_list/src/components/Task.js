import { useState } from 'react';
import Checkbox from './Checkbox';

const Task = ({
  name,
  id,
  onDelete,
  onEdit,
  onComplete,
  completed,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(name);

  const handleEditStart = () => {
    setEditValue(name);
    setIsEditing(true);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const trimmedValue = editValue.trim();

    if (!trimmedValue) return;

    onEdit(id, trimmedValue);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditValue(name);
    setIsEditing(false);
  };

  return (
    <div className="task">
      <Checkbox
        id={id}
        name={name}
        checked={completed}
        onToggle={() => onComplete(id)}
      />

      {isEditing ? (
        <form onSubmit={handleSubmit}>
          <input
            value={editValue}
            onChange={(event) => setEditValue(event.target.value)}
            aria-label={`Edit ${name}`}
            autoFocus
          />

          <button type="submit">
            Save
          </button>

          <button
            type="button"
            onClick={handleCancel}
          >
            Cancel
          </button>
        </form>
      ) : (
        <div>
          <button
            type="button"
            onClick={handleEditStart}
          >
            Edit
          </button>

          <button
            type="button"
            onClick={() => onDelete(id)}
          >
            Delete
          </button>
        </div>
      )}
    </div>
  );
};

export default Task;
