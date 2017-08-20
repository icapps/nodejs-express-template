import { BaseController } from 'tree-house';
import { Response, Request } from 'express';
import { BooksService } from './../services/books.service';

export class BooksController extends BaseController {
  private booksService: BooksService;
  private execute: any;

  constructor({ booksService = new BooksService() } = {}) {
    super();
    this.booksService = booksService;
  }

  getAll = (req: Request, res: Response) => {
    console.log(req.query);
    return this.execute(res, this.booksService.getAllBooks());
  }
}
