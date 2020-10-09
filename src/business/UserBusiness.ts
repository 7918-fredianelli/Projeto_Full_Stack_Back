import { UserDataBase } from "../data/UserDataBase";
import { IdGenerator } from "../services/IdGenerator";
import { HashManager } from "../services/HashManager";
import { Authenticator } from "../services/Authenticator";
import { User } from "../model/User";

export class UserBusiness {

    public signUp = async (name: string, email: string, nickname: string, password: string, role: string)=>{
        await new UserDataBase().createUser(
            new User(
                new IdGenerator().generate(),
                name,
                email,
                nickname,
                password,
                role,
            )
        )
    }

}