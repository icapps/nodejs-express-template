import sinon from 'sinon';
import { AuthenticationController } from './../../src/controllers/authentication.controller';
import MockExpressRequest from 'mock-express-request';
import MockExpressResponse from 'mock-express-response';

const loginStub = sinon.stub();
const authenticationServiceMock = {
  login: () => {
    return loginStub();
  },
};

class ControllerError extends Error {
  constructor(message, statusCode, code) {
    super(message);
    this.statusCode = statusCode;
    this.code = code;
  }
}

describe('controllers/authentication', () => {
  const authenticationController = new AuthenticationController({
    authenticationService: authenticationServiceMock,
  });

  describe('#login', () => {
    it('returns 200 when authenticationService succeeds', () => {
      const req = new MockExpressRequest();
      const res = new MockExpressResponse();
      loginStub.resolves();

      return authenticationController.login(req, res)
        .then(() => {
          expect(res.statusCode).toBe(200);
        });
    });

    it('returns a JSON error when authenticationService fails', async() => {
      const req = new MockExpressRequest();
      const res = new MockExpressResponse();
      const loginError = new ControllerError('Error', 401, 1);
      loginStub.rejects(loginError);

      // TODO: mock errorHandler
      return authenticationController.login(req, res)
        .then(() => {
          const body = res._getJSON();
          expect(res.statusCode).toBe(401);
          expect(body.errorMessage).toBe('Error');
          expect(body.errorCode).toBe(1);
        });
    });
  });
});
