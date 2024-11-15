import produce from "immer";
import ACTION_TYPES from "actions/types";

const initialState = {
  tasks: [],
  isFetching: false,
  error: null,
};

const handlers = {
  // Create task
  [ACTION_TYPES.CREATE_TASK_REQUEST]: (draft) => {
    draft.isFetching = true;
  },

  [ACTION_TYPES.CREATE_TASK_SUCCESS]: (draft, action) => {
    const { task } = action.payload;

    draft.isFetching = false;
    draft.tasks.push(task);
  },

  [ACTION_TYPES.CREATE_TASK_ERROR]: (draft, action) => {
    const { error } = action.payload;

    draft.isFetching = false;
    draft.error = error;
  },

  // Update task
  [ACTION_TYPES.UPDATE_TASK_REQUEST]: (draft) => {
    draft.isFetching = true;
  },

  [ACTION_TYPES.UPDATE_TASK_SUCCESS]: (draft, action) => {
    const { task } = action.payload;

    const index = draft.tasks.findIndex(({ id }) => id === task.id);

    if (index !== -1) {
      draft.tasks[index] = task;
    }

    draft.isFetching = false;
  },

  [ACTION_TYPES.UPDATE_TASK_ERROR]: (draft, action) => {
    const { error } = action.payload;

    draft.isFetching = false;
    draft.error = error;
  },

  // Get tasks
  [ACTION_TYPES.GET_TASKS_REQUEST]: (draft) => {
    draft.isFetching = true;
  },

  [ACTION_TYPES.GET_TASKS_SUCCESS]: (draft, action) => {
    const { tasks } = action.payload;

    draft.isFetching = false;
    draft.tasks.push(...tasks);
  },

  [ACTION_TYPES.GET_TASKS_ERROR]: (draft, action) => {
    const { error } = action.payload;

    draft.isFetching = false;
    draft.error = error;
  },

  // Delete task
  [ACTION_TYPES.DELETE_TASK_REQUEST]: (draft) => {
    draft.isFetching = true;
  },

  [ACTION_TYPES.DELETE_TASK_SUCCESS]: (draft, action) => {
    const { id } = action.payload;

    draft.isFetching = false;
    draft.tasks = draft.tasks.filter((task) => task.id !== parseInt(id));
  },

  [ACTION_TYPES.DELETE_TASK_ERROR]: (draft, action) => {
    const { error } = action.payload;

    draft.isFetching = false;
    draft.error = error;
  },

  // Clear error
  [ACTION_TYPES.CLEAR_TASK_ERROR]: (draft) => {
    draft.error = null;
  },
};

const taskReducer = produce((draft, action) => {
  const handler = handlers[action.type];

  if (handler) {
    handler(draft, action);
  }
}, initialState);

export default taskReducer;
