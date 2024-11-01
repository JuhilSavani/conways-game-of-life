import PropTypes from "prop-types";

const LifeGrid = ({ grid }) => {
  return (
    <div className="life-grid">
      {grid.map((rows, originalRowIndex) =>
        rows.map((col, originalColIndex) => (
          <button
            key={`${originalRowIndex}-${originalColIndex}`}
            className={col ? "cell alive" : "cell dead"}
            aria-label={col ? "Alive cell" : "Dead cell"}
            onClick={() => console.log(`Cell clicked at ${originalRowIndex}, ${originalColIndex}`)} // Optional: handle click events
          />
        ))
      )}
    </div>
  );
};

LifeGrid.propTypes = {
  grid: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)).isRequired,
};

export default LifeGrid;