export default function ShowPicsComputer({computerCards, computerLost}){
    console.log("showPics", computerLost);
    if (computerLost==="inProgress")
    {
        console.log("showPics2");
        return (
            <span>
                <img className="pic-option" src={`${process.env.PUBLIC_URL}/assets/cards/${computerCards[0]?.value+computerCards[0]?.kind}.svg`} alt="Picked Card"></img>
                <img id="computer-second" className="pic-option" src={`${process.env.PUBLIC_URL}/assets/cards/1B.svg`} alt="Picked Card"></img>
            </span>
        );   
    } else {
        console.log("showPics1");
        return (
            <span className="player-div-pics">
                {computerCards.map(element => {
                    return <img className="pic-option" src={`${process.env.PUBLIC_URL}/assets/cards/${element?.value+element?.kind}.svg`} alt="Picked Card"/>;
                    })
                }
                    
            </span>
        );
    }
}