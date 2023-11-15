import express from 'express';
import {
  findAllTasks,
  addNewTask,
  deleteTask,
} from '../controllers/task.controllers.js';

const router = express.Router();

router.get('/', findAllTasks);

router.post('/', addNewTask);

router.delete('/:id', deleteTask);

export default router;
