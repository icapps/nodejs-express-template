import { passportAuthentication } from '../index';

export const localStrategyConfig = {
  usernameField: 'email',
  passwordField: 'password',
};

export const jwtStrategyConfig = {
  secret: '8^dxE|gZu1ODB183s772)/3:l_#fdsfsdf|2ux3&lhN@LQ6g+"i$zq45fsdq1',
  algorithm: 'HS256',
  expiresIn: 24 * 60 * 60,
  issuer: 'pubcrawl',
  audience: 'PUBCRAWL',
  authScheme: 'X-Session-Id',
};

export function onLocalStrategy(email: string, password: string) {
  return new Promise((resolve, reject) => {
    if (email && (password === 'notSoRandom')) {
      const token = passportAuthentication.getJwtToken({ email, password });
      return resolve({ token });
    }
    return reject('Local strategy: not authorised');
  });
}

export function onJwtStrategy(payload) {
  return new Promise((resolve, reject) => {
    if (payload.user) {
      return resolve({ name: 'John Doe' });
    }
    return reject('Local strategy: not authorised');
  });
}
