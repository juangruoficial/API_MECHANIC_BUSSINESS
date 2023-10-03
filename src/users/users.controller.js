import { UserService } from './users.service.js';

const userService = new UserService();

const getAllUsers = async (req, res) => {
  try {
    const users = await userService.getAllUsers();
    return res.json(users);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const createUser = async (req, res) => {
  try {
    const user = await userService.createUser(req.body);
    return res.status(201).json(user);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const getOneUser = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await userService.getOneUser(id);

    if (!user)
      return res.status(404).json({
        status: 'error',
        message: 'User with id ' + id + ' does not exist',
      });

    return res.json(user);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const updateUser = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await userService.getOneUser(id);

    if (!user)
      return res.status(404).json({
        status: 'error',
        message: `User with ${id} was not found}`,
      });

    const updatedUser = await userService.updateUser(user, req.body);

    return res.json(updatedUser);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await userService.getOneUser(id);

    if (!user)
      return res.status(404).json({
        status: 'error',
        message: `User with ${id} was not found}`,
      });

    await userService.deleteUser(user);

    return res.status(204).json(null);
  } catch (error) {
    return res.status(500).json(error);
  }
};

export { getAllUsers, createUser, getOneUser, updateUser, deleteUser };
