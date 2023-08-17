const ENDPOINT = 'http://localhost:4000';

/*async function getDeck() {
    console.log("requested deck")
    const deck = await fetch(`${ENDPOINT}/getDeck`);
    const parsedDeck = await deck.json();
    return parsedDeck;
}*/

async function getCard() {
    console.log("requested card")
    const card = await fetch(`${ENDPOINT}/get-card`);
    return card.json();
}

export {getCard};