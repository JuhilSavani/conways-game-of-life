// Constants for the grid dimensions
export const ROWS = 30;
export const COLS = 50;

// Function to create an empty grid
export const createEmptyGrid = () => {
  return Array.from({ length: ROWS }, () => Array(COLS).fill(0));
};

// Directions for neighboring cells (in relative coordinates)
export const DIRECTIONS = [
  [0, 1],   // Right
  [1, 1],   // Down-Right
  [1, 0],   // Down
  [1, -1],  // Down-Left
  [0, -1],  // Left
  [-1, -1], // Up-Left
  [-1, 0],  // Up
  [-1, 1],  // Up-Right
];