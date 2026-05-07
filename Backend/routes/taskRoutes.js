import express from 'express';

const router = express.Router();

import protect from '../middleware/auth.js';

import {
  createTask,
  getTasks,
  updateTaskStatus,
} from '../controllers/taskController.js';

router.post('/', protect, createTask);

router.get('/', protect, getTasks);

router.put('/:id', protect, updateTaskStatus);

export default router;