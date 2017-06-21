import { BaseService } from 'tree-house';

export default class HelloService extends BaseService {
  async talk(user) {
    console.log('👋 HI!');
    return `Hi, I am supersecret and special for ${user}`
  }
}
