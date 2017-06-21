import { BaseService } from 'tree-house';
import { passportAuthentication } from './../index';

export default class HelloService extends BaseService {
  async talk(req) {
    console.log('👋 HI!');
    return await passportAuthentication.authenticate(req);
  }
}
