import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { BaseDataBase } from "../data/BaseDataBase";
import { LoginInputDTO } from "../model/User";

export class UserController {
    async signup(req: Request, res: Response){
        try{
           const token = await new UserBusiness().signUp(
                req.body.name,
                req.body.email,
                req.body.nickname,
                req.body.password,
                req.body.role,
            )

            res.status(200).send({ token });

        }catch(error){
            res.status(400).send(error.message);
        }
        await BaseDataBase.destroyConnection();
    }

    async login(req: Request, res: Response){

        try{

           const loginData: LoginInputDTO = {
              email: req.body.email,
              password: req.body.password
           };

            const userBusiness = new UserBusiness();
            const token = await userBusiness.login(loginData);

            res.status(200).send({ token });

        } catch(error){
            res.status(400).send(error.message);
        }
        await BaseDataBase.destroyConnection();
    }
}
