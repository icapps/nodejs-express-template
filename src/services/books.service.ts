import { BaseService } from 'tree-house';
import { Book, Author } from '../models';

export class BooksService extends BaseService {
  private book: any;
  private author: any;

  constructor({ book = Book, author = Author } = {}) {
    super();
    this.book = book;
    this.author = author;
  }

  async getAllBooks() {
    try {
      const books: any[] = await this.book.findAll({
        include: [
          {
            model: this.author,
          },
        ],
      });
      return books;
    } catch (e) {
      throw e;
    }
  }
}
