import { Table, Column, Model, HasMany } from 'sequelize-typescript';
import Book from './book.model';

@Table({ tableName: 'authors' })
export default class Author extends Model<Author> {
  @Column
  firstName: string;

  @Column
  lastName: string;

  @HasMany(() => Book)
  books: Book[];
}
