import { Router } from 'express';
import { router as repairsRouter } from '../repairs/repairs.route.js';
import { router as usersRouter } from '../users/users.route.js';

export const router = Router();

//lo que ponnga aca se concatena con /Api/V1
router.use('/users', usersRouter);
router.use('/repairs', repairsRouter);
