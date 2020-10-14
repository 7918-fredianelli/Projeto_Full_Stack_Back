import { Request, Response } from "express";
import { MusicBusiness } from "../business/MusicBusiness";
import { MusicDataBase } from "../data/MusicDataBase";

export class MusicController{
    async newMusic(req: Request, res: Response){
        try{
            const iDontNo = await new MusicBusiness().newMusic(
                req.body.title,
                req.body.author,
                req.body.date,
                req.body.file,
                req.body.genre,
                req.body.album,
            )
            res.status(200).send("Musica criada com sucesso!");

        }catch(error){
            res.status(400).send(error.message);
        }
        await MusicDataBase.destroyConnection();
    }
}