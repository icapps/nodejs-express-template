import { AuthenticationService } from '../../src/services/authentication.service';

const credentials = {
  email: 'test@user.com',
  password: 'password',
};

const user = {
  username: credentials.email,
  accessToken: 'randomToken',
};

const authenticateMock: Function = (creds) => {
  if (creds.email === credentials.email && creds.password === credentials.password) {
    return user;
  } else {
    throw new Error();
  }
};

describe('services/books', () => {
  describe('#login', () => {
    const authenticationService = new AuthenticationService({ authenticate: authenticateMock });

    it('returns a user object', async () => {
      await expect(authenticationService.login(credentials)).resolves.toEqual(user);
    });
    it('returns an error with statusCode 401 when authentication fails', async () => {
      await expect(authenticationService.login({ email: 'wrong@me.com' }))
        .rejects.toHaveProperty('statusCode', 401);
    });
  });
});
