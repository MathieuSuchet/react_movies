export default class Comment{

    constructor(author, content, date){
        this.author = author;
        this.content = content;
        this.date = date;
    }

    toJson(){
        return {
            'author': this.author,
            'content': this.content,
            'date': this.date
        }
    }
}