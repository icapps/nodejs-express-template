import { BaseController } from 'tree-house';
import { Response, Request } from 'express';
import { AuthenticationService } from './../services/authentication.service';

interface Credentials {
  email: string;
  password: string;
}

export class AuthenticationController extends BaseController {
  private authenticationService: AuthenticationService;
  private execute: any;

  constructor({ authenticationService = new AuthenticationService() } = {}) {
    super();
    this.authenticationService = authenticationService;
  }

  login = (req: Request, res: Response) => {
    const credentials: Credentials = {
      email: req.email,
      password: req.password,
    };

    return this.execute(res, this.authenticationService.login(credentials));
  }
}
