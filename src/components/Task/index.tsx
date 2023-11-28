import { Trash } from "phosphor-react";
import { Checkbox } from "./components/Checkbox";
import { ITask } from "../../App";
import styles from "./Task.module.css";

export interface TaskProps {
  task: ITask;
  onDeleteTask: (task: ITask) => void;
  onUpdateTask: (task: ITask, value: boolean) => void;
}

export function Task({ task, onDeleteTask, onUpdateTask }: TaskProps) {
  function handleCheckboxChange() {
    onUpdateTask(task, !task.finished);
  }

  function handleDeleteTask() {
    onDeleteTask(task);
  }

  return (
    <div className={styles.taskContainer}>
      <Checkbox onClick={handleCheckboxChange} task={task} />
      <button onClick={handleDeleteTask} title="Deletar tarefa">
        <Trash size={16} />
      </button>
    </div>
  );
}
