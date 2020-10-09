import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";

export class UserController {
    async signup(req: Request, res: Response){
        try{

            await new UserBusiness().signUp(
                req.body.name,
                req.body.email,
                req.body.nickname,
                req.body.password,
                req.body.role,
            )

        }catch{

        }
    }
}
