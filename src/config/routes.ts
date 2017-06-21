import { Route } from 'tree-house';
import { HelloController } from './../controllers/hello.controller';
import AuthenticationController from './../controllers/authentication.controller';
import IsAuthenticatedPolicy from './../policies/is-authenticated.policy';

// controllers
const helloController = new HelloController();
const authenticationController = new AuthenticationController();

export default [
  new Route('POST', '/login', authenticationController.login),
  new Route('GET', '/hello', helloController.hello, [IsAuthenticatedPolicy]),
];

