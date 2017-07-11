import {
  Table,
  Column,
  Model,
  BelongsTo,
  PrimaryKey,
  DataType,
  Default,
  ForeignKey,
  IsUUID } from 'sequelize-typescript';
import Author from './author.model';

@Table({ tableName: 'books', timestamps: true })
export default class Book extends Model<Book> {
  @IsUUID(4)
  @PrimaryKey
  @Default(DataType.UUIDV4)
  @Column
  id: string;

  @Column
  title: string;

  @Column
  published: string;

  @ForeignKey(() => Author)
  authorId: string;

  @BelongsTo(() => Author)
  author: Author;
}
