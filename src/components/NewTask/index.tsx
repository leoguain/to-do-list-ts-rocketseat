import {
  ChangeEvent,
  FormEvent,
  InvalidEvent,
  useEffect,
  useRef,
  useState,
} from "react";
import { PlusCircle } from "phosphor-react";

import styles from "./NewTask.module.css";

interface NewTaskProps {
  onCreateTask: (task: string) => void;
}

export function NewTask({ onCreateTask }: NewTaskProps) {
  const inputReference = useRef<HTMLInputElement | null>(null);
  const [newTask, setNewTask] = useState("");
  const isNewTaskEmpty = newTask.length === 0;

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault();
    if (newTask.trim() !== "") {
      onCreateTask(newTask);
    }
    setNewTask("");
    if (inputReference.current) {
      inputReference.current.focus();
    }
  }

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity("");
    setNewTask(event.target.value);
  }

  function handleNewTaskInvalid(event: InvalidEvent<HTMLInputElement>) {
    event.target.setCustomValidity("Esse campo é obrigatório");
  }

  useEffect(() => {
    if (inputReference.current) {
      inputReference.current.focus();
    }
  }, []);

  return (
    <form onSubmit={handleCreateNewTask} className={styles.taskForm}>
      <input
        name="task"
        placeholder="Adicione uma nova tarefa"
        onChange={handleNewTaskChange}
        value={newTask}
        onInvalid={handleNewTaskInvalid}
        ref={inputReference}
        required
      />
      <button type="submit" disabled={isNewTaskEmpty}>
        Criar
        <PlusCircle size={16} weight="bold" />
      </button>
    </form>
  );
}
