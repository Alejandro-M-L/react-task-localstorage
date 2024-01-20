import { useState } from "react";

export const TaskCreator = ({ createNewTask }) => {
  //console.log(props)
  const [newTask, setNewTask] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    createNewTask(newTask);
    localStorage.setItem("tarea", newTask);
    setNewTask("");
  };
  return (
    <form onSubmit={handleSubmit} className="my-2 row">
      <div className="col-9">
        <input
          type="text"
          placeholder="Ingresa nueva tarea"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          className="form-control"
        />
      </div>
      <div className="col-3">
        <button className="btn btn-primary btn-sm">Guardar</button>
      </div>
    </form>
  );
};
