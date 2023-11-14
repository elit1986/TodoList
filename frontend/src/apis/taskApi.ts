import axios from 'axios';
import { TaskType } from '../types/task.type';

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
    console.log(err);
  }
};

export const getTaskById = async (id: string) => {
  try {
    const response = await axios.get(`${TASK_API_URL}/${id}`);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export const updateTask = async (id: string, taskData: TaskType) => {
  console.log(id);
  try {
    const response = await axios.put(`${TASK_API_URL}/${id}`, taskData);
    return response.data;
  } catch (err) {
    console.log(err);
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
