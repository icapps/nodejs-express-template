import { BaseService } from 'tree-house';
import { passportAuthentication } from './../config/passport.config';

export class AuthenticationService extends BaseService {
  Unauthorised: any;
  private authenticate: any;

  constructor({ authenticate = passportAuthentication.authenticate } = {}) {
    super();
    this.authenticate = authenticate;
  }

  async login(req) {
    try {
      const user = await this.authenticate(req);
      return user;
    } catch (e) {
      /* handle error */
      throw new this.Unauthorised('message', 'code');
    }
  }
}
