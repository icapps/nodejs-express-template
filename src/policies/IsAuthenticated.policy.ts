import { BasePolicy } from 'tree-house';
import { passportAuthentication } from './../config/passport.config';

export default class IsAuthenticatedPolicy extends BasePolicy {
  req: any;
  Unauthorised: any;

  async setPolicy() {
    try {
      const user = await passportAuthentication.authenticate(this.req, 'jwt');
      return Object.assign(this.req, {
        session: { user },
      });
    } catch (e) {
      throw new this.Unauthorised();
    }
  }
}
