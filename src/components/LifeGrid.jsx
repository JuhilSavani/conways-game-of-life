import PropTypes from "prop-types";
import { useState } from "react";

const LifeGrid = (props) => {
  const { grid, setGrid } = props.props;
  const [isMouseDown, setIsMouseDown] = useState(false);

  const handleMouseDown = (row, col) => {
    setIsMouseDown(true);
    toggleCellState(row, col);
  };

  const handleMouseUp = () => {
    setIsMouseDown(false);
  };

  const handleMouseEnter = (row, col) => {
    if (isMouseDown) {
      toggleCellState(row, col);
    }
  };

  const toggleCellState = (rowToToggle, colToToggle) => {
    const newGrid = grid.map((row, rowIndex) =>
      row.map((cell, colIndex) =>
        rowIndex === rowToToggle && colIndex === colToToggle
          ? cell
            ? 0
            : 1
          : cell
      )
    );
    setGrid(newGrid);
  };

  return (
    <div
      className="life-grid"
      onMouseLeave={handleMouseUp} // Stop toggling if the cursor leaves the grid
    >
      {grid.map((rows, rowIndex) =>
        rows.map((col, colIndex) => (
          <button
            key={`${rowIndex}-${colIndex}`}
            className={col ? "alive" : "dead"}
            onMouseDown={() => handleMouseDown(rowIndex, colIndex)}
            onMouseUp={handleMouseUp}
            onMouseEnter={() => handleMouseEnter(rowIndex, colIndex)}
          />
        ))
      )}
    </div>
  );
};

LifeGrid.propTypes = {
  props: PropTypes.shape({
    grid: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)).isRequired,
    setGrid: PropTypes.func.isRequired,
  }).isRequired,
};

export default LifeGrid;
