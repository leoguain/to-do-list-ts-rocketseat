import { ITask } from "../../App";
import { NoTasks } from "../NoTasks";
import { TasksInfo } from "../TasksInfo";
import { TasksList } from "../TasksList";

import styles from "./TasksBox.module.css";

export interface TaskListProps {
  tasks: ITask[];
  onDeleteTask: (task: ITask) => void;
  onUpdateTask: (task: ITask, value: boolean) => void;
}

export function TasksBox(props: TaskListProps) {
  const isTaskListEmpty = props.tasks.length === 0;

  const tasksCompleted = props.tasks.filter((task) => {
    return task.finished === true;
  }).length;

  return (
    <div className={styles.tasksContainer}>
      <TasksInfo
        tasksCompleted={tasksCompleted}
        tasksCreated={props.tasks.length}
      />
      {isTaskListEmpty ? <NoTasks /> : <TasksList {...props} />}
    </div>
  );
}
