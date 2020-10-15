import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { UserDataBase } from "../data/UserDataBase";

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
        await UserDataBase.destroyConnection();
    }

    async login(req: Request, res: Response){
        try{
           const token = await new UserBusiness().login(
                req.body.email,
                req.body.nickname,
                req.body.password,
            )

            res.status(200).send({ token });

        }catch(error){
            res.status(400).send(error.message);
        }
        await UserDataBase.destroyConnection();
    }
}
