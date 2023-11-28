import { useState } from "react";
import { Header } from "./components/Header";
import { NewTask } from "./components/NewTask";
import { TasksBox } from "./components/TasksBox";

import styles from "./App.module.css";
import "./global.css";

export interface ITask {
  id: string;
  content: string;
  finished: boolean;
}

export function App() {
  const [tasks, setTasks] = useState<ITask[]>([]);

  function createNewTask(task: string) {
    const newTaskCreated = {
      id: `${tasks.length}${task.length}`,
      content: task,
      finished: false,
    };

    setTasks([...tasks, newTaskCreated]);
  }

  function updateTask(taskToUpdate: ITask, value: boolean) {
    const updatedTask = tasks.map((task) => {
      if (task === taskToUpdate) {
        return { ...task, finished: value };
      }

      return { ...task };
    });

    setTasks(updatedTask);
  }

  function deleteTask(taskToDelete: ITask) {
    const tasksWithoutDeletedOne = tasks.filter((task) => {
      return task !== taskToDelete;
    });

    setTasks(tasksWithoutDeletedOne);
  }

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <main>
          <NewTask onCreateTask={createNewTask} />
          <TasksBox
            tasks={tasks}
            onDeleteTask={deleteTask}
            onUpdateTask={updateTask}
          />
        </main>
      </div>
    </div>
  );
}
