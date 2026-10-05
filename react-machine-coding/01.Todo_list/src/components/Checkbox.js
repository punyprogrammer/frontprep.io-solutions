const Checkbox = ({
  id,
  name,
  onToggle,
  checked,
}) => {
  const checkboxId = `task-${id}`;

  return (
    <div>
      <input
        type="checkbox"
        id={checkboxId}
        checked={checked}
        onChange={onToggle}
      />

      <label htmlFor={checkboxId}>
        {name}
      </label>
    </div>
  );
};

export default Checkbox;
