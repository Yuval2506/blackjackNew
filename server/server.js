import {Deck} from './deck.js';
import express from 'express';
import cors from 'cors';

const app = express()
const port = 4000

app.use(cors());

app.get('/getCard', (req, res) => {
    console.log("server")
    const shuffeledDeck = new Deck();
    shuffeledDeck.shuffle();
    console.log(shuffeledDeck);
    const pickedCard = shuffeledDeck.getCard();
    console.log(pickedCard);
    console.log(pickedCard)
    res.json(pickedCard)
    // res.status(201).json({ result: true })
  })

  app.listen(port, () => {
    console.log(`blackjack app listening on port ${port}`)
  }) 

