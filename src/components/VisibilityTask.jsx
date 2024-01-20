export const VisibilityTask = ({
  isChecked,
  setShowCompleted,
  deleteTaskCompleted,
}) => {
  const handleDelete = () => {
    if (window.confirm("Eliminar")) {
      deleteTaskCompleted();
    }
  };
  return (
    <div className="d-flex justify-content-between bg-secondary text-white p-2 border-secondary">
      <div className="form-check form-switch">
        <input
          className="form-check-input"
          type="checkbox"
          checked={isChecked}
          onChange={(e) => setShowCompleted(e.target.checked)}
        />
        <label>Mostrar tareas completadas</label>
      </div>
      <button onClick={handleDelete} className="btn btn-danger btn-sm">
        Borrar
      </button>
    </div>
  );
};
