import { DataTypes } from 'sequelize';
import sequalize from '../config/database/database.js';

const Repair = sequalize.define('repair', {
  id: {
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
    type: DataTypes.INTEGER,
    field: 'repair_id', // se cambia el nombre este es el nombre como se ve en la base de datos
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'user_id', // se cambia el nombre
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  status: {
    type: DataTypes.ENUM('pending', 'completed', 'cancelled'),
    allowNull: false,
    defaultValue: 'pending',
  },
  createdBy: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'created_by',
  },
});

export default Repair;
