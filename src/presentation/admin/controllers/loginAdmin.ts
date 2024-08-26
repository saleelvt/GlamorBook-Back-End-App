import { loginAdminUseCases } from "./../../../application/admin/useCases/loginAdminUseCase";

import { IAdminDependencies } from "@/application/admin/interfaces/IAdminDependencies";
import { generateAccessToken } from "@/utilities/jwt/generateAccessToken";
import { generateRefreshToken } from "@/utilities/jwt/generateRefreshToken";
import { NextFunction, Request, Response } from "express";

export const loginAdminController = (dependencies: IAdminDependencies) => {
    console.log('dfd_______________________________________');
    console.log('dfd_______________________________________');
    
  return async () => {
    const {
      useCases: { loginAdminUseCases },
    } = dependencies;
    return async (req: Request, res: Response, next: NextFunction) => {
      try {
        const { email, password } = req.body;
        console.log('admin controller reached man ',req.body);
        
      } catch (error) {}
    };
  };
};
