import axios from 'axios';
import { TaskType } from '../types/task.type.js';

const TASK_API_URL = `${import.meta.env.VITE_BASE_URL}/tasks`;

export const addTask = async (taskData: TaskType) => {
  try {
    const response = await axios.post(TASK_API_URL, taskData);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export const getTasks = async () => {
  try {
    const response = await axios.get(TASK_API_URL);
    return response.data;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      console.log('Axios error:', err.message);
    } else {
      console.log('Unexpected error:', err);
    }
    throw err;
  }
};

export const deleteTask = async (id: string) => {
  try {
    const response = await axios.delete(`${TASK_API_URL}/${id}`);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};
