import User from './users.model.js';

export class UserService {
  async getOneUser(id) {
    return await User.findOne({
      where: {
        id,
        //status: true,
      },
    });
  }

  async getAllUsers() {
    return await User.findAll();
  }

  async createUser(data) {
    return await User.create(data);
  }

  async updateUser(user, data) {
    return await user.update(data);
  }

  async deleteUser(user) {
    return await user.update({
      status: 'disabled',
    });
  }
}
