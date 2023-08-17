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

async function getLength() {
    console.log("requested length")
    const length = await fetch(`${ENDPOINT}/get-length`);
    return length.json();
}

async function shuffle() {
    console.log("requested shuffle")
    await fetch(`${ENDPOINT}/shuffle`);
}

export {getCard, getLength, shuffle};