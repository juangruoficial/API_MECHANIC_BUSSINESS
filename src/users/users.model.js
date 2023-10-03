import { DataTypes } from 'sequelize';
import sequalize from '../config/database/database.js';

const User = sequalize.define('user', {
  id: {
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
    type: DataTypes.INTEGER,
    field: 'user_id', // se cambia el nombre este es el nombre como se ve en la base de datos
  },
  name: {
    type: DataTypes.STRING(200),
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING(100),
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  role: {
    type: DataTypes.ENUM('client', 'employee'),
    allowNull: false,
  },
  status: {
    type: DataTypes.ENUM('available', 'disabled'),
    allowNull: false,
    defaultValue: 'available',
  },
  createdBy: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'created_by',
  },
});

export default User;
