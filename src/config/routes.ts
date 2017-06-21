import { Route } from 'tree-house';
import { HelloController } from './../controllers/hello.controller';

const helloController = new HelloController();

export default [
  new Route('GET', '/hello', helloController.hello),
];

