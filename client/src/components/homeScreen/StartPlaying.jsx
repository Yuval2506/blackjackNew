import "./StartPlaying.css"
    
function StartPlaying ({isPlaying, setIsPlaying}){
    // const playingText = isPlaying ? "Stop" : "Start";


    return (
        <div className="start-playng-div">
                <button onClick={() => setIsPlaying(!isPlaying)} id="btn-start-playing">Start Playing</button>
        </div>
    );
};

export default StartPlaying;