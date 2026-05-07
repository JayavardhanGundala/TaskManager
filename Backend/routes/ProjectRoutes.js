import express from 'express';

const router = express.Router();

import protect from '../middleware/auth.js';
import roleMiddleware from '../middleware/role.js';

import {
  createProject ,
  getProjects,
} from '../controllers/projectController.js';

router.post('/', protect, roleMiddleware('Admin'), createProject);

router.get('/', protect,roleMiddleware('Admin'), getProjects);

export default router;