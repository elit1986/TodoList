import express from 'express';
import {
  findAllTasks,
  addNewTask,
  updateTask,
  deleteTask,
  getTask,
} from '../controllers/task.controllers.js';
const router = express.Router();

router.get('/', findAllTasks);

router.post('/', addNewTask);

router.put('/:id', updateTask);

router.delete('/:id', deleteTask);

router.get('/:id', getTask);

export default router;
