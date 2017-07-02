import { Sequelize } from 'sequelize-typescript';
import { databaseConfig } from '../config/database.config';
import bookModel from './book.model';
import authorModel from './author.model';

export const sequelize = new Sequelize(databaseConfig);
sequelize.addModels([
  bookModel,
  authorModel,
]);

export const Book:any = sequelize.models.Book;
export const Author:any = sequelize.models.Author;
