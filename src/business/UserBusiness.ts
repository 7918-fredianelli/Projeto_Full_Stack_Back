import { UserDataBase } from "../data/UserDataBase";
import { IdGenerator } from "../services/IdGenerator";
import { HashManager } from "../services/HashManager";
import { Authenticator } from "../services/Authenticator";
import { User } from "../model/User";

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

}