import { Sequelize } from 'sequelize-typescript';
import { databaseConfig } from '../config/database.config';
import Example from './Example';

const sequelize = new Sequelize(databaseConfig);
sequelize.addModels([
  Example,
]);

export default sequelize;
