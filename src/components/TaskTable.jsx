import { TaskRow } from "./TaskRow"

export const TaskTable = ({tasks, toogleTask, showCompleted= false}) => {
  const taskTableRows = (doneValue) => {
    // console.log(doneValue)
    return (
      tasks
      .filter(task => task.done === doneValue)  
      .map((task) => (
        <TaskRow task={task} key={task.name} toogleTask={toogleTask}/>
      ))
    )
  }
  return (
    <table className="table table-striped table-bordered border-secondary">
        <thead>
          <tr className="table-primary">
            <th>Tareas</th>
          </tr>
        </thead>
        <tbody>
          {taskTableRows(showCompleted)}
        </tbody>
      </table>
  )
}
