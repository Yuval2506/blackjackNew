import Card from "./card.js";

export class Deck {
  constructor() {
    this.shuffle();
  }
  
  shuffle() {
    this.unshuffledDeck = []; 
    const valueArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
    const kindArray = ["H", "C", "D", "S"];
    valueArray.forEach((element) => {
      kindArray.map((val) => this.unshuffledDeck.push(new Card(element, val)));
    }); 
    console.log(this.unshuffledDeck);
    for (let i = 0; i < this.unshuffledDeck.length; i++) {
      const tempCard = this.unshuffledDeck[i];
      const random = Math.floor(Math.random() * 52);
      this.unshuffledDeck[i] = this.unshuffledDeck[random];
      this.unshuffledDeck[random] = tempCard;
    }
  }

  getCard() {
    if (this.unshuffledDeck.length>0) {
      return (this.unshuffledDeck.shift());
    } else {
        this.shuffle();
    }
  }

  getLength(){
    return this.unshuffledDeck.length;
  }
}
