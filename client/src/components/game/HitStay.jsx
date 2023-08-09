import Player from "./Player";
import Computer from "./Computer";
import './HitStay.css';
import getDeck from '../../services/requests';
import { useEffect, useState } from "react";

function HitStay ({isPlaying, setIsPlaying}){

    const [deck, setDeck] = useState([]);
    const [computerCards, setComputerCards] = useState([])
    const [playerCards, setPlayerCards] = useState([])
    const [playerLost, setPlayerLost] = useState("inProgress")
    const [computerLost, setComputerLost] = useState("inProgress")
    const [countComputer, setCountComputer] = useState(0);
    const [countPlayer, setCountPlayer] = useState(0);


    useEffect(() => {
        (async () => {
            const {newArray: shufelledDeck} = await getDeck();
            const playerCard1 = shufelledDeck.shift();
            const playerCard2 = shufelledDeck.shift();
            setPlayerCards([...computerCards, playerCard1, playerCard2])
            const computerCard1 = shufelledDeck.shift();
            const computerCard2 = shufelledDeck.shift();
            /*setTimeout(()=>{
                
            }, 3000);*/
            setDeck(shufelledDeck);
            setComputerCards([...computerCards, computerCard1, computerCard2])
        }
        )();
    }, [])

    /*useEffect(() => {
        console.log("playerLost ", playerLost, "computerLost ", computerLost);
        if (playerLost=="true" && computerLost=="true"){
            console.log("draw");
        } else if (playerLost=="false" && computerLost=="false") {
            console.log("draw");
        } else if (playerLost=="true" && computerLost != "false") {
            console.log("dealer won");
        } else if (playerLost=="false" && computerLost != "true") {
            console.log("player won");
        } 
    }, [playerLost, computerLost])*/
    
    const getCard=() => {
        return deck.shift();
    }

    return (
        <div className="while-playing-div">
            <div className="logo-div">
                <img  src={`${process.env.PUBLIC_URL}/assets/blackjack.svg`} className="App-logo" alt="logo" />
            </div>
            <div className="cards-container">
                <Player getCard={getCard} playerCards={playerCards} setPlayerCards={setPlayerCards} playerLost={playerLost} setPlayerLost={setPlayerLost} setComputerLost={setComputerLost} countPlayer={countPlayer} setCountPlayer={setCountPlayer}/>
                <Computer getCard={getCard} computerCards={computerCards} setComputerCards={setComputerCards} playerLost={playerLost} computerLost={computerLost} setComputerLost={setComputerLost} countComputer={countComputer} setCountComputer={setCountComputer} countPlayer={countPlayer}/>
            </div>
        </div>
    );
};

export default HitStay;