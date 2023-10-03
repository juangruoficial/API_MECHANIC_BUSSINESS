import Router from 'express';
import {
  getAllRepairs,
  createRepair,
  getOneRepair,
  updateRepair,
  deleteRepair,
} from './repairs.controller.js';

export const router = Router();

//Agrupa todas las rutas que tenga el mismo path en este caso del GET Y DEL POST
router.route('/').get(getAllRepairs).post(createRepair);

router.route('/:id').get(getOneRepair).patch(updateRepair).delete(deleteRepair);
