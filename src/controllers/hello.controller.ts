import { BaseController } from 'tree-house';
import { Response, Request } from 'express';
import { HelloService } from './../services/hello.service';

export class HelloController extends BaseController {
  helloService: any;
  execute: any;

  constructor(...args) {
    super(args);
    this.helloService = new HelloService();
  }

  hello = (req: Request, res: Response) => {
    this.execute(res, this.helloService.talk(req));
  }
}
