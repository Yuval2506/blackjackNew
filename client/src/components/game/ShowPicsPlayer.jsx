export default function ShowPicsPlayer({playerCards}){
    
    return (
        <span className="player-div-pics">
             {playerCards.map(element => {
                return <img className="pic-option" src={`${process.env.PUBLIC_URL}/assets/cards/${element?.value+element?.kind}.svg`} alt="Picked Card"/>;
                })
             }
                
        </span>
    );
}