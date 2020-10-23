import { Request, Response } from "express";
import { MusicBusiness } from "../business/MusicBusiness";
import { BaseDataBase } from "../data/BaseDataBase";
import { MusicDataBase } from "../data/MusicDataBase";

export class MusicController{
    async newMusic(req: Request, res: Response){
        try{
            const music = await new MusicBusiness().newMusic(
                req.headers.authorization as string,
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

    async getAllMusics(req: Request, res: Response){
        try{
            const token = req.headers.authorization as string;

            const musicBusiness = new MusicBusiness();
            const result = await musicBusiness.getAllMusics(token);

            res.status(200).send({musics: result});

        }catch(error){
            res.status(400).send(error.message);
        }

        await BaseDataBase.destroyConnection();
    }

    async getMusicById(req: Request, res: Response){
        try{
            const token = req.headers.authorization as string
            const id = req.params.id

            const musicBusiness = new MusicBusiness();
            const result = await musicBusiness.getMusicById(token, id);

            res.status(200).send(result)
        }catch(error){
            res.status(400).send(error.message);
        }

        await BaseDataBase.destroyConnection();
    }

    async deleteMusicById(req: Request, res: Response){
        try{
            const token = req.headers.authorization as string
            const id = req.body.id

            const musicBusiness = new MusicBusiness();
            await musicBusiness.deleteMusicById(token, id);

            

            res.status(200).send({
                message: `Musica deletada!`
            })
        }catch(error){
            res.status(400).send(error.message);
        }

        await BaseDataBase.destroyConnection();
    }
}