import { useState } from 'react';
import StartPlaying  from "../homeScreen/StartPlaying"
import LogoShow  from "../homeScreen/LogoShow"
import HitStay from "./HitStay"

const Game = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    return (
        <div>
            {isPlaying ? <HitStay/> : <LogoShow/>}
            {isPlaying ? null : <StartPlaying isPlaying={isPlaying} setIsPlaying={setIsPlaying}/>}
        </div>
    );
};

export default Game;