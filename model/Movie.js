export default class Movie{

    constructor(id, title, synopsis,image, comments){
        this.id = id;
        this.title = title;
        this.synopsis = synopsis;
        this.image = image;
        this.comments = comments;
    }

    toJson(){

        let jsonComments = []
        if(this.comments !== undefined){
            this.comments.forEach(element => {
                jsonComments.push(() => {
                    element.toJson()
                })    
            });
        }
        

        return {
            'id' : this.id,
            'title': this.title,
            'synopsis': this.synopsis,
            'image': this.image,
            'comments': jsonComments
        }
    }
}