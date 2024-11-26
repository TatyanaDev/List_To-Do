import { Formik, Form, Field } from "formik";
import { useDispatch } from "react-redux";
import { createTaskRequest } from "actions";
import styles from "./taskInputPanel.module.scss";

const TaskInputPanel = () => {
  const dispatch = useDispatch();

  const initialTaskValues = {
    body: "",
    deadline: "",
    isDone: false,
  };

  const handleSubmit = (taskValues, { resetForm }) => {
    dispatch(
      createTaskRequest({
        ...taskValues,
        deadline: taskValues.deadline || null,
      })
    );

    resetForm();
  };

  return (
    <Formik initialValues={initialTaskValues} onSubmit={handleSubmit}>
      <Form className={styles.form}>
        <div className={styles.inputPanelWrapper}>
          <Field
            name="body"
            placeholder="Enter your task"
            className={styles.inputTodo}
          />
          <button type="submit" className={styles.button}>
            Create Task
          </button>
          <button type="reset" className={styles.button}>
            Reset
          </button>
        </div>
        <Field name="deadline" type="date" className={styles.inputDeadline} />
      </Form>
    </Formik>
  );
};

export default TaskInputPanel;
