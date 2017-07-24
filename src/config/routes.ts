import { Route } from 'tree-house';
import HelloController from './../controllers/Hello.controller';
import AuthenticationController from './../controllers/Authentication.controller';
import IsAuthenticatedPolicy from './../policies/IsAuthenticated.policy';

// controllers
const helloController = new HelloController();
const authenticationController = new AuthenticationController();

export default [
  new Route('POST', '/login', authenticationController.login),
  new Route('GET', '/hello', helloController.hello, [IsAuthenticatedPolicy]),
];

