import { ISequelizeConfig } from 'sequelize-typescript';
import * as dbConf from '../../database.json';

const environment: string = process.env.NODE_ENV;

export interface databaseConfig extends ISequelizeConfig {
  username: string;
  password: string;
  name: string;
  host: string;
  dialect: string;
  logging: boolean | Function;
  use_env_variable?: string;
}

export const databaseConfig: databaseConfig = {
  username: dbConf[environment].username,
  password: dbConf[environment].password,
  name: dbConf[environment].database,
  host: dbConf[environment].host,
  dialect: dbConf[environment].dialect,
  logging: dbConf[environment].logging,
  use_env_variable: dbConf[environment].use_env_variable,
};
