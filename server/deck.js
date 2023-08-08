import Card from "./card.js";

export class Deck {
  
    constructor() {
        this.newArray=[];
        const valueArray=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
        const kindArray=["H", "C", "D", "S"];
        valueArray.forEach(element => {
          kindArray.map(val=>
            this.newArray.push(new Card(element, val)));
        });
        console.log(this.newArray);
        }
    
    shuffle(){
        for (let i = 0; i < this.newArray.length; i++) {
          const tempCard = this.newArray[i];
          const random = Math.floor(Math.random() * 52);;
          this.newArray[i]=this.newArray[random]
          this.newArray[random]=tempCard;
        }
    }

    
}

