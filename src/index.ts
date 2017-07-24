import dotenvSafe from 'dotenv-safe';
import raven from 'raven';

dotenvSafe.load({ silent: true });

import { TreeHouse, PassportAuthentication } from 'tree-house';
import routes from './config/routes';
import {
  localStrategyConfig, jwtStrategyConfig,
  onLocalStrategy, onJwtStrategy,
} from './config/passport-authentication';

const config = {};

// TODO: add typescript definitions
// TODO: encapsulate into config
if (process.env.SENTRY_DSN !== 'false') {
  raven.config(process.env.SENTRY_DSN).install();
}

// configure authentication
const passportAuthentication = new PassportAuthentication();
passportAuthentication.setLocalStrategy(localStrategyConfig, onLocalStrategy);
passportAuthentication.setJwtStrategy(jwtStrategyConfig, onJwtStrategy);

async function init():Promise<void> {
  const treehouse = new TreeHouse(config);
  treehouse.setRoutes(routes);
  treehouse.fireUpEngines();
  return Promise.resolve();
}
process.on('unhandledRejection', (reason, p) => {
  console.info('Unhandled Rejection', reason, p);
  throw reason;
});

init();

export { passportAuthentication };
