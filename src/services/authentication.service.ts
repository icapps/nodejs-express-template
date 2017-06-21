import { BaseService } from 'tree-house';
import { passportAuthentication } from './../index';

export default class AuthenticationService extends BaseService {
  Unauthorised: any

  async login(req) {
    try {
      const user = await passportAuthentication.authenticate(req);
      return user;
    } catch (e) {
      /* handle error */
      throw new this.Unauthorised('message', 'code');
    }
  }
};
