import { useEffect, useRef, useState } from "react";
import { getCard } from "../../services/requests";
import "./HitStay.css";
import ShowPicsPlayer from "./ShowPicsPlayer";

function Player({
  playerCards,
  setPlayerCards,
  playerLost,
  setPlayerLost,
  computerLost,
  setComputerLost,
  countPlayer,
  setCountPlayer,
}) {
  //   const hitButton = useRef();

  const btnHit = document.getElementById("btn-hit");

  useEffect(() => {
    let sum = 0;
    playerCards.forEach((element) => {
      if (element.value > 10) {
        sum += 10;
      } else {
        sum += element.value;
      }
      setCountPlayer(sum);
    });
  }, [playerCards]);

  useEffect(() => {
    if (computerLost === "start") {
      btnHit.style.visibility = "hidden";
      //   hitButton.current.style.visibility = 'hidden';
    }
  }, [computerLost]);

  useEffect(() => {
    if (countPlayer > 21) {
      setPlayerLost("true");
      setComputerLost("start");
      btnHit.style.visibility = "hidden";
      console.log("countPlayer Lost" + countPlayer);
    } else if (countPlayer == 21) {
      setPlayerLost("false");
      setComputerLost("start");
      btnHit.style.visibility = "hidden";
      console.log("countPlayer Won" + countPlayer);
    }
  }, [countPlayer]);

  function clickedHit() {
    (async () => {
      const newCard = await getCard();
      console.log("newCrd" + newCard);
      setPlayerCards([...playerCards, newCard]);
      console.log("playerCardsss" + playerCards);
    })();
  }

  return (
    <div className="player-div">
      <h1 className="player-dealer">Player:</h1>
      <h1 className="counter">{countPlayer}</h1>
      <ShowPicsPlayer playerCards={playerCards} />
      <button
        // ref={hitButton}
        id="btn-hit"
        onClick={clickedHit}
        className="game-option"
      >
        Hit
      </button>
    </div>
  );
}

export default Player;
