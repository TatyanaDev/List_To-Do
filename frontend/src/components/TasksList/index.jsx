import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { useEffect } from "react";
import * as ActionCreators from "actions";
import Error from "components/Error";
import Task from "components/Task";

const TasksList = () => {
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
    <>
      {error && <Error error={error} clearError={clearTaskError} />}
      <ul>
        {tasks.map((task) => (
          <Task
            key={task.id}
            {...task}
            deleteTaskRequest={deleteTaskRequest}
            updateTaskRequest={updateTaskRequest}
          />
        ))}
      </ul>
    </>
  );
};

export default TasksList;
