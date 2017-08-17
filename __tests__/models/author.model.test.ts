/**
 * author.model.test.ts
 * __tests__/models
 *
 * Created by samover on 02/07/2017.
 */

import { Author } from '../../src/models';

describe('models/Author', () => {
  let author;

  beforeAll(async () => {
    author = await Author.create<Author>();
  });

  describe('Instance', () => {
    it('of Author', () => {
      expect(author).toBeInstanceOf(Author);
    });
  });

  describe('It has the attributes', () => {
    it('id', () => {
      expect(author.dataValues).toHaveProperty('id');
    });
    it('firstName', () => {
      expect(author.dataValues).toHaveProperty('firstName');
    });
    it('lastName', () => {
      expect(author.dataValues).toHaveProperty('lastName');
    });
    it('updatedAt', () => {
      expect(author.dataValues).toHaveProperty('updatedAt');
    });
    it('createdAt', () => {
      expect(author.dataValues).toHaveProperty('createdAt');
    });
  });

  describe('It has', () => {
    it('has many Books', () => {
      expect(author.createBook).toBeInstanceOf(Function);
      expect(author.addBook).toBeInstanceOf(Function);
      expect(author.setBooks).toBeInstanceOf(Function);
      expect(author.getBooks).toBeInstanceOf(Function);
    });
  });
});

