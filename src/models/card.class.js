
export class Card{
    title='';
    username='';
    description='';
    price='';
    rating='';
    pictures=[''];

    constructor(title,username,description,price,rating,pictures){
        this.title=title;
        this.username=username;
        this.description=description;
        this.price=price;
        this.rating=rating;
        this.pictures=pictures;
    }
}