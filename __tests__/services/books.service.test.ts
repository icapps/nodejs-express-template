import { Book, Author } from '../../src/models';
import { BooksService } from '../../src/services/books.service';

describe('services/books', () => {
  describe('#getAllBooks', () => {
    it('Returns an array of books', () => {
      Book.findAll = () => Promise.resolve(['book']);
      const booksService = new BooksService({
        book: Book,
        author: Author,
      });

      return expect(booksService.getAllBooks()).resolves.toEqual(['book']);
    });
    it('Returns an error when something goes wrong', () => {
      Book.findAll = () => Promise.reject('Error');
      const booksService = new BooksService({
        book: Book,
        author: Author,
      });

      return expect(booksService.getAllBooks()).rejects.toBe('Error');
    });
  });
});
