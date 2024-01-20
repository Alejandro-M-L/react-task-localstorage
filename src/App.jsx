import { useEffect, useState } from "react";
import { Container } from "./components/Container";
import { TaskCreator } from "./components/TaskCreator";
import { TaskTable } from "./components/TaskTable";
import { VisibilityTask } from "./components/VisibilityTask";

function App() {
  // const [taskItems, setTaskItems] = useState([
  //   { name: "mi primera tarea", done: true },
  // ]);
  const [taskItems, setTaskItems] = useState([]);
  const [showCompleted, setShowCompleted] = useState(false);
  function createNewTask(taskName) {
    // Si se repite el la misma tarea no lo agrega
    if (!taskItems.find((task) => task.name === taskName)) {
      setTaskItems([...taskItems, { name: taskName, done: false }]);
    }
  }
  const toogleTask = (task) => {
    setTaskItems(
      taskItems.map((t) => (t.name === task.name ? { ...t, done: !t.done } : t))
    );
  };
  const deleteTaskCompleted = () => {
    setTaskItems(taskItems.filter((task) => !task.done));
    setShowCompleted(false);
  };
  useEffect(() => {
    let data = localStorage.getItem("tareas");
    if (data) {
      setTaskItems(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tareas", JSON.stringify(taskItems));
  }, [taskItems]);

  return (
    <>
      <Container>
        <TaskCreator createNewTask={createNewTask} />
        <TaskTable tasks={taskItems} toogleTask={toogleTask} />
        <VisibilityTask
          isChecked={showCompleted}
          setShowCompleted={(checked) => setShowCompleted(checked)}
          deleteTaskCompleted={deleteTaskCompleted}
        />
        {showCompleted === true && (
          <TaskTable
            tasks={taskItems}
            toogleTask={toogleTask}
            showCompleted={showCompleted}
          />
        )}
      </Container>
    </>
  );
}

export default App;
