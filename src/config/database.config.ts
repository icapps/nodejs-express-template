import { ISequelizeConfig } from 'sequelize-typescript';
const environment: string = process.env.NODE_ENV;

const dbConf = {
  development: {
    username: 'developer',
    password: 'developer',
    name: 'db_dev',
    host: 'dockerhost',
    dialect: 'postgres',
    logging: false,
  },
  test: {
    username: 'developer',
    password: 'developer',
    name: 'db_test',
    host: 'dockerhost',
    dialect: 'postgres',
    logging: false,
  },
  production: {
    username: '',
    password: '',
    name: '',
    host: '',
    logging: false,
    use_env_variable: 'name_URL',
    dialect: 'postgres',
  },
};

export interface databaseConfig extends ISequelizeConfig {
  username: string;
  password: string;
  name: string;
  host: string;
  dialect: string;
  logging: boolean | Function;
  use_env_variable?: string;
}

export const databaseConfig: databaseConfig = dbConf[environment];
