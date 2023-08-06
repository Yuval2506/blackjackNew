const ENDPOINT = 'http://localhost:4000';

async function getCard() {
    console.log("requested")
    const result = await fetch(`${ENDPOINT}/getCard`);
   
    const parsedResult = await result.json();

    return parsedResult;
}

export default getCard;