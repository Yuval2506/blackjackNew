import { useState } from 'react';
import StartPlaying  from "../homeScreen/StartPlaying"
import LogoShow  from "../homeScreen/LogoShow"
import HitStay from "./HitStay"
import "./Game.css"

const Game = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    return (
        <div className="home-div">
            {isPlaying ? <HitStay isPlaying={isPlaying} setIsPlaying={setIsPlaying}/> : <LogoShow/>}
            {isPlaying ? null : <StartPlaying isPlaying={isPlaying} setIsPlaying={setIsPlaying}/>}
        </div>
    );
};

export default Game;