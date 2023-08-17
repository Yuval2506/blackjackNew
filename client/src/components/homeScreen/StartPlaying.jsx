import "./StartPlaying.css";

const StartPlaying = ({ setIsPlaying }) => (
  <div className="start-playng-div">
    <button
      onClick={() => setIsPlaying((prev) => !prev)}
      id="btn-start-playing"
    >
      Start Playing
    </button>
  </div>
);

export default StartPlaying;
