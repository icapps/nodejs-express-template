/**
 * book.model.test.ts
 * __tests__/models
 *
 * Created by samover on 02/07/2017.
 */

import { Book } from '../../src/models';

describe('models/Book', () => {
  let book;

  beforeAll(async () => {
    book = await Book.create<Book>();
  });

  describe('Instance', () => {
    it('of Book', () => {
      expect(book).toBeInstanceOf(Book);
    });
  });

  describe('It has the attributes', () => {
    it('id', () => {
      expect(book.dataValues).toHaveProperty('id');
    });
    it('title', () => {
      expect(book.dataValues).toHaveProperty('title');
    });
    it('published', () => {
      expect(book.dataValues).toHaveProperty('published');
    });
    it('updatedAt', () => {
      expect(book.dataValues).toHaveProperty('updatedAt');
    });
    it('createdAt', () => {
      expect(book.dataValues).toHaveProperty('createdAt');
    });
  });

  describe('Associations', () => {
    it('belongs to Author', () => {
      expect(book.createAuthor).toBeInstanceOf(Function);
      expect(book.getAuthor).toBeInstanceOf(Function);
      expect(book.setAuthor).toBeInstanceOf(Function);
    });
  });
});

