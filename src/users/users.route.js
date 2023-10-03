import Router from 'express';
import {
  getAllUsers,
  createUser,
  getOneUser,
  updateUser,
  deleteUser,
} from './users.controller.js';

export const router = Router();

//Agrupa todas las rutas que tenga el mismo path en este caso del GET Y DEL POST
router.route('/').get(getAllUsers).post(createUser);

router.route('/:id').get(getOneUser).patch(updateUser).delete(deleteUser);
