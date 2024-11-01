/**
 * In Conway’s Game of Life:
 * 1.	Death: A live cell (1) dies if it has fewer than 2 live neighbors (underpopulation) or more than 3 live neighbors (overpopulation).
 * 2.	Birth: A dead cell (0) becomes alive if it has exactly 3 live neighbors (reproduction).
 * 3.	Survival: A live cell with 2 or 3 live neighbors remains alive.
 */
import { useCallback, useRef, useState } from "react";
import { COLS, createEmptyGrid, DIRECTIONS, ROWS } from "./utils/gridUtils";
import ControlPanel from "./components/ControlPanel";
import LifeGrid from "./components/LifeGrid";

const App = () => {
  const [grid, setGrid] = useState(createEmptyGrid());
  const [isPlaying, setIsPlaying] = useState(false);

  const playingRef = useRef();
  playingRef.current = isPlaying;

  const runSimulation = useCallback(() => {
    if (!playingRef.current) return;
    setGrid((currentGrid) => {
      const newGrid = currentGrid.map((arr) => [...arr]);
      for (let row = 0; row < ROWS; ++row) {
        for (let col = 0; col < COLS; ++col) {
          let liveNeighbours = 0;
          DIRECTIONS.forEach(([x, y]) => {
            const neighbourRow = row + x;
            const neighbourCol = col + y;
            // // Wrap around logic for toroidal grid
            // const wrappedRow = (neighbourRow + ROWS) % ROWS;
            // const wrappedCol = (neighbourCol + COLS) % COLS;
            // liveNeighbours += currentGrid[wrappedRow][wrappedCol];
            if (
              neighbourRow >= 0 &&
              neighbourRow < ROWS &&
              neighbourCol >= 0 &&
              neighbourCol < COLS
            ) {
              liveNeighbours += currentGrid[neighbourRow][neighbourCol];
            }
          });

          if (currentGrid[row][col] === 1) {
            // Cell is currently alive
            if (liveNeighbours < 2 || liveNeighbours > 3) {
              newGrid[row][col] = 0; // Cell dies
            } else {
              newGrid[row][col] = 1; // Cell survives
            }
          } else {
            // Cell is currently dead
            if (liveNeighbours === 3) {
              newGrid[row][col] = 1; // Cell becomes alive
            } else {
              newGrid[row][col] = 0; // Cell remains dead
            }
          }
        }
      }
      return newGrid;
    });
    setTimeout(runSimulation, 200);
  }, []);

  return (
    <div id="app">
      <div className="title">
        <h1>Conway&apos;s Game of Life</h1>
        <p>A Celluar Automaton Where Biology Meets Engineering</p>
      </div>
      <ControlPanel
        props={{
          runSimulation,
          setIsPlaying,
          setGrid,
          isPlaying,
          playingRef,
        }}
      />
      <LifeGrid props={{ grid, setGrid }} />
    </div>
  );
};

export default App;
