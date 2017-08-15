import { BaseService } from 'tree-house';
import { Book, Author } from '../models';

export default class HelloService extends BaseService {
  async talk(user) {
    try {
      const books = await Book.findAll({
        include: [
          {
            model: Author,
          },
        ],
      });
      console.log(user);
      return books;
    } catch (e) {
      console.error(e);
      return 'Error';
    }
  }
}
