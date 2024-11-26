import TaskInputPanel from "components/TaskInputPanel/index";
import TasksList from "components/TasksList/index";
import styles from "./toDoList.module.scss";

const ToDoList = () => (
  <div className={styles.pageContainer}>
    <header className={styles.headerWrapper}>
      <h1 className={styles.header}>To-Do List</h1>
    </header>
    <main>
      <TaskInputPanel />
      <TasksList />
    </main>
  </div>
);

export default ToDoList;