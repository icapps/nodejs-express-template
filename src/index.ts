import dotenv = require('dotenv-safe');
dotenv.load({ silent: true });

import { TreeHouse } from 'tree-house';
import Routes from './config/routes';

const config = {};

function init():void {
  const treehouse = new TreeHouse(config);
  treehouse.setRoutes(Routes);
  treehouse.fireUpEngines();
}

init();
