import dotenvSafe = require('dotenv-safe');
dotenvSafe.load({ silent: true });

import { TreeHouse, PassportAuthentication } from 'tree-house';
import Routes from './config/routes';
import {
  localStrategyConfig, jwtStrategyConfig,
  onLocalStrategy, onJwtStrategy
} from './config/passport-authentication';

const config = {};

// create new Treehouse instance
const treehouse = new TreeHouse(config);
  treehouse.setRoutes(routes);
  treehouse.fireUpEngines();
}

// configure authentication
const passportAuthentication = new PassportAuthentication();
passportAuthentication.setLocalStrategy(localStrategyConfig, onLocalStrategy);
passportAuthentication.setJwtStrategy(jwtStrategyConfig, onJwtStrategy);

// configure the routes
treehouse.setRoutes(Routes);

// let's go
treehouse.fireUpEngines();

export { passportAuthentication };
