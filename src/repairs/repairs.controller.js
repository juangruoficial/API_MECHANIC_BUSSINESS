import { RepairService } from './repairs.service.js';

const repairService = new RepairService();

const getAllRepairs = async (req, res) => {
  try {
    const repairs = await repairService.getAllRepairs();

    return res.json(repairs);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const createRepair = async (req, res) => {
  try {
    const repair = await repairService.createRepair(req.body);

    return res.status(201).json(repair);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const getOneRepair = async (req, res) => {
  try {
    const { id } = req.params;

    const repair = await repairService.getOneRepair(id);

    if (!repair)
      return res.status(404).json({
        status: 'error',
        message: 'Repair with id ' + id + ' does not exist',
      });

    return res.json(repair);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const updateRepair = async (req, res) => {
  try {
    const { id } = req.params;

    const repair = await repairService.getOneRepair(id);

    if (!repair)
      return res.status(404).json({
        status: 'error',
        message: `Repair with ${id} was not found}`,
      });

    const updatedReparation = await repairService.updateRepair(
      repair,
      req.body
    );

    return res.json(updatedReparation);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const deleteRepair = async (req, res) => {
  try {
    const { id } = req.params;

    const repair = await repairService.getOneRepair(id);

    if (!repair)
      return res.status(404).json({
        status: 'error',
        message: `Repair with ${id} was not found}`,
      });

    await repairService.deleteRepair(repair);

    return res.status(204).json(null);
  } catch (error) {
    return res.status(500).json(error);
  }
};

export {
  getAllRepairs,
  createRepair,
  getOneRepair,
  updateRepair,
  deleteRepair,
};
