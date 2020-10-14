import { UserDataBase } from "../data/UserDataBase";
import { IdGenerator } from "../services/IdGenerator";
import { HashManager } from "../services/HashManager";
import { Authenticator } from "../services/Authenticator";
import { Music } from "../model/Music";
import { MusicDataBase } from "../data/MusicDataBase";

export class MusicBusiness {

    public newMusic = async (title: string, author: string, date: Date, file: string, genre: string[], album: string)=>{
        const id = new IdGenerator().generate()
        await new MusicDataBase().createMusic(
            new Music(
                id,
                title,
                author,
                date,
                file,
                genre,
                album,
            )
        )
    }

}