import sinon from 'sinon';
import { BooksController } from './../../src/controllers/books.controller';
import MockExpressRequest from 'mock-express-request';
import MockExpressResponse from 'mock-express-response';

const getAllBooksStub = sinon.stub();
const booksServiceMock = {
  getAllBooks: () => getAllBooksStub(),
};

describe('controllers/books', () => {
  describe('#getAll', () => {
    it('returns 200 when bookService succeeds', () => {
      const booksController = new BooksController({ booksService: booksServiceMock });
      const req = new MockExpressRequest();
      const res = new MockExpressResponse();
      getAllBooksStub.returns(Promise.resolve([]));

      return booksController.getAll(req, res)
        .then(() => {
          expect(res.statusCode).toBe(200);
          expect(res._getJSON()).toEqual([]);
        });
    });

    it('returns a JSON error when bookService fails', () => {
      const booksController = new BooksController({ booksService: booksServiceMock });
      const req = new MockExpressRequest();
      const res = new MockExpressResponse();
      getAllBooksStub.returns(Promise.reject({ statusCode: 404, message: 'Not Found' }));

      return booksController.getAll(req, res)
        .then(() => {
          expect(res.statusCode).toBe(404);
          expect(res._getJSON()).toEqual({ errorMessage: 'Not Found' });
        });
    });
  });
});
