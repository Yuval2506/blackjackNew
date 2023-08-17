import Player from "./Player";
import Computer from "./Computer";
import "./HitStay.css";
import { getDeck, getCard } from "../../services/requests";
import { useEffect, useState } from "react";

function HitStay({ isPlaying, setIsPlaying }) {
  const [deck, setDeck] = useState([]);
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
    console.log("playerLost ", playerLost, "computerLost ", computerLost);
    if (playerLost == "true" && computerLost == "stand") {
      document.getElementById("who-won").innerHTML = "Dealer Wins";
      setTimeout(() => {
        setIsPlaying(!isPlaying);
      }, 3000);
    } else if (
      playerLost == "false" &&
      computerLost == "stand" &&
      countComputer != 21
    ) {
      document.getElementById("who-won").innerHTML = "Player Wins";
      setTimeout(() => {
        setIsPlaying(!isPlaying);
      }, 3000);
    } else if (
      playerLost == "false" &&
      computerLost == "stand" &&
      countComputer === 21
    ) {
      document.getElementById("who-won").innerHTML = "Draw";
      setTimeout(() => {
        setIsPlaying(!isPlaying);
      }, 3000);
    } else if (computerLost === "stand" && countComputer > countPlayer) {
      document.getElementById("who-won").innerHTML = "Dealer Wins";
      setTimeout(() => {
        setIsPlaying(!isPlaying);
      }, 3000);
    } else if (computerLost === "true" && playerLost != "true") {
      document.getElementById("who-won").innerHTML = "Player Wins";
      setTimeout(() => {
        setIsPlaying(!isPlaying);
      }, 3000);
    } else if (computerLost === "stand" && countComputer < countPlayer) {
      document.getElementById("who-won").innerHTML = "Player Wins";
      setTimeout(() => {
        setIsPlaying(!isPlaying);
      }, 3000);
    } else if (computerLost === "stand" && countComputer === countPlayer) {
      document.getElementById("who-won").innerHTML = "Draw";
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
      <div>
        <h1 id="who-won"></h1>
      </div>
    </div>
  );
}

export default HitStay;
