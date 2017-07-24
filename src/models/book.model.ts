import { Table, Column, Model, BelongsTo, ForeignKey } from 'sequelize-typescript';
import Author from './author.model';

@Table({ tableName: 'books' })
export default class Book extends Model<Book> {
  @Column
  title: string;

  @Column
  published: string;

  @ForeignKey(() => Author)
  authorId: string;

  @BelongsTo(() => Author)
  author: Author;
}

