import { Router, Request, Response } from "express";

export class AuthRoutes {
  public path: string = "/auth";

  public router: Router = Router();

  //   public authController = new AuthController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    // this.router.post(`${this.path}/register`, this.authController.register);
  }
}

export default new AuthRoutes().router;
