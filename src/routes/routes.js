import { Router } from 'express';
import { router as repairsRouter } from '../repairs/repairs.route.js';
import { router as usersRouter } from '../users/users.route.js';

export const router = Router();

//lo que pomnga aca se concatena cpom /Api/V1
router.use('/users', usersRouter);
router.use('/repairs', repairsRouter);
