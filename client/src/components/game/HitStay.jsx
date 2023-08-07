import Player from "./Player"
import Computer from "./Computer" 
import './HitStay.css'

function HitStay (){
    return (
        <div>
            <div className="logo-div">
                <img  src={`${process.env.PUBLIC_URL}/assets/blackjack.svg`} className="App-logo" alt="logo" />
            </div>
            
            <div className="cards-container">
                <Computer/>
                <Player/>
            </div>
        </div>
    );
};

export default HitStay;