import { useEffect, useState } from 'react';
//import getCard from '../../services/requests';
import "./HitStay.css";
import ShowPicsPlayer from "./ShowPicsPlayer";


function Player({getCard, playerCards, setPlayerCards, playerLost, setPlayerLost, setComputerLost, countPlayer, setCountPlayer}) {

    const btnHit = document.getElementById("btn-hit");

    //const pickedCard1 = getCard();
    //const pickedCard2 = getCard();
    
    useEffect(() => {


        let sum = 0
        playerCards.forEach(element => {
            if(element.value>10){
                sum+=10;
            } else {
                sum+=element.value;                
            }
            setCountPlayer(sum);
        });

        /*if(playerCards[0]?.value<=10 && playerCards[1]?.value<=10){
            console.log("playerCards0"+playerCards[0]?.value, "playerCards1"+playerCards[0]?.value);
            setCountPlayer(playerCards[0]?.value+playerCards[1]?.value);
        } else if (playerCards[0]?.value>10 && playerCards[1]?.value<10){
            setCountPlayer(10+playerCards[1]?.value);
        } else if (playerCards[0]?.value<10 && playerCards[1]?.value>10){
            setCountPlayer(playerCards[0]?.value+10);
        } else {
            setCountPlayer(20);
        }*/
    },[playerCards])

    useEffect(() => {
        if (countPlayer>21){
            setPlayerLost("true");
            setComputerLost("start");
            btnHit.style.visibility = 'hidden';
            console.log("countPlayer Lost"+countPlayer);
        } else if (countPlayer==21){
            setPlayerLost("false");
            setComputerLost("start");
            btnHit.style.visibility = 'hidden';
            console.log("countPlayer Won"+countPlayer);
        }
    }, [countPlayer]);

    function clickedHit () {
        const newCard = getCard();
        console.log("newCrd"+newCard);
        setPlayerCards([...playerCards, newCard]);
        console.log("playerCardsss"+playerCards);
        
    }

    return (
        <div className="player-div">
            <h1 className='player-dealer'>Player:</h1>
            <h1 className='counter'>{countPlayer}</h1>
            <ShowPicsPlayer playerCards={playerCards}/>
            <button id="btn-hit" onClick={clickedHit} className="game-option">Hit</button>
        </div>
    );
}

export default Player;