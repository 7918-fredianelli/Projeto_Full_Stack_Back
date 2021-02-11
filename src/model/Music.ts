export class Music{
    constructor(
    private id: string,
	private title: string,
	private author: string,
	private date: Date,
	private file: string,
	private genre: string[],
	private album: string
    ){}

    getId(){
        return this.id;
    }

    getTitle(){
        return this.title;
    }

    getAuthor(){
        return this.author;
    }

    getDate(){
        return this.date;
    }

    getFile(){
        return this.file;
    }

    getGenre(){
        return this.genre;
    }

    getAlbum(){
        return this.album
    }

}