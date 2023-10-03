//sequalize es el intermediario o ORM entre la base de
//datos y nuestro application
import { Sequelize } from 'sequelize';
import { envs } from '../enviroments/enviroments.js';

const sequalize = new Sequelize(envs.DB_URI, {
  logging: false,
});

export async function authenticate() {
  try {
    await sequalize.authenticate();
    console.log('Connection established ✅');
  } catch (error) {
    throw new Error('Error authenticating ❌', error);
  }
}

export async function syncUp() {
  try {
    await sequalize.sync();
    console.log('Connection synced perfectly ✅');
  } catch (error) {
    throw new Error('Error syncing ❌', error);
  }
}

export default sequalize;
