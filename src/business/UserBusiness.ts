import { UserDataBase } from "../data/UserDataBase";
import { IdGenerator } from "../services/IdGenerator";
import { HashManager } from "../services/HashManager";
import { Authenticator } from "../services/Authenticator";
import { User, LoginInputDTO } from "../model/User";

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

    public login = async (user: LoginInputDTO)=>{
        const userDatabase = new UserDataBase();
        const userFromDB = await userDatabase.getUserByEmail(user.email);
       
        const hashManager = new HashManager();
        const hashCompare = await hashManager.compare(user.password, userFromDB.getPassword());

        const authenticator = new Authenticator();
        const accessToken = authenticator.generateToken({ id: userFromDB.getId(), role: userFromDB.getRole() });
        
        if (!hashCompare) {
            throw new Error("Invalid Password!");
        }

        return accessToken;
     }

}