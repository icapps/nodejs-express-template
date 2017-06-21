import { BaseService } from 'tree-house';

export class HelloService extends BaseService {
  talk() {
    console.log('👋 HI!');
    return Promise.resolve('HI');
  }
}
