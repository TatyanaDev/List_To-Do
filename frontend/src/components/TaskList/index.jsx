import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { useEffect } from "react";
import * as ActionCreators from "actions";
import Error from "components/Error/index";
import Task from "components/Task/index";

const TaskList = () => {
  const { tasks, error } = useSelector(({ task }) => task);
  const dispatch = useDispatch();

  const {
    getTasksRequest,
    clearTaskError,
    deleteTaskRequest,
    updateTaskRequest,
  } = bindActionCreators(ActionCreators, dispatch);

  useEffect(() => {
    getTasksRequest();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section>
      {error && <Error error={error} clearError={clearTaskError} />}
      {tasks.map((task) => (
        <Task
          key={task.id}
          {...task}
          deleteTaskRequest={deleteTaskRequest}
          updateTaskRequest={updateTaskRequest}
        />
      ))}
    </section>
  );
};

export default TaskList;
