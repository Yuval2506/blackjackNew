import { useEffect, useState } from 'react';
import getCard from '../../services/requests';
import "./HitStay.css";

function Computer() {

    const [card, setCard] = useState("");
    // setCard(useEffect(getCard));

    useEffect(() => {
        (async () => {
            const pickedCard = await getCard();
            setCard(pickedCard);
        }
        )();
    }, [])

    return (
        <div className="player-div">
            <h1 className='player-dealer'>Dealer:</h1>
            <span>
                <img className="pic-option" src={`${process.env.PUBLIC_URL}/assets/cards/${card.value+card.kind}.svg`} alt="Picked Card"></img>
                <img className="pic-option" src={`${process.env.PUBLIC_URL}/assets/cards/1B.svg`} alt="Picked Card"></img>
            </span>
            <button className="game-option">Hit</button>
        </div>
    );
}

export default Computer;