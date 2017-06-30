import dotenvSafe = require('dotenv-safe');
import * as express from 'express';
import * as cors from 'cors';

dotenvSafe.load({ silent: true });
import { TreeHouse, PassportAuthentication } from 'tree-house';

import routes from './config/routes';
import {
  localStrategyConfig, jwtStrategyConfig,
  onLocalStrategy, onJwtStrategy,
} from './config/passport-authentication';
import models from './models';
import Example from './models/Example';
const config = {};

// configure authentication
const passportAuthentication = new PassportAuthentication();
passportAuthentication.setLocalStrategy(localStrategyConfig, onLocalStrategy);
passportAuthentication.setJwtStrategy(jwtStrategyConfig, onJwtStrategy);

async function init():Promise<void> {
  const treehouse = new TreeHouse(config);
  await models.sync({ force: true });
  await Example.create<Example>({ name: 'test' });
  treehouse.setRoutes(routes);
  treehouse.fireUpEngines();
  treehouse.app.use('/swagger',[cors(), express.static('swagger')]);

  return Promise.resolve();
}

process.on('unhandledRejection', (reason, p) => {
  console.info('Unhandled Rejection', reason, p);
  throw reason;
});

init();

export { passportAuthentication };
