import { NextFunction, Request, Response } from "express";
import { TypedRequestBody } from "../../utils/request";

export class AuthController {
  // private authService = new AuthService();
  private jwtSecret: string;
  private refreshSecret: string;

  constructor() {
    this.jwtSecret = process.env.JWT_SECRET || "default_secret";
    this.refreshSecret = process.env.REFRESH_SECRET || "default_refresh_secret";
  }

  public register = async (
    req: TypedRequestBody<{
      lineId: string;
      username: string;
      password?: string;
    }>,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {

        


    } catch (error) {
      next(error);
    }
  };
}
