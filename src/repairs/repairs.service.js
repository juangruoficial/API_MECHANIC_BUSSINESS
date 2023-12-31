import Repair from './repairs.model.js';

export class RepairService {
  async getOneRepair(id) {
    return await Repair.findOne({
      where: {
        id,
        status: 'pending',
      },
    });
  }

  async getAllRepairs() {
    return await Repair.findAll({
      where: {
        status: 'pending',
      },
    });
  }

  async createRepair(data) {
    return await Repair.create(data);
  }

  async updateRepair(repair, data) {
    return await repair.update(data);
  }

  async deleteRepair(repair) {
    return await repair.update({
      status: 'cancelled',
    });
  }
}
