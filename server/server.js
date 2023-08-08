import {Deck} from './deck.js';
import express from 'express';
import cors from 'cors';

const app = express()
const port = 4000

app.use(cors());

app.get('/getDeck', (req, res) => {
    console.log("server")
    const shuffeledDeck = new Deck();
    console.log(shuffeledDeck);
    shuffeledDeck.shuffle();
    console.log(shuffeledDeck);
    res.json(shuffeledDeck);
    // res.status(201).json({ result: true })
  })

  app.listen(port, () => {
    console.log(`blackjack app listening on port ${port}`)
  }) 

