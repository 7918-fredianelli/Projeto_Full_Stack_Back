import { BaseDataBase } from "./BaseDataBase";
import { LoginInputDTO, User } from "../model/User";

export class UserDataBase extends BaseDataBase{

    private static TABLE_NAME = "TABELA_USUÁRIOS";

    public async createUser (user: User): Promise<void>{
        await this.getConnection()
        .raw(`
            INSERT INTO ${UserDataBase.TABLE_NAME}(id, name, email, nickname, password, role)
             VALUES(
                "${user.getId()}",
                "${user.getName()}",
                "${user.getEmail()}",
                "${user.getNickName()}",
                "${user.getPassword()}",
                "${user.getRole()}"
            )
        `)
    }

    // public async getUserByEmail (email: string): Promise<User>{
    //    const result = await this.getConnection()
    //     .raw(`
    //         SELECT * FROM ${UserDataBase.TABLE_NAME} WHERE (email) = "${email}"
    //     `)

    //     return User.toUserModel(result[0]);
    // }

    public async getUserByEmail(email: string): Promise<User> {
        const result = await this.getConnection()
          .select("*")
          .from(UserDataBase.TABLE_NAME)
          .where({ email });
    
        return User.toUserModel(result[0]);
      }
    

}