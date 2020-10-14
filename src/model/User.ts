export class User{
    constructor(
        private id: string,
        private name: string,
        private email: string,
        private nickname: string,
        private password: string,
        private role: string,
    ){
        switch (this.role) {
            case "NORMAL":
              this.role = UserRole.NORMAL;
              break;
            case "ADMIN":
              this.role = UserRole.ADMIN;
              break;
            default:
              throw new Error("Invalid user role");
          }
    }

    getId(){
        return this.id;
    }

    getName(){
        return this.name;
    }

    getEmail(){
        return this.email;
    }

    getNickName(){
        return this.nickname;
    }

    getPassword(){
        return this.password;
    }

    getRole(){
        return this.role;
    }

}

export enum UserRole{
    NORMAL = "NORMAL",
    ADMIN = "ADMIN"
}