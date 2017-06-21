import dotenvSafe = require('dotenv-safe');
dotenvSafe.load({ silent: true });

import { TreeHouse, PassportAuthentication } from 'tree-house';
import ROUTES from './config/routes';
import {
  localStrategyConfig, jwtStrategyConfig,
  onLocalStrategy, onJwtStrategy
} from './config/passport-authentication';

const config = {};

// create new Treehouse instance
const treehouse = new TreeHouse(config);

// configure authentication
const passportAuthentication = new PassportAuthentication();
passportAuthentication.setLocalStrategy(localStrategyConfig, onLocalStrategy);
passportAuthentication.setJwtStrategy(jwtStrategyConfig, onJwtStrategy);

// configure the routes
treehouse.setRoutes(ROUTES);

// let's go
treehouse.fireUpEngines();

export { passportAuthentication };
