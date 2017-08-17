import { Route } from 'tree-house';
import { BooksController } from './../controllers/books.controller';
import { AuthenticationController } from './../controllers/authentication.controller';
import IsAuthenticatedPolicy from './../policies/isAuthenticated.policy';

// controllers
const booksController = new BooksController();
const authenticationController = new AuthenticationController();

export default [
  new Route('POST', '/login', authenticationController.login),
  new Route('GET', '/books', booksController.getAll, [IsAuthenticatedPolicy]),
];

