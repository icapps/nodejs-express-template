import { BaseController } from 'tree-house';
import { Response, Request } from 'express';
import { AuthenticationService } from './../services/authentication.service';

export class AuthenticationController extends BaseController {
  private authenticationService: AuthenticationService;
  private execute: any;

  constructor({ authenticationService = new AuthenticationService() } = {}) {
    super();
    this.authenticationService = authenticationService;
  }

  login = (req: Request, res: Response) => this.execute(res, this.authenticationService.login(req));
}
