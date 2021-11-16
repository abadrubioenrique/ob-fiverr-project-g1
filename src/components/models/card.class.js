
export class Card{
    title='';
    username='';
    description='';
    price='';
    rating='';
    imgUrl=[''];

    constructor(title,username,description,price,rating,imgUrl){
        this.title=title;
        this.username=username;
        this.description=description;
        this.price=price;
        this.rating=rating;
        this.imgUrl=imgUrl;
    }
}