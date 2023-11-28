import styles from "./NoTasks.module.css";
import clipBoard from "../../assets/Clipboard.svg";

export function NoTasks() {
  return (
    <div className={styles.noTasksContainer}>
      <img src={clipBoard} alt="Clipboard image" />
      <div className={styles.textsContainer}>
        <strong>Você ainda não tem tarefas cadastradas</strong>
        <p>Crie tarefas e organize seus itens a fazer</p>
      </div>
    </div>
  );
}
