import dotenvSafe from 'dotenv-safe';
import raven from 'raven';

dotenvSafe.load({ silent: true });

import { InversifyExpressServer } from 'inversify-express-utils';
import { TreeHouse } from 'tree-house';
import routes from './config/routes';

import './config/inversify/loader';
const config = {};

// TODO: add typescript definitions
// TODO: encapsulate into config
if (process.env.SENTRY_DSN !== 'false') {
  raven.config(process.env.SENTRY_DSN).install();
}

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
