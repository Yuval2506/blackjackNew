const ENDPOINT = 'http://localhost:4000';

async function getDeck() {
    console.log("requested deck")
    const result = await fetch(`${ENDPOINT}/getDeck`);
   
    const parsedResult = await result.json();

    return parsedResult;
}

export default getDeck;