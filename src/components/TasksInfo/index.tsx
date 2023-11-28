import styles from "./TasksInfo.module.css";

interface InfoProps {
  tasksCreated: number;
  tasksCompleted: number;
}

export function TasksInfo(props: InfoProps) {
  return (
    <div className={styles.tasksInfo}>
      <div className={styles.createdInfo}>
        <strong>Tarefas criadas</strong>
        <span>{props.tasksCreated}</span>
      </div>
      <div className={styles.finishedInfo}>
        <strong>Concluídas</strong>
        {props.tasksCreated === 0 ? (
          <span>{`${props.tasksCreated}`}</span>
        ) : (
          <span>{`${props.tasksCompleted} de ${props.tasksCreated}`}</span>
        )}
      </div>
    </div>
  );
}
