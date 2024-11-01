import PropTypes from "prop-types";
import { createEmptyGrid } from "../utils/gridUtils";

const ControlPanel = (props) => {
  const { runSimulation, setIsPlaying, setGrid, isPlaying, playingRef } = props.props;

  const handlePlayBtnClick = () => {
    setIsPlaying((prev) => !prev);
    if (!isPlaying) {
      playingRef.current = true; 
      runSimulation();
    }
  };

  const handleSeedBtnClick = () => {
    setIsPlaying(false);
    setGrid((prevGrid) => {
      return prevGrid.map((row) =>
        row.map(() => (Math.random() > 0.75 ? 1 : 0))
      );
    });
  };

  const handleClearBtnClick = () => {
    setIsPlaying(false); 
    setGrid(createEmptyGrid());
  };

  return (
    <div className="control-panel">
      <ul>
        <li>
          <button onClick={handlePlayBtnClick}>
            {isPlaying ? "Pause" : "Play"}
          </button>
        </li>
        <li>
          <button onClick={handleSeedBtnClick}>Seed</button>
        </li>
        <li>
          <button onClick={handleClearBtnClick}>Clear</button>
        </li>
      </ul>
    </div>
  );
};

ControlPanel.propTypes = {
  props: PropTypes.shape({
    isPlaying: PropTypes.bool.isRequired,
    runSimulation: PropTypes.func.isRequired,
    setIsPlaying: PropTypes.func.isRequired,
    setGrid: PropTypes.func.isRequired,
    playingRef: PropTypes.object.isRequired, 
  }).isRequired,
};

export default ControlPanel;