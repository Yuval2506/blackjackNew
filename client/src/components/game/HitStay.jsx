import Player from "./Player";
import Computer from "./Computer";
import './HitStay.css';
import getDeck from '../../services/requests';
import { useEffect, useState } from "react";

function HitStay ({isPlaying, setIsPlaying}){

    const [deck, setDeck] = useState([]);
    const [computerCards, setComputerCards] = useState([])
    const [playerCards, setPlayerCards] = useState([])

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
    
    const getCard=() => {
        return deck.shift();
    }

    return (
        <div className="while-playing-div">
            <div className="logo-div">
                <img  src={`${process.env.PUBLIC_URL}/assets/blackjack.svg`} className="App-logo" alt="logo" />
            </div>
            <div className="cards-container">
                <Player getCard={getCard} playerCards={playerCards} setPlayerCards={setPlayerCards}/>
                <Computer getCard={getCard} computerCards={computerCards}/>
            </div>
        </div>
    );
};

export default HitStay;