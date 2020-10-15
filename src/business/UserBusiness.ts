import { UserDataBase } from "../data/UserDataBase";
import { IdGenerator } from "../services/IdGenerator";
import { HashManager } from "../services/HashManager";
import { Authenticator } from "../services/Authenticator";
import { GetUser, User } from "../model/User";

export class UserBusiness {

    public signUp = async (name: string, email: string, nickname: string, password: string, role: string)=>{
       const id = new IdGenerator().generate()
       const hashPassword = await new HashManager().hash(password)
       await new UserDataBase().createUser(
            new User(
                id,
                name,
                email,
                nickname,
                hashPassword,
                role,
                )
        )
        const token = new Authenticator().generateToken({
            id,
            role
        })
        return token
    }

    public login = async (email: string, nickname: string, password: string)=>{
        const hashPassword = await new HashManager().hash(password)
        await new UserDataBase().conectUser(
            new GetUser(
                email,
                nickname,
                hashPassword
            )
         )
         const token = new Authenticator().generateToken({
             id,
             role
         })
         return token
     }

}