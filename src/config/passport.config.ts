import { PassportAuthentication } from 'tree-house-authentication';

const localStrategyConfig = {
  usernameField: 'email',
  passwordField: 'password',
};

const jwtStrategyConfig = {
  secret: '8^dxE|gZu1ODB183s772)/3:l_#fdsfsdf|2ux3&lhN@LQ6g+"i$zq45fsdq1',
  algorithm: 'HS256',
  expiresIn: 24 * 60 * 60,
  issuer: 'pubcrawl',
  audience: 'PUBCRAWL',
  authScheme: 'X-Session-Id',
};

function onLocalStrategy(email: string, password: string) {
  return new Promise((resolve, reject) => {
    // TODO: Proper user implementation
    if (email && (password === 'notSoRandom')) {
      const token = passportAuthentication.getJwtToken({ email, password });
      return resolve({ token });
    }
    return reject('Local strategy: not authorised');
  });
}

// TODO: use struct or interface
function onJwtStrategy(payload) {
  return new Promise((resolve, reject) => {
    if (payload.user) {
      return resolve({ name: 'John Doe' });
    }
    return reject('Local strategy: not authorised');
  });
}

// configure authentication
const passportAuthentication = new PassportAuthentication();
passportAuthentication.setLocalStrategy(localStrategyConfig, onLocalStrategy);
passportAuthentication.setJwtStrategy(jwtStrategyConfig, onJwtStrategy);

export { passportAuthentication };
