import { Route } from 'tree-house';
import HelloController from './../controllers/hello.controller';
import AuthenticationController from './../controllers/authentication.controller';

const helloController = new HelloController();
const authenticationController = new AuthenticationController();

export default [
  new Route('GET', '/hello', helloController.hello),
  new Route('POST', '/login', authenticationController.login),
];

