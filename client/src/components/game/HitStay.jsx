import Player from "./Player";
import Computer from "./Computer";
import "./HitStay.css";
import { getCard, getLength, shuffle } from "../../services/requests";
import { useEffect, useState } from "react";

function HitStay({ isPlaying, setIsPlaying }) {
  const [deck, setDeck] = useState([]);
  const [length, setLength] = useState(0);
  const [computerCards, setComputerCards] = useState([]);
  const [playerCards, setPlayerCards] = useState([]);
  const [playerLost, setPlayerLost] = useState("inProgress");
  const [computerLost, setComputerLost] = useState("inProgress");
  const [countComputer, setCountComputer] = useState(0);
  const [countPlayer, setCountPlayer] = useState(0);

  useEffect(() => {
    (async () => {
      //const { newArray: shufelledDeck } = await getDeck();
      const playerCard1 = await getCard();
      console.log(playerCard1);
      const playerCard2 = await getCard();
      setPlayerCards([...computerCards, playerCard1, playerCard2]);
      const computerCard1 = await getCard();
      const computerCard2 = await getCard();
      //setDeck(shufelledDeck);
      setComputerCards([...computerCards, computerCard1, computerCard2]);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      const { length: deckLength } = await getLength();
      if (deckLength === 0) {
        await shuffle();
      }
      setLength(deckLength);
    })();
  }, [computerCards, playerCards]);

  useEffect(() => {
    console.log("playerLost ", playerLost, "computerLost ", computerLost);
    if (playerLost == "true" && computerLost == "stand") {
      document.getElementById("who-won").innerHTML = "Dealer Wins";
      document.getElementById("length").style.visibility = "hidden";
      setTimeout(() => {
        setIsPlaying(!isPlaying);
      }, 3000);
    } else if (
      playerLost == "false" &&
      computerLost == "stand" &&
      countComputer != 21
    ) {
      document.getElementById("who-won").innerHTML = "Player Wins";
      document.getElementById("length").style.visibility = "hidden";
      setTimeout(() => {
        setIsPlaying(!isPlaying);
      }, 3000);
    } else if (
      playerLost == "false" &&
      computerLost == "stand" &&
      countComputer === 21
    ) {
      document.getElementById("who-won").innerHTML = "Draw";
      document.getElementById("length").style.visibility = "hidden";
      setTimeout(() => {
        setIsPlaying(!isPlaying);
      }, 3000);
    } else if (computerLost === "stand" && countComputer > countPlayer) {
      document.getElementById("who-won").innerHTML = "Dealer Wins";
      document.getElementById("length").style.visibility = "hidden";
      setTimeout(() => {
        setIsPlaying(!isPlaying);
      }, 3000);
    } else if (computerLost === "true" && playerLost != "true") {
      document.getElementById("who-won").innerHTML = "Player Wins";
      document.getElementById("length").style.visibility = "hidden";
      setTimeout(() => {
        setIsPlaying(!isPlaying);
      }, 3000);
    } else if (computerLost === "stand" && countComputer < countPlayer) {
      document.getElementById("who-won").innerHTML = "Player Wins";
      document.getElementById("length").style.visibility = "hidden";
      setTimeout(() => {
        setIsPlaying(!isPlaying);
      }, 3000);
    } else if (computerLost === "stand" && countComputer === countPlayer) {
      document.getElementById("who-won").innerHTML = "Draw";
      document.getElementById("length").style.visibility = "hidden";
      setTimeout(() => {
        setIsPlaying(!isPlaying);
      }, 3000);
    }
  }, [playerLost, computerLost]);

  /*const getCard = () => {
    return deck.shift();
  };*/

  return (
    <div className="while-playing-div">
      <div className="logo-div">
        <img
          src={`${process.env.PUBLIC_URL}/assets/blackjack.svg`}
          className="App-logo"
          alt="logo"
        />
      </div>
      <div className="cards-container">
        <Player
          playerCards={playerCards}
          setPlayerCards={setPlayerCards}
          playerLost={playerLost}
          setPlayerLost={setPlayerLost}
          computerLost={computerLost}
          setComputerLost={setComputerLost}
          countPlayer={countPlayer}
          setCountPlayer={setCountPlayer}
        />
        <Computer
          computerCards={computerCards}
          setComputerCards={setComputerCards}
          playerLost={playerLost}
          computerLost={computerLost}
          setComputerLost={setComputerLost}
          countComputer={countComputer}
          setCountComputer={setCountComputer}
          countPlayer={countPlayer}
        />
      </div>
      <div className="bottom-container">
        <div className="bottom" id="length">
          {length}
        </div>
        <div className="bottom" id="who-won"></div>
      </div>
    </div>
  );
}

export default HitStay;
