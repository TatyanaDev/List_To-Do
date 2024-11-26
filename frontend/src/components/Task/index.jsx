import formatDate from "utils/formatDate";
import styles from "./task.module.scss";

const Task = ({
  body,
  isDone,
  id,
  deadline,
  deleteTaskRequest,
  updateTaskRequest,
}) => (
  <li className={styles.taskContainer}>
    <h2 className={styles.taskInfo}>
      <span>ID: {id}</span>
      {deadline && <span>{formatDate(deadline)}</span>}
    </h2>

    <div className={styles.taskContentWrapper}>
      <input
        type="checkbox"
        checked={isDone}
        className={styles.input}
        onChange={({ target }) =>
          updateTaskRequest({ id, newTaskData: { isDone: target.checked } })
        }
      />
      <p className={styles.taskBody}>{body}</p>
      <button
        onClick={() => deleteTaskRequest(id)}
        className={styles.deleteButton}
      >
        X
      </button>
    </div>
  </li>
);

export default Task;
