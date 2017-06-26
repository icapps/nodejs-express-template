import { Table, Column, Model } from 'sequelize-typescript';

@Table
export default class Example extends Model<Example> {
  @Column
  name: string;

  @Column
  type: string;
}

