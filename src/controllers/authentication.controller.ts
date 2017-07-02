import { BaseController } from 'tree-house';
import { Response, Request } from 'express';
import AuthenticationService from './../services/authentication.service';


export default class AuthenticationController extends BaseController {
  authenticationService: any;
  execute: any;

  constructor(...args) {
    super(args);
    this.authenticationService = new AuthenticationService();
  }

  login = (req: Request, res: Response) => {
    this.execute(res, this.authenticationService.login(req));
  }
}
