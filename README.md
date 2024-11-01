# Conway's Game of Life

Conway's Game of Life is a cellular automaton devised by mathematician John Conway in 1970. It simulates the evolution of a grid of cells, which can be either alive or dead, based on a set of simple rules. This project implements the Game of Life in React.

--- 

## Table of Contents

- [Installation](#installation)
- [How It Works](#how-it-works)
- [Rules of the Game](#rules-of-the-game)

## Features

- Interactive grid where cells can be alive (1) or dead (0).
- Start and stop simulation of cell evolution.
- Non-toroidal grid behavior: cells on the edges do not wrap around to the opposite side.
- Responsive and intuitive user interface.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/JuhilSavani/conways-game-of-life.git
   cd conways-game-of-life
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the application:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:3000` to view the application.


## How It Works

The application consists of two main components:

1. **ControlPanel**: This component handles user interactions such as starting, stopping, and controlling the simulation.

2. **LifeGrid**: This component displays the grid of cells, updating their states based on the rules of the Game of Life.

## Rules of the Game

The universe of the Game of Life is an infinite two-dimensional orthogonal grid of square cells, each of which is in one of two possible states, alive or dead. Every cell interacts with its eight neighbours, which are the cells that are horizontally, vertically, or diagonally adjacent. At each step in time, the following transitions occur:

- Any live cell with fewer than two live neighbors dies (underpopulation).
- Any live cell with two or three live neighbors lives on to the next generation.
- Any live cell with more than three live neighbors dies (overpopulation).
- Any dead cell with exactly three live neighbors becomes a live cell (reproduction).


---

