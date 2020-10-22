import { BaseDataBase } from "./BaseDataBase";
import { Music } from "../model/Music";

export class MusicDataBase extends BaseDataBase{

    private static TABLE_NAME = "TABELA_MUSICAS";

    public async createMusic(music: Music): Promise<void>{
        await this.getConnection()
        .raw(`
            INSERT INTO ${MusicDataBase.TABLE_NAME}(id, title, author, date, file, genre, album)
            VALUES(
                "${music.getId()}",
                "${music.getTitle()}",
                "${music.getAuthor()}",
                "${music.getDate()}",
                "${music.getFile()}",
                "${music.getGenre()}",
                "${music.getAlbum()}"
            )
        `)
    }

    public async getAllMusics():Promise<Music[]>{
       const result = await this.getConnection()
        .raw(`
            SELECT * FROM ${MusicDataBase.TABLE_NAME}
        `)
        return result[0]
    }

}
    