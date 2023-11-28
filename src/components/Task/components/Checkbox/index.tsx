import { InputHTMLAttributes } from "react";

import styles from "./CheckBox.module.css";
import { ITask } from "../../../../App";

interface CheckBoxProps extends InputHTMLAttributes<HTMLInputElement> {
  task: ITask;
}

export function Checkbox({ task, ...props }: CheckBoxProps) {
  return (
    <div className={styles.checkboxContainer}>
      <input type="checkbox" checked={task.finished} {...props} />
      <p
        className={
          task.finished ? styles["paragraph-checked"] : styles.paragraph
        }
      >
        {task.content}
      </p>
    </div>
  );
}
