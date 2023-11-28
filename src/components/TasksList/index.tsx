import { TaskListProps } from "../TasksBox";
import { Task } from "../Task";
import styles from "./TasksList.module.css";

export function TasksList({
  tasks,
  onDeleteTask,
  onUpdateTask,
}: TaskListProps) {
  return (
    <div className={styles.tasks}>
      {tasks.map((task) => (
        <Task
          task={task}
          onDeleteTask={onDeleteTask}
          onUpdateTask={onUpdateTask}
        />
      ))}
    </div>
  );
}
