import { BaseDataBase } from "./BaseDataBase";
import { User } from "../model/User";

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

}