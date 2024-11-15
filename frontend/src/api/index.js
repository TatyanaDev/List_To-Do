import { BASE_URL } from "config";
import QS from "query-string";
import axios from "axios";

const http = axios.create({
  headers: {
    "Content-Type": "application/json",
  },
  baseURL: `${BASE_URL}/api`,
});

export const createTask = async (task) => {
  try {
    const { data } = await http.post(`/tasks`, task);

    return data;
  } catch (error) {
    throw error;
  }
};

export const updateTask = async ({ id, newTaskData }) => {
  if (!id) {
    throw new Error("Task ID is required for updating a task.");
  }

  try {
    const { data } = await http.patch(`/tasks/${id}`, newTaskData);

    return data;
  } catch (error) {
    throw error;
  }
};

export const getTasks = async ({ page = 1, limit = 5 }) => {
  try {
    const query = QS.stringify({ page, limit });

    const { data } = await http.get(`/tasks?${query}`);

    return data;
  } catch (error) {
    throw error;
  }
};

export const deleteTask = async (id) => {
  if (!id) {
    throw new Error("Task ID is required for deleting a task.");
  }

  try {
    const { data } = await http.delete(`/tasks/${id}`);

    return data;
  } catch (error) {
    throw error;
  }
};

export default http;
