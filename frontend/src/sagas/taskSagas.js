import { put } from "redux-saga/effects";
import * as ActionCreators from "actions";
import * as API from "api";

export function* createTaskSaga(action) {
  try {
    const { task } = action.payload;

    const { data: createdTask } = yield API.createTask(task);

    yield put(ActionCreators.createTaskSuccess(createdTask));
  } catch (err) {
    const error = err.response?.data?.errors[0]?.message || "An unknown error occurred";

    yield put(ActionCreators.createTaskError(error));
  }
}

export function* updateTaskSaga(action) {
  try {
    const { id, newTaskData } = action.payload;

    const { data: updatedTask } = yield API.updateTask(id, newTaskData);

    yield put(ActionCreators.updateTaskSuccess(updatedTask));
  } catch (err) {
    const error = err.response?.data?.errors[0]?.message || "An unknown error occurred";

    yield put(ActionCreators.updateTaskError(error));
  }
}

export function* getTasksSaga(action) {
  try {
    const { data: tasks } = yield API.getTasks(action.payload);

    yield put(ActionCreators.getTasksSuccess(tasks));
  } catch (err) {
    const error = err.response?.data?.errors[0]?.message || "An unknown error occurred";

    yield put(ActionCreators.getTasksError(error));
  }
}

export function* deleteTaskSaga(action) {
  try {
    const { id } = action.payload;

    const { data: deletedTaskId } = yield API.deleteTask(id);

    yield put(ActionCreators.deleteTaskSuccess(deletedTaskId));
  } catch (err) {
    const error = err.response?.data?.errors[0]?.message || "An unknown error occurred";

    yield put(ActionCreators.deleteTaskError(error));
  }
}
