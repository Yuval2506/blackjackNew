import {Deck} from './deck.js';
import express from 'express';
import cors from 'cors';

const app = express()
const port = 4000
app.use(cors());

console.log("deckCreated")
const shuffledDeck = new Deck();
console.log(shuffledDeck);

/*app.get('/getDeck', (req, res) => {
    console.log("detDeck")
    shuffeledDeck = new Deck();
    console.log(shuffeledDeck);
    shuffeledDeck.shuffle();
    console.log(shuffeledDeck);
    res.json(shuffeledDeck);
    // res.status(201).json({ result: true })
  })*/

  app.get('/get-card', (req, res) => {
    console.log("get-card")
    res.send(shuffledDeck.getCard());
  })

  app.get('/get-length', (req, res) => {
    console.log("get-length")
    res.json({length: shuffledDeck.getLength()}).status(200);
  })

  app.get('/shuffle', (req, res) => {
    console.log("shuffle")
    shuffledDeck.shuffle();
  })

  app.listen(port, () => {
    console.log(`blackjack app listening on port ${port}`)
  }) 

