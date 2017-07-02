import {
  Table,
  Column,
  Model,
  HasMany,
  PrimaryKey,
  DataType,
  Default,
  IsUUID } from 'sequelize-typescript';
import Book from './book.model';

@Table({ tableName: 'authors', timestamps: true })
export default class Author extends Model<Author> {
  @IsUUID(4)
  @PrimaryKey
  @Default(DataType.UUIDV4)
  @Column
  id: string;

  @Column
  firstName: string;

  @Column
  lastName: string;

  @HasMany(() => Book)
  books: Book[];
}
