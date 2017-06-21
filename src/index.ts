import dotenvSafe = require('dotenv-safe');
dotenvSafe.load({ silent: true });

import { TreeHouse } from 'tree-house';
import routes from './config/routes';

const config = {};

function init():void {
  const treehouse = new TreeHouse(config);
  treehouse.setRoutes(routes);
  treehouse.fireUpEngines();
}

init();
