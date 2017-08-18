import * as dotenvSafe from 'dotenv-safe';
import * as raven from 'raven';

dotenvSafe.load({ silent: true });

import { TreeHouse } from 'tree-house';
import routes from './config/routes';

const config = {};

// TODO: add typescript definitions
// TODO: encapsulate into config
if (process.env.SENTRY_DSN !== 'false') {
  raven.config(process.env.SENTRY_DSN).install();
}

const treehouse = new TreeHouse(config);
treehouse.setRoutes(routes);
treehouse.fireUpEngines();

process.on('unhandledRejection', (reason, p) => {
  console.info('Unhandled Rejection', reason, p);
  throw reason;
});

export default treehouse.app;
