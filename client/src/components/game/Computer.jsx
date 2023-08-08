import { useEffect, useState } from 'react';
import "./HitStay.css";

function Computer({getCard, computerCards}) {

    const [countComputer, setCountComputer] = useState(0);
    //const pickedCard1 = getCard();
    //const pickedCard2 = getCard();
       
    useEffect(() => {
        if(computerCards[0]?.value<10){
            setCountComputer(computerCards[0]?.value);
        } else {
            setCountComputer(10);
        }
    },[computerCards])


    return (
        <div className="player-div">
            <h1 className='player-dealer'>Dealer:</h1>
            <h1 className='counter'>{countComputer}</h1>
            <span>
                <img className="pic-option" src={`${process.env.PUBLIC_URL}/assets/cards/${computerCards[0]?.value+computerCards[0]?.kind}.svg`} alt="Picked Card"></img>
                <img className="pic-option" src={`${process.env.PUBLIC_URL}/assets/cards/1B.svg`} alt="Picked Card"></img>
            </span>
            <button className="game-option">Stand</button>
        </div>
    );
}

export default Computer;