import { useEffect, useState } from 'react';
import getCard from '../../services/requests';
import "./Computer.css";

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
        <div>
            <h1>Dealer:</h1>
            <span>
                <img src={`${process.env.PUBLIC_URL}/assets/cards/${card.value+card.kind}.svg`} alt="Picked Card"></img>
                <img src={`${process.env.PUBLIC_URL}/assets/cards/1B.svg`} alt="Picked Card"></img>
            </span>
        </div>
    );
}

export default Computer;